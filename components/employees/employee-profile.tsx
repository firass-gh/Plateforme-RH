"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Calendar, Edit, Settings } from "lucide-react"

interface EmployeeProfileProps {
  employeeId: string
}

export function EmployeeProfile({ employeeId }: EmployeeProfileProps) {
  // Mock data - in real app, fetch based on employeeId
  const employee = {
    id: employeeId,
    name: "Jean Dupont",
    email: "jean.dupont@entreprise.com",
    phone: "+33 1 23 45 67 89",
    address: "123 Rue de la Paix, 75001 Paris",
    birthDate: "1985-06-15",
    department: "IT",
    position: "Développeur Senior",
    manager: "Marie Martin",
    startDate: "2022-03-15",
    status: "active",
    contractType: "CDI",
    workingHours: "Temps plein",
    salary: "55000",
  }

  const getStatusBadge = (status: string) => {
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
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-lg">{getInitials(employee.name)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-serif text-2xl">{employee.name}</CardTitle>
                <CardDescription className="text-lg">{employee.position}</CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  {getStatusBadge(employee.status)}
                  <Badge variant="outline">{employee.department}</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Modifier
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif flex items-center gap-2">
            <User className="h-5 w-5" />
            Informations Personnelles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{employee.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Téléphone</p>
                <p className="text-sm text-muted-foreground">{employee.phone}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
            <div>
              <p className="text-sm font-medium">Adresse</p>
              <p className="text-sm text-muted-foreground">{employee.address}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Date de naissance</p>
              <p className="text-sm text-muted-foreground">
                {new Date(employee.birthDate).toLocaleDateString("fr-FR")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Informations Professionnelles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Département</p>
              <p className="text-sm text-muted-foreground">{employee.department}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Poste</p>
              <p className="text-sm text-muted-foreground">{employee.position}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Manager</p>
              <p className="text-sm text-muted-foreground">{employee.manager}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Date d'embauche</p>
              <p className="text-sm text-muted-foreground">
                {new Date(employee.startDate).toLocaleDateString("fr-FR")}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Type de contrat</p>
              <p className="text-sm text-muted-foreground">{employee.contractType}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Temps de travail</p>
              <p className="text-sm text-muted-foreground">{employee.workingHours}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
