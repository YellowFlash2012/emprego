import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import jobReducer from "../features/jobSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        job:jobReducer
    }
});