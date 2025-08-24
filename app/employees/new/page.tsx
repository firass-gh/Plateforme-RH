import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { NewEmployeeForm } from "@/components/employees/new-employee-form"

export default function NewEmployeePage() {
  return (
    <DashboardLayout userRole="hr">
      <div className="space-y-6">
        <div>
          <h1 className="font-serif text-3xl font-bold">Nouvel Employé</h1>
          <p className="text-muted-foreground">Créer un nouveau dossier employé</p>
        </div>

        <NewEmployeeForm />
      </div>
    </DashboardLayout>
  )
}
