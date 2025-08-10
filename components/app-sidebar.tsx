"use client"

import { BarChart3, BrainCircuit, Home, Settings, Users, Briefcase, Video, Shield, Globe } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    key: "dashboard",
  },
  {
    title: "Job Management",
    url: "#",
    icon: Briefcase,
    key: "jobs",
  },
  {
    title: "AI Interviews",
    url: "#",
    icon: Video,
    key: "interviews",
  },
  {
    title: "Candidate Pipeline",
    url: "#",
    icon: Users,
    key: "candidates",
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
    key: "analytics",
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    key: "settings",
  },
]

interface AppSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AppSidebar({ activeTab, setActiveTab }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-white/10 bg-white/5 backdrop-blur-sm">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <img
                src="/logo.png"
                alt="HiringMinds Logo"
                className="w-full h-full object-contain"
              />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800">HiringMinds</h2>
            <p className="text-xs font-bold text-gray-600">AI Recruitment</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-bold text-xs uppercase tracking-wider">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                    onClick={() => setActiveTab(item.key)}
                    isActive={activeTab === item.key}
                    className={`transition-all duration-300 ease-out
                      ${activeTab === item.key 
                        ? "text-black font-semibold bg-gradient-to-r from-purple-500/30 to-pink-500/30 scale-105 shadow-lg"
                        : "text-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"}`}
                    style={{
                      borderRadius: "8px", // Rounded corners for modern look
                      transformOrigin: "center", // Scale from center
                      transition: "transform 0.2s ease, box-shadow 0.3s ease",
                    }}
                  >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>


                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

            <SidebarGroup>
        <SidebarGroupLabel className="text-gray-600 font-bold text-xs uppercase tracking-wider">
          Features
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton
                className="text-gray-800 hover:scale-105 hover:text-black hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 ease-out rounded-md"
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.2s ease, box-shadow 0.3s ease",
                }}
              >
                <Shield className="w-4 h-4" />
                <span>Cheat Detection</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                className="text-gray-800 hover:scale-105 hover:text-black hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 ease-out rounded-md"
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.2s ease, box-shadow 0.3s ease",
                }}
              >
                <Globe className="w-4 h-4" />
                <span>Multilingual Support</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-slate-400 text-center">
          <p>© 2025 HiringMinds.ai</p>
          <p>Version 1.0.0</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
