import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddOffers from "../../AddOffers/AddOffers";
import "./Booking.css";

const Booking = () => {
  const { serviceid } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://desolate-savannah-82485.herokuapp.com/services/${serviceid}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="booking-container mx-5 mt-3">
      <div className="booking-details">
        <img className="img-fluid" src={service.img} alt="" />
        <h3 className="p-2">Name: {service.name}</h3>
        <h4 className="p-2">Price: ${service.price}</h4>
        <p>Details:{service.description}</p>
        <h6>N.B: Confirm Booking By fill-up "Booking Form".</h6>
      </div>
      <div className="booking-form col-md-8 mt-5">
        <AddOffers></AddOffers>
      </div>
    </div>
  );
};

export default Booking;
