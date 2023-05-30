import { configureStore } from '@reduxjs/toolkit';

import cartReduser from './cart/cartSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['order'],
};

const persistedReducer = persistReducer(persistConfig, cartReduser);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
