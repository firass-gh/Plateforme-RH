import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Plus, Eye, Users } from "lucide-react"

interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: "cdi" | "cdd" | "stage" | "freelance"
  applications: number
  postedDate: string
  status: "active" | "paused" | "closed"
}

const mockJobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Développeur Frontend React",
    department: "IT",
    location: "Paris",
    type: "cdi",
    applications: 23,
    postedDate: "2024-03-10",
    status: "active",
  },
  {
    id: "2",
    title: "Chef de Projet Marketing",
    department: "Marketing",
    location: "Lyon",
    type: "cdi",
    applications: 15,
    postedDate: "2024-03-08",
    status: "active",
  },
  {
    id: "3",
    title: "Stagiaire Comptabilité",
    department: "Finance",
    location: "Paris",
    type: "stage",
    applications: 8,
    postedDate: "2024-03-12",
    status: "active",
  },
]

export function ActiveJobPostings() {
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
              Offres Actives
            </CardTitle>
            <CardDescription>Postes ouverts au recrutement</CardDescription>
          </div>
          <Button size="sm" asChild>
            <a href="/recruitment/jobs/new">
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockJobPostings.map((job) => (
            <div key={job.id} className="border border-border rounded-lg p-3 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{job.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {job.department} • {job.location}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  {getTypeBadge(job.type)}
                  {getStatusBadge(job.status)}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  {job.applications} candidatures
                </div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3 mr-1" />
                    Voir
                  </Button>
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Publié le {new Date(job.postedDate).toLocaleDateString("fr-FR")}
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
            <a href="/recruitment/jobs">Voir toutes les offres</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
