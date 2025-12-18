import { useChat } from "@/contexts/ChatContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; 
import { ScrollArea } from "@/components/ui/scroll-area"; 
import { format } from "date-fns";
import { useEffect, useRef } from "react";
import { TypingIndicatorAnimation } from "@/components/animations/TypingIndicatorAnimation";

export function ChatMessages() {
  const { messages, typingUsers } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const currentUsername = localStorage.getItem("username");

  const formatTime = (timestamp: string) => {
    try {
      return format(new Date(timestamp), "HH:mm");
    } catch {
      return timestamp;
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingUsers]); 

  return (
    <div className="flex-1 overflow-hidden px-4 py-6">
      <ScrollArea className="h-full">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.length === 0 ? (
            <div className="text-center text-muted-foreground py-10">
              No messages yet. Start the conversation!
            </div>
          ) : (
            messages.map((msg) => {
              const isOwn = msg.username === currentUsername;

              return (
                <div
                  className={`flex gap-3 ${isOwn ? "flex-row-reverse" : "flex-row"}`}
                >
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarFallback>
                      {msg.username.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div
                    className={`flex flex-col gap-1 max-w-md ${
                      isOwn ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="flex items-baseline gap-2 text-xs text-muted-foreground">
                      <span>{isOwn ? "You" : msg.username}</span>
                      <span>{formatTime(msg.time)}</span>
                    </div>

                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        isOwn
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {typingUsers.length > 0 && <TypingIndicatorAnimation />}

          <div ref={bottomRef} />
        </div>
      </ScrollArea>
    </div>
  );
}