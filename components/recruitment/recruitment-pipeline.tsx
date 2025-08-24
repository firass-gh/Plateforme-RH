"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, ArrowRight } from "lucide-react"

interface PipelineStage {
  name: string
  count: number
  color: string
}

const pipelineStages: PipelineStage[] = [
  { name: "Candidatures", count: 89, color: "bg-blue-500" },
  { name: "Présélection", count: 34, color: "bg-orange-500" },
  { name: "Entretiens", count: 15, color: "bg-primary" },
  { name: "Offres", count: 5, color: "bg-green-500" },
  { name: "Embauches", count: 2, color: "bg-green-600" },
]

export function RecruitmentPipeline() {
  const totalCandidates = pipelineStages[0].count
  const conversionRate = Math.round((pipelineStages[4].count / totalCandidates) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Users className="h-5 w-5" />
          Pipeline de Recrutement
        </CardTitle>
        <CardDescription>Suivi des candidatures par étape</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Pipeline Visualization */}
          <div className="flex items-center justify-between">
            {pipelineStages.map((stage, index) => (
              <div key={stage.name} className="flex items-center">
                <div className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${stage.color} flex items-center justify-center text-white font-bold`}
                  >
                    {stage.count}
                  </div>
                  <p className="text-sm font-medium mt-2">{stage.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {totalCandidates > 0 ? Math.round((stage.count / totalCandidates) * 100) : 0}%
                  </p>
                </div>
                {index < pipelineStages.length - 1 && <ArrowRight className="h-6 w-6 text-muted-foreground mx-4" />}
              </div>
            ))}
          </div>

          {/* Conversion Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Taux de conversion global</span>
              <span className="text-sm text-muted-foreground">{conversionRate}%</span>
            </div>
            <Progress value={conversionRate} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {pipelineStages[4].count} embauches sur {totalCandidates} candidatures
            </p>
          </div>

          {/* Stage Details */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Entretiens cette semaine</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-muted-foreground">Offres en attente</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Jours délai moyen</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
