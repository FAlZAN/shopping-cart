import { createSlice } from "@reduxjs/toolkit";

export const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    orderDetails: {
      items: [],
      address: {},
      paymentMethod: "",
      totalItems: 0,
      totalPrice: 0,
    },
  },
  reducers: {
    addAddress: (state, { payload }) => {
      state.orderDetails.address = {
        ...state.orderDetails.address,
        ...payload,
      };
      localStorage.setItem("orderDetails", JSON.stringify(state.orderDetails));
    },
    addPaymentMethod: (state, { payload }) => {
      state.orderDetails.paymentMethod = payload;
      localStorage.setItem("orderDetails", JSON.stringify(state.orderDetails));
    },
    addCartItemsAndPrice: (state, { payload }) => {
      state.orderDetails = {
        ...state.orderDetails,
        items: payload.items,
        totalItems: payload.totalItems,
        totalPrice: payload.totalPrice,
      };
      localStorage.setItem("orderDetails", JSON.stringify(state.orderDetails));
    },
    setInitialOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

export const {
  addAddress,
  addPaymentMethod,
  addCartItemsAndPrice,
  setInitialOrderDetails,
} = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
