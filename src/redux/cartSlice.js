import { createSlice } from '@reduxjs/toolkit';
import { showNotification } from './muiSlice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            //to check if item is already available cart items
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
                state.totalQuantity++;
            }
            
        },
        removeFromCart: (state, action) => {
            const id = action.payload;

            const existingItem = state.itemsList.find(item => item.id === id);
            
            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--;
            } else {
                existingItem.quantity --;
                existingItem.totalPrice -= existingItem.price
            }
        },
        setShowCart: state => {
            state.showCart = !state.showCart
        }
    }
})

export const sendCardData = (cart) => async (dispatch) => {
    //send state when Sending request
    dispatch(
        showNotification({
        open: true,
        message: 'Sending Request',
        type: 'warning'
    }));

    const sendRequest = async () => {
        const res = await fetch(`https://first-redux-${import.meta.env.VITE_DB_URL}.firebasedatabase.app/cartItems.json`, {
            method: 'PUT',
            body: JSON.stringify(cart)
        })
        const data = await res.json();
        console.log(data)

        //send state when request is successful
        dispatch(
            showNotification({
            open: true,
            message: 'Sent Request to database successfully',
            type: 'success'
        }))
    };

    try {
        await sendRequest();
    } catch (err) {
        //for errors
        dispatch(showNotification({
            open: true,
            message: 'Sending Request failed',
            type: 'error'
        }));
    }
    
}

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;

export default cartSlice.reducer;