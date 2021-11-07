import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddOffers.css";

const AddOffers = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);

    axios
      .post("https://desolate-savannah-82485.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-offers">
      <h3 className="m-3">Booking Form</h3>
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
