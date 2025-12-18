
import { useState } from "react"
import { Users, MoreVertical, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Poll } from "./Poll"

export function ChatHeader() {
  const [showPoll, setShowPoll] = useState(true)

  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-foreground">Which is the best framework?</h1>
            <p className="text-xs text-muted-foreground">5 members</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setShowPoll(!showPoll)}>
            {showPoll ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {showPoll && (
        <div className="border-t border-border/30 bg-background/30 p-4">
          <div className="mx-auto max-w-2xl">
            <Poll />
          </div>
        </div>
      )}
    </header>
  )
}
