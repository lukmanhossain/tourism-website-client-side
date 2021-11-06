import React, { useEffect, useState } from "react";
import Services from "../Pages/Home/Services/Services";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully Deleted");
          const remaining = orders.filter((service) => service._id !== id);
          setOrders(remaining);
        }
      });
  };
  return (
    <div id="manageOrder">
      <h2>This is Manage All Order</h2>
      {Services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(service._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageAllOrder;
