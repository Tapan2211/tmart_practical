import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CardSlice';
import UserReducer from './userSlice';

export const store = configureStore({
    reducer: {
        cart: CartReducer,
        users: UserReducer,
    }
});