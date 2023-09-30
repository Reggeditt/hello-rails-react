import { configureStore } from "@reduxjs/toolkit";
import MessagesReducer from "../reducers/index";


const store = configureStore({
    reducer: {
        message: MessagesReducer,
    },
});

export default store;