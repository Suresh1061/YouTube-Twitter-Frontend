import React from 'react'
import {
    BiHistory,
    BiLike,
    CiSettings,
    HiOutlineVideoCamera,
    IoFolderOutline,
    MdOutlineContactSupport,
    RiHome6Line,
    TbUserCheck,
} from "../icons"
import { NavLink } from 'react-router-dom'

const LeftBar = () => {
    const sideItems = [
        {
            icon: <RiHome6Line size={25} />,
            name: "Home",
            url: '/'
        },
        {
            icon: <BiLike size={25} />,
            name: "Liked Videos",
            url: '/liked-videos'
        },
        {
            icon: <BiHistory size={25} />,
            name: "History",
            url: '/history'
        },
        {
            icon: <HiOutlineVideoCamera size={25} />,
            name: "My Content",
            url: '/my-content'
        },
        {
            icon: <IoFolderOutline size={25} />,
            name: "Collection",
            url: '/collection'
        },
        {
            icon: <TbUserCheck size={25} />,
            name: "Subscribers",
            url: '/subscribers'
        },
    ]

    return (
        <div className=' bg-[#121212] border-r border-gray-600 w-[300px] text-white h-screen mt-[-70px] py-6 px-3 flex flex-col justify-between'>
            <div className=' mt-[70px]'>
                {
                    sideItems.map(items => (
                        <NavLink
                            key={items.name}
                            to={items.url}
                            className={({ isActive }) =>
                                isActive ? "bg-purple-500" : ""}
                        >
                            <div className=' flex items-center gap-3 border border-gray-700 my-2 p-2 hover:bg-purple-500 duration-150 rounded-md'>
                                {items.icon}
                                <span className=' text-base hidden md:block'>
                                    {items.name}
                                </span>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
            <div>
                <div className=' flex items-center gap-3 border border-gray-700 my-2 p-2 hover:bg-purple-500 duration-150 rounded-md cursor-pointer'>
                    <MdOutlineContactSupport size={25} />
                    <span className=' text-base hidden md:block'>
                        Support
                    </span>
                </div>
                <div className=' flex items-center gap-3 border border-gray-700 my-2 p-2 hover:bg-purple-500 duration-150 rounded-md cursor-pointer'>
                    <CiSettings size={25} />
                    <span className=' text-base hidden md:block'>
                        Setting
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LeftBar
