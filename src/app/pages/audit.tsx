import { Header } from "../components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Search, Download, Filter } from "lucide-react";
import { Button } from "../components/ui/button";

const auditLogs = [
  {
    timestamp: "2026-05-20 10:15:32",
    user: "Sarah Chen",
    action: "Approved",
    document: "Q4 Financial Report 2025",
    documentId: "DOC-001",
    details: "Approved with comment",
    ip: "192.168.1.45",
  },
  {
    timestamp: "2026-05-20 09:42:18",
    user: "Mike Johnson",
    action: "Uploaded",
    document: "Vendor Contract - Acme Corp",
    documentId: "DOC-002",
    details: "File uploaded via web interface",
    ip: "192.168.1.78",
  },
  {
    timestamp: "2026-05-20 09:12:05",
    user: "Emma Wilson",
    action: "Rejected",
    document: "Employee Reimbursement #4521",
    documentId: "DOC-003",
    details: "Missing required documentation",
    ip: "192.168.1.92",
  },
  {
    timestamp: "2026-05-19 16:34:21",
    user: "David Brown",
    action: "Commented",
    document: "Tax Compliance Form 2026",
    documentId: "DOC-006",
    details: "Requested clarification on line items",
    ip: "192.168.1.33",
  },
  {
    timestamp: "2026-05-19 14:22:47",
    user: "Lisa Anderson",
    action: "Approved",
    document: "NDA - TechStart Inc",
    documentId: "DOC-005",
    details: "Legal review complete",
    ip: "192.168.1.67",
  },
  {
    timestamp: "2026-05-19 11:05:13",
    user: "System",
    action: "AI Extraction",
    document: "Invoice - Cloud Services May",
    documentId: "DOC-004",
    details: "Metadata extracted with 98% confidence",
    ip: "Internal",
  },
  {
    timestamp: "2026-05-19 10:18:56",
    user: "Sarah Chen",
    action: "Modified",
    document: "Office Supplies Invoice",
    documentId: "DOC-007",
    details: "Updated vendor information",
    ip: "192.168.1.45",
  },
  {
    timestamp: "2026-05-18 15:41:29",
    user: "Mike Johnson",
    action: "Archived",
    document: "Annual Audit Report",
    documentId: "DOC-008",
    details: "Moved to archived status",
    ip: "192.168.1.78",
  },
];

const actionColors = {
  Approved: "success",
  Rejected: "destructive",
  Uploaded: "default",
  Commented: "secondary",
  Modified: "warning",
  Archived: "secondary",
  "AI Extraction": "default",
} as const;

export function AuditPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Audit Logs" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative flex-1 min-w-[300px]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search audit logs..."
                    className="pl-10"
                  />
                </div>

                <div className="flex gap-2">
                  <input
                    type="date"
                    className="flex h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  />
                  <span className="flex items-center text-sm text-muted-foreground">to</span>
                  <input
                    type="date"
                    className="flex h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  />

                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>

                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Logs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map((log, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent/30"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-700">
                        {log.user === "System" ? "SYS" : log.user.split(" ").map(n => n[0]).join("")}
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm">
                              <span className="font-medium">{log.user}</span>{" "}
                              <span className="text-muted-foreground">{log.action.toLowerCase()}</span>{" "}
                              <span className="text-blue-600">{log.document}</span>
                            </p>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {log.timestamp} • {log.documentId}
                          </p>
                        </div>
                        <Badge variant={actionColors[log.action as keyof typeof actionColors]}>
                          {log.action}
                        </Badge>
                      </div>
                      <div className="rounded-md bg-accent/50 p-3">
                        <p className="text-sm text-muted-foreground">{log.details}</p>
                        <p className="mt-1 text-xs text-muted-foreground">IP: {log.ip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <p className="text-sm text-muted-foreground">
                  Showing 8 of 1,247 events
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Total Events Today</p>
                <h3 className="mt-2 text-3xl">142</h3>
                <p className="mt-2 text-xs text-green-600">+18% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Active Users</p>
                <h3 className="mt-2 text-3xl">28</h3>
                <p className="mt-2 text-xs text-muted-foreground">Across all departments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Failed Actions</p>
                <h3 className="mt-2 text-3xl">0</h3>
                <p className="mt-2 text-xs text-green-600">System stable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
