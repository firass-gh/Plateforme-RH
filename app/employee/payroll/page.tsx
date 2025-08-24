import { MyPayslips } from "@/components/payroll/my-payslips"
import { PayrollSummary } from "@/components/payroll/payroll-summary"
import { TaxDocuments } from "@/components/payroll/tax-documents"

export default function EmployeePayrollPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold">Mes Bulletins de Paie</h1>
        <p className="text-muted-foreground">Consultez vos bulletins de paie et documents fiscaux</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <MyPayslips />
        </div>
        <div className="space-y-6">
          <PayrollSummary />
          <TaxDocuments />
        </div>
      </div>
    </div>
  )
}
