import ChatPage from "@/components/pages/client/chat/ChatPage"
import SubmitPage from "@/components/pages/client/SubmitPage"
import { Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "../protected/ClientProtectedRoutes"
import { PublicRoute } from "./PublicRoutes"



export const ClientRoutes = ()=>{

   return (
     <>
   
        <Routes>
            <Route path="/" element={
               <PublicRoute>
               <SubmitPage/>
               </PublicRoute>
            }
            />
            <Route path="/chat" element={
               <ProtectedRoutes>
                  <ChatPage/>
               </ProtectedRoutes>
            }/>
        </Routes>
 
     </>
   )
}