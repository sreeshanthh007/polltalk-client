import { ChatContext } from "@/contexts/ChatContext"
import { socket } from "@/lib/socket"
import type { ChatMessage } from "@/types/socket/socket"
import { useEffect, useState } from "react"





interface Props {
    children:React.ReactNode
}



export const ChatProvider = ({children}:Props)=>{

   

    const [messages,setMessages] = useState<ChatMessage[]>([])

    const [typingUsers,setTypingUsers] = useState<string[]>([])


    useEffect(()=>{

        
        socket?.on("chat:history",(history:ChatMessage[])=>{
            setMessages(history)
        })


        socket?.on("chat:newMessages",(message:ChatMessage)=>{
            setMessages((prevMessages)=>[...prevMessages,message])

        });


       socket?.on("chat:typing", ({ username, isTyping }) => {
      setTypingUsers((prev) => {
        if (isTyping) {
          return prev.includes(username) ? prev : [...prev, username]
        } else {
          return prev.filter((u) => u !== username)
        }
      });
    });


        return ()=>{
            socket?.off("chat:history")
            socket?.off("chat:newMessages")
            socket?.off("chat:typing")

        }
    },[socket]) 


      const startTyping = () => {
        socket?.emit("chat:start-typing",true);
    };

    const stopTyping = () => {
    socket?.emit("chat:start-typing", false)
    };

    const sendMessage = (text:string)=>{
        socket?.emit("chat:send",text)
        stopTyping()
    }

    

    return (
       <ChatContext.Provider
       
       value={{
        messages,
        sendMessage,
        typingUsers,
        startTyping,
        stopTyping
       }}
       >
        {children}
       </ChatContext.Provider>
    )
}   



