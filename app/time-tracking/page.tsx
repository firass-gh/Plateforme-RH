import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TimeTrackingOverview } from "@/components/time-tracking/time-tracking-overview"
import { EmployeeTimeList } from "@/components/time-tracking/employee-time-list"

export default function TimeTrackingPage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Gestion du Temps</h1>
          <p className="text-muted-foreground">Suivi des pointages et présences des employés</p>
        </div>

        <TimeTrackingOverview />
        <EmployeeTimeList />
      </div>
    </DashboardLayout>
  )
}
