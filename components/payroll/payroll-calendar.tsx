"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, AlertTriangle } from "lucide-react"

export function PayrollCalendar() {
  const upcomingEvents = [
    {
      date: "15 Fév",
      title: "Échéance cotisations URSSAF",
      type: "deadline",
      urgent: true,
    },
    {
      date: "20 Fév",
      title: "Calcul paie Février",
      type: "process",
      urgent: false,
    },
    {
      date: "28 Fév",
      title: "Envoi bulletins Février",
      type: "send",
      urgent: false,
    },
    {
      date: "05 Mar",
      title: "Déclaration sociale nominative",
      type: "declaration",
      urgent: true,
    },
    {
      date: "15 Mar",
      title: "Échéance cotisations URSSAF",
      type: "deadline",
      urgent: true,
    },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case "deadline":
        return AlertTriangle
      case "process":
        return Calendar
      case "send":
        return Clock
      case "declaration":
        return Calendar
      default:
        return Calendar
    }
  }

  const getEventColor = (type: string, urgent: boolean) => {
    if (urgent) return "destructive"
    switch (type) {
      case "deadline":
        return "destructive"
      case "process":
        return "default"
      case "send":
        return "secondary"
      case "declaration":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Calendrier Paie
        </CardTitle>
        <CardDescription>Échéances et événements à venir</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => {
            const IconComponent = getEventIcon(event.type)
            return (
              <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="text-center min-w-[60px]">
                  <div className="text-sm font-bold">{event.date.split(" ")[0]}</div>
                  <div className="text-xs text-muted-foreground">{event.date.split(" ")[1]}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4" />
                    <span className="font-medium text-sm">{event.title}</span>
                  </div>
                </div>
                <Badge variant={getEventColor(event.type, event.urgent)}>{event.urgent ? "Urgent" : "Planifié"}</Badge>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
