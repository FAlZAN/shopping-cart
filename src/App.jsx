import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// component
import Navbar from "./components/navbar/Navbar";
import OrderSteps from "./components/order-steps/OrderSteps";
// pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import OrderAddress from "./pages/OrderAddress/OrderAddress";
import OrderPayment from "./pages/OrderPayment/OrderPayment";
import Order from "./pages/Order/Order";

import { useDispatch } from "react-redux";
import { setInitialState } from "./features/cart/cart";
import { setInitialOrderDetails } from "./features/order-details/orderDetails";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const orderLocation =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    const localOrderDetails = localStorage.getItem("orderDetails");

    if (localCart !== null) {
      dispatch(setInitialState(JSON.parse(localCart)));
    }

    if (localOrderDetails !== null) {
      dispatch(setInitialOrderDetails(JSON.parse(localOrderDetails)));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      {(orderLocation === "address" ||
        orderLocation === "payment" ||
        orderLocation === "place-order") && (
        <OrderSteps orderLocation={orderLocation} />
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/address" element={<OrderAddress />} />
          <Route path="/order/payment" element={<OrderPayment />} />
          <Route path="/order/place-order" element={<Order />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
