import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js';
import cartReducer from "./cartSlice.js";
import muiReducer from "./muiSlice.js";
import userReducer from "./userSlice.js";

export default configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        cart: cartReducer,
        mui: muiReducer,
    }
});