import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod } from "../../features/order-details/orderDetails";

function OrderPayment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onChange(event) {
    setPaymentMethod(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(paymentMethod);
    dispatch(addPaymentMethod(paymentMethod));
    navigate("/order/place-order");
  }

  return (
    <section className="p-5">
      <div className="card card-bordered max-w-2xl mx-auto p-5">
        <h2 className="text-xl font-bold self-start">Payment Method</h2>

        <form
          id="payment-form"
          className="form-control mt-5  flex flex-col gap-3 md:gap-5"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="card"
            className="label cursor-pointer  flex justify-start"
          >
            <input
              type="radio"
              name="payment-method"
              id="card"
              value="card"
              className="radio radio-sm checked:bg-blue-500"
              autoComplete="false"
              checked={paymentMethod === "card"}
              onChange={onChange}
            />
            <span className="label-text ml-5">Credit or Debit Card</span>
          </label>

          <label
            htmlFor="upi"
            className="label cursor-pointer  flex justify-start"
          >
            <input
              type="radio"
              name="payment-method"
              id="upi"
              value="upi"
              className="radio radio-sm checked:bg-blue-500"
              autoComplete="false"
              checked={paymentMethod === "upi"}
              onChange={onChange}
            />
            <span className="label-text ml-5">UPI</span>
          </label>

          <label
            htmlFor="cod"
            className="label cursor-pointer  flex justify-start"
          >
            <input
              type="radio"
              name="payment-method"
              id="cod"
              value="cod"
              className="radio radio-sm checked:bg-blue-500"
              autoComplete="false"
              checked={paymentMethod === "cod"}
              onChange={onChange}
            />
            <span className="label-text ml-5">Cash on Delivery</span>
          </label>

          {/* <Link to="/order/place-order"> */}
          <button form="payment-form" className="btn w-full mt-5">
            Proceed
          </button>
          {/* </Link> */}
        </form>
      </div>
    </section>
  );
}

export default OrderPayment;
