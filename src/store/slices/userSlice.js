import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";


const initialState = {
    loading: false,
    profileDetails: null,
    history: [],
}

export const UserChannel = createAsyncThunk("getUserChannel", async (username) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/users/c/${username}`)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const userWatchHistory = createAsyncThunk("getUserWatchHistory", async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/users/history`)
        console.log(res)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const updateAccountDetails = createAsyncThunk('updateAccountDetails', async (data) => {
    try {
        const res = await axios.patch('http://localhost:3000/api/v1/users/update-account', data)
        message.success(res.data?.message)
        console.log(res)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const updateAvatar = createAsyncThunk('updateAvatar', async (avatar) => {
    try {
        const res = await axios.post('http://localhost:3000/api/v1/users/avatar', avatar)
        message.success(res.data?.message)
        console.log(res)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const updateCoverImage = createAsyncThunk('updateCoverImage', async (coverImage) => {
    try {
        const res = await axios.post('http://localhost:3000/api/v1/users/cover-image', coverImage)
        message.success(res.data?.message)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(UserChannel.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(UserChannel.fulfilled, (state, action) => {
            state.loading = false;
            state.profileDetails = action.payload
        })
        builder.addCase(userWatchHistory.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(userWatchHistory.fulfilled, (state, action) => {
            state.loading = false;
            state.history = action.payload
        })
        builder.addCase(updateAccountDetails.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateAccountDetails.fulfilled, (state,action) => {
            state.loading = true;
            state.profileDetails = action.payload
        })
        builder.addCase(updateAvatar.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateAvatar.fulfilled, (state,action) => {
            state.loading = true;
            state.profileDetails = action.payload
        })
        builder.addCase(updateCoverImage.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateCoverImage.fulfilled, (state,action) => {
            state.loading = true;
            state.profileDetails = action.payload
        })
    }
})

export default userSlice.reducer