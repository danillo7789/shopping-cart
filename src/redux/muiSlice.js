import { createSlice } from "@reduxjs/toolkit";

const muiSlice = createSlice({
    name: 'mui',
    initialState: {
        notification: null
    },
    reducers: {
        showNotification: (state, action) => {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})

export const { showNotification } = muiSlice.actions;

export default muiSlice.reducer;