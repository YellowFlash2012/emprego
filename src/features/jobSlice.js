import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { getAllJobs, hideLoading, showLoading } from "./allJobsSlice";
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
        const res = await axios.post(`${url}/jobs`, job, {
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

export const deleteJob = createAsyncThunk("job/deleteJob", async (jobID, thunkAPI) => {
    thunkAPI.dispatch(showLoading())

    try {
        const res = await axios.delete(`${url}/jobs/${jobID}`, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });

        thunkAPI.dispatch(getAllJobs())

        return res.data.msg;
    } catch (error) {
        thunkAPI.dispatch(hideLoading())

        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue(
                "You are not authorized! Logging you out..."
            );
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
})
export const editJob = createAsyncThunk("job/editJob", async ({jobID, job}, thunkAPI) => {

    try {
        const res = await axios.patch(`${url}/jobs/${jobID}`, job, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });

        thunkAPI.dispatch(clearInputs())

        return res.data;
    } catch (error) {
    
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue(
                "You are not authorized! Logging you out..."
            );
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
})

const jobSlice = createSlice({
    name: "job", initialState, reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearInputs: () => {
            return initialState;
        },
        setEditJob: (state, { payload }) => {
            return { ...state, isEditing: true, ...payload };
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
        
        builder.addCase(deleteJob.fulfilled, (state, action) => {
            toast.success(action.payload)
        });
        builder.addCase(deleteJob.rejected, (state, action) => {
            toast.error(action.payload)
        });

        builder.addCase(editJob.pending, (state) => {
            state.isLoading = true;
        });
        
        builder.addCase(editJob.fulfilled, (state) => {
            

            state.isLoading = false;
            
            toast.success("Job successfully updated!")
        });

        builder.addCase(editJob.rejected, (state, action) => {
            state.isLoading = false;
            toast.error(action.payload)
        });
    }})

export const { handleChange, clearInputs, setEditJob } = jobSlice.actions;

export default jobSlice.reducer