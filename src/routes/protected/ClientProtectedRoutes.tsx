import { Navigate, Outlet } from "react-router-dom";



 export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem("username"));
};

export interface Props {
    children:React.ReactNode
}
export const ProtectedRoutes = ({children}:Props)=>{

    if(!isAuthenticated()){
        return <Navigate to="/login" replace/>
    }
    return children
}