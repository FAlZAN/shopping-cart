import React from "react";
import ItemsAndPriceTotal from "../../components/items-and-price-total/ItemsAndPriceTotal";

import { useSelector } from "react-redux";

function Order() {
  const orderDetails = useSelector((state) => state.orderDetails.orderDetails);
  const { fullname, buildingName, area, landmark, state, townCity, pincode } =
    orderDetails.address;
  console.log(orderDetails);

  function handlePayAndPlaceOrderClick() {
    // localStorage.setItem("orderDetails", null);
  }

  return (
    <section className="p-5">
      <div className="card card-bordered max-w-2xl mx-auto p-5">
        <h2 className="mb-2 text-xl font-bold">Order Now</h2>

        <ItemsAndPriceTotal />

        <span className="divider"></span>

        {orderDetails.items?.map((item) => (
          <div
            key={item.id}
            className="w-full py-1 border-b border-gray-200 flex"
          >
            <figure className="w-16 py-3  flex justify-center items-center">
              <img src={item.image} alt={item.title} />
            </figure>

            <div className="w-full py-3 px-5  flex flex-col justify-center">
              <p className="line-clamp-1 lg:line-clamp-2">{item.title}</p>
              <p>$ {item.price}</p>
              <p>Quantity: {item.quantityInCart}</p>
            </div>
          </div>
        ))}

        <span className="divider"></span>

        <h2 className="mb-2 text-xl font-bold">Deliver to</h2>
        <p>{`${fullname}, ${buildingName}, ${area}, ${landmark}, ${state}, ${townCity}, ${pincode}.`}</p>

        <span className="divider"></span>

        <h2 className="mb-2 text-xl font-bold">Pay with</h2>
        {orderDetails.paymentMethod === "card" ? (
          <p>Card ending in 1002</p>
        ) : orderDetails.paymentMethod === "upi" ? (
          <p>UPI</p>
        ) : orderDetails.paymentMethod === "cod" ? (
          <p>Pay on delivery (Card or Cash)</p>
        ) : null}

        <span className="divider"></span>

        <p className="mb-5 text-gray-400">
          By placing your order, you agree to StopAndShop privacy notice and
          condition of use.
        </p>

        <button
          type="button"
          className="btn"
          onClick={handlePayAndPlaceOrderClick}
        >
          Pay and Place Order
        </button>
      </div>
    </section>
  );
}

export default Order;
