import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { NewJobPostingForm } from "@/components/recruitment/new-job-posting-form"

export default function NewJobPostingPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Nouvelle Offre d'Emploi</h1>
          <p className="text-muted-foreground">Créer une nouvelle offre d'emploi</p>
        </div>

        <NewJobPostingForm />
      </div>
    </DashboardLayout>
  )
}
