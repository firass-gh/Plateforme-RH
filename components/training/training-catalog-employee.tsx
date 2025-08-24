"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, Clock, Users, UserPlus } from "lucide-react"

interface Training {
  id: string
  title: string
  description: string
  category: string
  duration: string
  startDate: string
  instructor: string
  maxParticipants: number
  currentParticipants: number
  level: "beginner" | "intermediate" | "advanced"
  isRegistered: boolean
}

const mockTrainings: Training[] = [
  {
    id: "1",
    title: "Sécurité Informatique",
    description: "Formation sur les bonnes pratiques de sécurité informatique en entreprise",
    category: "IT",
    duration: "2 jours",
    startDate: "2024-04-15",
    instructor: "Marc Dubois",
    maxParticipants: 20,
    currentParticipants: 15,
    level: "intermediate",
    isRegistered: false,
  },
  {
    id: "2",
    title: "Communication Interpersonnelle",
    description: "Améliorer ses compétences en communication et relations interpersonnelles",
    category: "Soft Skills",
    duration: "2 jours",
    startDate: "2024-05-10",
    instructor: "Anne Moreau",
    maxParticipants: 18,
    currentParticipants: 8,
    level: "beginner",
    isRegistered: true,
  },
  {
    id: "3",
    title: "Excel Avancé",
    description: "Maîtriser les fonctions avancées d'Excel pour l'analyse de données",
    category: "Bureautique",
    duration: "1 jour",
    startDate: "2024-04-25",
    instructor: "Pierre Durand",
    maxParticipants: 25,
    currentParticipants: 18,
    level: "intermediate",
    isRegistered: false,
  },
]

export function TrainingCatalogEmployee() {
  const getLevelBadge = (level: Training["level"]) => {
    switch (level) {
      case "beginner":
        return (
          <Badge variant="outline" className="border-green-500 text-green-600">
            Débutant
          </Badge>
        )
      case "intermediate":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            Intermédiaire
          </Badge>
        )
      case "advanced":
        return (
          <Badge variant="outline" className="border-red-500 text-red-600">
            Avancé
          </Badge>
        )
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  const handleRegister = (trainingId: string) => {
    console.log("Registering for training:", trainingId)
    // Handle registration logic
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif">Formations Disponibles</CardTitle>
            <CardDescription>Inscrivez-vous aux formations qui vous intéressent</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrer
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher une formation..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="soft-skills">Soft Skills</SelectItem>
                <SelectItem value="bureautique">Bureautique</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Training List */}
          <div className="space-y-4">
            {mockTrainings.map((training) => (
              <div key={training.id} className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{training.title}</h4>
                      {getLevelBadge(training.level)}
                      {training.isRegistered && <Badge className="bg-primary">Inscrit</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{training.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(training.startDate).toLocaleDateString("fr-FR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {training.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {training.currentParticipants}/{training.maxParticipants} places
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium">Formateur:</span> {training.instructor}
                  </div>
                  <div className="flex gap-2">
                    {training.isRegistered ? (
                      <Button variant="outline" size="sm" disabled>
                        Déjà inscrit
                      </Button>
                    ) : (
                      <Button size="sm" onClick={() => handleRegister(training.id)}>
                        <UserPlus className="h-4 w-4 mr-2" />
                        S'inscrire
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
