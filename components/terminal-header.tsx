"use client"

import { useState, useEffect } from "react"

export function TerminalHeader() {
  const [text, setText] = useState("")
  const fullText = "root@cybersec:~$ whoami"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="font-mono text-sm text-accent mb-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-destructive"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-accent"></div>
        <span className="ml-4 text-muted-foreground">Terminal</span>
      </div>
      <div className="mt-2 p-2 bg-card/50 rounded border border-border">
        <span className="text-accent">{">"}</span> {text}
        <span className="terminal-cursor"></span>
      </div>
    </div>
  )
}
