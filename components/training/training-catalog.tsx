"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Users, Calendar, Clock, Eye } from "lucide-react"
import { FileText } from "lucide-react" // Import FileText component

interface Training {
  id: string
  title: string
  description: string
  category: string
  duration: string
  startDate: string
  endDate: string
  instructor: string
  maxParticipants: number
  currentParticipants: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  level: "beginner" | "intermediate" | "advanced"
}

const mockTrainings: Training[] = [
  {
    id: "1",
    title: "Sécurité Informatique",
    description: "Formation sur les bonnes pratiques de sécurité informatique en entreprise",
    category: "IT",
    duration: "2 jours",
    startDate: "2024-04-15",
    endDate: "2024-04-16",
    instructor: "Marc Dubois",
    maxParticipants: 20,
    currentParticipants: 15,
    status: "upcoming",
    level: "intermediate",
  },
  {
    id: "2",
    title: "Management d'Équipe",
    description: "Développer ses compétences en leadership et gestion d'équipe",
    category: "Management",
    duration: "3 jours",
    startDate: "2024-04-20",
    endDate: "2024-04-22",
    instructor: "Sophie Martin",
    maxParticipants: 15,
    currentParticipants: 12,
    status: "upcoming",
    level: "advanced",
  },
  {
    id: "3",
    title: "Excel Avancé",
    description: "Maîtriser les fonctions avancées d'Excel pour l'analyse de données",
    category: "Bureautique",
    duration: "1 jour",
    startDate: "2024-03-25",
    endDate: "2024-03-25",
    instructor: "Pierre Durand",
    maxParticipants: 25,
    currentParticipants: 22,
    status: "ongoing",
    level: "intermediate",
  },
  {
    id: "4",
    title: "Communication Interpersonnelle",
    description: "Améliorer ses compétences en communication et relations interpersonnelles",
    category: "Soft Skills",
    duration: "2 jours",
    startDate: "2024-05-10",
    endDate: "2024-05-11",
    instructor: "Anne Moreau",
    maxParticipants: 18,
    currentParticipants: 8,
    status: "upcoming",
    level: "beginner",
  },
]

export function TrainingCatalog() {
  const getStatusBadge = (status: Training["status"]) => {
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
      case "cancelled":
        return <Badge variant="destructive">Annulée</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

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

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Catalogue des Formations
            </CardTitle>
            <CardDescription>Gérez les sessions de formation</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrer
            </Button>
            <Button size="sm" asChild>
              <a href="/training/new">
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle Formation
              </a>
            </Button>
          </div>
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
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="soft-skills">Soft Skills</SelectItem>
                <SelectItem value="bureautique">Bureautique</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="upcoming">À venir</SelectItem>
                <SelectItem value="ongoing">En cours</SelectItem>
                <SelectItem value="completed">Terminées</SelectItem>
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
                      {getStatusBadge(training.status)}
                      {getLevelBadge(training.level)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{training.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(training.startDate).toLocaleDateString("fr-FR")}
                        {training.startDate !== training.endDate &&
                          ` - ${new Date(training.endDate).toLocaleDateString("fr-FR")}`}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {training.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {training.currentParticipants}/{training.maxParticipants} participants
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium">Formateur:</span> {training.instructor}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Détails
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Participants
                    </Button>
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
