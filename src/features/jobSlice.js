import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { logoutUser } from "./userSlice";

const initialState = {
    isLoading: false,
    position: "",
    company: "",
    jobLocation: "",
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOptions: ["interview", "declined", "pending"],
    status: "pending",
    isEditing: false,
    editJobId: ""
};

const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

export const addJob = createAsyncThunk("job/addJob", async (job, thunkAPI) => {
    try {
        const res = axios.post(`${url}/jobs`, job, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });

        thunkAPI.dispatch(clearInputs())

        return res.data;
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue(
                "You are not authorized! Logging you out..."
            );
        }
        return thunkAPI.rejectWithValue(error.response);
    }
})

const jobSlice = createSlice({
    name: "job", initialState, reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearInputs: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addJob.pending, (state) => {
            state.isLoading = true;
        });
        
        builder.addCase(addJob.fulfilled, (state) => {
            

            state.isLoading = false;
            
            toast.success("new job application added successfully!")
        });

        builder.addCase(addJob.rejected, (state, action) => {
            state.isLoading = false;
            toast.error(action.payload)
        });
    }})

export const { handleChange, clearInputs } = jobSlice.actions;

export default jobSlice.reducer