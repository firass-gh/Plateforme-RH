"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Users,
  Clock,
  Calendar,
  FileText,
  UserCheck,
  CreditCard,
  Menu,
  Home,
  Settings,
  LogOut,
  User,
} from "lucide-react"

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  roles: string[]
}

const navigation: NavigationItem[] = [
  { name: "Tableau de bord", href: "/dashboard", icon: Home, roles: ["admin", "hr", "manager"] },
  { name: "Mon Espace", href: "/employee/dashboard", icon: User, roles: ["employee"] },
  { name: "Personnel", href: "/employees", icon: Users, roles: ["admin", "hr", "manager"] },
  { name: "Pointage", href: "/time-tracking", icon: Clock, roles: ["admin", "hr", "manager"] },
  { name: "Congés", href: "/leave-requests", icon: Calendar, roles: ["admin", "hr", "manager", "employee"] },
  { name: "Formations", href: "/training", icon: FileText, roles: ["admin", "hr", "manager", "employee"] },
  { name: "Recrutement", href: "/recruitment", icon: UserCheck, roles: ["admin", "hr"] },
  { name: "Paie", href: "/payroll", icon: CreditCard, roles: ["admin", "hr"] },
]

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole?: "admin" | "hr" | "manager" | "employee"
}

export function DashboardLayout({ children, userRole = "admin" }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredNavigation = navigation.filter((item) => item.roles.includes(userRole))

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="fixed top-4 left-4 z-40 md:hidden" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar navigation={filteredNavigation} userRole={userRole} />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <Sidebar navigation={filteredNavigation} userRole={userRole} />
      </div>

      {/* Main content */}
      <div className="md:pl-64">
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

interface SidebarProps {
  navigation: NavigationItem[]
  userRole: string
}

function Sidebar({ navigation, userRole }: SidebarProps) {
  const getUserInfo = () => {
    switch (userRole) {
      case "employee":
        return { name: "Jean Dupont", email: "jean.dupont@entreprise.com", initials: "JD" }
      case "hr":
        return { name: "Marie Martin", email: "marie.martin@entreprise.com", initials: "MM" }
      case "manager":
        return { name: "Pierre Durand", email: "pierre.durand@entreprise.com", initials: "PD" }
      default:
        return { name: "Admin User", email: "admin@entreprise.com", initials: "AD" }
    }
  }

  const userInfo = getUserInfo()

  return (
    <div className="flex flex-col h-full bg-card border-r border-border">
      <div className="flex items-center h-16 px-6 border-b border-border">
        <h1 className="font-serif text-xl font-bold text-foreground">SIRH</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-medium">{userInfo.initials}</span>
          </div>
          <div>
            <p className="text-sm font-medium">{userInfo.name}</p>
            <p className="text-xs text-muted-foreground">{userInfo.email}</p>
          </div>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Paramètres
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>
    </div>
  )
}
