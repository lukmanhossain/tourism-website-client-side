import React, { useEffect, useState } from "react";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);

  useEffect(() => {
    fetch("https://desolate-savannah-82485.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://desolate-savannah-82485.herokuapp.com/services/${id}`;
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

  const handleUpdate = (id) => {
    fetch(`https://desolate-savannah-82485.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      header: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };

  return (
    <div>
      <h2 className="m-3">This is Yours All Orders</h2>
      {orders.map((service) => (
        <div key={service._id} className="orderlist">
          <img className="img-fluid" src={service.img} alt="" />
          <h3 className="p-2">Name: {service.name}</h3>
          <h4 className="p-1">Price: ${service.price}</h4>
          <p className="p-3">Details:{service.description}</p>
          <h5 className="p-3">
            Current Status:{" "}
            <input
              onChange={handleStatus}
              type="text"
              defaultValue={service.status}
            />
          </h5>
          <button
            className="btn btn-danger mb-2"
            onClick={() => handleDelete(service._id)}
          >
            Delete
          </button>
          <button
            className="btn btn-primary mb-2 mx-5"
            onClick={() => handleUpdate(service._id)}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageOrders;
