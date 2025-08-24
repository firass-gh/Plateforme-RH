import { Button } from "@/components/ui/button"
import { PayrollOverview } from "@/components/payroll/payroll-overview"
import { PayrollActions } from "@/components/payroll/payroll-actions"
import { RecentPayslips } from "@/components/payroll/recent-payslips"
import { PayrollCalendar } from "@/components/payroll/payroll-calendar"
import { Plus, Calculator } from "lucide-react"

export default function PayrollPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold">Gestion de la Paie</h1>
          <p className="text-muted-foreground">Gérez les bulletins de paie et les calculs salariaux</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Calculator className="h-4 w-4 mr-2" />
            Calculer la Paie
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nouveau Bulletin
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PayrollOverview />
        </div>
        <div>
          <PayrollActions />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RecentPayslips />
        <PayrollCalendar />
      </div>
    </div>
  )
}
