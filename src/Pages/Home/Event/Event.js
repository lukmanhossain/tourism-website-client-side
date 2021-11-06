import React from "react";
import "./Event.css";

const Event = ({ event }) => {
  const { img, name, price, description } = event;
  return (
    <div className="container">
      <div className="event">
        <img className="img-fluid" src={img} alt="" />
        <h3 className="p-2">Events Place: {name}</h3>
        <h4 className="p-3">Package-Price: {price} </h4>
        <p className="px-2">{description}</p>
        <h6 className="p-2">
          N.B: When Our Events Starts, Booking Button is Available.
        </h6>
      </div>
    </div>
  );
};

export default Event;
