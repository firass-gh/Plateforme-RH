"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Send } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function LeaveRequestForm() {
  const [formData, setFormData] = useState({
    type: "",
    startDate: "",
    endDate: "",
    reason: "",
    halfDay: false,
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
      setFormData({ type: "", startDate: "", endDate: "", reason: "", halfDay: false })
      setTimeout(() => setSuccess(false), 3000)
    }, 1000)
  }

  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate)
      const end = new Date(formData.endDate)
      const diffTime = Math.abs(end.getTime() - start.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
      return formData.halfDay ? 0.5 : diffDays
    }
    return 0
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Nouvelle Demande de Congé
        </CardTitle>
        <CardDescription>Soumettez votre demande de congé</CardDescription>
      </CardHeader>
      <CardContent>
        {success && (
          <Alert className="mb-4 border-primary bg-primary/10">
            <AlertDescription>
              Votre demande de congé a été soumise avec succès et sera examinée par votre manager.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Type de congé</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vacation">Congés payés</SelectItem>
                  <SelectItem value="sick">Arrêt maladie</SelectItem>
                  <SelectItem value="personal">Congé personnel</SelectItem>
                  <SelectItem value="maternity">Congé maternité</SelectItem>
                  <SelectItem value="paternity">Congé paternité</SelectItem>
                  <SelectItem value="unpaid">Congé sans solde</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Durée estimée</Label>
              <div className="p-2 bg-muted rounded-md text-sm">
                {calculateDays() > 0 ? `${calculateDays()} jour(s)` : "Sélectionnez les dates"}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="startDate">Date de début</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">Date de fin</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Motif (optionnel)</Label>
            <Textarea
              id="reason"
              placeholder="Précisez le motif de votre demande..."
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Soumettre la demande
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
