"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Save, X, Eye } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function NewJobPostingForm() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    responsibilities: "",
    benefits: "",
    experience: "",
    education: "",
    skills: "",
    startDate: "",
    expiryDate: "",
    contactEmail: "",
    isRemote: false,
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-6">
      {success && (
        <Alert className="border-primary bg-primary/10">
          <AlertDescription>
            L'offre d'emploi a été créée avec succès et est maintenant visible aux candidats.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Informations Générales</CardTitle>
            <CardDescription>Détails de base du poste</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre du poste *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Ex: Développeur Frontend React"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="department">Département *</Label>
                <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="hr">Ressources Humaines</SelectItem>
                    <SelectItem value="sales">Ventes</SelectItem>
                    <SelectItem value="operations">Opérations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Localisation *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Paris, Lyon, Remote..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type de contrat *</Label>
                <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdi">CDI</SelectItem>
                    <SelectItem value="cdd">CDD</SelectItem>
                    <SelectItem value="stage">Stage</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="salaryMin">Salaire minimum (€)</Label>
                <Input
                  id="salaryMin"
                  type="number"
                  value={formData.salaryMin}
                  onChange={(e) => handleInputChange("salaryMin", e.target.value)}
                  placeholder="45000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryMax">Salaire maximum (€)</Label>
                <Input
                  id="salaryMax"
                  type="number"
                  value={formData.salaryMax}
                  onChange={(e) => handleInputChange("salaryMax", e.target.value)}
                  placeholder="55000"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Description */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Description du Poste</CardTitle>
            <CardDescription>Détails et responsabilités</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Description générale *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Décrivez le poste, l'équipe, et le contexte..."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="responsibilities">Responsabilités principales</Label>
              <Textarea
                id="responsibilities"
                value={formData.responsibilities}
                onChange={(e) => handleInputChange("responsibilities", e.target.value)}
                placeholder="• Développer des interfaces utilisateur
• Collaborer avec l'équipe design
• Maintenir le code existant..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="benefits">Avantages</Label>
              <Textarea
                id="benefits"
                value={formData.benefits}
                onChange={(e) => handleInputChange("benefits", e.target.value)}
                placeholder="• Télétravail partiel
• Tickets restaurant
• Mutuelle d'entreprise..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Profil Recherché</CardTitle>
            <CardDescription>Compétences et expérience requises</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="requirements">Exigences *</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange("requirements", e.target.value)}
                placeholder="• 3+ ans d'expérience en React
• Maîtrise de TypeScript
• Connaissance des outils de build..."
                rows={4}
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="experience">Expérience requise</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="junior">Junior (0-2 ans)</SelectItem>
                    <SelectItem value="intermediate">Intermédiaire (2-5 ans)</SelectItem>
                    <SelectItem value="senior">Senior (5+ ans)</SelectItem>
                    <SelectItem value="lead">Lead/Expert (8+ ans)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Niveau d'études</Label>
                <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bac">Bac</SelectItem>
                    <SelectItem value="bac+2">Bac+2</SelectItem>
                    <SelectItem value="bac+3">Bac+3</SelectItem>
                    <SelectItem value="bac+5">Bac+5</SelectItem>
                    <SelectItem value="experience">Expérience équivalente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Compétences techniques</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                placeholder="React, TypeScript, Node.js, Git..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Publication Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Paramètres de Publication</CardTitle>
            <CardDescription>Dates et contact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="startDate">Date de prise de poste</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Date d'expiration de l'offre</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email de contact</Label>
              <Input
                id="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                placeholder="recrutement@entreprise.com"
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              "Publication en cours..."
            ) : (
              <>
                <Briefcase className="h-4 w-4 mr-2" />
                Publier l'offre
              </>
            )}
          </Button>
          <Button type="button" variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Enregistrer brouillon
          </Button>
          <Button type="button" variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Prévisualiser
          </Button>
          <Button type="button" variant="outline" asChild>
            <a href="/recruitment/jobs">
              <X className="h-4 w-4 mr-2" />
              Annuler
            </a>
          </Button>
        </div>
      </form>
    </div>
  )
}
