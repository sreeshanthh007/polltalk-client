import type { ChatMessage } from "@/types/socket/socket";
import { createContext, useContext} from "react";



interface ChatContextType {
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
  typingUsers: string[];
  startTyping: () => void;
  stopTyping: () => void;

}




export const ChatContext = createContext<ChatContextType | null>(null);

export const useChat = () => {
  const ctx = useContext(ChatContext);
if(!ctx){
    throw new Error("useChat must be used inside ChatProvider");
}
  return ctx;
};

