import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Target, Award } from "lucide-react"

export function EmployeeStatsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Mes Statistiques
        </CardTitle>
        <CardDescription>Aperçu de vos performances</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Monthly Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Objectif mensuel</span>
            <span className="text-sm text-muted-foreground">152h / 160h</span>
          </div>
          <Progress value={95} className="h-2" />
          <p className="text-xs text-muted-foreground">95% de l'objectif atteint</p>
        </div>

        {/* Attendance Rate */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Taux de présence</span>
            <span className="text-sm text-muted-foreground">98%</span>
          </div>
          <Progress value={98} className="h-2" />
          <p className="text-xs text-muted-foreground">Excellent taux de présence</p>
        </div>

        {/* Punctuality */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Ponctualité</span>
            <span className="text-sm text-muted-foreground">92%</span>
          </div>
          <Progress value={92} className="h-2" />
          <p className="text-xs text-muted-foreground">Très bonne ponctualité</p>
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-border">
          <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
            <Target className="h-4 w-4" />
            Actions rapides
          </h4>
          <div className="space-y-2">
            <a
              href="/employee/leave-request"
              className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors text-sm"
            >
              <Award className="h-4 w-4 mr-2" />
              Demander un congé
            </a>
            <a
              href="/employee/profile"
              className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors text-sm"
            >
              <Target className="h-4 w-4 mr-2" />
              Modifier mon profil
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
