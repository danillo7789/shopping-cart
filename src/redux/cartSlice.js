import { createSlice } from '@reduxjs/toolkit';
import { showNotification } from './muiSlice';
import { databaseCart, ref, push } from '../firebase';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalBrands: 0,
        totalQuantity: 0,
        showCart: true,
        user: null,
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.itemsList.find(item => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity ++;
                existingItem.totalPrice += newItem.price;
            } 
            else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                state.totalBrands++;
            }
            state.totalQuantity = state.itemsList.reduce((acc, item) => acc + item.quantity, 0)
        },
        removeFromCart: (state, action) => {
            const id = action.payload;

            const existingItem = state.itemsList.find(item => item.id === id);
            
            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalBrands--;
            } else {
                existingItem.quantity --;
                existingItem.totalPrice -= existingItem.price
            }
            state.totalQuantity = state.itemsList.reduce((acc, item) => acc + item.quantity, 0)
        },
        setShowCart: state => {
            state.showCart = !state.showCart
        },
        clearCart: (state) => {
            state.itemsList = [];
            state.totalBrands = 0;
            state.totalQuantity = 0;
            state.showCart = true
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
})

export const sendCardData = (cart) => async (dispatch, getState) => {
    dispatch(
        showNotification({
            open: true,
            message: 'Sending Request',
            type: 'warning'
        })
    );

    try {
        const state = getState();
        const user = state.user;

        // Pushing cart data to Firebase Realtime Database
        const cartRef = ref(databaseCart, 'cartItems');
        await push(cartRef, { ...cart, user });

        dispatch(
            showNotification({
                open: true,
                message: 'Order placed successfully',
                type: 'success'
            })
        );

    } catch (err) {
        console.error('Sending Request failed:', err);
        dispatch(
            showNotification({
                open: true,
                message: 'Failed to place order',
                type: 'error'
            })
        );
    }
};


export const { addToCart, removeFromCart, setShowCart, setUser, clearCart } = cartSlice.actions;

export default cartSlice.reducer;