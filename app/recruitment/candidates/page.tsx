import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CandidateManager } from "@/components/recruitment/candidate-manager"
import { RecruitmentPipeline } from "@/components/recruitment/recruitment-pipeline"

export default function CandidatesPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Gestion des Candidats</h1>
          <p className="text-muted-foreground">Suivez les candidatures et le processus de recrutement</p>
        </div>

        <RecruitmentPipeline />
        <CandidateManager />
      </div>
    </DashboardLayout>
  )
}
