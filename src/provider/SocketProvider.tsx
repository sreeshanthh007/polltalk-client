import { SocketContext } from "@/contexts/SocketContext"
import { socket } from "@/lib/socket"
import {  useEffect } from "react"


interface Props {
    children:React.ReactNode
}


export const SocketProvider = ({children}:Props)=>{

    useEffect(()=>{
        socket.connect()
        console.log("client side socket connected");
        const username = localStorage.getItem("username")
        if(username) socket.emit("chat:join-user",username)
        return ()=>{
            socket.disconnect()
        }
    },[])

    return (
    <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>
)
}


