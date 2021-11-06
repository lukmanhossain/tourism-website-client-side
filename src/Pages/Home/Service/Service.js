import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, img, price, name, description } = service;
  return (
    <div className="service">
      <img className="img-fluid" src={img} alt="" />
      <h3 className="p-2">Package: {name}</h3>
      <h4 className="p-3">Price: ${price}</h4>
      <p className="px-2">Details: {description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-primary mb-2">Book Now</button>
      </Link>
    </div>
  );
};

export default Service;
