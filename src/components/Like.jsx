import React, { useState } from 'react'
import {
    BiSolidLike,
    BiSolidDislike,
} from "./icons"
import { useDispatch } from 'react-redux'
import { toggleCommentLike, toggleTweetLike, toggleVideoLike } from '../store/slices/likeSlice'

function Like({ isLiked, likesCount=0, videoId, commentId, tweetId }) {
    // console.log(isLiked, " ", likesCount)
    const [localIsLiked, setLocalIsLiked] = useState(isLiked)
    const [localLikesCount, setLocalLikesCount] = useState(likesCount)
    const dispatch = useDispatch()

    const handelToggleLike = () => {
        if (videoId) dispatch(toggleVideoLike(videoId))
        if (commentId) dispatch(toggleCommentLike(videoId))
        if (tweetId) dispatch(toggleTweetLike(videoId))

        setLocalIsLiked((prev) => !prev)
        if (localIsLiked) {
            setLocalLikesCount(prev => prev - 1)
        } else {
            setLocalLikesCount(prev => prev + 1)
        }
    }

    return (
        <div className=' flex item-center justify-between px-4 my-1'>
            <div className=' flex items-center gap-1 border-r-2 border-gray-500 pr-3'>
                <BiSolidLike
                    size={23}
                    onClick={handelToggleLike}
                    className={localIsLiked ? "cursor-pointer text-purple-600" : "cursor-pointer text-white"} />
                <p>{localLikesCount}</p>
            </div>
            <div className=' pl-3'>
                <BiSolidDislike size={23} />
            </div>

        </div>
    )
}

export default Like