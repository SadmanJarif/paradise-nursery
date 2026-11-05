import { createSlice } from '@reduxjs/toolkit';

// Paradise Nursery — cart state (Redux Toolkit)
// Items are stored as { name, image, cost, quantity }.
// totalQuantity is the number of items in the cart (sum of quantities).
// totalAmount is the cart total in dollars.
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.name === newItem.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += Number(newItem.cost);
    },
    removeItem: (state, action) => {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= Number(existingItem.cost) * existingItem.quantity;
        state.items = state.items.filter((item) => item.name !== name);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (!existingItem) return;
      const newQuantity = Math.max(0, Number(quantity));
      const difference = newQuantity - existingItem.quantity;
      existingItem.quantity = newQuantity;
      state.totalQuantity += difference;
      state.totalAmount += Number(existingItem.cost) * difference;
      if (existingItem.quantity <= 0) {
        state.items = state.items.filter((item) => item.name !== name);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
