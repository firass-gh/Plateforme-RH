import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LeaveRequestForm } from "@/components/leave/leave-request-form"
import { MyLeaveRequests } from "@/components/leave/my-leave-requests"
import { LeaveBalance } from "@/components/leave/leave-balance"

export default function EmployeeLeaveRequestPage() {
  return (
    <DashboardLayout userRole="employee">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Mes Demandes de Congés</h1>
          <p className="text-muted-foreground">Gérez vos congés et consultez vos soldes</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <LeaveRequestForm />
            <MyLeaveRequests />
          </div>
          <LeaveBalance />
        </div>
      </div>
    </DashboardLayout>
  )
}
