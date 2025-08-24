"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Play, Square, Coffee } from "lucide-react"

interface TimeEntry {
  type: "clock-in" | "clock-out" | "break-start" | "break-end"
  time: string
  timestamp: Date
}

export function TimeTrackingCard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isWorking, setIsWorking] = useState(false)
  const [isOnBreak, setIsOnBreak] = useState(false)
  const [todayEntries, setTodayEntries] = useState<TimeEntry[]>([
    { type: "clock-in", time: "08:30", timestamp: new Date() },
  ])
  const [workingTime, setWorkingTime] = useState("7h 23min")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleClockIn = () => {
    const now = new Date()
    setTodayEntries([
      ...todayEntries,
      {
        type: "clock-in",
        time: now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
        timestamp: now,
      },
    ])
    setIsWorking(true)
  }

  const handleClockOut = () => {
    const now = new Date()
    setTodayEntries([
      ...todayEntries,
      {
        type: "clock-out",
        time: now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
        timestamp: now,
      },
    ])
    setIsWorking(false)
    setIsOnBreak(false)
  }

  const handleBreakToggle = () => {
    const now = new Date()
    const breakType = isOnBreak ? "break-end" : "break-start"
    setTodayEntries([
      ...todayEntries,
      {
        type: breakType,
        time: now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
        timestamp: now,
      },
    ])
    setIsOnBreak(!isOnBreak)
  }

  const getStatusBadge = () => {
    if (!isWorking) return <Badge variant="secondary">Hors service</Badge>
    if (isOnBreak) return <Badge variant="outline">En pause</Badge>
    return <Badge className="bg-primary">En service</Badge>
  }

  const getActionButton = () => {
    if (!isWorking) {
      return (
        <Button onClick={handleClockIn} className="w-full" size="lg">
          <Play className="h-4 w-4 mr-2" />
          Pointer l'arrivée
        </Button>
      )
    }

    return (
      <div className="space-y-2">
        <Button onClick={handleBreakToggle} variant={isOnBreak ? "default" : "outline"} className="w-full">
          <Coffee className="h-4 w-4 mr-2" />
          {isOnBreak ? "Reprendre le travail" : "Prendre une pause"}
        </Button>
        <Button onClick={handleClockOut} variant="destructive" className="w-full">
          <Square className="h-4 w-4 mr-2" />
          Pointer la sortie
        </Button>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Pointage
            </CardTitle>
            <CardDescription>Gérez votre temps de travail</CardDescription>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Time */}
        <div className="text-center">
          <div className="text-3xl font-bold font-mono">{currentTime.toLocaleTimeString("fr-FR")}</div>
          <div className="text-sm text-muted-foreground">
            {currentTime.toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Working Time Today */}
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-sm text-muted-foreground">Temps travaillé aujourd'hui</div>
          <div className="text-2xl font-bold text-primary">{workingTime}</div>
        </div>

        {/* Action Buttons */}
        {getActionButton()}

        {/* Today's Entries */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Pointages d'aujourd'hui</h4>
          <div className="space-y-1">
            {todayEntries.map((entry, index) => (
              <div key={index} className="flex justify-between items-center text-sm p-2 bg-muted/50 rounded">
                <span className="capitalize">
                  {entry.type === "clock-in" && "Arrivée"}
                  {entry.type === "clock-out" && "Sortie"}
                  {entry.type === "break-start" && "Début pause"}
                  {entry.type === "break-end" && "Fin pause"}
                </span>
                <span className="font-mono">{entry.time}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
