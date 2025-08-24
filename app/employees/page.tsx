import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { EmployeeOverview } from "@/components/employees/employee-overview"
import { EmployeeDirectory } from "@/components/employees/employee-directory"
import { QuickActions } from "@/components/employees/quick-actions"

export default function EmployeesPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Gestion du Personnel</h1>
          <p className="text-muted-foreground">Gérez les employés et leurs informations</p>
        </div>

        <EmployeeOverview />

        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <EmployeeDirectory />
          </div>
          <QuickActions />
        </div>
      </div>
    </DashboardLayout>
  )
}
