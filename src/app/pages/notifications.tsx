import { Header } from "../components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Bell, CheckCircle2, AlertTriangle, Clock, FileText, Trash2 } from "lucide-react";
import * as Switch from "@radix-ui/react-switch";

const notifications = [
  {
    id: 1,
    type: "approval",
    title: "Document Awaiting Approval",
    message: "Vendor Contract - Acme Corp requires your review",
    time: "5 minutes ago",
    read: false,
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: 2,
    type: "compliance",
    title: "Compliance Alert",
    message: "Tax Compliance Form 2026 has 3 validation warnings",
    time: "1 hour ago",
    read: false,
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    id: 3,
    type: "approved",
    title: "Document Approved",
    message: "Your Q4 Financial Report has been approved by Sarah Chen",
    time: "2 hours ago",
    read: true,
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    type: "expiry",
    title: "Document Expiring Soon",
    message: "NDA - TechStart Inc expires in 7 days",
    time: "3 hours ago",
    read: true,
    icon: AlertTriangle,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    id: 5,
    type: "upload",
    title: "New Document Uploaded",
    message: "Mike Johnson uploaded Office Supplies Invoice",
    time: "5 hours ago",
    read: true,
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
];

export function NotificationsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Notifications" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl">Notification Center</h2>
              <p className="text-sm text-muted-foreground">
                Stay updated on document workflows and compliance alerts
              </p>
            </div>
            <Button variant="outline">Mark All as Read</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex gap-4 rounded-lg border p-4 transition-colors ${
                      notification.read
                        ? "border-border bg-background"
                        : "border-blue-200 bg-blue-50"
                    }`}
                  >
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${notification.bgColor}`}>
                      <notification.icon className={`h-5 w-5 ${notification.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium">{notification.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {notification.message}
                          </p>
                          <p className="mt-2 text-xs text-muted-foreground">
                            {notification.time}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Approval Requests</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when documents need your approval
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
                    <p className="font-medium">Compliance Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts for compliance violations and warnings
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
                    <p className="font-medium">Document Expiry Reminders</p>
                    <p className="text-sm text-muted-foreground">
                      Get reminded before documents expire
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
                    <p className="font-medium">Upload Confirmations</p>
                    <p className="text-sm text-muted-foreground">
                      Notify when document uploads complete
                    </p>
                  </div>
                  <Switch.Root
                    className="relative h-6 w-11 rounded-full bg-switch-background data-[state=checked]:bg-blue-600"
                  >
                    <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Send email summaries of activity
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
                    <p className="font-medium">Webhook Integration</p>
                    <p className="text-sm text-muted-foreground">
                      Push events to external systems via webhooks
                    </p>
                  </div>
                  <Switch.Root
                    className="relative h-6 w-11 rounded-full bg-switch-background data-[state=checked]:bg-blue-600"
                  >
                    <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
