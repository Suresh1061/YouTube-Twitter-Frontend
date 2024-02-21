import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";

const initialState = {
    loading: false,
    isLiked: false,
    likedVideos: []
}

const toggleVideoLike = createAsyncThunk("toggleVideoLike", async ( videoId ) => {
    try {
        const res = await axios.post(`http://localhost:3000/api/v1/likes/toggle/v/${videoId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const toggleCommentLike = createAsyncThunk("toggleCommentLike", async ({ commentId }) => {
    try {
        const res = await axios.post(`http://localhost:3000/api/v1/likes/toggle/c/${commentId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const toggleTweetLike = createAsyncThunk("toggleTweetLike", async ({ tweetId }) => {
    try {
        const res = await axios.post(`http://localhost:3000/api/v1/likes/toggle/t/${tweetId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const likedVideos = createAsyncThunk("likedVideos", async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/likes/videos`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})


const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(toggleVideoLike.pending, (state) => {
        //     state.loading = true;
        // })
        builder.addCase(toggleVideoLike.fulfilled, (state, action) => {
            state.loading = false;
            state.isLiked = (action.payload) ? true : false;
        })
        builder.addCase(toggleCommentLike.fulfilled, (state, action) => {
            state.loading = false;
            state.isLiked = (action.payload) ? true : false;
        })
        builder.addCase(toggleTweetLike.fulfilled, (state, action) => {
            state.loading = false;
            state.isLiked = (action.payload) ? true : false;
        })
        builder.addCase(likedVideos.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(likedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.likedVideos = action.payload
        })
    }
})



export default likeSlice.reducer