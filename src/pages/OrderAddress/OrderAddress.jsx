import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addAddress } from "../../features/order-details/orderDetails";

function OrderAddress() {
  const [deliveryAddress, setDeliveryAddress] = useState({
    fullname: "",
    mobileNumber: "",
    buildingName: "",
    area: "",
    landmark: "",
    pincode: "",
    townCity: "",
    state: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(addAddress({ ...deliveryAddress }));
    navigate("/order/payment");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setDeliveryAddress((prevDeliveryAddress) => ({
      ...prevDeliveryAddress,
      [name]: value,
    }));
  }

  return (
    <section className="p-5">
      <div className="card card-bordered max-w-2xl mx-auto p-5">
        <h2 className="text-xl font-bold self-start">Address to Deliver</h2>

        <form
          className="form-control mt-5  flex flex-col gap-3 md:gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="input input-bordered"
            placeholder="Fullname"
            id="fullname"
            name="fullname"
            value={deliveryAddress.fullname}
            onChange={handleChange}
          />

          <input
            type="text"
            className="input input-bordered"
            placeholder="Mobile Number"
            id="mobileNumber"
            name="mobileNumber"
            value={deliveryAddress.mobileNumber}
            onChange={handleChange}
          />

          <input
            type="text"
            className="input input-bordered"
            placeholder="Flat, House no., Building, Company, Apartment"
            id="buildingName"
            name="buildingName"
            value={deliveryAddress.buildingName}
            onChange={handleChange}
          />

          <input
            type="text"
            className="input input-bordered"
            placeholder="Area, Street, Sector, Village"
            id="area"
            name="area"
            value={deliveryAddress.area}
            onChange={handleChange}
          />

          <input
            type="text"
            className="input input-bordered"
            placeholder="Landmark"
            id="landmark"
            name="landmark"
            value={deliveryAddress.landmark}
            onChange={handleChange}
          />

          <input
            type="number"
            className="input input-bordered"
            placeholder="Pincode"
            id="pincode"
            name="pincode"
            value={deliveryAddress.pincode}
            onChange={handleChange}
          />

          <input
            type="text"
            className="input input-bordered"
            placeholder="Town/City"
            id="townCity"
            name="townCity"
            value={deliveryAddress.townCity}
            onChange={handleChange}
          />

          <input
            type="text"
            className="input input-bordered"
            placeholder="State"
            id="state"
            name="state"
            value={deliveryAddress.state}
            onChange={handleChange}
          />

          {/* <Link to="/order/payment"> */}
          <button className="btn w-full mt-3">Use this address</button>
          {/* </Link> */}
        </form>
      </div>
    </section>
  );
}

export default OrderAddress;
