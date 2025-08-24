import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, Calendar, FileText } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground">Vue d'ensemble de votre système RH</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Employés actifs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+12 ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Présents aujourd'hui</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">198</div>
              <p className="text-xs text-muted-foreground">80.8% de présence</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demandes de congés</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">En attente d'approbation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Formations planifiées</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Ce mois-ci</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Actions rapides</CardTitle>
              <CardDescription>Accès rapide aux fonctionnalités principales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-2">
                <a href="/employees" className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors">
                  <Users className="h-4 w-4 mr-2" />
                  Gestion du personnel
                </a>
                <a href="/time-tracking" className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors">
                  <Clock className="h-4 w-4 mr-2" />
                  Pointage
                </a>
                <a href="/leave-requests" className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  Demandes de congés
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Notifications récentes</CardTitle>
              <CardDescription>Dernières activités du système</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">Nouvelle demande de congé</p>
                    <p className="text-muted-foreground">Marie Dubois - 3 jours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">Formation programmée</p>
                    <p className="text-muted-foreground">Sécurité informatique - 15 mars</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div className="text-sm">
                    <p className="font-medium">Nouveau candidat</p>
                    <p className="text-muted-foreground">Poste Développeur Frontend</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
