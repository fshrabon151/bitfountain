import React from "react";
import { Link } from "react-router-dom";

const ModelCards = ({ BrandId, Name, Description, onModelSelect }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      {/**
       * Redirecting through link if a specific device selected
       */}
      <Link
        style={{ textDecoration: "none" }}
        to={`/modeldata/${BrandId}/${Name}`}
      >
        <div
          className="card modelcard shadow p-0 m-0 h-100"
          onClick={onModelSelect}
        >
          <div className="card-body">
            <p className="card-title">Brand : {BrandId}</p>
            <p className="card-title">Model : {Name}</p>
            <p className="card-text">Description : {Description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ModelCards;
