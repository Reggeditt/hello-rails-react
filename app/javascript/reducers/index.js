import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    message: null,
    isLoading: true,
    error: null,
};

export const fetchRandomMessage = createAsyncThunk('messages/fetchRandomMessage', async () => {
    const response = await fetch('/api/messages/random');
    const data = await response.json();
    return data;
});

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRandomMessage.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchRandomMessage.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.message = action.payload.content;
        },
        [fetchRandomMessage.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
});

export default messagesSlice.reducer;