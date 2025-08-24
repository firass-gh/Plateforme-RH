"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Download, Eye, Trash2 } from "lucide-react"

interface EmployeeDocumentsProps {
  employeeId: string
}

interface Document {
  id: string
  name: string
  type: string
  size: string
  uploadDate: string
  category: "contract" | "identity" | "certificate" | "other"
}

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Contrat_CDI_Jean_Dupont.pdf",
    type: "PDF",
    size: "2.3 MB",
    uploadDate: "2022-03-15",
    category: "contract",
  },
  {
    id: "2",
    name: "Carte_Identite_Recto_Verso.pdf",
    type: "PDF",
    size: "1.8 MB",
    uploadDate: "2022-03-15",
    category: "identity",
  },
  {
    id: "3",
    name: "Diplome_Master_Informatique.pdf",
    type: "PDF",
    size: "3.1 MB",
    uploadDate: "2022-03-15",
    category: "certificate",
  },
  {
    id: "4",
    name: "Attestation_Formation_Securite.pdf",
    type: "PDF",
    size: "0.9 MB",
    uploadDate: "2023-09-12",
    category: "certificate",
  },
]

export function EmployeeDocuments({ employeeId }: EmployeeDocumentsProps) {
  const getCategoryBadge = (category: Document["category"]) => {
    switch (category) {
      case "contract":
        return <Badge className="bg-primary">Contrat</Badge>
      case "identity":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-600">
            Identité
          </Badge>
        )
      case "certificate":
        return (
          <Badge variant="outline" className="border-green-500 text-green-600">
            Certificat
          </Badge>
        )
      case "other":
        return <Badge variant="secondary">Autre</Badge>
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
              <FileText className="h-5 w-5" />
              Documents
            </CardTitle>
            <CardDescription>Gestion des documents employé</CardDescription>
          </div>
          <Button size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockDocuments.map((document) => (
            <div key={document.id} className="border border-border rounded-lg p-3 space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{document.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {document.type} • {document.size} • Ajouté le{" "}
                    {new Date(document.uploadDate).toLocaleDateString("fr-FR")}
                  </p>
                </div>
                {getCategoryBadge(document.category)}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  Voir
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Télécharger
                </Button>
                <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Documents requis</p>
              <p className="text-muted-foreground">4/5 complétés</p>
            </div>
            <div>
              <p className="font-medium">Dernière mise à jour</p>
              <p className="text-muted-foreground">12 Sept 2023</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
