import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";


const initialState = {
    loading: false,
    channelStats: null,
    channelVideos: []
}

export const getChannelStats = createAsyncThunk("channelStats", async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/dashboard/stats`);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const getChannelVideos = createAsyncThunk("channelVideos", async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/dashboard/videos`);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getChannelStats.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getChannelStats.fulfilled, (state, action) => {
            state.loading = false;
            state.channelStats = action.payload
        })
        builder.addCase(getChannelVideos.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getChannelVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.channelVideos = action.payload
        })
    }
})

export default dashboardSlice.reducer
