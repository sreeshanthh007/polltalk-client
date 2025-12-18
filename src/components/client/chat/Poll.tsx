
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PollOption {
  id: number
  label: string
  votes: number
}

export function Poll() {
  const [options, setOptions] = useState<PollOption[]>([
    { id: 1, label: "Next.js", votes: 8 },
    { id: 2, label: "React", votes: 5 },
    { id: 3, label: "Vue", votes: 3 },
    { id: 4, label: "Svelte", votes: 2 },
  ])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0)

  const handleVote = (optionId: number) => {
    if (selectedOption === optionId) {
      // Unvote - clicking the same option removes the vote
      setOptions((prev) =>
        prev.map((opt) => {
          if (opt.id === optionId) {
            return { ...opt, votes: opt.votes - 1 }
          }
          return opt
        }),
      )
      setSelectedOption(null)
    } else {
      // Vote or change vote
      setOptions((prev) =>
        prev.map((opt) => {
          if (selectedOption === opt.id) {
            return { ...opt, votes: opt.votes - 1 }
          }
          if (opt.id === optionId) {
            return { ...opt, votes: opt.votes + 1 }
          }
          return opt
        }),
      )
      setSelectedOption(optionId)
    }
  }

  return (
    <Card className="w-full max-w-md overflow-hidden border-primary/20 bg-card/95 backdrop-blur-sm">
      <div className="border-b border-border/50 bg-primary/5 px-5 py-4">
        <h3 className="text-balance text-base font-semibold text-foreground">Which is the best framework?</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {totalVotes} {totalVotes === 1 ? "vote" : "votes"}
        </p>
      </div>

      <div className="space-y-2 p-5">
        {options.map((option) => {
          const isSelected = selectedOption === option.id

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              className="group relative w-full rounded-lg border border-border/50 bg-background p-3.5 text-left transition-all hover:border-primary/50 hover:bg-accent/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                      isSelected ? "border-primary bg-primary" : "border-muted-foreground/40 group-hover:border-primary"
                    }`}
                  >
                    {isSelected && <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />}
                  </div>
                  <span className={`text-sm font-medium ${isSelected ? "text-foreground" : "text-foreground/90"}`}>
                    {option.label}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {option.votes} {option.votes === 1 ? "vote" : "votes"}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </Card>
  )
}
