import React from 'react'
import { Button } from '../../components'

const Channel = ({
    coverImage = false,
    fullName = "Suresh Pal",
    username = "Suresh",
    avatar = "https://res.cloudinary.com/dxcw44ypq/image/upload/v1706379951/aikzwftlxikelmsabxjq.jpg",
    subscribersCount = "3",
    subscribedCount = "2",
    channelId,
    edit,
}) => {
    return (
        <div className=' w-full text-white'>
            <section className=' w-full'>
                {
                    coverImage ? (
                        <div className=' relative'>
                            <img
                                src={coverImage}
                                alt="cover image"
                                className=' sm:h-40 h-28  w-full object-cover'
                            />
                        </div>
                    ) : (
                        <div className=' w-full sm:h-40 h-28 bg-black border-b border-gray-600'></div>
                    )}
            </section>
            {/* Channel Details Section */}
            <section className=' flex w-full sm:px-5 p-2 sm:flex-row flex-col sm:gap-4 items-start'>
                <div className=' h-12'>
                    <div className=' relative  sm:w-32 w-28 sm:h-32 h-28'>
                        <img
                            src={avatar}
                            alt="avatar"
                            className=' w-full h-full object-cover rounded-full absolute sm:bottom-10 bottom-20 outline-none'
                        />
                    </div>
                </div>
                <div className=' w-full flex justify-between items-start px-1 sm:h-20 md:h-24'>
                    <div>
                        <h1 className=' text-xl font-bold'>{fullName}</h1>
                        <p className=' text-sm text-slate-400'>@{username}</p>
                        <div className=' text-xs text-slate-400'>
                            <span>{subscribersCount}</span>
                            <span>{subscribersCount}</span>
                        </div>

                    </div>
                    <Button
                        className=' py-1.5 w-[100px] hover:scale-110'
                    >
                        Edit</Button>
                </div>


                <div>

                </div>
            </section>
        </div>
    )
}

export default Channel
