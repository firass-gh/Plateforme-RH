import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, BookOpen, Calendar, Target } from "lucide-react"

export function TrainingProgress() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif flex items-center gap-2">
            <Target className="h-5 w-5" />
            Mon Parcours
          </CardTitle>
          <CardDescription>Suivi de votre développement professionnel</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Annual Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Objectif annuel</span>
              <span className="text-sm text-muted-foreground">3 / 5 formations</span>
            </div>
            <Progress value={60} className="h-2" />
            <p className="text-xs text-muted-foreground">60% de l'objectif atteint</p>
          </div>

          {/* Skills Development */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Développement des compétences</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Soft Skills</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-1" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Bureautique</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-1" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Management</span>
                <span>25%</span>
              </div>
              <Progress value={25} className="h-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif flex items-center gap-2">
            <Award className="h-5 w-5" />
            Statistiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Formations complétées</span>
            </div>
            <span className="font-bold">8</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Heures de formation</span>
            </div>
            <span className="font-bold">24h</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Certificats obtenus</span>
            </div>
            <span className="font-bold">5</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
