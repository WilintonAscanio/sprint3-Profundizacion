import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducers/loadingReducer";
import { userReducer } from "../reducers/userReducer";
import { restaurantsReducer } from "../reducers/restaurantsReducer";

const reducer = {
    users: userReducer,
    loading : loadingReducer,
    restaurants : restaurantsReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;