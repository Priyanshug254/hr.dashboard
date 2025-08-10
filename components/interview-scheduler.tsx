"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, Video, Brain, Shield, Globe, Play, Pause, Settings } from "lucide-react"

export function InterviewScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const upcomingInterviews = [
    {
      id: 1,
      candidate: "John Doe",
      position: "Frontend Developer",
      time: "10:00 AM",
      duration: "45 min",
      type: "AI Interview",
      language: "English",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Priya Sharma",
      position: "Data Scientist",
      time: "2:30 PM",
      duration: "60 min",
      type: "AI Interview",
      language: "Hindi",
      status: "In Progress",
    },
    {
      id: 3,
      candidate: "Raj Patel",
      position: "Backend Developer",
      time: "4:00 PM",
      duration: "45 min",
      type: "AI Interview",
      language: "English",
      status: "Scheduled",
    },
  ]

  const liveInterviews = [
    {
      id: 1,
      candidate: "Priya Sharma",
      position: "Data Scientist",
      startTime: "2:30 PM",
      elapsed: "15:32",
      currentQuestion: "Explain your approach to handling missing data",
      integrityScore: 98,
      language: "Hindi",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Interview Scheduler</h2>
          <p className="text-slate-400">Manage and monitor AI-powered interviews</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
          <CalendarIcon className="w-4 h-4 mr-2" />
          Schedule Interview
        </Button>
      </div>

      <Tabs defaultValue="today" className="space-y-6">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="today" className="data-[state=active]:bg-slate-700">
            Today's Schedule
          </TabsTrigger>
          <TabsTrigger value="live" className="data-[state=active]:bg-slate-700">
            Live Interviews
          </TabsTrigger>
          <TabsTrigger value="calendar" className="data-[state=active]:bg-slate-700">
            Calendar View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Today's Stats */}
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Today's Interviews</p>
                        <p className="text-2xl font-bold text-white">8</p>
                      </div>
                      <Video className="w-8 h-8 text-blue-400" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Completed</p>
                        <p className="text-2xl font-bold text-white">3</p>
                      </div>
                      <Clock className="w-8 h-8 text-green-400" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Avg. Score</p>
                        <p className="text-2xl font-bold text-white">87%</p>
                      </div>
                      <Brain className="w-8 h-8 text-purple-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Interview List */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Interviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingInterviews.map((interview) => (
                    <div
                      key={interview.id}
                      className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {interview.candidate
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{interview.candidate}</h4>
                          <p className="text-sm text-slate-400">{interview.position}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">{interview.time}</p>
                          <p className="text-xs text-slate-400">{interview.duration}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            <Globe className="w-3 h-3 mr-1" />
                            {interview.language}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={
                              interview.status === "In Progress"
                                ? "bg-green-900/50 text-green-300"
                                : "bg-blue-900/50 text-blue-300"
                            }
                          >
                            {interview.status}
                          </Badge>
                        </div>

                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                          {interview.status === "In Progress" ? "Monitor" : "Start"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* AI Interview Settings */}
            <div className="space-y-4">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-400" />
                    AI Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Voice Agent</span>
                    <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                      Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Cheat Detection</span>
                    <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                      Enabled
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Auto Scoring</span>
                    <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                      On
                    </Badge>
                  </div>

                  <Button size="sm" variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                    <Settings className="w-4 h-4 mr-2" />
                    Configure
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    Security Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Face Detection: Active</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Screen Monitor: Running</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Audio Analysis: On</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="live" className="space-y-4">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Video className="w-5 h-5 mr-2 text-red-400" />
                Live Interviews
              </CardTitle>
              <CardDescription className="text-slate-400">Monitor ongoing AI interviews in real-time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {liveInterviews.map((interview) => (
                <div
                  key={interview.id}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-red-500/30 shadow-lg shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div>
                        <h4 className="font-semibold text-white">{interview.candidate}</h4>
                        <p className="text-sm text-slate-400">{interview.position}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="bg-red-900/50 text-red-300">
                        LIVE
                      </Badge>
                      <span className="text-sm text-slate-300">{interview.elapsed}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Current Question</p>
                      <p className="text-sm text-white">{interview.currentQuestion}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400">Integrity Score</p>
                        <p className="text-lg font-semibold text-green-400">{interview.integrityScore}%</p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">Language</p>
                        <p className="text-sm text-white">{interview.language}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <Play className="w-4 h-4 mr-1" />
                      Monitor
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-600 text-red-300 bg-transparent">
                      <Pause className="w-4 h-4 mr-1" />
                      Pause
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      View Transcript
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Interview Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-slate-700"
                />
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Selected Date</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">{date ? date.toDateString() : "No date selected"}</p>

                <div className="space-y-3">
                  <div className="p-3 bg-slate-700/30 rounded-lg">
                    <p className="text-sm font-medium text-white">10:00 AM</p>
                    <p className="text-xs text-slate-400">John Doe - Frontend Dev</p>
                  </div>

                  <div className="p-3 bg-slate-700/30 rounded-lg">
                    <p className="text-sm font-medium text-white">2:30 PM</p>
                    <p className="text-xs text-slate-400">Priya Sharma - Data Scientist</p>
                  </div>

                  <div className="p-3 bg-slate-700/30 rounded-lg">
                    <p className="text-sm font-medium text-white">4:00 PM</p>
                    <p className="text-xs text-slate-400">Raj Patel - Backend Dev</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
