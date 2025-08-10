"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, MoreHorizontal, Eye, Edit, Brain, Users, Clock, MapPin } from "lucide-react"

export function JobManagement() {
  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      status: "Active",
      candidates: 45,
      posted: "2 days ago",
      experience: "3-5 years",
      skills: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      title: "Data Scientist",
      department: "Analytics",
      location: "Bangalore",
      type: "Full-time",
      status: "Active",
      candidates: 23,
      posted: "1 week ago",
      experience: "2-4 years",
      skills: ["Python", "ML", "TensorFlow"],
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Mumbai",
      type: "Full-time",
      status: "Draft",
      candidates: 0,
      posted: "Draft",
      experience: "4-6 years",
      skills: ["Strategy", "Analytics", "Leadership"],
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Job Management</h2>
          <p className="text-slate-400">Create and manage job postings with AI-powered interviews</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Plus className="w-4 h-4 mr-2" />
          Create New Job
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="active" className="data-[state=active]:bg-slate-700">
            Active Jobs
          </TabsTrigger>
          <TabsTrigger value="draft" className="data-[state=active]:bg-slate-700">
            Drafts
          </TabsTrigger>
          <TabsTrigger value="create" className="data-[state=active]:bg-slate-700">
            Create Job
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {/* Search and Filter */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Search jobs..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm pl-10"
                  />
                </div>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Jobs List */}
          <div className="space-y-4">
            {jobs
              .filter((job) => job.status === "Active")
              .map((job) => (
                <Card
                  key={job.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.01] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                          <Badge variant="secondary" className="bg-green-900/50 text-green-300">
                            {job.status}
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-slate-400 mb-3">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {job.candidates} candidates
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.posted}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-slate-400">
                          {job.department} • {job.type} • {job.experience}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                          <Brain className="w-4 h-4 mr-1" />
                          AI Setup
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          <div className="space-y-4">
            {jobs
              .filter((job) => job.status === "Draft")
              .map((job) => (
                <Card
                  key={job.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.01] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                          <Badge variant="secondary" className="bg-yellow-900/50 text-yellow-300">
                            {job.status}
                          </Badge>
                        </div>

                        <p className="text-sm text-slate-400 mb-3">
                          {job.department} • {job.type} • {job.experience}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                          Publish
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Create New Job</CardTitle>
              <CardDescription className="text-slate-400">
                Set up a new job posting with AI-powered interview configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-slate-300">
                    Job Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g. Senior Frontend Developer"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-slate-300">
                    Department
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-slate-300">
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g. Remote, Bangalore"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-slate-300">
                    Experience Level
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-slate-300">
                  Job Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and requirements..."
                  className="min-h-32 bg-slate-700/50 border-slate-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="text-slate-300">
                  Required Skills
                </Label>
                <Input
                  id="skills"
                  placeholder="e.g. React, TypeScript, Node.js (comma separated)"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">AI Interview Language</Label>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                    <SelectValue placeholder="Select interview language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="kannada">Kannada</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Brain className="w-4 h-4 mr-2" />
                  Generate AI Questions
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Save as Draft
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
