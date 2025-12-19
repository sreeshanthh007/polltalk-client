

import { createContext, useContext } from "react";
import type { Poll } from "@/types/socket/socket";

interface PollContextType {
  poll: Poll | null;
  vote: (optionId: number) => void;
  unvote:(optionId:number)=>void;  
}

export const PollContext = createContext<PollContextType | null>(null);

export const usePoll = () => {
  const context = useContext(PollContext);
  if (!context) {
    throw new Error("usePollContext must be used inside PollProvider");
  }
  return context;
};
