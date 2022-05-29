import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user:null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{}
})

export default userSlice.reducer