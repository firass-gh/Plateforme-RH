"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Users } from "lucide-react"

interface Candidate {
  id: string
  name: string
  email: string
  phone: string
  jobTitle: string
  appliedDate: string
  status: "new" | "screening" | "interview" | "offer" | "hired" | "rejected"
  experience: string
  location: string
  salary: string
  avatar?: string
  notes?: string
}

const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Alice Dubois",
    email: "alice.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    jobTitle: "Développeur Frontend React",
    appliedDate: "2024-03-15",
    status: "new",
    experience: "3 ans",
    location: "Paris",
    salary: "50k€",
  },
  {
    id: "2",
    name: "Thomas Martin",
    email: "thomas.martin@email.com",
    phone: "+33 6 23 45 67 89",
    jobTitle: "Chef de Projet Marketing",
    appliedDate: "2024-03-14",
    status: "screening",
    experience: "5 ans",
    location: "Lyon",
    salary: "55k€",
  },
  {
    id: "3",
    name: "Sarah Leroy",
    email: "sarah.leroy@email.com",
    phone: "+33 6 34 56 78 90",
    jobTitle: "Développeur Frontend React",
    appliedDate: "2024-03-13",
    status: "interview",
    experience: "2 ans",
    location: "Remote",
    salary: "45k€",
    notes: "Entretien prévu le 20/03 à 14h",
  },
  {
    id: "4",
    name: "Pierre Durand",
    email: "pierre.durand@email.com",
    phone: "+33 6 45 67 89 01",
    jobTitle: "Stagiaire Comptabilité",
    appliedDate: "2024-03-12",
    status: "offer",
    experience: "Étudiant",
    location: "Paris",
    salary: "600€/mois",
  },
  {
    id: "5",
    name: "Marie Moreau",
    email: "marie.moreau@email.com",
    phone: "+33 6 56 78 90 12",
    jobTitle: "Chef de Projet Marketing",
    appliedDate: "2024-03-11",
    status: "hired",
    experience: "4 ans",
    location: "Lyon",
    salary: "58k€",
  },
]

export function CandidateManager() {
  const getStatusBadge = (status: Candidate["status"]) => {
    switch (status) {
      case "new":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            Nouveau
          </Badge>
        )
      case "screening":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            Présélection
          </Badge>
        )
      case "interview":
        return <Badge className="bg-primary">Entretien</Badge>
      case "offer":
        return (
          <Badge variant="outline" className="border-green-500 text-green-600">
            Offre
          </Badge>
        )
      case "hired":
        return <Badge className="bg-green-600">Embauché</Badge>
      case "rejected":
        return <Badge variant="destructive">Refusé</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const handleStatusChange = (candidateId: string, newStatus: string) => {
    console.log("Changing status for candidate:", candidateId, "to:", newStatus)
    // Handle status change logic
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <Users className="h-5 w-5" />
              Gestion des Candidats
            </CardTitle>
            <CardDescription>Suivez et gérez toutes les candidatures</CardDescription>
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
              <Input placeholder="Rechercher un candidat..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Poste" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les postes</SelectItem>
                <SelectItem value="dev-frontend">Développeur Frontend</SelectItem>
                <SelectItem value="chef-projet">Chef de Projet</SelectItem>
                <SelectItem value="stagiaire">Stagiaire</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="new">Nouveau</SelectItem>
                <SelectItem value="screening">Présélection</SelectItem>
                <SelectItem value="interview">Entretien</SelectItem>
                <SelectItem value="offer">Offre</SelectItem>
                <SelectItem value="hired">Embauché</SelectItem>
                <SelectItem value="rejected">Refusé</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Candidates List */}
          <div className="space-y-4">
            {mockCandidates.map((candidate) => (
              <div key={candidate.id} className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{getInitials(candidate.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{candidate.name}</h4>
                      <p className="text-sm text-muted-foreground">{candidate.email}</p>
                      <p className="text-sm text-muted-foreground">{candidate.phone}</p>
                    </div>
                  </div>
                  {getStatusBadge(candidate.status)}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm">
                      <strong>Poste:</strong> {candidate.jobTitle}
                    </p>
                    <p className="text-sm">
                      <strong>Expérience:</strong> {candidate.experience}
                    </p>
                    <p className="text-sm">
                      <strong>Localisation:</strong> {candidate.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      <strong>Salaire souhaité:</strong> {candidate.salary}
                    </p>
                    <p className="text-sm">
                      <strong>Candidature:</strong> {new Date(candidate.appliedDate).toLocaleDateString("fr-FR")}
                    </p>
                    {candidate.notes && (
                      <p className="text-sm">
                        <strong>Notes:</strong> {candidate.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Voir CV
                    </Button>
                    <Button variant="outline" size="sm">
                      Contacter
                    </Button>
                  </div>
                  <Select onValueChange={(value) => handleStatusChange(candidate.id, value)}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Changer statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="screening">Présélection</SelectItem>
                      <SelectItem value="interview">Entretien</SelectItem>
                      <SelectItem value="offer">Offre</SelectItem>
                      <SelectItem value="hired">Embaucher</SelectItem>
                      <SelectItem value="rejected">Refuser</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
