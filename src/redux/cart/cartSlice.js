import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDishToCart(state, { payload }) {
      const dishIndex = state.order.findIndex(
        product => product._id === payload._id
      );

      if (dishIndex >= 0) {
        state.order.splice(dishIndex, 1);
      } else {
        state.order.push(payload);
      }
    },

    increaseDishQuantity(state, { payload }) {
      state.order = state.order.map(product => {
        if (product._id === payload) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    },

    reduceDishQuantity(state, { payload }) {
      state.order = state.order.map(product => {
        if (product._id === payload) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    },

    deleteDish(state, { payload }) {
      state.order = state.order.filter(product => product._id !== payload);
    },

    changeValue(state, { payload: { _id, value } }) {
      state.order = state.order.map(product => {
        if (product._id === _id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    },
    clearCart(state) {
      state.order = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addDishToCart,
  increaseDishQuantity,
  reduceDishQuantity,
  deleteDish,
  changeValue,
  clearCart,
} = cartSlice.actions;
