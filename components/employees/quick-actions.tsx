import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, FileText, Download, Settings, Users, Calendar } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Actions Rapides</CardTitle>
        <CardDescription>Raccourcis pour les tâches courantes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full justify-start" asChild>
          <a href="/employees/new">
            <UserPlus className="h-4 w-4 mr-2" />
            Nouvel Employé
          </a>
        </Button>

        <Button variant="outline" className="w-full justify-start bg-transparent">
          <FileText className="h-4 w-4 mr-2" />
          Générer Rapport
        </Button>

        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Exporter Données
        </Button>

        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Calendar className="h-4 w-4 mr-2" />
          Planifier Entretien
        </Button>

        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Users className="h-4 w-4 mr-2" />
          Organigramme
        </Button>

        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Settings className="h-4 w-4 mr-2" />
          Paramètres RH
        </Button>
      </CardContent>
    </Card>
  )
}
