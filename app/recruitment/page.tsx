import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { RecruitmentOverview } from "@/components/recruitment/recruitment-overview"
import { ActiveJobPostings } from "@/components/recruitment/active-job-postings"
import { RecentApplications } from "@/components/recruitment/recent-applications"

export default function RecruitmentPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Gestion du Recrutement</h1>
          <p className="text-muted-foreground">Gérez les offres d'emploi et les candidatures</p>
        </div>

        <RecruitmentOverview />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentApplications />
          </div>
          <ActiveJobPostings />
        </div>
      </div>
    </DashboardLayout>
  )
}
