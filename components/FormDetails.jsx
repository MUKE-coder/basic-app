"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function FormDetails({ title, price }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    productTitle: title,
  });
  function onSubmit(data) {
    const orderPrice = price * Number(data.qty);
    // const order = {
    //   ...data,
    //   totalPrice: orderPrice,
    // };
    setFormData((prevData) => ({
      ...prevData,
      ...data,
      totalPrice: orderPrice,
    }));
    // setFormData(data);
    // SEND the data to mail
  }
  console.log(formData);
  return (
    <div className="form-container">
      <h2>Order form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            placeholder="eg.John Doe"
            id="fullname"
            {...register("fullname", { required: true, minLength: 3 })}
          />
          {errors.fullname?.type == "required" && (
            <span className="error">Name is required</span>
          )}
          {errors.fullname?.type == "minLength" && (
            <span className="error">
              The Name should be more than 3 characters
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="eg.johndoe@gmail.com"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="field">
          <label htmlFor="district">District</label>
          <input
            type="text"
            placeholder="eg. Kayunga"
            id="district"
            {...register("district")}
          />
        </div>
        <div className="field">
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            placeholder=""
            id="qty"
            {...register("qty", { required: true })}
          />
          {errors.qty && <span className="error">This field is Required</span>}
        </div>
        <button type="submit">Order</button>
      </form>
      <h3>Data</h3>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  );
}
