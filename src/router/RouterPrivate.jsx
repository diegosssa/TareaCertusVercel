import { Navigate, useLocation } from "react-router-dom"

export const RouterPrivate = ({ children }) => {
    const location = useLocation()
    return location?.state?.logged === true ? children : <Navigate to="/login" />
}
