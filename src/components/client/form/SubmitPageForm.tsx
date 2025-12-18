
import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { socket } from "@/lib/socket"
import { useNavigate } from "react-router-dom"

export function SubmitPageForm() {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
   
    if(!username.trim())return

    socket.connect()

    socket.emit("chat:join-user",username)

    localStorage.setItem("username",username.trim())

    navigate("/chat")
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Welcome to Chat</CardTitle>
        <CardDescription>Enter your username to start chatting</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Join Chat
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
