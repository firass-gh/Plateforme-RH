"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileText, Download, Eye, Search } from "lucide-react"

export function MyPayslips() {
  const myPayslips = [
    {
      id: "BS-2024-001",
      period: "Janvier 2024",
      grossSalary: 4200,
      netSalary: 3285,
      date: "2024-01-31",
      status: "Disponible",
    },
    {
      id: "BS-2023-012",
      period: "Décembre 2023",
      grossSalary: 4200,
      netSalary: 3285,
      date: "2023-12-31",
      status: "Disponible",
    },
    {
      id: "BS-2023-011",
      period: "Novembre 2023",
      grossSalary: 4200,
      netSalary: 3285,
      date: "2023-11-30",
      status: "Disponible",
    },
    {
      id: "BS-2023-010",
      period: "Octobre 2023",
      grossSalary: 4200,
      netSalary: 3285,
      date: "2023-10-31",
      status: "Disponible",
    },
    {
      id: "BS-2023-009",
      period: "Septembre 2023",
      grossSalary: 4200,
      netSalary: 3285,
      date: "2023-09-30",
      status: "Disponible",
    },
    {
      id: "BS-2023-008",
      period: "Août 2023",
      grossSalary: 4200,
      netSalary: 3285,
      date: "2023-08-31",
      status: "Disponible",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Mes Bulletins de Paie
        </CardTitle>
        <CardDescription>Historique de vos bulletins de paie</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher par période..." className="pl-10" />
          </div>

          {/* Payslips List */}
          <div className="space-y-3">
            {myPayslips.map((payslip) => (
              <div
                key={payslip.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="font-medium">{payslip.period}</div>
                  <div className="text-sm text-muted-foreground">
                    Brut: {payslip.grossSalary.toLocaleString()}€ • Net: {payslip.netSalary.toLocaleString()}€
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Réf: {payslip.id} • {new Date(payslip.date).toLocaleDateString("fr-FR")}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">{payslip.status}</Badge>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
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
