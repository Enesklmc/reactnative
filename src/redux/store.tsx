import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './listSlice/listSlice';
import userReducer from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
