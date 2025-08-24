"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, Send, Download, AlertCircle, CheckCircle } from "lucide-react"

export function PayrollActions() {
  const quickActions = [
    {
      title: "Calculer la paie",
      description: "Lancer le calcul automatique",
      icon: Calculator,
      variant: "default" as const,
      urgent: false,
    },
    {
      title: "Générer les bulletins",
      description: "Créer tous les bulletins",
      icon: FileText,
      variant: "secondary" as const,
      urgent: false,
    },
    {
      title: "Envoyer par email",
      description: "Diffuser aux employés",
      icon: Send,
      variant: "secondary" as const,
      urgent: false,
    },
    {
      title: "Exporter les données",
      description: "Télécharger le rapport",
      icon: Download,
      variant: "outline" as const,
      urgent: false,
    },
  ]

  const pendingTasks = [
    { task: "Validation des heures supplémentaires", count: 8, urgent: true },
    { task: "Approbation des notes de frais", count: 12, urgent: false },
    { task: "Mise à jour des taux de cotisation", count: 1, urgent: true },
    { task: "Vérification des congés payés", count: 5, urgent: false },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Actions Rapides</CardTitle>
          <CardDescription>Outils de gestion de la paie</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {quickActions.map((action) => (
            <Button key={action.title} variant={action.variant} className="w-full justify-start h-auto p-4">
              <action.icon className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm opacity-70">{action.description}</div>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Tâches en Attente</CardTitle>
          <CardDescription>Actions requises avant traitement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {pendingTasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                {task.urgent ? (
                  <AlertCircle className="h-4 w-4 text-orange-500" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                <div>
                  <div className="font-medium text-sm">{task.task}</div>
                  <div className="text-xs text-muted-foreground">{task.count} éléments</div>
                </div>
              </div>
              <Badge variant={task.urgent ? "destructive" : "secondary"}>{task.urgent ? "Urgent" : "Normal"}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
