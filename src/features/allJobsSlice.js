import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialFiltersState = {
    search: "",
    searchStatus: "all",
    searchType: "all",
    sort: "latest",
    sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
    isLoading: true,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFiltersState,
};

const allJobsSlice = createSlice({
    name: "allJobs",
    initialState,
    reducers: {},
    extraReducers:{}
})

export default allJobsSlice.reducer