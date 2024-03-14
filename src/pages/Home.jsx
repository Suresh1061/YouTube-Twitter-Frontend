import React, { useCallback, useEffect, useState } from 'react'
import { Container, Loading, UploadVideo, UploadingVideo, Video } from '../components'
import VideoList from '../components/VideoList'
import { Button } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../store/slices/authSlice'
import { getAllVideos, makeVideosNull } from '../store/slices/videoSlice'
import HomeSkeleton from '../skeleton/HomeSkeleton'
import EditVideo from '../components/EditVideo'


const Home = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const loading = useSelector((state) => state.video?.loading)
    const videos = useSelector((state) => state.video?.videos?.docs)
    const hasNextPage = useSelector((state) => state.video?.videos?.hasNextPage)

    const fetchMoreVideos = useCallback(() => {
        dispatch(getAllVideos({ page: page + 1 }))
        setPage((prev) => prev + 1)
    }, [page, hasNextPage, dispatch])

    useEffect(() => {
        dispatch(getAllVideos({}));

        return () => dispatch(makeVideosNull())
    }, [dispatch])

    // console.log(videos)
    return (
        <Container>
            <div className=' text-white pt-[70px] sm:pt-[75px] mb-16 sm:m-0 w-full h-screen overflow-y-scroll '>
                <div className='w-full h-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
                    {
                        videos?.map(video => (
                            <VideoList
                                key={video._id}
                                thumbnail={video.thumbnail?.url}
                                title={video.title}
                                duration={video.duration}
                                views={video.views}
                                avatar={video.ownerDetails?.avatar?.url}
                                createdAt={video.createdAt}
                                videoId={video._id}
                                channelName={video.ownerDetails?.username}
                            />
                        ))
                    }
                    {
                        videos?.map(video => (
                            <VideoList
                                key={video._id}
                                thumbnail={video.thumbnail?.url}
                                title={video.title}
                                duration={video.duration}
                                views={video.views}
                                avatar={video.ownerDetails?.avatar?.url}
                                createdAt={video.createdAt}
                                videoId={video._id}
                                channelName={video.ownerDetails?.username}
                            />
                        ))
                    }
                    {
                        videos?.map(video => (
                            <VideoList
                                key={video._id}
                                thumbnail={video.thumbnail?.url}
                                title={video.title}
                                duration={video.duration}
                                views={video.views}
                                avatar={video.ownerDetails?.avatar?.url}
                                createdAt={video.createdAt}
                                videoId={video._id}
                                channelName={video.ownerDetails?.username}
                            />
                        ))
                    }
                    {
                        videos?.map(video => (
                            <VideoList
                                key={video._id}
                                thumbnail={video.thumbnail?.url}
                                title={video.title}
                                duration={video.duration}
                                views={video.views}
                                avatar={video.ownerDetails?.avatar?.url}
                                createdAt={video.createdAt}
                                videoId={video._id}
                                channelName={video.ownerDetails?.username}
                            />
                        ))
                    }
                    {
                        videos?.map(video => (
                            <VideoList
                                key={video._id}
                                thumbnail={video.thumbnail?.url}
                                title={video.title}
                                duration={video.duration}
                                views={video.views}
                                avatar={video.ownerDetails?.avatar?.url}
                                createdAt={video.createdAt}
                                videoId={video._id}
                                channelName={video.ownerDetails?.username}
                            />
                        ))
                    }
                </div>
            </div>
            {loading && <HomeSkeleton />}
        </Container>
    )
}

export default Home
