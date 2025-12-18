import { useChat } from "@/contexts/ChatContext"



export const TypingIndicatorAnimation = ()=>{

    const {typingUsers} = useChat()


    let text = ""

    if(typingUsers.length==1){
        text = `${typingUsers[0]} is typing`
    }else if(typingUsers.length==2){
        text = `${typingUsers[0] && typingUsers[1]} are typing`
    }else{
        text = "peoples are typing"
    }

    return (
        <div className="px-4 py-3">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-muted-foreground italic">
          <span>{text}</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-muted-foreground/70 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
            <span className="w-2 h-2 bg-muted-foreground/70 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
            <span className="w-2 h-2 bg-muted-foreground/70 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}