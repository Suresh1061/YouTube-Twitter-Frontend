import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { findVideo } from '../store/slices/videoSlice';
import Video from '../components/Video';
import Header from '../components/header/Header';
import VideoDescription from '../components/VideoDescription';
import TweetAndComment from '../components/TweetAndComment';
import CommentList from '../components/CommentList';
import { cleanUpComments, getAllVideoComments } from '../store/slices/commentSlice';

function VideoDetails() {
    const { videoId } = useParams();
    const dispatch = useDispatch();
    const video = useSelector((state) => state.video.video)
    const comments = useSelector(state => state.comment.comments)
    const totalComments = useSelector(state => state.comment.totalComments)
    const hasNextPage = useSelector(state => state.comment.hasNextPage)
    const loading = useSelector(state=> state.comment.loading)

    const [page, setPage]= useState(1)

    useEffect(() => {
        if (videoId) {
            dispatch(findVideo({ videoId }));
            dispatch(getAllVideoComments({ videoId }))
        }
        return () => dispatch(cleanUpComments())
    }, [dispatch, videoId])

    const fetchMoreComments = useCallback(() => {
        if (loading && hasNextPage) {
            dispatch(getAllVideoComments({ videoId, page: page + 1 }))
        setPage(page + 1)
        }
    },[page, hasNextPage,loading, videoId, dispatch ])

    return (
        <>
            <Header />
            <main className=' sm:pl-10 sm:max-w-4xl w-full '>
                <Video
                    src={video?.videoFile?.url}
                    poster={video?.thumbnail?.url}
                />
                <VideoDescription
                    videoId={video?._id}
                    title={video?.title}
                    views={video?.views}
                    createdAt={video?.createdAt}
                    avatar={video?.owner?.avatar?.url}
                    description={video?.description}
                    channelName={video?.owner?.username}
                    likesCount={video?.likeCount}
                    isLiked={video?.isLiked}
                    subscriberCount={video?.owner?.subscriberCount}
                    isSubscribed={video?.owner?.isSubscribed}
                    channelId={video?.owner?._id}
                />
                <TweetAndComment
                    videoId={video?._id}
                    comment={true}
                />
                {comments.map(comment => (
                    <CommentList
                        key={comment._id}
                        comment={comment}
                    />
                ))
                }
            </main>
        </>
    )
}

export default VideoDetails