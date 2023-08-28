import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.items = [...state.items, action.payload];
      } else {
        itemExists.quantityInCart += 1;
      }
    },
    increaseProductQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      product.quantityInCart += 1;
    },
    decreaseProductQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product.quantityInCart > 1) {
        product.quantityInCart -= 1;
      } else {
        const newItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = newItems;
      }
    },
    removeFromCart: (state, action) => {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = newItems;
    },
  },
});

export const {
  addToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
