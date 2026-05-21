import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Header } from "../components/layout/header";
import { TrendingUp, TrendingDown, Clock, AlertTriangle, FileText, CheckCircle } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const kpiData = [
  { title: "Pending Approvals", value: "24", change: "+12%", trend: "up", icon: Clock, color: "bg-orange-500" },
  { title: "Compliance Violations", value: "3", change: "-8%", trend: "down", icon: AlertTriangle, color: "bg-red-500" },
  { title: "Uploaded Documents", value: "1,247", change: "+23%", trend: "up", icon: FileText, color: "bg-blue-500" },
  { title: "Avg. Approval Time", value: "2.4 days", change: "-15%", trend: "down", icon: CheckCircle, color: "bg-green-500" },
];

const activityData = [
  { time: "2 min ago", user: "Sarah Chen", action: "approved", document: "Q4 Financial Report" },
  { time: "15 min ago", user: "Mike Johnson", action: "uploaded", document: "Vendor Contract - Acme Corp" },
  { time: "1 hour ago", user: "Emma Wilson", action: "rejected", document: "Employee Reimbursement #4521" },
  { time: "2 hours ago", user: "David Brown", action: "commented on", document: "Tax Compliance Form 2026" },
  { time: "3 hours ago", user: "Lisa Anderson", action: "approved", document: "NDA - TechStart Inc" },
];

const approvalTrend = [
  { month: "Jan", approvals: 145, pending: 28 },
  { month: "Feb", approvals: 178, pending: 32 },
  { month: "Mar", approvals: 201, pending: 24 },
  { month: "Apr", approvals: 189, pending: 19 },
  { month: "May", approvals: 234, pending: 24 },
];

const documentsByType = [
  { name: "Invoices", value: 412, color: "#3b82f6" },
  { name: "Contracts", value: 287, color: "#8b5cf6" },
  { name: "Tax Reports", value: 198, color: "#10b981" },
  { name: "Employee Docs", value: 234, color: "#f59e0b" },
  { name: "Other", value: 116, color: "#6b7280" },
];

export function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Dashboard" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {kpiData.map((kpi) => (
              <Card key={kpi.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{kpi.title}</p>
                      <h3 className="mt-2 text-3xl">{kpi.value}</h3>
                      <div className="mt-2 flex items-center gap-1 text-sm">
                        {kpi.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-green-600" />
                        )}
                        <span className="text-green-600">{kpi.change}</span>
                        <span className="text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${kpi.color}`}>
                      <kpi.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Approval Trends</CardTitle>
                <CardDescription>Monthly approval and pending document trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={approvalTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line type="monotone" dataKey="approvals" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documents by Type</CardTitle>
                <CardDescription>Distribution of document categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <ResponsiveContainer width="60%" height={300}>
                    <PieChart>
                      <Pie
                        data={documentsByType}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {documentsByType.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2">
                    {documentsByType.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                        <span className="ml-auto text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest document workflow updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityData.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-700">
                      {activity.user.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span>{activity.user}</span>{" "}
                        <span className="text-muted-foreground">{activity.action}</span>{" "}
                        <span className="text-blue-600">{activity.document}</span>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
