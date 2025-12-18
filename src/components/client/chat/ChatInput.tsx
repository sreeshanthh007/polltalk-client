
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Plus } from "lucide-react"
import { useChat } from "@/contexts/ChatContext"

export function ChatInput() {
  const [text, setText] = useState("")

    const {sendMessage,startTyping,stopTyping} = useChat();

    let typingTimeout: NodeJS.Timeout | null = null

    
    const handleTyping = ()=>{
  
      startTyping();
  
      if(typingTimeout) clearTimeout(typingTimeout)
      
      typingTimeout = setTimeout(()=>{
        stopTyping()
      },1000)
    }


  const handleSend = () => {
    if (text.trim()) {
        sendMessage(text.trim())
        setText("")
    if (typingTimeout) clearTimeout(typingTimeout)
    stopTyping()
    }
  }





  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-border/50 bg-card/80 px-4 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0">
          <Plus className="h-5 w-5" />
        </Button>
        <div className="relative flex-1">
          <Input
            value={text}
            onChange={
              (e)=>{
                setText(e.target.value)

                if(e.target.value.trim()){
                  handleTyping()
                }else{
                  stopTyping()
                }
              }
              
            }
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="h-11 rounded-full border-border/50 bg-background pr-12 placeholder:text-muted-foreground"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full"
            disabled={!text.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
