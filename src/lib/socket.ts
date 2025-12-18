import type { ClientToServerEvents, ServerToClientEvents } from "@/types/socket/socket";
import { io, Socket } from "socket.io-client";


const SERVER_URL = import.meta.env.VITE_SERVER_URL 
export const socket : Socket<ServerToClientEvents , ClientToServerEvents> = io(SERVER_URL,{
    autoConnect:false
})