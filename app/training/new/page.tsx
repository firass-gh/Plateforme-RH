import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { NewTrainingForm } from "@/components/training/new-training-form"

export default function NewTrainingPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Nouvelle Formation</h1>
          <p className="text-muted-foreground">Créer une nouvelle session de formation</p>
        </div>

        <NewTrainingForm />
      </div>
    </DashboardLayout>
  )
}
