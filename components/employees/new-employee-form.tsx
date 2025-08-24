"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Save, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function NewEmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    socialSecurityNumber: "",
    department: "",
    position: "",
    manager: "",
    startDate: "",
    salary: "",
    contractType: "",
    workingHours: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-6">
      {success && (
        <Alert className="border-primary bg-primary/10">
          <AlertDescription>
            Le dossier employé a été créé avec succès. Un email de bienvenue a été envoyé.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Informations Personnelles</CardTitle>
            <CardDescription>Données personnelles de l'employé</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email professionnel *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={2}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Date de naissance</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="socialSecurityNumber">Numéro de sécurité sociale</Label>
                <Input
                  id="socialSecurityNumber"
                  value={formData.socialSecurityNumber}
                  onChange={(e) => handleInputChange("socialSecurityNumber", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Informations Professionnelles</CardTitle>
            <CardDescription>Poste et organisation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="department">Département *</Label>
                <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le département" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="hr">Ressources Humaines</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Ventes</SelectItem>
                    <SelectItem value="operations">Opérations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Poste *</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => handleInputChange("position", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="manager">Manager</Label>
                <Select value={formData.manager} onValueChange={(value) => handleInputChange("manager", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marie.martin">Marie Martin</SelectItem>
                    <SelectItem value="pierre.durand">Pierre Durand</SelectItem>
                    <SelectItem value="sophie.dubois">Sophie Dubois</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Date de début *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contract Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Informations Contractuelles</CardTitle>
            <CardDescription>Détails du contrat de travail</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contractType">Type de contrat *</Label>
                <Select
                  value={formData.contractType}
                  onValueChange={(value) => handleInputChange("contractType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdi">CDI</SelectItem>
                    <SelectItem value="cdd">CDD</SelectItem>
                    <SelectItem value="stage">Stage</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workingHours">Temps de travail</Label>
                <Select
                  value={formData.workingHours}
                  onValueChange={(value) => handleInputChange("workingHours", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le temps" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Temps plein</SelectItem>
                    <SelectItem value="part-time">Temps partiel</SelectItem>
                    <SelectItem value="flexible">Horaires flexibles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="salary">Salaire annuel brut (€)</Label>
              <Input
                id="salary"
                type="number"
                value={formData.salary}
                onChange={(e) => handleInputChange("salary", e.target.value)}
                placeholder="45000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes additionnelles</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={3}
                placeholder="Informations complémentaires..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              "Création en cours..."
            ) : (
              <>
                <UserPlus className="h-4 w-4 mr-2" />
                Créer l'employé
              </>
            )}
          </Button>
          <Button type="button" variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Enregistrer brouillon
          </Button>
          <Button type="button" variant="outline" asChild>
            <a href="/employees">
              <X className="h-4 w-4 mr-2" />
              Annuler
            </a>
          </Button>
        </div>
      </form>
    </div>
  )
}
