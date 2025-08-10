import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Download,
  Eye,
  MessageSquare,
  Star,
  CheckCircle,
  Clock,
  Brain,
  Shield,
  Globe,
} from "lucide-react"

export function CandidatePipeline() {
  const candidates = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      position: "Frontend Developer",
      stage: "Interview Completed",
      score: 92,
      integrityScore: 98,
      language: "English",
      appliedDate: "2024-01-15",
      interviewDate: "2024-01-18",
      skills: ["React", "TypeScript", "Next.js"],
      status: "Passed",
      aiInsights: "Strong technical skills, excellent problem-solving approach",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Data Scientist",
      email: "priya.sharma@email.com",
      stage: "In Progress",
      score: 0,
      integrityScore: 95,
      language: "Hindi",
      appliedDate: "2024-01-16",
      interviewDate: "2024-01-19",
      skills: ["Python", "ML", "TensorFlow"],
      status: "In Progress",
      aiInsights: "Currently in interview, showing good analytical thinking",
    },
    {
      id: 3,
      name: "Raj Patel",
      position: "Backend Developer",
      email: "raj.patel@email.com",
      stage: "Scheduled",
      score: 0,
      integrityScore: 0,
      language: "English",
      appliedDate: "2024-01-17",
      interviewDate: "2024-01-20",
      skills: ["Node.js", "Python", "MongoDB"],
      status: "Scheduled",
      aiInsights: "Profile shows relevant experience, awaiting interview",
    },
    {
      id: 4,
      name: "Anita Kumar",
      position: "Frontend Developer",
      email: "anita.kumar@email.com",
      stage: "Interview Completed",
      score: 76,
      integrityScore: 85,
      language: "Tamil",
      appliedDate: "2024-01-14",
      interviewDate: "2024-01-17",
      skills: ["React", "JavaScript", "CSS"],
      status: "Under Review",
      aiInsights: "Good technical foundation, needs improvement in advanced concepts",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Passed":
        return "bg-green-900/50 text-green-300"
      case "In Progress":
        return "bg-blue-900/50 text-blue-300"
      case "Scheduled":
        return "bg-yellow-900/50 text-yellow-300"
      case "Under Review":
        return "bg-purple-900/50 text-purple-300"
      default:
        return "bg-slate-900/50 text-slate-300"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Passed":
        return <CheckCircle className="w-4 h-4" />
      case "In Progress":
        return <Clock className="w-4 h-4" />
      case "Scheduled":
        return <Clock className="w-4 h-4" />
      case "Under Review":
        return <Eye className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Candidate Pipeline</h2>
          <p className="text-slate-400">Track and manage candidates through the AI interview process</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            <MessageSquare className="w-4 h-4 mr-2" />
            Bulk Actions
          </Button>
        </div>
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Total Candidates</p>
                <p className="text-2xl font-bold text-white">247</p>
              </div>
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Interviewed</p>
                <p className="text-2xl font-bold text-white">89</p>
              </div>
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Passed</p>
                <p className="text-2xl font-bold text-white">67</p>
              </div>
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Avg. Score</p>
                <p className="text-2xl font-bold text-white">84%</p>
              </div>
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-slate-800/50 border-slate-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-slate-700 text-white">
              All Candidates
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="data-[state=active]:bg-slate-700 text-white">
              Scheduled
            </TabsTrigger>
            <TabsTrigger value="in-progress" className="data-[state=active]:bg-slate-700 text-white">
              In Progress
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-slate-700 text-white">
              Completed
            </TabsTrigger>
          </TabsList>

          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search candidates..."
                className="pl-10 w-64 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
              />
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          {candidates.map((candidate) => (
            <Card
              key={candidate.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.01] transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {candidate.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{candidate.name}</h3>
                        <Badge
                          variant="secondary"
                          className={`${getStatusColor(candidate.status)} flex items-center space-x-1`}
                        >
                          {getStatusIcon(candidate.status)}
                          <span>{candidate.status}</span>
                        </Badge>
                      </div>

                      <p className="text-slate-400 text-sm mb-2">{candidate.email}</p>
                      <p className="text-white font-medium mb-3">{candidate.position}</p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-slate-400">Applied</p>
                          <p className="text-sm text-white">{candidate.appliedDate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Interview</p>
                          <p className="text-sm text-white">{candidate.interviewDate}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-300">{candidate.language}</span>
                        </div>
                      </div>

                      {candidate.score > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-slate-400">AI Score</span>
                              <span className="text-xs text-white">{candidate.score}%</span>
                            </div>
                            <Progress value={candidate.score} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-slate-400 flex items-center">
                                <Shield className="w-3 h-3 mr-1" />
                                Integrity
                              </span>
                              <span className="text-xs text-white">{candidate.integrityScore}%</span>
                            </div>
                            <Progress value={candidate.integrityScore} className="h-2" />
                          </div>
                        </div>
                      )}

                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                        <div className="flex items-start space-x-2">
                          <Brain className="w-4 h-4 text-purple-400 mt-0.5" />
                          <div>
                            <p className="text-xs text-slate-400 mb-1">AI Insights</p>
                            <p className="text-sm text-slate-300">{candidate.aiInsights}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                      Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          {candidates
            .filter((c) => c.status === "Scheduled")
            .map((candidate) => (
              <Card key={candidate.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{candidate.name}</h4>
                        <p className="text-sm text-slate-400">{candidate.position}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Interview Date</p>
                        <p className="text-white font-medium">{candidate.interviewDate}</p>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-900/50 text-yellow-300">
                        Scheduled
                      </Badge>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600">
                        Start Interview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          {candidates
            .filter((c) => c.status === "In Progress")
            .map((candidate) => (
              <Card key={candidate.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {candidate.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{candidate.name}</h4>
                        <p className="text-sm text-slate-400">{candidate.position}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Integrity Score</p>
                        <p className="text-white font-medium">{candidate.integrityScore}%</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-900/50 text-blue-300">
                        In Progress
                      </Badge>
                      <Button size="sm" variant="outline" className="border-blue-600 text-blue-300 bg-transparent">
                        Monitor
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {candidates
            .filter((c) => c.status === "Passed" || c.status === "Under Review")
            .map((candidate) => (
              <Card key={candidate.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{candidate.name}</h4>
                        <p className="text-sm text-slate-400 mb-2">{candidate.position}</p>

                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-xs text-slate-400">AI Score</p>
                            <p className="text-lg font-semibold text-white">{candidate.score}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">Integrity</p>
                            <p className="text-lg font-semibold text-green-400">{candidate.integrityScore}%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className={getStatusColor(candidate.status)}>
                        {candidate.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                        View Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
