import ChatPage from "@/components/pages/client/chat/ChatPage"
import SubmitPage from "@/components/pages/client/SubmitPage"
import { Route, Routes } from "react-router-dom"



export const ClientRoutes = ()=>{

   return (
     <>
   
        <Routes>
            <Route path="/" element={<SubmitPage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
        </Routes>
 
     </>
   )
}