"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Eye, MessageSquare, Calendar } from "lucide-react"

interface Application {
  id: string
  candidateName: string
  email: string
  jobTitle: string
  appliedDate: string
  status: "new" | "screening" | "interview" | "offer" | "hired" | "rejected"
  experience: string
  avatar?: string
}

const mockApplications: Application[] = [
  {
    id: "1",
    candidateName: "Alice Dubois",
    email: "alice.dubois@email.com",
    jobTitle: "Développeur Frontend React",
    appliedDate: "2024-03-15",
    status: "new",
    experience: "3 ans",
  },
  {
    id: "2",
    candidateName: "Thomas Martin",
    email: "thomas.martin@email.com",
    jobTitle: "Chef de Projet Marketing",
    appliedDate: "2024-03-14",
    status: "screening",
    experience: "5 ans",
  },
  {
    id: "3",
    candidateName: "Sarah Leroy",
    email: "sarah.leroy@email.com",
    jobTitle: "Développeur Frontend React",
    appliedDate: "2024-03-13",
    status: "interview",
    experience: "2 ans",
  },
  {
    id: "4",
    candidateName: "Pierre Durand",
    email: "pierre.durand@email.com",
    jobTitle: "Stagiaire Comptabilité",
    appliedDate: "2024-03-12",
    status: "offer",
    experience: "Étudiant",
  },
  {
    id: "5",
    candidateName: "Marie Moreau",
    email: "marie.moreau@email.com",
    jobTitle: "Chef de Projet Marketing",
    appliedDate: "2024-03-11",
    status: "hired",
    experience: "4 ans",
  },
]

export function RecentApplications() {
  const getStatusBadge = (status: Application["status"]) => {
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

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <Users className="h-5 w-5" />
              Candidatures Récentes
            </CardTitle>
            <CardDescription>Dernières candidatures reçues</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/recruitment/candidates">Voir toutes</a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockApplications.map((application) => (
            <div key={application.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={application.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{getInitials(application.candidateName)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-sm">{application.candidateName}</h4>
                  <p className="text-xs text-muted-foreground">{application.email}</p>
                  <p className="text-xs text-muted-foreground">{application.jobTitle}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-xs font-medium">{application.experience}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(application.appliedDate).toLocaleDateString("fr-FR")}
                  </p>
                </div>
                {getStatusBadge(application.status)}
                <div className="flex gap-1">
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3 mr-1" />
                    CV
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                  {application.status === "interview" && (
                    <Button variant="outline" size="sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      RDV
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
