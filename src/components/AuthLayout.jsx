import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children, authentication }) => {
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    console.log(authStatus)

    useEffect(() => {
        if (!authentication && authStatus !== authentication) {
            return
        }
    }, [authStatus, authentication, navigate])
    return children
}

export default AuthLayout
