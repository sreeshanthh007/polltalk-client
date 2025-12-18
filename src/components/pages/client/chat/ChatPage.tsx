
import { ChatHeader } from "@/components/client/chat/ChatHeader"
import { ChatMessages } from "@/components/client/chat/ChatMessage"
import { ChatInput } from "@/components/client/chat/ChatInput"

export default function ChatPage() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  )
}
