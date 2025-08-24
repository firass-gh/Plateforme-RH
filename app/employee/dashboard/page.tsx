import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TimeTrackingCard } from "@/components/employee/time-tracking-card"
import { TimeHistoryCard } from "@/components/employee/time-history-card"
import { EmployeeStatsCard } from "@/components/employee/employee-stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, TrendingUp } from "lucide-react"

export default function EmployeeDashboardPage() {
  return (
    <DashboardLayout userRole="employee">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Mon Espace Employé</h1>
          <p className="text-muted-foreground">Gérez votre temps de travail et consultez vos informations</p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heures ce mois</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">152h</div>
              <p className="text-xs text-muted-foreground">+8h par rapport au mois dernier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jours travaillés</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">19</div>
              <p className="text-xs text-muted-foreground">Sur 22 jours ouvrés</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Congés restants</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">jours disponibles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">Taux de présence</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <TimeTrackingCard />
            <EmployeeStatsCard />
          </div>
          <TimeHistoryCard />
        </div>
      </div>
    </DashboardLayout>
  )
}
