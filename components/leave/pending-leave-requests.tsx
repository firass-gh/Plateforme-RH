"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Check, X, Eye } from "lucide-react"

interface PendingRequest {
  id: string
  employeeName: string
  department: string
  type: string
  startDate: string
  endDate: string
  days: number
  reason?: string
  submittedDate: string
  urgency: "low" | "medium" | "high"
}

const mockPendingRequests: PendingRequest[] = [
  {
    id: "1",
    employeeName: "Jean Dupont",
    department: "IT",
    type: "Congés payés",
    startDate: "2024-04-15",
    endDate: "2024-04-19",
    days: 5,
    reason: "Vacances en famille",
    submittedDate: "2024-03-15",
    urgency: "medium",
  },
  {
    id: "2",
    employeeName: "Sophie Dubois",
    department: "Marketing",
    type: "Arrêt maladie",
    startDate: "2024-03-18",
    endDate: "2024-03-18",
    days: 1,
    submittedDate: "2024-03-18",
    urgency: "high",
  },
  {
    id: "3",
    employeeName: "Pierre Durand",
    department: "Finance",
    type: "Congé personnel",
    startDate: "2024-04-02",
    endDate: "2024-04-02",
    days: 1,
    reason: "Rendez-vous médical",
    submittedDate: "2024-03-16",
    urgency: "low",
  },
]

export function PendingLeaveRequests() {
  const getUrgencyBadge = (urgency: PendingRequest["urgency"]) => {
    switch (urgency) {
      case "high":
        return <Badge variant="destructive">Urgent</Badge>
      case "medium":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            Moyen
          </Badge>
        )
      case "low":
        return <Badge variant="secondary">Faible</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  const handleApprove = (id: string) => {
    console.log("Approving request:", id)
    // Handle approval logic
  }

  const handleReject = (id: string) => {
    console.log("Rejecting request:", id)
    // Handle rejection logic
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Demandes en Attente
        </CardTitle>
        <CardDescription>Demandes nécessitant votre approbation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPendingRequests.map((request) => (
            <div key={request.id} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{request.employeeName}</h4>
                  <p className="text-sm text-muted-foreground">{request.department}</p>
                </div>
                {getUrgencyBadge(request.urgency)}
              </div>

              <div className="space-y-1">
                <p className="text-sm">
                  <strong>{request.type}</strong> - {request.days} jour{request.days > 1 ? "s" : ""}
                </p>
                <p className="text-sm text-muted-foreground">
                  Du {new Date(request.startDate).toLocaleDateString("fr-FR")} au{" "}
                  {new Date(request.endDate).toLocaleDateString("fr-FR")}
                </p>
              </div>

              {request.reason && (
                <p className="text-sm bg-muted p-2 rounded">
                  <strong>Motif:</strong> {request.reason}
                </p>
              )}

              <div className="text-xs text-muted-foreground">
                Soumise le {new Date(request.submittedDate).toLocaleDateString("fr-FR")}
              </div>

              <div className="flex gap-2">
                <Button size="sm" onClick={() => handleApprove(request.id)}>
                  <Check className="h-4 w-4 mr-2" />
                  Approuver
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleReject(request.id)}>
                  <X className="h-4 w-4 mr-2" />
                  Refuser
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Détails
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
