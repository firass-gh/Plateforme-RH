"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Save, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function NewTrainingForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    duration: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    instructor: "",
    location: "",
    maxParticipants: "",
    prerequisites: "",
    objectives: "",
    materials: "",
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
            La formation a été créée avec succès. Les employés peuvent maintenant s'y inscrire.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Informations Générales</CardTitle>
            <CardDescription>Détails de base de la formation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre de la formation *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Ex: Sécurité Informatique"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Décrivez le contenu et les objectifs de la formation..."
                rows={3}
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="category">Catégorie *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="management">Management</SelectItem>
                    <SelectItem value="soft-skills">Soft Skills</SelectItem>
                    <SelectItem value="bureautique">Bureautique</SelectItem>
                    <SelectItem value="securite">Sécurité</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Niveau *</Label>
                <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Débutant</SelectItem>
                    <SelectItem value="intermediate">Intermédiaire</SelectItem>
                    <SelectItem value="advanced">Avancé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Durée</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                  placeholder="Ex: 2 jours, 4h"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Planification</CardTitle>
            <CardDescription>Dates et horaires de la formation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
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
              <div className="space-y-2">
                <Label htmlFor="endDate">Date de fin</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="startTime">Heure de début</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => handleInputChange("startTime", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endTime">Heure de fin</Label>
                <Input
                  id="endTime"
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => handleInputChange("endTime", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Lieu</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Salle de formation, en ligne..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxParticipants">Nombre max de participants</Label>
                <Input
                  id="maxParticipants"
                  type="number"
                  value={formData.maxParticipants}
                  onChange={(e) => handleInputChange("maxParticipants", e.target.value)}
                  placeholder="20"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Détails de la Formation</CardTitle>
            <CardDescription>Informations complémentaires</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="instructor">Formateur</Label>
              <Input
                id="instructor"
                value={formData.instructor}
                onChange={(e) => handleInputChange("instructor", e.target.value)}
                placeholder="Nom du formateur"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="prerequisites">Prérequis</Label>
              <Textarea
                id="prerequisites"
                value={formData.prerequisites}
                onChange={(e) => handleInputChange("prerequisites", e.target.value)}
                placeholder="Connaissances ou compétences requises..."
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectives">Objectifs pédagogiques</Label>
              <Textarea
                id="objectives"
                value={formData.objectives}
                onChange={(e) => handleInputChange("objectives", e.target.value)}
                placeholder="Ce que les participants apprendront..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="materials">Matériel nécessaire</Label>
              <Textarea
                id="materials"
                value={formData.materials}
                onChange={(e) => handleInputChange("materials", e.target.value)}
                placeholder="Ordinateur portable, documents à apporter..."
                rows={2}
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
                <FileText className="h-4 w-4 mr-2" />
                Créer la formation
              </>
            )}
          </Button>
          <Button type="button" variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Enregistrer brouillon
          </Button>
          <Button type="button" variant="outline" asChild>
            <a href="/training">
              <X className="h-4 w-4 mr-2" />
              Annuler
            </a>
          </Button>
        </div>
      </form>
    </div>
  )
}
