import React from "react";
import { useNavigate } from "react-router-dom";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

function OrderConfirm() {
  const navigate = useNavigate();

  function handleContinueShoppingClick() {
    navigate("/");
  }

  return (
    <section className="max-w-7xl h-[85vh] m-auto p-3 sm:p-5 flex justify-center items-center">
      <div className="card card-bordered p-10 max-w-md">
        <CheckCircleIcon className="w-24  mx-auto" />
        <h2 className="mb-2 mx-auto text-xl font-bold">Order Confirmed</h2>
        <p className="text-gray-400 text-sm text-center">
          Thank you for your order. You will recieve email confirmation shortly.
        </p>
        <button
          type="button"
          className="btn mt-5"
          onClick={handleContinueShoppingClick}
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
}

export default OrderConfirm;
