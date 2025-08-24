"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Send } from "lucide-react"

export function RecentPayslips() {
  const recentPayslips = [
    {
      id: "BS-2024-001",
      employee: "Marie Dubois",
      department: "Développement",
      period: "Janvier 2024",
      amount: 3850,
      status: "Envoyé",
      date: "2024-01-31",
    },
    {
      id: "BS-2024-002",
      employee: "Pierre Martin",
      department: "Marketing",
      period: "Janvier 2024",
      amount: 3200,
      status: "Généré",
      date: "2024-01-31",
    },
    {
      id: "BS-2024-003",
      employee: "Sophie Laurent",
      department: "Ventes",
      period: "Janvier 2024",
      amount: 4100,
      status: "En attente",
      date: "2024-01-31",
    },
    {
      id: "BS-2024-004",
      employee: "Thomas Rousseau",
      department: "RH",
      period: "Janvier 2024",
      amount: 3600,
      status: "Envoyé",
      date: "2024-01-31",
    },
    {
      id: "BS-2024-005",
      employee: "Julie Moreau",
      department: "Administration",
      period: "Janvier 2024",
      amount: 2900,
      status: "Généré",
      date: "2024-01-31",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Envoyé":
        return "default"
      case "Généré":
        return "secondary"
      case "En attente":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Bulletins Récents
        </CardTitle>
        <CardDescription>Derniers bulletins de paie traités</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPayslips.map((payslip) => (
            <div key={payslip.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{payslip.employee}</span>
                  <Badge variant="outline" className="text-xs">
                    {payslip.department}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {payslip.period} • {payslip.amount.toLocaleString()}€
                </div>
                <div className="text-xs text-muted-foreground">Réf: {payslip.id}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getStatusColor(payslip.status)}>{payslip.status}</Badge>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                  {payslip.status === "Généré" && (
                    <Button size="sm" variant="ghost">
                      <Send className="h-4 w-4" />
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
