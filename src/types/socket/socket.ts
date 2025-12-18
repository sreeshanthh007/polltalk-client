





export interface ChatMessage {
  username: string;
  text: string;
  time: string; 
}


export interface PollOption {
  id: number;
  text: string;
  vote: number;
}

export interface Poll {
  question: string;
  options: PollOption[];
}

export interface ClientToServerEvents {
  "chat:join-user": (username: string) => void;
  "chat:send": (text: string) => void;
  "poll:vote": (optionId: number) => void;
  "chat:start-typing": (isTyping:boolean) => void;
}

export interface ServerToClientEvents {
    "chat:newMessages": (message: ChatMessage) => void;
    "chat:history": (messages: ChatMessage[]) => void;
    "chat:typing": (data:{username:string,isTyping:boolean}) => void;
    "poll:update": (updatedOption: PollOption) => void;
    "poll:data": (poll: Poll) => void;
}