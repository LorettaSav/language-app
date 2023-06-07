import { useContext, useEffect, useState} from 'react'
import authContext from '../Contexts/authContext'
import {Navigate} from 'react-router-dom'

export default function RequireAuth({ children }) {
    const [loading, setLoading] = useState(true)
    const auth = useContext(authContext)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            auth.logout();
        } else {
            auth.login()
        }
        setLoading(false)
    }, [])

    if (!auth.user && !loading) {
        return (
            <Navigate to="/login"/>
        )
    } else if (loading) {
        return <div>Loading..</div>
    }
    return (
        <div>
            {children}
      </div>
    )
}
