"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { History, Eye, X } from "lucide-react"

interface LeaveRequest {
  id: string
  type: string
  startDate: string
  endDate: string
  days: number
  status: "pending" | "approved" | "rejected"
  reason?: string
  submittedDate: string
  reviewedBy?: string
  reviewDate?: string
}

const mockRequests: LeaveRequest[] = [
  {
    id: "1",
    type: "Congés payés",
    startDate: "2024-04-15",
    endDate: "2024-04-19",
    days: 5,
    status: "pending",
    reason: "Vacances en famille",
    submittedDate: "2024-03-15",
  },
  {
    id: "2",
    type: "Congé personnel",
    startDate: "2024-03-20",
    endDate: "2024-03-20",
    days: 1,
    status: "approved",
    reason: "Rendez-vous médical",
    submittedDate: "2024-03-10",
    reviewedBy: "Marie Martin",
    reviewDate: "2024-03-12",
  },
  {
    id: "3",
    type: "Arrêt maladie",
    startDate: "2024-02-28",
    endDate: "2024-03-01",
    days: 2,
    status: "approved",
    submittedDate: "2024-02-28",
    reviewedBy: "Marie Martin",
    reviewDate: "2024-02-28",
  },
]

export function MyLeaveRequests() {
  const getStatusBadge = (status: LeaveRequest["status"]) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-primary">Approuvée</Badge>
      case "rejected":
        return <Badge variant="destructive">Refusée</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            En attente
          </Badge>
        )
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <History className="h-5 w-5" />
          Mes Demandes
        </CardTitle>
        <CardDescription>Historique de vos demandes de congés</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRequests.map((request) => (
            <div key={request.id} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{request.type}</h4>
                  <p className="text-sm text-muted-foreground">
                    Du {new Date(request.startDate).toLocaleDateString("fr-FR")} au{" "}
                    {new Date(request.endDate).toLocaleDateString("fr-FR")} ({request.days} jour
                    {request.days > 1 ? "s" : ""})
                  </p>
                </div>
                {getStatusBadge(request.status)}
              </div>

              {request.reason && (
                <p className="text-sm bg-muted p-2 rounded">
                  <strong>Motif:</strong> {request.reason}
                </p>
              )}

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Soumise le {new Date(request.submittedDate).toLocaleDateString("fr-FR")}</span>
                {request.reviewedBy && (
                  <span>
                    Traitée par {request.reviewedBy} le{" "}
                    {request.reviewDate && new Date(request.reviewDate).toLocaleDateString("fr-FR")}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Détails
                </Button>
                {request.status === "pending" && (
                  <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                    <X className="h-4 w-4 mr-2" />
                    Annuler
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
