import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from "axios";
import Loader from "../../Header/Loader";
import Header from "../../Header/Header";
import { Link } from 'react-router-dom';

function SelectedModel() {

  /**
   * Taking data from url
   */
  const params = useParams();
  const brand = params.brand;
  const model = params.model;

  const [modeldata, setModelData] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Pagination limit setting
   */

  const [noOfElements, setNoOfElement] = useState(12);
  const loadMore = () => {
    setNoOfElement(noOfElements + noOfElements);
  };

  const slice = modeldata.slice(0, noOfElements);



  useEffect(() => {

    /**
     * Fetching data from server
     */
    axios
      .get(`api/overview/modeldata/${brand}/${model}`)
      .then((response) => {
        setModelData(response.data);

        setLoading(false);

        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  if (loading) return <Loader />;
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-center my-5">Model Data</h2>
        <hr />
        <div className="row">
          {(modeldata == "" && (
            <div className="container">
              <hr /> <h3 className="text-danger text-center">NO DATA FOUND</h3>
            </div>
          )) ||
            slice.map((model) => {
              const { Brand, DisplayName, Description } = model;
              return (
                <div className="col-md-3 mb-4">
                  <div className="card shadow h-100 mb-3 text-primary" style={{fontWeight:"500"}}>
                    <div className="card-body">
                      <p className="card-title">Brand : {Brand}</p>
                      <p className="card-title">Model : {DisplayName}</p>
                      <p className="card-text">Description : {Description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          {modeldata == "" || (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => loadMore()}
            >
              Load More
            </button>
          )}
        </div>
        <Link to="/" className="btn btn-dark btn-sm mt-5 float-right mb-5">Go back</Link>
      </div>
    </>
  );
}

export default SelectedModel;
