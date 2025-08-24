import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, Calendar, Clock, TrendingDown } from "lucide-react"

export function LeaveBalance() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Soldes de Congés
          </CardTitle>
          <CardDescription>Vos jours de congés disponibles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Congés payés */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Congés payés</span>
              <span className="text-sm text-muted-foreground">12 / 25 jours</span>
            </div>
            <Progress value={48} className="h-2" />
            <p className="text-xs text-muted-foreground">13 jours utilisés cette année</p>
          </div>

          {/* RTT */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">RTT</span>
              <span className="text-sm text-muted-foreground">8 / 12 jours</span>
            </div>
            <Progress value={67} className="h-2" />
            <p className="text-xs text-muted-foreground">4 jours utilisés</p>
          </div>

          {/* Congés exceptionnels */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Congés exceptionnels</span>
              <span className="text-sm text-muted-foreground">5 / 5 jours</span>
            </div>
            <Progress value={100} className="h-2" />
            <p className="text-xs text-muted-foreground">Aucun jour utilisé</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Statistiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Demandes en cours</span>
            </div>
            <span className="font-bold">1</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Jours pris ce mois</span>
            </div>
            <span className="font-bold">2</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Prochains congés</span>
            </div>
            <span className="font-bold text-primary">15 Avr</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
