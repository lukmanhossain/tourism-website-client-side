import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddOffers.css";

const AddOffers = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-offers">
      <h3 className="m-3">Please Add Your Order</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image Url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddOffers;
