import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// component
import Navbar from "./components/navbar/Navbar";
// pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import { useDispatch } from "react-redux";
import { setInitialState } from "./features/cart/cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localCart = localStorage.getItem("cart");

    if (localCart !== null) {
      dispatch(setInitialState(JSON.parse(localCart)));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
