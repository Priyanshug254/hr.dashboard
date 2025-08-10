import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Users, Clock, Brain, Shield, Globe, Target, Award, AlertTriangle } from "lucide-react"

export function Analytics() {
  const performanceMetrics = [
    { label: "Interview Success Rate", value: 94, trend: "+5.2%" },
    { label: "Cheat Detection Accuracy", value: 98, trend: "+1.1%" },
    { label: "Average Interview Duration", value: 42, trend: "-3 min", unit: "min" },
    { label: "Candidate Satisfaction", value: 87, trend: "+2.8%" },
  ]

  const languageStats = [
    { language: "English", candidates: 156, percentage: 62 },
    { language: "Hindi", candidates: 45, percentage: 18 },
    { language: "Tamil", candidates: 28, percentage: 11 },
    { language: "Kannada", candidates: 15, percentage: 6 },
    { language: "Others", candidates: 8, percentage: 3 },
  ]

  const departmentStats = [
    { department: "Engineering", total: 89, passed: 67, rate: 75 },
    { department: "Product", total: 34, passed: 28, rate: 82 },
    { department: "Design", total: 23, passed: 19, rate: 83 },
    { department: "Marketing", total: 18, passed: 14, rate: 78 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Analytics & Insights</h2>
          <p className="text-slate-400">AI-powered recruitment analytics and performance metrics</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                </div>
                <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                  {metric.trend}
                </Badge>
              </div>
              <h3 className="text-sm font-medium text-slate-400 mb-1">{metric.label}</h3>
              <p className="text-2xl font-bold text-white">
                {metric.value}
                {metric.unit || "%"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="overview" className="data-[state=active]:bg-slate-700 text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-slate-700 text-white">
            Performance
          </TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-slate-700 text-white">
            AI Insights
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-slate-700 text-white">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Language Distribution */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  Language Distribution
                </CardTitle>
                <CardDescription className="text-slate-400">Interview languages used by candidates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {languageStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white">{stat.language}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-slate-400">{stat.candidates}</span>
                        <span className="text-sm text-white font-medium">{stat.percentage}%</span>
                      </div>
                    </div>
                    <Progress value={stat.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Department Performance */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-400" />
                  Department Performance
                </CardTitle>
                <CardDescription className="text-slate-400">Success rates by department</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {departmentStats.map((dept, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">{dept.department}</h4>
                      <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                        {dept.rate}%
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                      <span>Total: {dept.total}</span>
                      <span>Passed: {dept.passed}</span>
                    </div>
                    <Progress value={dept.rate} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Trends */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                Recent Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Interview Quality</h4>
                  <p className="text-2xl font-bold text-green-400 mb-1">+12%</p>
                  <p className="text-xs text-slate-400">vs last month</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Time Efficiency</h4>
                  <p className="text-2xl font-bold text-blue-400 mb-1">-8min</p>
                  <p className="text-xs text-slate-400">avg duration</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Candidate Volume</h4>
                  <p className="text-2xl font-bold text-purple-400 mb-1">+24%</p>
                  <p className="text-xs text-slate-400">this quarter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  Top Performing Positions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white">Senior Frontend Developer</h4>
                    <p className="text-sm text-slate-400">Average Score: 89%</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                    Excellent
                  </Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white">Product Manager</h4>
                    <p className="text-sm text-slate-400">Average Score: 86%</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                    Excellent
                  </Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white">Data Scientist</h4>
                    <p className="text-sm text-slate-400">Average Score: 82%</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-900/50 text-blue-300">
                    Good
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-400" />
                  Security Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Suspicious Activity Detected</h4>
                    <p className="text-sm text-slate-400">3 candidates flagged for potential cheating</p>
                    <p className="text-xs text-red-300 mt-1">Requires manual review</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                  <Clock className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Extended Interview Duration</h4>
                    <p className="text-sm text-slate-400">2 interviews exceeded time limits</p>
                    <p className="text-xs text-yellow-300 mt-1">Monitor for technical issues</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                AI-Generated Insights
              </CardTitle>
              <CardDescription className="text-slate-400">
                Intelligent analysis of recruitment patterns and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">Question Effectiveness</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    Technical coding questions show 23% higher correlation with job performance compared to theoretical
                    questions.
                  </p>
                  <Badge variant="secondary" className="bg-blue-900/50 text-blue-300">
                    Recommendation: Increase coding assessments
                  </Badge>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">Language Preference Impact</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    Candidates interviewed in their native language score 15% higher on average.
                  </p>
                  <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                    Insight: Multilingual support is effective
                  </Badge>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">Optimal Interview Duration</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    45-minute interviews provide the best balance between thoroughness and candidate experience.
                  </p>
                  <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                    Optimization: Adjust default duration
                  </Badge>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">Cheat Detection Patterns</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    Most cheating attempts occur during technical assessments, particularly in the first 10 minutes.
                  </p>
                  <Badge variant="secondary" className="bg-red-900/50 text-red-300">
                    Alert: Enhanced monitoring needed
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Generate Reports</CardTitle>
              <CardDescription className="text-slate-400">
                Create detailed reports for stakeholders and compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-center hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-medium text-white mb-2">Monthly Performance</h4>
                  <p className="text-sm text-slate-400 mb-3">Comprehensive monthly analytics</p>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                    Generate Report
                  </button>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-center hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="font-medium text-white mb-2">Candidate Summary</h4>
                  <p className="text-sm text-slate-400 mb-3">Individual candidate reports</p>
                  <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm">
                    Generate Report
                  </button>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-center hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
                  <Shield className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h4 className="font-medium text-white mb-2">Security Audit</h4>
                  <p className="text-sm text-slate-400 mb-3">Cheat detection and integrity</p>
                  <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm">
                    Generate Report
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
