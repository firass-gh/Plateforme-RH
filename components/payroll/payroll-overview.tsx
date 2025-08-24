"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calculator, Users, Euro, TrendingUp } from "lucide-react"

export function PayrollOverview() {
  const payrollStats = {
    totalEmployees: 156,
    processedPayslips: 142,
    pendingPayslips: 14,
    totalPayroll: 485750,
    averageSalary: 3114,
  }

  const processingProgress = Math.round((payrollStats.processedPayslips / payrollStats.totalEmployees) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Vue d'ensemble - Paie de Janvier 2024
        </CardTitle>
        <CardDescription>Statut du traitement de la paie mensuelle</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Progress Overview */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Progression du traitement</span>
              <Badge variant={processingProgress === 100 ? "default" : "secondary"}>
                {payrollStats.processedPayslips}/{payrollStats.totalEmployees}
              </Badge>
            </div>
            <Progress value={processingProgress} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {payrollStats.pendingPayslips} bulletins en attente de traitement
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{payrollStats.totalEmployees}</div>
              <div className="text-sm text-muted-foreground">Employés</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Euro className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{payrollStats.totalPayroll.toLocaleString()}€</div>
              <div className="text-sm text-muted-foreground">Masse salariale</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">{payrollStats.averageSalary}€</div>
              <div className="text-sm text-muted-foreground">Salaire moyen</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Calculator className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold">{payrollStats.processedPayslips}</div>
              <div className="text-sm text-muted-foreground">Bulletins traités</div>
            </div>
          </div>

          {/* Department Breakdown */}
          <div className="space-y-3">
            <h4 className="font-medium">Répartition par département</h4>
            <div className="space-y-2">
              {[
                { dept: "Développement", processed: 45, total: 48, amount: 185000 },
                { dept: "Marketing", processed: 28, total: 30, amount: 95000 },
                { dept: "Ventes", processed: 35, total: 38, amount: 125000 },
                { dept: "RH", processed: 12, total: 15, amount: 48000 },
                { dept: "Administration", processed: 22, total: 25, amount: 32750 },
              ].map((dept) => (
                <div key={dept.dept} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">{dept.dept}</div>
                    <div className="text-sm text-muted-foreground">
                      {dept.processed}/{dept.total} bulletins • {dept.amount.toLocaleString()}€
                    </div>
                  </div>
                  <Badge variant={dept.processed === dept.total ? "default" : "secondary"}>
                    {Math.round((dept.processed / dept.total) * 100)}%
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
