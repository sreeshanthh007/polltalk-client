import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { usePoll } from "@/contexts/PollContext"
import { useState } from "react"

export function Poll() {
  const { poll, vote } = usePoll()


  const [selectedOption, setSelectedOption] = useState<number | null>(null)


  if (!poll) {
    return (
      <Card className="w-full max-w-md p-8 text-center">
        <p className="text-muted-foreground">Loading poll...</p>
      </Card>
    )
  }
  console.log("the pool is",poll);

  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.vote, 0)

  const handleVote = (optionId: number) => {
    
    if (selectedOption === optionId) {
      setSelectedOption(null)
    } else {
      setSelectedOption(optionId)
      vote(optionId) 
    }
  }
  
  return (
    <Card className="w-full max-w-md overflow-hidden border-primary/20 bg-card/95 backdrop-blur-sm">
      <div className="border-b border-border/50 bg-primary/5 px-5 py-4">
        <h3 className="text-balance text-base font-semibold text-foreground">
          {poll.question}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {totalVotes} {totalVotes === 1 ? "vote" : "votes"}
        </p>
      </div>

      <div className="space-y-2 p-5">
        {poll.options.map((option) => {
          const isSelected = selectedOption === option.id
          const percentage =
            totalVotes > 0 ? Math.round((option.vote / totalVotes) * 100) : 0

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              className="group relative w-full overflow-hidden rounded-lg border border-border/50 bg-background p-3.5 text-left transition-all hover:border-primary/50 hover:bg-accent/50"
            >
              
              <div
                className="absolute inset-0 bg-primary/10 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/40 group-hover:border-primary"
                    }`}
                  >
                    {isSelected && (
                      <Check
                        className="h-3 w-3 text-primary-foreground"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isSelected ? "text-foreground" : "text-foreground/90"
                    }`}
                  >
                    {option.text}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-muted-foreground">
                    {option.vote} {option.vote === 1 ? "vote" : "votes"}
                  </span>
                  <span className="text-muted-foreground/70">
                    ({percentage}%)
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </Card>
  )
}