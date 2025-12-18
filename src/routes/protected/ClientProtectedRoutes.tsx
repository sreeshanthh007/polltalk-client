import { Navigate } from "react-router-dom";



 export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem("username"));
};

export interface Props {
    children:React.ReactNode
}
export const ProtectedRoutes = ({children}:Props)=>{

    if(!isAuthenticated()){
        return <Navigate to="/" replace/>
    }
    return children
}