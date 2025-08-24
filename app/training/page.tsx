import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TrainingOverview } from "@/components/training/training-overview"
import { TrainingCatalog } from "@/components/training/training-catalog"
import { UpcomingTrainings } from "@/components/training/upcoming-trainings"

export default function TrainingPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Gestion des Formations</h1>
          <p className="text-muted-foreground">Planifiez et gérez les formations des employés</p>
        </div>

        <TrainingOverview />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TrainingCatalog />
          </div>
          <UpcomingTrainings />
        </div>
      </div>
    </DashboardLayout>
  )
}
