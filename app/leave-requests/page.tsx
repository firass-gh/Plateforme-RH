import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LeaveRequestsOverview } from "@/components/leave/leave-requests-overview"
import { PendingLeaveRequests } from "@/components/leave/pending-leave-requests"
import { LeaveCalendar } from "@/components/leave/leave-calendar"

export default function LeaveRequestsPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Gestion des Congés</h1>
          <p className="text-muted-foreground">Gérez les demandes de congés et les absences</p>
        </div>

        <LeaveRequestsOverview />

        <div className="grid gap-6 lg:grid-cols-2">
          <PendingLeaveRequests />
          <LeaveCalendar />
        </div>
      </div>
    </DashboardLayout>
  )
}
