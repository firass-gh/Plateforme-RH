import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { MyTrainings } from "@/components/training/my-trainings"
import { TrainingCatalogEmployee } from "@/components/training/training-catalog-employee"
import { TrainingProgress } from "@/components/training/training-progress"

export default function EmployeeTrainingPage() {
  return (
    <DashboardLayout userRole="employee">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Mes Formations</h1>
          <p className="text-muted-foreground">Consultez et inscrivez-vous aux formations</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <TrainingCatalogEmployee />
            <MyTrainings />
          </div>
          <TrainingProgress />
        </div>
      </div>
    </DashboardLayout>
  )
}
