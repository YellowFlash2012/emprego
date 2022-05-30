import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import jobReducer from "../features/jobSlice";
import allJobsReducer from "../features/allJobsSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer,
        allJobs:allJobsReducer
    }
});