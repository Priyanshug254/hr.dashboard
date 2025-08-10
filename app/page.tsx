"use client"

import { useState } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { JobManagement } from "@/components/job-management"
import { InterviewScheduler } from "@/components/interview-scheduler"
import { CandidatePipeline } from "@/components/candidate-pipeline"
import { Analytics } from "@/components/analytics"
import { Settings } from "@/components/settings"

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "jobs":
        return <JobManagement />
      case "interviews":
        return <InterviewScheduler />
      case "candidates":
        return <CandidatePipeline />
      case "analytics":
        return <Analytics />
      case "settings":
        return <Settings />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <SidebarProvider>
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <SidebarTrigger className="mb-4" />
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">HiringMinds.ai</h1>
                <p className="text-slate-300">AI-Powered Recruitment Dashboard</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-slate-300">Welcome back,</p>
                  <p className="text-white font-semibold">Sarah Johnson</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  SJ
                </div>
              </div>
            </div>
          </div>
          {renderContent()}
        </main>
      </SidebarProvider>
    </div>
  )
}
