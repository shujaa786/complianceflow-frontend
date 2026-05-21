import { Header } from "../components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Users, Trash2, Edit2, Plus } from "lucide-react";
import * as Switch from "@radix-ui/react-switch";

const users = [
  { name: "Sarah Chen", email: "sarah.chen@company.com", role: "Admin", department: "Finance", status: "Active" },
  { name: "Mike Johnson", email: "mike.johnson@company.com", role: "Manager", department: "Legal", status: "Active" },
  { name: "Emma Wilson", email: "emma.wilson@company.com", role: "Manager", department: "HR", status: "Active" },
  { name: "David Brown", email: "david.brown@company.com", role: "Approver", department: "Compliance", status: "Active" },
  { name: "Lisa Anderson", email: "lisa.anderson@company.com", role: "Viewer", department: "Operations", status: "Inactive" },
];

const departments = [
  { name: "Finance", users: 12, documents: 342 },
  { name: "Legal", users: 8, documents: 187 },
  { name: "Human Resources", users: 6, documents: 234 },
  { name: "Operations", users: 15, documents: 289 },
  { name: "Compliance", users: 5, documents: 195 },
];

const integrations = [
  { name: "Slack", description: "Real-time notifications", status: "Connected", icon: "💬" },
  { name: "Google Drive", description: "Document storage sync", status: "Connected", icon: "📁" },
  { name: "Microsoft Teams", description: "Collaboration alerts", status: "Not Connected", icon: "👥" },
  { name: "Salesforce", description: "CRM integration", status: "Not Connected", icon: "☁️" },
];

export function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Admin Settings" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage users and their permissions</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        User
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Role
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Department
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {users.map((user, index) => (
                      <tr key={index} className="hover:bg-accent/30">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-700">
                              {user.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <span className="text-sm">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-muted-foreground">
                          {user.email}
                        </td>
                        <td className="px-4 py-4">
                          <Badge variant="secondary">{user.role}</Badge>
                        </td>
                        <td className="px-4 py-4 text-sm text-muted-foreground">
                          {user.department}
                        </td>
                        <td className="px-4 py-4">
                          <Badge variant={user.status === "Active" ? "success" : "secondary"}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Departments</CardTitle>
                    <CardDescription>Manage organizational departments</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm">{dept.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {dept.users} users • {dept.documents} documents
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workflow Configuration</CardTitle>
                <CardDescription>Configure approval workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm">Default Approval Steps</label>
                  <Input type="number" defaultValue="3" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">SLA Deadline (days)</label>
                  <Input type="number" defaultValue="5" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Require Sequential Approval</p>
                    <p className="text-xs text-muted-foreground">
                      Approvers must review in order
                    </p>
                  </div>
                  <Switch.Root
                    defaultChecked
                    className="relative h-6 w-11 rounded-full bg-switch-background data-[state=checked]:bg-blue-600"
                  >
                    <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Auto-Archive After Approval</p>
                    <p className="text-xs text-muted-foreground">
                      Move to archive after 30 days
                    </p>
                  </div>
                  <Switch.Root
                    className="relative h-6 w-11 rounded-full bg-switch-background data-[state=checked]:bg-blue-600"
                  >
                    <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                </div>
                <Button className="w-full">Save Configuration</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect external services and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{integration.icon}</div>
                      <div>
                        <p className="text-sm">{integration.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {integration.description}
                        </p>
                      </div>
                    </div>
                    <Badge variant={integration.status === "Connected" ? "success" : "secondary"}>
                      {integration.status}
                    </Badge>
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
