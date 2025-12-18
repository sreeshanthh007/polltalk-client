import { Navigate } from "react-router-dom"
import { isAuthenticated, type Props } from "../protected/ClientProtectedRoutes"



export const PublicRoute = ({ children }: Props) => {
  if (isAuthenticated()) {
    return <Navigate to="/chat" replace />
  }
  return children
}
