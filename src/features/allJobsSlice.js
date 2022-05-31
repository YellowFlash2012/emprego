import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { logoutUser } from "./userSlice";

const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

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

export const getAllJobs = createAsyncThunk("allJobs/getAllJobs", async(_, thunkAPI)=>{
    try {
        const res = await axios.get(`${url}/jobs`, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });

        console.log(res.data);

        return res.data;
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue(
                "You are not authorized! Logging you out..."
            );
        }
        return thunkAPI.rejectWithValue("There was an error fetching the data you requested!");
    }
})

export const getAllStats = createAsyncThunk("allJobs/getAllStats", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${url}/jobs/stats`, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });

        console.log(res.data);

        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue("There was an error fetching the data you requested!");
    }
}) 

const allJobsSlice = createSlice({
    name: "allJobs",
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        handleChange: (state,{payload:{name,value}}) => {
            state.page = 1;
            state[name] = value;
        },
        clearFilters: (state) => {
            return {...state,...initialFiltersState}
        },
        changePage: (state, { payload }) => {
            state.page = payload + 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllJobs.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getAllJobs.fulfilled, (state,{payload}) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
            state.numOfPages = payload.numOfPages;
            state.totalJobs = payload.totalJobs;
        });

        builder.addCase(getAllJobs.rejected, (state, action) => {
            state.isLoading = false;
            toast.error(action.payload);
        });
        
        // get all stats
        builder.addCase(getAllStats.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getAllStats.fulfilled, (state,{payload}) => {
            state.isLoading = false;
            state.stats = payload.defaultStats;
            state.monthlyApplications = payload.monthlyApplications;
        });

        builder.addCase(getAllStats.rejected, (state, action) => {
            state.isLoading = false;
            toast.error(action.payload);
        });
    },
});

export const { showLoading, hideLoading, handleChange, clearFilters, changePage } = allJobsSlice.actions;

export default allJobsSlice.reducer