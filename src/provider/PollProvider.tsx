    import { PollContext } from "@/contexts/PollContext";
    import { useSocketContext } from "@/contexts/SocketContext";
    import type { Poll, PollOption } from "@/types/socket/socket";
    import { useEffect, useState } from "react";



    interface Props {
        children: React.ReactNode;
    }


    export const PollProvider = ({children}:Props)=>{

        const socket = useSocketContext()


        const [poll, setPoll] = useState<Poll | null>(null);


        useEffect(()=>{

        socket?.on("poll:data",(pollData:Poll)=>{
            setPoll(pollData)
        });


        socket?.on("poll:update", (updatedOption: PollOption) => {
            setPoll((prev) => {
                if (!prev) return prev; 

                return {
                ...prev,
                options: prev.options.map((opt) =>
                    opt.id === updatedOption.id
                    ? { ...opt, vote: updatedOption.vote }
                    : opt
                ),
                };
            });
            });


        return ()=>{
            socket?.off("poll:data");
            socket?.off("poll:update");
        }
        },[socket])
        
        const vote = (optionId:number)=>{
            socket?.emit("poll:vote",optionId)
        }

        const unvote = (optionId:number)=>{
            socket?.emit("poll:unvote",optionId)
        }



        return (
            <PollContext.Provider value={{
            vote,
            unvote,
            poll
            }}>
            {children}
        </PollContext.Provider>
        )

    }