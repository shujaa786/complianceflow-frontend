import { Header } from "../components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Download, TrendingUp } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const approvalTimeData = [
  { month: "Jan", time: 3.2 },
  { month: "Feb", time: 2.8 },
  { month: "Mar", time: 2.5 },
  { month: "Apr", time: 2.7 },
  { month: "May", time: 2.4 },
];

const departmentPerformance = [
  { department: "Finance", approved: 145, rejected: 12, pending: 8 },
  { department: "Legal", approved: 98, rejected: 18, pending: 12 },
  { department: "HR", approved: 134, rejected: 6, pending: 4 },
  { department: "Operations", approved: 167, rejected: 9, pending: 15 },
  { department: "Compliance", approved: 89, rejected: 14, pending: 7 },
];

const complianceIssues = [
  { week: "Week 1", issues: 12 },
  { week: "Week 2", issues: 8 },
  { week: "Week 3", issues: 15 },
  { week: "Week 4", issues: 6 },
];

const processingTime = [
  { day: "Mon", time: 42 },
  { day: "Tue", time: 38 },
  { day: "Wed", time: 45 },
  { day: "Thu", time: 35 },
  { day: "Fri", time: 40 },
  { day: "Sat", time: 28 },
  { day: "Sun", time: 22 },
];

export function AnalyticsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Analytics & Reporting" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl">Performance Analytics</h2>
              <p className="text-sm text-muted-foreground">
                Insights and trends across your document workflow
              </p>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Total Documents</p>
                <h3 className="mt-2 text-3xl">1,247</h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+23% this month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Approval Rate</p>
                <h3 className="mt-2 text-3xl">94.2%</h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+2.3% improvement</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Avg. Processing</p>
                <h3 className="mt-2 text-3xl">36 min</h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>-12% faster</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">AI Accuracy</p>
                <h3 className="mt-2 text-3xl">97.8%</h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+1.2% increase</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Approval Time Trend</CardTitle>
                <CardDescription>Average days to approval over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={approvalTimeData}>
                    <defs>
                      <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="time"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorTime)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Document approval status by department</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={departmentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="department" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="approved" fill="#10b981" />
                    <Bar dataKey="rejected" fill="#ef4444" />
                    <Bar dataKey="pending" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 flex justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-green-500" />
                    <span className="text-sm text-muted-foreground">Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-red-500" />
                    <span className="text-sm text-muted-foreground">Rejected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-orange-500" />
                    <span className="text-sm text-muted-foreground">Pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Issues</CardTitle>
                <CardDescription>Weekly compliance violation trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={complianceIssues}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="week" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="issues"
                      stroke="#ef4444"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Document Processing Time</CardTitle>
                <CardDescription>Average minutes to process by day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={processingTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="time" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
