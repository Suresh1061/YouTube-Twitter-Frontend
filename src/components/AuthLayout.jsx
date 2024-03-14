import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const AuthLayout = ({ children, authentication = true }) => {
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    // console.log(authStatus)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

    return loader ? <Loading /> : <>{children}</>
}

export default AuthLayout
