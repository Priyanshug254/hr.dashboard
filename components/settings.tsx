"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Brain, Shield, Globe, Bell, Users, Key, Database, Zap } from "lucide-react"

export function Settings() {
  const [aiVoiceEnabled, setAiVoiceEnabled] = useState(true)
  const [cheatDetectionEnabled, setCheatDetectionEnabled] = useState(true)
  const [multilingualEnabled, setMultilingualEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [slackNotifications, setSlackNotifications] = useState(false)
  const [interviewDuration, setInterviewDuration] = useState([45])
  const [integrityThreshold, setIntegrityThreshold] = useState([85])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Settings</h2>
          <p className="text-slate-400">Configure your HiringMinds.ai platform</p>
        </div>
      </div>

      <Tabs defaultValue="ai" className="space-y-6">
        <TabsList className="bg-slate-800/50 border-slate-700">
          <TabsTrigger value="ai" className="data-[state=active]:bg-slate-700 text-white">
            AI Configuration
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-slate-700 text-white">
            Security
          </TabsTrigger>
          <TabsTrigger value="integrations" className="data-[state=active]:bg-slate-700 text-white">
            Integrations
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-slate-700 text-white">
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                AI Interview Configuration
              </CardTitle>
              <CardDescription className="text-slate-400">
                Configure AI voice agent and interview parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-slate-300">AI Voice Agent</Label>
                  <p className="text-sm text-slate-400">Enable AI-powered voice interviews</p>
                </div>
                <Switch checked={aiVoiceEnabled} onCheckedChange={setAiVoiceEnabled} />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">Default Interview Duration (minutes)</Label>
                <div className="px-3">
                  <Slider
                    value={interviewDuration}
                    onValueChange={setInterviewDuration}
                    max={120}
                    min={15}
                    step={15}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-slate-400 mt-1">
                    <span>15 min</span>
                    <span className="text-white font-medium">{interviewDuration[0]} min</span>
                    <span>120 min</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">AI Model</Label>
                <Select defaultValue="gpt-4">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4 (Recommended)</SelectItem>
                    <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="llama3">LLaMA 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">Voice Provider</Label>
                <Select defaultValue="elevenlabs">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elevenlabs">ElevenLabs (Recommended)</SelectItem>
                    <SelectItem value="openai">OpenAI TTS</SelectItem>
                    <SelectItem value="google">Google Cloud TTS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                Multilingual Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-slate-300">Enable Multilingual Interviews</Label>
                  <p className="text-sm text-slate-400">Support for regional languages</p>
                </div>
                <Switch checked={multilingualEnabled} onCheckedChange={setMultilingualEnabled} />
              </div>

              {multilingualEnabled && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                  {["English", "Hindi", "Tamil", "Kannada", "Bengali", "Telugu"].map((lang) => (
                    <div key={lang} className="flex items-center space-x-2">
                      <Switch defaultChecked={lang === "English" || lang === "Hindi"} />
                      <Label className="text-slate-300">{lang}</Label>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Cheat Detection & Security
              </CardTitle>
              <CardDescription className="text-slate-400">
                Configure anti-cheating mechanisms and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-slate-300">Enable Cheat Detection</Label>
                  <p className="text-sm text-slate-400">AI-powered integrity monitoring</p>
                </div>
                <Switch checked={cheatDetectionEnabled} onCheckedChange={setCheatDetectionEnabled} />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">Integrity Score Threshold</Label>
                <div className="px-3">
                  <Slider
                    value={integrityThreshold}
                    onValueChange={setIntegrityThreshold}
                    max={100}
                    min={50}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-slate-400 mt-1">
                    <span>50%</span>
                    <span className="text-white font-medium">{integrityThreshold[0]}%</span>
                    <span>100%</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400">Candidates below this threshold will be flagged for review</p>
              </div>

              {cheatDetectionEnabled && (
                <div className="space-y-4 pt-4 border-t border-slate-700">
                  <h4 className="font-medium text-white">Detection Methods</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label className="text-slate-300">Face Detection</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label className="text-slate-300">Tab Switching Monitor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label className="text-slate-300">Screen Recording</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch defaultChecked />
                      <Label className="text-slate-300">Audio Analysis</Label>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Key className="w-5 h-5 mr-2 text-yellow-400" />
                API Keys & Credentials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-300">OpenAI API Key</Label>
                <Input
                  type="password"
                  placeholder="sk-..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">ElevenLabs API Key</Label>
                <Input
                  type="password"
                  placeholder="..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">Whisper API Key</Label>
                <Input
                  type="password"
                  placeholder="..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                />
              </div>

              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Save Credentials
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="w-5 h-5 mr-2 text-blue-400" />
                ATS & HRM Integrations
              </CardTitle>
              <CardDescription className="text-slate-400">
                Connect with your existing HR tools and systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">BambooHR</h4>
                    <Switch />
                  </div>
                  <p className="text-sm text-slate-400">Sync candidate data and hiring workflows</p>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">Workday</h4>
                    <Switch />
                  </div>
                  <p className="text-sm text-slate-400">Enterprise HR management integration</p>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">Greenhouse</h4>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-slate-400">Applicant tracking system integration</p>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">Lever</h4>
                    <Switch />
                  </div>
                  <p className="text-sm text-slate-400">Talent acquisition platform sync</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                Calendar & Communication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-300">Calendar Integration</Label>
                <Select defaultValue="google">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Calendar</SelectItem>
                    <SelectItem value="outlook">Microsoft Outlook</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">Email Provider</Label>
                <Select defaultValue="smtp">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smtp">SMTP</SelectItem>
                    <SelectItem value="sendgrid">SendGrid</SelectItem>
                    <SelectItem value="mailgun">Mailgun</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">WhatsApp Business API</Label>
                <Input
                  placeholder="Enter API endpoint"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="w-5 h-5 mr-2 text-yellow-400" />
                Notification Preferences
              </CardTitle>
              <CardDescription className="text-slate-400">
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-white">Email Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Interview Completed</Label>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Cheat Detection Alert</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Daily Summary</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">System Updates</Label>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-white">Slack Integration</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Enable Slack Notifications</Label>
                    <Switch checked={slackNotifications} onCheckedChange={setSlackNotifications} />
                  </div>
                  {slackNotifications && (
                    <div className="space-y-2 pt-2">
                      <Label className="text-slate-300">Slack Webhook URL</Label>
                      <Input
                        placeholder="https://hooks.slack.com/..."
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-white">Mobile Push Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Interview Alerts</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Security Alerts</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                Team Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-300">Notification Recipients</Label>
                <Input
                  placeholder="Enter email addresses (comma separated)"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300">Escalation Rules</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="15min">After 15 minutes</SelectItem>
                    <SelectItem value="1hour">After 1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
          Reset to Defaults
        </Button>
        <Button className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
          Save All Settings
        </Button>
      </div>
    </div>
  )
}
