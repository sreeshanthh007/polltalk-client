import type { ClientToServerEvents, ServerToClientEvents } from "@/types/socket/socket";
import { createContext, useContext } from "react";
import type { Socket } from "socket.io-client";




export const SocketContext = createContext<Socket<ServerToClientEvents,ClientToServerEvents> | null>(null)


export const useSocketContext = ()=>{
    const socket = useContext(SocketContext)
    if(!socket){
        console.log("socket should be inside the provider")
    }
    return socket
}