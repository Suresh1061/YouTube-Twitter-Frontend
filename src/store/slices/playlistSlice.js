import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";

const initialState = {
    loading: false,
    playlist:null
}

const createPlaylist = createAsyncThunk("createPlaylist", async (data) => {
    try {
        const res = await axios.post(`http://localhost:3000/api/v1/playlists`, data);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const updatePlaylist = createAsyncThunk("updatePlaylist", async (data) => {
    try {
        const res = await axios.patch(`http://localhost:3000/api/v1/playlists/${data.playlistId}`, data);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const deletePlaylist = createAsyncThunk("deletePlaylist", async (playlistId) => {
    try {
        const res = await axios.delete(`http://localhost:3000/api/v1/playlists/${playlistId}`);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const addVideoToPlaylist = createAsyncThunk("addVideo", async ({ playlistId, videoId }) => {
    try {
        const res = await axios.patch(`http://localhost:3000/api/v1/playlists/add/${playlistId}/${videoId}`);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const removeVideoFromPlaylist = createAsyncThunk("removeVideo", async ({ playlistId, videoId }) => {
    try {
        const res = await axios.patch(`http://localhost:3000/api/v1/playlists/remove/${playlistId}/${videoId}`);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const findPlaylistByUserId = createAsyncThunk("findPlaylistByUserId", async (userId) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/playlists/${userId}`);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const findPlaylistByPlaylistId = createAsyncThunk("findPlaylistByPlaylistId", async (playlistId) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/playlists/${playlistId}`);
        message.success(res.data.data)
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPlaylist.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createPlaylist.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(updatePlaylist.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updatePlaylist.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(deletePlaylist.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deletePlaylist.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(addVideoToPlaylist.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(addVideoToPlaylist.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(removeVideoFromPlaylist.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(removeVideoFromPlaylist.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(findPlaylistByUserId.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(findPlaylistByUserId.fulfilled, (state, action) => {
            state.loading = false;
            state.playlist = action.payload
        })
        builder.addCase(findPlaylistByPlaylistId.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(findPlaylistByPlaylistId.fulfilled, (state, action) => {
            state.loading = false;
            state.playlist = action.payload
        })
    }
})

export default playlistSlice.reducer