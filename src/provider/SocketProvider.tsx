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


