import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { JobPostingsManager } from "@/components/recruitment/job-postings-manager"

export default function JobPostingsPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Offres d'Emploi</h1>
          <p className="text-muted-foreground">Gérez vos offres d'emploi et postes ouverts</p>
        </div>

        <JobPostingsManager />
      </div>
    </DashboardLayout>
  )
}
