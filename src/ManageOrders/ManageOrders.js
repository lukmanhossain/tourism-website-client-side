import React, { useEffect, useState } from "react";

const ManageOrders = () => {
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
          alert("Successfully Delete Your Order");
          const remaining = orders.filter((service) => service._id !== id);
          setOrders(remaining);
        }
      });
  };

  return (
    <div>
      <h2>This is Orders</h2>
      {orders.map((service) => (
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

export default ManageOrders;
