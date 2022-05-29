import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    user: JSON.parse(localStorage.getItem("user")),
    error:""
}

const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

export const userRegister = createAsyncThunk("user/userRegister", async (user, thunkAPI) => {
    try {
        const res = await axios.post(`${url}/auth/register`, user);
        setTimeout(() => {
            window.location.href = "/login"
            
        }, 5000);
        
        return res.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    
    }
})
export const userLogin = createAsyncThunk("user/userLogin", async (user, thunkAPI) => {
    try {
        const res = await axios.post(`${url}/auth/login`, user);

        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 5000);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userRegister.pending, (state) => {
            state.isLoading = true;
        });
        
        builder.addCase(userRegister.fulfilled, (state, { payload }) => {
            const { user } = payload;

            state.isLoading = false;
            state.user = user;

            localStorage.setItem("user", JSON.stringify(user))
            toast.success(`You are in ${user.name}!`)
        });

        builder.addCase(userRegister.rejected, (state,action) => {
            state.isLoading = false;
            toast.error(action.payload)
        });
        
        builder.addCase(userLogin.pending, (state) => {
            state.isLoading = true;
        });
        
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            const { user } = payload;

            state.isLoading = false;
            state.user = user;

            localStorage.setItem("user", JSON.stringify(user));
            toast.success(`Welcome back, ${user.name}!`)
        });

        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false;
            toast.error(action.payload)
        });
    }
})

export default userSlice.reducer