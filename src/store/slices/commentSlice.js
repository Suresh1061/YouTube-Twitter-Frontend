import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";

const initialState = {
    loading: false,
    comments: [],
    totalComments: null,
    hasPrevPage:false,
}

export const createComment = createAsyncThunk("createComment", async ({content, videoId}) => {
    try {
        const res = await axios.post(`http://localhost:3000/api/v1/comments/${videoId}`, content);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const updateComment = createAsyncThunk("updateComment", async ({content, commentId}) => {
    try {
        const res = await axios.patch(`http://localhost:3000/api/v1/comments/${commentId}`, content);
        message.success(res.data?.message)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const deleteComment = createAsyncThunk("deleteComment", async (commentId) => {
    try {
        const res = await axios.delete(`http://localhost:3000/api/v1/comments/${commentId}`);
        message.success(res.data?.message)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const getAllVideoComments = createAsyncThunk("allVideoComments", async ({page, limit, videoId}) => {
    const url = new URL(`${BASE_URL}/comment/${videoId}`)
    if(page) url.searchParams.set('page', page)
    if (limit) url.searchParams.set('limit', limit)
    
    try {
        const res = await axios.get(`http://localhost:3000/api/v1`, url);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createComment.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comments.unshift(action.payload)
            state.totalComments++
        })
        builder.addCase(getAllVideoComments.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllVideoComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload.docs;
            state.totalComments = action.payload.totalDocs
            state.hasPrevPage = action.payload.hasPrevPage;
        })
        builder.addCase(updateComment.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateComment.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(deleteComment.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteComment.fulfilled, (state) => {
            state.loading = false;
            state.tweets = state.comments.filter((tweet) => tweet._id !== action.payload)
            state.totalComments--;
        })
    }
})

export default commentSlice.reducer