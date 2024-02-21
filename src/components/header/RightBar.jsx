import React, { Profiler, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    RiFeedbackLine,
    IoMdHelpCircleOutline,
    IoSettingsOutline,
    GoSignOut
} from '../icons'


const RightBar = ({ profileImg, username, fullName }) => {

    return (
        <div className=' fixed top-[20px] right-[90px]  bg-slate-700 rounded-lg w-[300px] text-white  pb-4 duration-200'>
            <div className=' p-4 flex gap-x-6 border-b-[1px] border-gray-500 '>
                <img src={profileImg} alt="" className=' w-12 h-12 rounded-full border  cursor-pointer object-cover' />
                <div>
                    <p>{fullName}</p>
                    <p>@{username}</p>
                    <Link className=' text-blue-500 text-sm'>View your channel</Link>
                </div>
            </div>
            <div className='border-b-[1px] border-gray-500 py-2 '>
                <div className='flex items-center gap-x-3 hover:bg-gray-700 cursor-pointer py-2 px-4'>
                    <GoSignOut size={22} />
                    <p>Sign out</p>
                </div>
            </div>
            <div className='border-b-[1px] border-gray-500 py-2 '>
                <div className='flex items-center gap-x-3 hover:bg-gray-700 cursor-pointer py-2 px-4'>
                    <IoSettingsOutline size={22} />
                    <p>Settings</p>
                </div>
            </div>
            <div className=' py-2 '>
                <div className='flex items-center gap-x-3 hover:bg-gray-700 cursor-pointer py-2 px-4'>
                    <RiFeedbackLine size={22} />
                    <p>Help</p>
                </div>
                <div className='flex items-center gap-x-3 hover:bg-gray-700 cursor-pointer py-2 px-4'>
                    <IoMdHelpCircleOutline size={22} />
                    <p>Send feedback</p>
                </div>
            </div>
        </div>
    )
}

export default RightBar
