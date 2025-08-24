import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, Award, X } from "lucide-react"

interface MyTraining {
  id: string
  title: string
  category: string
  startDate: string
  duration: string
  instructor: string
  status: "upcoming" | "ongoing" | "completed"
  progress?: number
  certificateAvailable?: boolean
}

const mockMyTrainings: MyTraining[] = [
  {
    id: "1",
    title: "Communication Interpersonnelle",
    category: "Soft Skills",
    startDate: "2024-05-10",
    duration: "2 jours",
    instructor: "Anne Moreau",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Excel Avancé",
    category: "Bureautique",
    startDate: "2024-03-25",
    duration: "1 jour",
    instructor: "Pierre Durand",
    status: "ongoing",
    progress: 65,
  },
  {
    id: "3",
    title: "Gestion du Temps",
    category: "Soft Skills",
    startDate: "2024-02-15",
    duration: "1 jour",
    instructor: "Sophie Martin",
    status: "completed",
    progress: 100,
    certificateAvailable: true,
  },
]

export function MyTrainings() {
  const getStatusBadge = (status: MyTraining["status"]) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            À venir
          </Badge>
        )
      case "ongoing":
        return <Badge className="bg-primary">En cours</Badge>
      case "completed":
        return <Badge variant="secondary">Terminée</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Mes Formations
        </CardTitle>
        <CardDescription>Formations auxquelles vous êtes inscrit</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockMyTrainings.map((training) => (
            <div key={training.id} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{training.title}</h4>
                    {getStatusBadge(training.status)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(training.startDate).toLocaleDateString("fr-FR")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {training.duration}
                    </div>
                    <span>Formateur: {training.instructor}</span>
                  </div>
                </div>
              </div>

              {training.progress !== undefined && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Progression</span>
                    <span>{training.progress}%</span>
                  </div>
                  <Progress value={training.progress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">{training.category}</div>
                <div className="flex gap-2">
                  {training.certificateAvailable && (
                    <Button variant="outline" size="sm">
                      <Award className="h-4 w-4 mr-2" />
                      Certificat
                    </Button>
                  )}
                  {training.status === "upcoming" && (
                    <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                      <X className="h-4 w-4 mr-2" />
                      Se désinscrire
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
