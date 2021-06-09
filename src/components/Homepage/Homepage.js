import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Header/Loader";
import Header from "../Header/Header";
import ModelCards from "./innerComponent/ModelCards";

const Homepage = () => {
  const [modeltype, setModeltype] = useState([]);

  const [loading, setLoading] = useState(true);

  const [noOfElements, setNoOfElement] = useState(12);
  const loadMore = () => {
    setNoOfElement(noOfElements + noOfElements);
  };

  const slice = modeltype.slice(0, noOfElements);

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios
      .get("api/overview/modeltype")
      .then((response) => {
        setModeltype(response.data);

        setLoading(false);

        // console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  const showModels = slice.map((model) => (
    <ModelCards key={model.Id} {...model} />
  ));

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <div className="container my-5">
        <h3 className="text-center  text-capitalize">
          Available medical devices
        </h3>
        <p className="text-center mb-3">
          Rendering number of elements ({noOfElements})
        </p>
        <hr className="mb-3" />

        <div className="row mt-4">
          {showModels}

          <button
            className="btn btn-primary btn-sm float-right"
            onClick={() => loadMore()}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
