import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import cartReducer from "./cartSlice";
import muiReducer from "./muiSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        cart: cartReducer,
        mui: muiReducer,
    }
});