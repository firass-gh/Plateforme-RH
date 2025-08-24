"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, Eye, Edit, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Employee {
  id: string
  name: string
  email: string
  department: string
  position: string
  status: "active" | "inactive" | "on-leave"
  startDate: string
  avatar?: string
}

const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@entreprise.com",
    department: "IT",
    position: "Développeur Senior",
    status: "active",
    startDate: "2022-03-15",
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.martin@entreprise.com",
    department: "RH",
    position: "Responsable RH",
    status: "active",
    startDate: "2021-01-10",
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "pierre.durand@entreprise.com",
    department: "Finance",
    position: "Comptable",
    status: "on-leave",
    startDate: "2020-09-01",
  },
  {
    id: "4",
    name: "Sophie Dubois",
    email: "sophie.dubois@entreprise.com",
    department: "Marketing",
    position: "Chef de Projet",
    status: "active",
    startDate: "2023-06-12",
  },
  {
    id: "5",
    name: "Luc Bernard",
    email: "luc.bernard@entreprise.com",
    department: "IT",
    position: "Développeur Junior",
    status: "inactive",
    startDate: "2023-11-20",
  },
  {
    id: "6",
    name: "Anne Moreau",
    email: "anne.moreau@entreprise.com",
    department: "Ventes",
    position: "Commerciale",
    status: "active",
    startDate: "2022-08-03",
  },
]

export function EmployeeDirectory() {
  const getStatusBadge = (status: Employee["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary">Actif</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactif</Badge>
      case "on-leave":
        return (
          <Badge variant="outline" className="border-orange-500 text-orange-600">
            En congé
          </Badge>
        )
      default:
        return <Badge variant="secondary">-</Badge>
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-serif flex items-center gap-2">
              <Users className="h-5 w-5" />
              Annuaire des Employés
            </CardTitle>
            <CardDescription>Gérez et consultez les profils employés</CardDescription>
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
          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher un employé..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Département" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les départements</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="hr">RH</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Ventes</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="inactive">Inactif</SelectItem>
                <SelectItem value="on-leave">En congé</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Employee List */}
          <div className="space-y-2">
            {mockEmployees.map((employee) => (
              <div
                key={employee.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{getInitials(employee.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{employee.name}</h4>
                    <p className="text-sm text-muted-foreground">{employee.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{employee.position}</p>
                    <p className="text-sm text-muted-foreground">{employee.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Depuis le {new Date(employee.startDate).toLocaleDateString("fr-FR")}</p>
                    {getStatusBadge(employee.status)}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/employees/${employee.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        Voir
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier
                    </Button>
                  </div>
                </div>
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
