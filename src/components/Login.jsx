import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button, Icon, Loading } from './index.js'
import { Link, useNavigate } from 'react-router-dom'
import { currentUser, userLogin } from '../store/slices/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'


const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth?.loading)
    const navigate = useNavigate()

    const submit = async (data) => {
        const isEmail = data.username.includes('@')
        const loginDetails = isEmail
            ? { email: data.username, password: data.password }
            : data

        const response = await dispatch(userLogin(loginDetails))
        const user = await dispatch(currentUser)
        // console.log(response, " ", user)

        if (user && response?.payload) {
            navigate('/')
        }
    }
    // console.log(loading)
    // if (loading) {
    //     return <Loading />
    // }

    return (
        <>
            {loading ? <Loading />
                :
                <div className=' flex justify-center items-center w-full'>
                    <div className=' max-w-3xl mx-auto shadow-lg border border-slate-600 rounded-lg px-10 py-6  bg-[#232323]  text-white'>
                        <div className=' mb-4 flex justify-center items-center'>
                            <Icon width=" w-24" />
                        </div>
                        <form onSubmit={handleSubmit(submit)}>
                            <div className=' space-y-5'>
                                <Input
                                    label="Username / Email : "
                                    type="text"
                                    placeholder="example@gmail.com"
                                    {...register('username', {
                                        required: true
                                    })}
                                />
                                {
                                    errors.username && (
                                        <span className=' text-red-500'>
                                            {errors.username.message}
                                        </span>
                                    )}
                                <Input
                                    label="Password : "
                                    type="password"
                                    placeholder="1kd074fjw0"
                                    {...register('password', {
                                        required: true
                                    })}
                                />
                                {
                                    errors.password && (
                                        <span className=' text-red-500'>
                                            {errors.password.message}
                                        </span>
                                    )}
                                <Button
                                    type='submit'
                                    className=' w-full hover:bg-[#ae7aff]'
                                >
                                    Log in
                                </Button>
                                <p className=' text-center text-sm'>
                                    Dont&apos;t have any account? &nbsp;
                                    <Link to='/signup' className='text-blue-600 cursor-pointer duration-200 hover:underline'>
                                        Create Account
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default LogIn
