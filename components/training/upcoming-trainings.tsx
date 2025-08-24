import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Eye } from "lucide-react"

interface UpcomingTraining {
  id: string
  title: string
  date: string
  time: string
  participants: number
  maxParticipants: number
  status: "confirmed" | "pending" | "cancelled"
}

const mockUpcomingTrainings: UpcomingTraining[] = [
  {
    id: "1",
    title: "Sécurité Informatique",
    date: "2024-04-15",
    time: "09:00",
    participants: 15,
    maxParticipants: 20,
    status: "confirmed",
  },
  {
    id: "2",
    title: "Management d'Équipe",
    date: "2024-04-20",
    time: "14:00",
    participants: 12,
    maxParticipants: 15,
    status: "confirmed",
  },
  {
    id: "3",
    title: "Communication Interpersonnelle",
    date: "2024-05-10",
    time: "10:00",
    participants: 8,
    maxParticipants: 18,
    status: "pending",
  },
]

export function UpcomingTrainings() {
  const getStatusBadge = (status: UpcomingTraining["status"]) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-primary">Confirmée</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            En attente
          </Badge>
        )
      case "cancelled":
        return <Badge variant="destructive">Annulée</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Prochaines Sessions
        </CardTitle>
        <CardDescription>Sessions à venir</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockUpcomingTrainings.map((training) => (
            <div key={training.id} className="border border-border rounded-lg p-3 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-sm">{training.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(training.date).toLocaleDateString("fr-FR")}
                    <Clock className="h-3 w-3 ml-2" />
                    {training.time}
                  </div>
                </div>
                {getStatusBadge(training.status)}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  {training.participants}/{training.maxParticipants}
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="h-3 w-3 mr-1" />
                  Voir
                </Button>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full bg-transparent" size="sm">
            Voir toutes les sessions
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
