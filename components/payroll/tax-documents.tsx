"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar } from "lucide-react"

export function TaxDocuments() {
  const taxDocuments = [
    {
      title: "Certificat de salaire 2023",
      type: "Certificat",
      year: "2023",
      status: "Disponible",
      date: "2024-01-15",
    },
    {
      title: "Attestation employeur",
      type: "Attestation",
      year: "2024",
      status: "Disponible",
      date: "2024-01-31",
    },
    {
      title: "Récapitulatif cotisations",
      type: "Récapitulatif",
      year: "2023",
      status: "Disponible",
      date: "2024-01-10",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Documents Fiscaux
        </CardTitle>
        <CardDescription>Certificats et attestations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {taxDocuments.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="space-y-1">
              <div className="font-medium text-sm">{doc.title}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(doc.date).toLocaleDateString("fr-FR")}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {doc.year}
              </Badge>
              <Button size="sm" variant="ghost">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
