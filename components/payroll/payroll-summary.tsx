"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Euro, TrendingUp, Calendar } from "lucide-react"

export function PayrollSummary() {
  const currentYear = new Date().getFullYear()
  const yearToDateEarnings = 3285 * 1 // January only so far
  const projectedAnnual = 3285 * 12

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Euro className="h-5 w-5" />
          Résumé Salarial {currentYear}
        </CardTitle>
        <CardDescription>Vue d'ensemble de vos revenus</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Cumul année</span>
            <span className="text-sm text-muted-foreground">{yearToDateEarnings.toLocaleString()}€</span>
          </div>
          <Progress value={(yearToDateEarnings / projectedAnnual) * 100} className="h-2" />
          <p className="text-xs text-muted-foreground">Projection annuelle: {projectedAnnual.toLocaleString()}€</p>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Dernier bulletin</span>
            </div>
            <span className="text-sm">Janvier 2024</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Euro className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Salaire net</span>
            </div>
            <span className="text-sm font-bold">3 285€</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Évolution</span>
            </div>
            <span className="text-sm text-green-600">+2.5%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
