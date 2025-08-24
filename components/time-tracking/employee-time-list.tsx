"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Clock } from "lucide-react"

interface EmployeeTimeRecord {
  id: string
  name: string
  department: string
  clockIn: string
  clockOut: string | null
  totalHours: string
  status: "present" | "absent" | "late" | "on-break"
}

const mockEmployees: EmployeeTimeRecord[] = [
  {
    id: "1",
    name: "Jean Dupont",
    department: "IT",
    clockIn: "08:30",
    clockOut: "17:30",
    totalHours: "8h 00min",
    status: "present",
  },
  {
    id: "2",
    name: "Marie Martin",
    department: "RH",
    clockIn: "08:45",
    clockOut: null,
    totalHours: "6h 15min",
    status: "present",
  },
  {
    id: "3",
    name: "Pierre Durand",
    department: "Finance",
    clockIn: "09:15",
    clockOut: null,
    totalHours: "5h 45min",
    status: "late",
  },
  {
    id: "4",
    name: "Sophie Dubois",
    department: "Marketing",
    clockIn: "08:30",
    clockOut: null,
    totalHours: "6h 30min",
    status: "on-break",
  },
  {
    id: "5",
    name: "Luc Bernard",
    department: "IT",
    clockIn: "-",
    clockOut: "-",
    totalHours: "0h 00min",
    status: "absent",
  },
  {
    id: "6",
    name: "Anne Moreau",
    department: "Ventes",
    clockIn: "08:30",
    clockOut: "17:30",
    totalHours: "8h 00min",
    status: "present",
  },
]

export function EmployeeTimeList() {
  const getStatusBadge = (status: EmployeeTimeRecord["status"]) => {
    switch (status) {
      case "present":
        return <Badge className="bg-primary">Présent</Badge>
      case "late":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            Retard
          </Badge>
        )
      case "on-break":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            En pause
          </Badge>
        )
      case "absent":
        return <Badge variant="destructive">Absent</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Pointages du jour
            </CardTitle>
            <CardDescription>Suivi en temps réel des présences</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrer
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher un employé..." className="pl-10" />
          </div>

          {/* Employee List */}
          <div className="space-y-2">
            <div className="grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
              <div>Employé</div>
              <div>Département</div>
              <div>Arrivée</div>
              <div>Sortie</div>
              <div>Total</div>
              <div>Statut</div>
            </div>

            {mockEmployees.map((employee) => (
              <div
                key={employee.id}
                className="grid grid-cols-6 gap-4 text-sm py-3 border-b border-border/50 hover:bg-muted/50 rounded-lg px-2"
              >
                <div className="font-medium">{employee.name}</div>
                <div className="text-muted-foreground">{employee.department}</div>
                <div className="font-mono">{employee.clockIn}</div>
                <div className="font-mono">{employee.clockOut || "-"}</div>
                <div className="font-mono font-medium">{employee.totalHours}</div>
                <div>{getStatusBadge(employee.status)}</div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-muted-foreground">Affichage de 1 à 6 sur 245 employés</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Précédent
              </Button>
              <Button variant="outline" size="sm">
                Suivant
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
