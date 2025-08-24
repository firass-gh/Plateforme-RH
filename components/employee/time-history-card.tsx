"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download, Filter } from "lucide-react"

interface DayRecord {
  date: string
  clockIn: string
  clockOut: string
  totalHours: string
  status: "present" | "absent" | "late" | "partial"
}

const mockData: DayRecord[] = [
  { date: "2024-03-15", clockIn: "08:30", clockOut: "17:30", totalHours: "8h 00min", status: "present" },
  { date: "2024-03-14", clockIn: "08:45", clockOut: "17:30", totalHours: "7h 45min", status: "late" },
  { date: "2024-03-13", clockIn: "08:30", clockOut: "16:30", totalHours: "7h 00min", status: "partial" },
  { date: "2024-03-12", clockIn: "-", clockOut: "-", totalHours: "0h 00min", status: "absent" },
  { date: "2024-03-11", clockIn: "08:30", clockOut: "17:30", totalHours: "8h 00min", status: "present" },
  { date: "2024-03-08", clockIn: "08:30", clockOut: "17:30", totalHours: "8h 00min", status: "present" },
  { date: "2024-03-07", clockIn: "08:35", clockOut: "17:30", totalHours: "7h 55min", status: "late" },
]

export function TimeHistoryCard() {
  const getStatusBadge = (status: DayRecord["status"]) => {
    switch (status) {
      case "present":
        return <Badge className="bg-primary">Présent</Badge>
      case "late":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            Retard
          </Badge>
        )
      case "partial":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            Partiel
          </Badge>
        )
      case "absent":
        return <Badge variant="destructive">Absent</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Historique des pointages
            </CardTitle>
            <CardDescription>Consultez vos heures de travail</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrer
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Summary */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">152h</div>
              <div className="text-sm text-muted-foreground">Ce mois</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">19</div>
              <div className="text-sm text-muted-foreground">Jours travaillés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Assiduité</div>
            </div>
          </div>

          {/* History Table */}
          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
              <div>Date</div>
              <div>Arrivée</div>
              <div>Sortie</div>
              <div>Total</div>
              <div>Statut</div>
            </div>

            {mockData.map((record, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 text-sm py-2 border-b border-border/50">
                <div className="font-medium">
                  {new Date(record.date).toLocaleDateString("fr-FR", {
                    weekday: "short",
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </div>
                <div className="font-mono">{record.clockIn}</div>
                <div className="font-mono">{record.clockOut}</div>
                <div className="font-mono font-medium">{record.totalHours}</div>
                <div>{getStatusBadge(record.status)}</div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center pt-4">
            <Button variant="outline">Voir plus d'historique</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
