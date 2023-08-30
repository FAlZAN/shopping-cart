import React from "react";

function OrderSteps({ orderLocation }) {
  return (
    <section className="max-w-7xl m-auto p-3 sm:p-5  flex flex-col gap-5">
      <ul className="steps w-full">
        <li
          className={`step ${
            (orderLocation === "address" ||
              orderLocation === "payment" ||
              orderLocation === "place-order") &&
            "step-primary"
          }`}
        >
          Address
        </li>

        <li
          className={`step ${
            (orderLocation === "payment" || orderLocation === "place-order") &&
            "step-primary"
          }`}
        >
          Payment
        </li>

        <li
          className={`step ${
            orderLocation === "place-order" && "step-primary"
          }`}
        >
          Place Order
        </li>
      </ul>
    </section>
  );
}

export default OrderSteps;
