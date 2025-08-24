"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface LeaveEvent {
  id: string
  employeeName: string
  type: string
  startDate: string
  endDate: string
  status: "approved" | "pending"
}

const mockLeaveEvents: LeaveEvent[] = [
  {
    id: "1",
    employeeName: "Jean Dupont",
    type: "Congés payés",
    startDate: "2024-03-20",
    endDate: "2024-03-22",
    status: "approved",
  },
  {
    id: "2",
    employeeName: "Marie Martin",
    type: "RTT",
    startDate: "2024-03-25",
    endDate: "2024-03-25",
    status: "approved",
  },
  {
    id: "3",
    employeeName: "Sophie Dubois",
    type: "Congé personnel",
    startDate: "2024-03-28",
    endDate: "2024-03-29",
    status: "pending",
  },
]

export function LeaveCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const isLeaveDay = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return mockLeaveEvents.some((event) => {
      const start = new Date(event.startDate)
      const end = new Date(event.endDate)
      return checkDate >= start && checkDate <= end
    })
  }

  const getLeaveForDay = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return mockLeaveEvents.filter((event) => {
      const start = new Date(event.startDate)
      const end = new Date(event.endDate)
      return checkDate >= start && checkDate <= end
    })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + (direction === "next" ? 1 : -1), 1))
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }, (_, i) => i)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Calendrier des Congés
            </CardTitle>
            <CardDescription>Vue d'ensemble des absences</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[120px] text-center">
              {currentDate.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
            </span>
            <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Day headers */}
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
              <div key={day} className="p-2 text-center text-xs font-medium text-muted-foreground">
                {day}
              </div>
            ))}

            {/* Empty days */}
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} className="p-2"></div>
            ))}

            {/* Calendar days */}
            {days.map((day) => {
              const hasLeave = isLeaveDay(day)
              const leaves = getLeaveForDay(day)
              const isToday =
                day === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear()

              return (
                <div
                  key={day}
                  className={`p-1 text-center text-sm border rounded ${
                    isToday ? "border-primary bg-primary/10" : "border-border"
                  } ${hasLeave ? "bg-accent/20" : ""}`}
                >
                  <div className="font-medium">{day}</div>
                  {leaves.length > 0 && (
                    <div className="mt-1">
                      {leaves.slice(0, 2).map((leave, index) => (
                        <div
                          key={`${leave.id}-${index}`}
                          className={`text-xs px-1 py-0.5 rounded mb-0.5 ${
                            leave.status === "approved"
                              ? "bg-primary text-primary-foreground"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {leave.employeeName.split(" ")[0]}
                        </div>
                      ))}
                      {leaves.length > 2 && <div className="text-xs text-muted-foreground">+{leaves.length - 2}</div>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span>Congé approuvé</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded"></div>
              <span>En attente</span>
            </div>
          </div>

          {/* Upcoming leaves */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Prochains congés</h4>
            {mockLeaveEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center justify-between text-sm p-2 bg-muted rounded">
                <div>
                  <span className="font-medium">{event.employeeName}</span>
                  <span className="text-muted-foreground ml-2">{event.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs">
                    {new Date(event.startDate).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" })}
                  </span>
                  <Badge variant={event.status === "approved" ? "default" : "outline"} className="text-xs">
                    {event.status === "approved" ? "Approuvé" : "En attente"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
