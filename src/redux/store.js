import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import cartReducer from "./cartSlice";
import muiReducer from "./muiSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        mui: muiReducer
    }
});