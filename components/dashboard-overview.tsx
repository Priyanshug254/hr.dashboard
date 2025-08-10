import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Briefcase,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Video,
  Brain,
  Shield,
} from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">24</div>
            <p className="text-xs text-slate-400">+3 from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Candidates</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,247</div>
            <p className="text-xs text-slate-400">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">AI Interviews</CardTitle>
            <Video className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89</div>
            <p className="text-xs text-slate-400">This week</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">94.2%</div>
            <p className="text-xs text-slate-400">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription className="text-slate-400">Get started with common recruitment tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Briefcase className="w-6 h-6" />
              <span>Create New Job</span>
            </Button>
            <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Brain className="w-6 h-6" />
              <span>Generate AI Questions</span>
            </Button>
            <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r from-green-600/80 to-emerald-600/80 hover:from-green-500 hover:to-emerald-500 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Calendar className="w-6 h-6" />
              <span>Schedule Interview</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity & AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-400" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-white">AI Interview completed</p>
                  <p className="text-xs text-slate-400">Frontend Developer - John Doe</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                Passed
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-white">Cheat detection alert</p>
                  <p className="text-xs text-slate-400">Backend Developer - Jane Smith</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-yellow-900/50 text-yellow-300">
                Review
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-white">New job posted</p>
                  <p className="text-xs text-slate-400">Data Scientist Position</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-blue-900/50 text-blue-300">
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Interview Success Rate</span>
                <span className="text-white">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Cheat Detection Accuracy</span>
                <span className="text-white">98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Multilingual Coverage</span>
                <span className="text-white">12 Languages</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                  Hindi
                </Badge>
                <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                  Tamil
                </Badge>
                <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                  English
                </Badge>
                <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                  +9 more
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="w-5 h-5 mr-2 text-green-400" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm font-medium text-white">AI Voice Engine</p>
                <p className="text-xs text-slate-400">Operational</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm font-medium text-white">Cheat Detection</p>
                <p className="text-xs text-slate-400">Active</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-sm font-medium text-white">API Integrations</p>
                <p className="text-xs text-slate-400">1 Warning</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
