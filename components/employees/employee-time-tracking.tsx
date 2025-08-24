import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Calendar } from "lucide-react"

interface EmployeeTimeTrackingProps {
  employeeId: string
}

export function EmployeeTimeTracking({ employeeId }: EmployeeTimeTrackingProps) {
  // Mock data - in real app, fetch based on employeeId
  const timeData = {
    monthlyHours: 152,
    targetHours: 160,
    attendanceRate: 98,
    punctualityRate: 94,
    recentEntries: [
      { date: "2024-03-15", clockIn: "08:30", clockOut: "17:30", total: "8h 00min", status: "present" },
      { date: "2024-03-14", clockIn: "08:45", clockOut: "17:30", total: "7h 45min", status: "late" },
      { date: "2024-03-13", clockIn: "08:30", clockOut: "16:30", total: "7h 00min", status: "partial" },
      { date: "2024-03-12", clockIn: "-", clockOut: "-", total: "0h 00min", status: "absent" },
      { date: "2024-03-11", clockIn: "08:30", clockOut: "17:30", total: "8h 00min", status: "present" },
    ],
  }

  const getStatusBadge = (status: string) => {
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
        <CardTitle className="font-serif flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Suivi du Temps
        </CardTitle>
        <CardDescription>Historique et statistiques de présence</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">{timeData.monthlyHours}h</div>
            <div className="text-sm text-muted-foreground">Ce mois</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold">{timeData.attendanceRate}%</div>
            <div className="text-sm text-muted-foreground">Assiduité</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold">{timeData.punctualityRate}%</div>
            <div className="text-sm text-muted-foreground">Ponctualité</div>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Objectif mensuel</span>
            <span className="text-sm text-muted-foreground">
              {timeData.monthlyHours}h / {timeData.targetHours}h
            </span>
          </div>
          <Progress value={(timeData.monthlyHours / timeData.targetHours) * 100} className="h-2" />
        </div>

        {/* Recent Entries */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Pointages récents
          </h4>
          <div className="space-y-2">
            {timeData.recentEntries.map((entry, index) => (
              <div key={index} className="flex items-center justify-between text-sm p-2 bg-muted/50 rounded">
                <div className="flex items-center gap-3">
                  <span className="font-medium">
                    {new Date(entry.date).toLocaleDateString("fr-FR", {
                      weekday: "short",
                      day: "2-digit",
                      month: "2-digit",
                    })}
                  </span>
                  <span className="font-mono text-xs">{entry.clockIn}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="font-mono text-xs">{entry.clockOut}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs">{entry.total}</span>
                  {getStatusBadge(entry.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
