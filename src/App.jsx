import React, { useEffect } from 'react'
import axios from 'axios'
import { Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { Home } from './pages/index.js'
import { AuthLayout, Login, Signup, Video } from './components'
import Layout from './Layout.jsx'
import { getCurrentUser } from './store/slices/authSlice.js'
import LikedVideos from './pages/LikedVideos.jsx'
import History from './pages/History.jsx'
import Subscribers from './pages/Subscribers.jsx'
import AdminDashboard from './pages/Admin/AdminDashboard.jsx'
import Channel from './pages/Channel/Channel.jsx'
import VideoDetails from './pages/VideoDetails.jsx'

axios.defaults.withCredentials = true

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    try {
      dispatch(getCurrentUser())
    } catch (error) {
      navigate("/login")
    }
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            path=''
            element={
              <AuthLayout authentication>
                <Home />
              </AuthLayout>
            }
          />
          <Route
            path='/liked-videos'
            element={
              <AuthLayout authentication>
                <LikedVideos />
              </AuthLayout>
            }
          />
          <Route
            path='/history'
            element={
              <AuthLayout authentication>
                <History />
              </AuthLayout>
            }
          />
          <Route
            path='/channel/:username'
            element={
              <AuthLayout authentication>
                <Channel />
              </AuthLayout>
            }
          />
          <Route
            path='/subscribers'
            element={
              <AuthLayout authentication>
                <Subscribers />
              </AuthLayout>
            }
          />
        </Route>
        <Route
          path='/collection'
          element={
            <AuthLayout authentication>
              <AdminDashboard />
            </AuthLayout>
          }
        />
        <Route
          path='/login'
          element={
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path='/signup'
          element={
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path='/watch/:videoId'
          element={
            <AuthLayout authentication>
              <VideoDetails />
            </AuthLayout>
          }
        />
      </Routes>
    </>
  )
}

export default App