// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js';
import cartReducer from "./cartSlice.js";
import muiReducer from "./muiSlice.js";
import userReducer from "./userSlice.js";
import { persistState } from '../persistMiddleware.js';

// Rehydrate the auth state from local storage
const preloadedAuthState = JSON.parse(localStorage.getItem('authState')) || {};

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        cart: cartReducer,
        mui: muiReducer,
    },
    preloadedState: {
        auth: preloadedAuthState,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistState),
});

export default store;
