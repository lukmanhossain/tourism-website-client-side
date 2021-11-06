import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import details from "./FakeData";
import "./Details.css";

const Details = () => {
  const { serviceid } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceid}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="details-container mt-5" id="details">
      <h1>This is details</h1>
      <h2>Details Of: {service.name}</h2>
      <h2>This is Booking: {serviceid}</h2>
    </div>
  );
};

export default Details;
