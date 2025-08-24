import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { EmployeeProfile } from "@/components/employees/employee-profile"
import { EmployeeDocuments } from "@/components/employees/employee-documents"
import { EmployeeTimeTracking } from "@/components/employees/employee-time-tracking"

export default function EmployeeDetailPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Profil Employé</h1>
          <p className="text-muted-foreground">Détails et gestion du dossier employé</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <EmployeeProfile employeeId={params.id} />
            <EmployeeTimeTracking employeeId={params.id} />
          </div>
          <EmployeeDocuments employeeId={params.id} />
        </div>
      </div>
    </DashboardLayout>
  )
}
