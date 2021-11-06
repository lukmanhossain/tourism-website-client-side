import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import AddOffers from "../../AddOffers/AddOffers";

const Booking = () => {
  const { serviceid } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceid}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="details-container mt-5" id="details">
      <h2>Details of: {service.name}</h2>
      <h2>This is Booking: {serviceid}</h2>
      {/* <AddOffers></AddOffers> */}
    </div>
  );
};

export default Booking;
