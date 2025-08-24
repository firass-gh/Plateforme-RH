"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Eye, Edit, Pause, Play, X, Briefcase } from "lucide-react"

interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: "cdi" | "cdd" | "stage" | "freelance"
  salary: string
  applications: number
  views: number
  postedDate: string
  expiryDate: string
  status: "active" | "paused" | "closed"
}

const mockJobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Développeur Frontend React",
    department: "IT",
    location: "Paris",
    type: "cdi",
    salary: "45-55k€",
    applications: 23,
    views: 156,
    postedDate: "2024-03-10",
    expiryDate: "2024-04-10",
    status: "active",
  },
  {
    id: "2",
    title: "Chef de Projet Marketing",
    department: "Marketing",
    location: "Lyon",
    type: "cdi",
    salary: "50-60k€",
    applications: 15,
    views: 89,
    postedDate: "2024-03-08",
    expiryDate: "2024-04-08",
    status: "active",
  },
  {
    id: "3",
    title: "Développeur Backend Node.js",
    department: "IT",
    location: "Remote",
    type: "cdi",
    salary: "50-65k€",
    applications: 31,
    views: 203,
    postedDate: "2024-02-28",
    expiryDate: "2024-03-28",
    status: "paused",
  },
  {
    id: "4",
    title: "Stagiaire Comptabilité",
    department: "Finance",
    location: "Paris",
    type: "stage",
    salary: "600€/mois",
    applications: 8,
    views: 45,
    postedDate: "2024-03-12",
    expiryDate: "2024-04-12",
    status: "active",
  },
  {
    id: "5",
    title: "Responsable RH",
    department: "RH",
    location: "Marseille",
    type: "cdi",
    salary: "55-65k€",
    applications: 12,
    views: 67,
    postedDate: "2024-02-15",
    expiryDate: "2024-03-15",
    status: "closed",
  },
]

export function JobPostingsManager() {
  const getTypeBadge = (type: JobPosting["type"]) => {
    switch (type) {
      case "cdi":
        return <Badge className="bg-primary">CDI</Badge>
      case "cdd":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            CDD
          </Badge>
        )
      case "stage":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            Stage
          </Badge>
        )
      case "freelance":
        return <Badge variant="secondary">Freelance</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  const getStatusBadge = (status: JobPosting["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary">Active</Badge>
      case "paused":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            En pause
          </Badge>
        )
      case "closed":
        return <Badge variant="secondary">Fermée</Badge>
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
              <Briefcase className="h-5 w-5" />
              Gestion des Offres d'Emploi
            </CardTitle>
            <CardDescription>Créez et gérez vos offres d'emploi</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrer
            </Button>
            <Button size="sm" asChild>
              <a href="/recruitment/jobs/new">
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle Offre
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
              <Input placeholder="Rechercher une offre..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Département" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="hr">RH</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">En pause</SelectItem>
                <SelectItem value="closed">Fermée</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Postings List */}
          <div className="space-y-4">
            {mockJobPostings.map((job) => (
              <div key={job.id} className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{job.title}</h4>
                      {getTypeBadge(job.type)}
                      {getStatusBadge(job.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span>{job.location}</span>
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{job.applications} candidatures</span>
                    <span>{job.views} vues</span>
                    <span>Expire le {new Date(job.expiryDate).toLocaleDateString("fr-FR")}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier
                    </Button>
                    {job.status === "active" ? (
                      <Button variant="outline" size="sm">
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </Button>
                    ) : job.status === "paused" ? (
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Activer
                      </Button>
                    ) : null}
                    <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                      <X className="h-4 w-4 mr-2" />
                      Fermer
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-muted-foreground">Affichage de 1 à 5 sur 12 offres</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Précédent
              </Button>
              <Button variant="outline" size="sm">
                Suivant
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
