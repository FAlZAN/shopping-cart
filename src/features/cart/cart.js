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
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        itemExists.quantityInCart += 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    increaseProductQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      product.quantityInCart += 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decreaseProductQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product.quantityInCart > 1) {
        product.quantityInCart -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        const newItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = newItems;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, action) => {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = newItems;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    setInitialState: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,
  setInitialState,
} = cartSlice.actions;
export default cartSlice.reducer;
