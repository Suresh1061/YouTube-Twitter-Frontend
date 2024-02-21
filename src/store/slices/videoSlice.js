import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";


const initialState = {
    loading: true,
    isPublished: null,
    videos: null
}

export const getAllVideos = createAsyncThunk("getAllVideos", async (userId, query, sortBy, sortType, page, limit) => {
    try {
        const url = new URL(`${BASE_URL}/videos`)

        if (userId) url.searchParams.set('userId', userId)
        if (query) url.searchParams.set('query', query)
        if (page) url.searchParams.set('page', page)
        if (limit) url.searchParams.set('limit', limit)
        if (sortBy && sortType) {
            url.searchParams.set('sortBy', sortBy)
            url.searchParams.set('sortType', sortType)
        }
        console.log(url)
        const res = await axios.get(url)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const uploadVideo = createAsyncThunk("uploadVideo", async (data) => {
    const formData = new FormData()
    formData.append(title, data.title)
    formData.append(title, data.description)
    formData.append(title, data.thumbnail[0])
    formData.append(title, data.videoFile[0])

    try {
        const res = await axios.post('http://localhost:3000/api/v1/videos', formData)
        message.success(res.data?.message)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const findVideo = createAsyncThunk("findVideo", async (videoId) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/videos/${videoId}`)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const updateVideoDetails = createAsyncThunk("updateVideo", async (data) => {
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("description", data.description)
    formData.append("thumbnail", data.thumbnail[0])

    try {
        const res = await axios.patch(`http://localhost:3000/api/v1/videos/${data.videoId}`, formData)
        message.success(res.data?.message)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const deleteVideo = createAsyncThunk("deleteVideo", async (videoId) => {
    try {
        const res = await axios.delete(`http://localhost:3000/api/v1/videos/${videoId}`)
        message.success(res.data?.message)
        return res.data.data;
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const togglePublishStatus = createAsyncThunk("togglePublishStatus", async (data) => {
    try {
        const res = await axios.patch(`http://localhost:3000/api/v1/videos/toggle/publish/${videoId}`)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllVideos.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload
        })
        builder.addCase(uploadVideo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(uploadVideo.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(updateVideoDetails.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateVideoDetails.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(deleteVideo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteVideo.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(findVideo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(findVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload
        })
        builder.addCase(togglePublishStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.isPublished = action.payload
        })
    }
})

export default videoSlice.reducer