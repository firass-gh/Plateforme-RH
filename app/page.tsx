import { LoginForm } from "@/components/auth/login-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">SIRH</h1>
          <p className="text-muted-foreground">Système d'Information de Gestion des Ressources Humaines</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
