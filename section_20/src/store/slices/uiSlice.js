import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
    cartIsVisible: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        showCart(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export default uiSlice.reducer;

export const uiActions = uiSlice.actions;
