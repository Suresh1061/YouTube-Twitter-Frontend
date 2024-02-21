import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";

const initialState = {
    loading: false,
    isSubscribed: null,
    subscribers: [],
    subscribedChannels: []
}

const toggleSubscription = createAsyncThunk("toggleSubscription", async (channelId) => {
    try {
        const res = await axios.post(`http://localhost:3000/api/v1/subscription/c/${channelId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const Subscribers = createAsyncThunk("subscribers", async (channelId) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/subscription/c/${channelId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const subscribedChannel = createAsyncThunk("subscribedChannel", async (subscriberId) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/subscription/c/${subscriberId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(toggleSubscription.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(toggleSubscription.fulfilled, (state, action) => {
            state.loading = false;
            state.isSubscribed = action.payload
        })
        builder.addCase(Subscribers.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Subscribers.fulfilled, (state, action) => {
            state.loading = false;
            state.subscribers = action.payload;
        })
        builder.addCase(subscribedChannel.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(subscribedChannel.fulfilled, (state, action) => {
            state.loading = false;
            state.subscribedChannels = action.payload
            // state.subscribedChannels = action.payload.filter(subscription =>subscription?.channel?.latestVideo);
        })
    }
})

export default subscriptionSlice.reducer