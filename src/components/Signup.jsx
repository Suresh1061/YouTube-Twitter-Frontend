import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button, Icon } from './index.js'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createAccount } from '../store/slices/authSlice.js'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const create = async (data) => {
        try {
            dispatch(createAccount(data))
            navigate('/login')
        } catch (errors) {
            console.log(errors)
        }
    }
    
    return (
        <div className=' flex justify-center items-center w-full'>
            <div className=' max-w-3xl mx-auto shadow-lg border border-slate-600 rounded-lg px-10 py-6 bg-[#232323] text-white'>
                <div className=' mb-4 flex justify-center items-center'>
                    <Icon width=" w-24" />
                </div>
                <form onSubmit={handleSubmit(create)}>
                    <div className=' space-y-5'>
                        <Input
                            label="Username : "
                            placeholder="Enter your username"
                            {...register("username", {
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
                            label="Full Name : "
                            placeholder=" Enter your full name"
                            {...register('fullName', {
                                required: true
                            })}
                        />
                        {
                            errors.fullName && (
                                <span className=' text-red-500'>
                                    {errors.fullName.message}
                                </span>
                            )}
                        <Input
                            label="Email : "
                            type="email"
                            placeholder=" Enter your email address"
                            {...register('email', {
                                required: true,
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            })}
                        />
                        {
                            errors.email && (
                                <span className=' text-red-500'>
                                    {errors.email.message}
                                </span>
                            )}
                        <Input
                            label="Password : "
                            type="password"
                            placeholder=" Enter your password"
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
                        <Input
                            label="Profile Picture : "
                            type='file'
                            placeholder=''
                            {...register('avatar', {
                                required: true
                            })}
                        />
                        {
                            errors.avatar && (
                                <span className=' text-red-500'>
                                    {errors.avatar.message}
                                </span>
                            )}
                        <Button
                            type='submit'
                            className=' w-full hover:bg-[#ae7aff]'
                        >
                            Create Account</Button>
                        <p className=' text-center text-sm'>
                            Already have an account ? &nbsp;
                            <Link to='/login' className='text-blue-600 cursor-pointer duration-200 hover:underline'>
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
