import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Each item: { id, name, price, quantity }
    itemsCount: 0,
  };

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
        state.itemsCount += 1;
    },

    removeItem: (state, action) => {
        const { name, quantity } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
        state.itemsCount -= quantity;  
        if (state.itemsCount < 0){
            state.itemsCount = 0;
        }
    },


    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

//archivo modificado