import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import  axiosInstance  from '../../helpers/axiosInst.js'
import axios from "axios";
import { message } from "antd";
import { errorHandler } from "../../constants";


// const initialState = {
//     status: true,
//     loading: false,
//     userData: {
//         "username": "suresh",
//         "email": "suresh@gmail.com",
//         "fullName": "Suresh Pal",
//         "avatar": {
//             "url": "http://res.cloudinary.com/dxcw44ypq/image/upload/v1706728061/og9cvx2zvpzxjjdozpgt.jpg",
//             "public_id": "og9cvx2zvpzxjjdozpgt",
//             "_id": "65ba9a7f4f9ce9004eb1decd"
//         },
//     }
// }

const initialState = {
    loading: false,
    status: false,
    userData: null
}


export const createAccount = createAsyncThunk('register', async (data) => {
    const formData = new FormData();
    formData.append('username', data.username)
    formData.append('fullName', data.fullName)
    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append('avatar', data.avatar[0])

    try {
        const res = await axios.post('http://localhost:3000/api/v1/users/register', formData)
        console.log(res.data)
        message.success("Registered successfully")
        return res.data
    } catch (error) {
        const extractedErrorMessage = errorHandler(error?.response?.data)
        message.error(extractedErrorMessage)
        throw error
    }
})

export const userLogin = createAsyncThunk('login', async (data) => {
    try {
        const res = await axios.post('http://localhost:3000/api/v1/users/login', data)
        // console.log(res)
        message.success(res.data?.message)
        return res.data.data.user
    } catch (error) {
        const extractedErrorMessage = errorHandler(error?.response?.data)
        message.error(extractedErrorMessage)
    }
})

export const userLogout = createAsyncThunk('logout', async () => {
    try {
        await axios.post('http://localhost:3000/api/v1/users/logout')
        message.success(res.data?.message)
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const refreshAccessToken = createAsyncThunk('refresh-token', async (data) => {
    try {
        const res = await axios.post('http://localhost:3000/api/v1/users/refresh-token', data)
        return res.data;
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const changePassword = createAsyncThunk('change-password', async (data) => {
    try {
        await axios.post('http://localhost:3000/api/v1/users/change-password', data)
        message.success(res.data?.message)
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const currentUser = createAsyncThunk('current-user', async () => {
    const res = await axios.get('http://localhost:3000/api/v1/users/current-user')
    return res.data.data
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAccount.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createAccount.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false
            state.status = true
            state.userData = action.payload
        })
        builder.addCase(userLogout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userLogout.fulfilled, (state) => {
            state.loading = false
            state.status = false
            state.userData = null
        })
        builder.addCase(currentUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(currentUser.fulfilled, (state, action) => {
            state.loading = false
            state.status = true
            state.userData = action.payload
        })
        builder.addCase(currentUser.rejected, (state) => {
            state.loading = false
            state.status = false
            state.userData = null
        })
    }
})

export default authSlice.reducer;