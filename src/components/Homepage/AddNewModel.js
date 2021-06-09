import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Header from "../Header/Header";

function AddNewModel() {
  const [brandId, setBrandId] = useState("");
  const [name, setName] = useState("");
  const [typeID, setTypeID] = useState("");
  const [comment, setComment] = useState(null);

  const history = useHistory();

  const addData = {
    BrandId: brandId,
    Name: name,
    TypeId: parseInt(typeID),
    Comment: comment,
  };

  const token = localStorage.getItem("token");

  const formSubmit = (e) => {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    e.preventDefault();

    axios
      .post("api/devicemodel", addData)
      .then((response) => {
        console.log(response);
        if (response.statusText === "Created") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your data has been stored!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setBrandId("");
    setName("");
    setTypeID("");
    setComment("");
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-center my-5">Add new model</h2>

        <form className="w-75 mx-auto" onSubmit={formSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="brandId">BrandId</label>
            <input
              type="text"
              className="form-control"
              placeholder="BrandId"
              id="brandId"
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="typeId">TypeId</label>
            <input
              type="number"
              className="form-control"
              placeholder="TypeId"
              id="typeId"
              value={typeID}
              onChange={(e) => setTypeID(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="comment">Comment</label>
            <input
              type="text"
              className="form-control"
              placeholder="Comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input type="submit" className="btn btn-dark" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddNewModel;
