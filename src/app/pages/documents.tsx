import { useState } from "react";
import { Header } from "../components/layout/header";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Search, Filter, Download, MoreVertical, Eye } from "lucide-react";
import { useNavigate } from "react-router";

const documents = [
  { id: "DOC-001", name: "Q4 Financial Report 2025", type: "Tax Report", department: "Finance", uploadDate: "2026-05-18", status: "approved", uploader: "Sarah Chen" },
  { id: "DOC-002", name: "Vendor Contract - Acme Corp", type: "Contract", department: "Legal", uploadDate: "2026-05-17", status: "pending", uploader: "Mike Johnson" },
  { id: "DOC-003", name: "Employee Reimbursement #4521", type: "Employee Document", department: "HR", uploadDate: "2026-05-16", status: "rejected", uploader: "Emma Wilson" },
  { id: "DOC-004", name: "Invoice - Cloud Services May", type: "Invoice", department: "Operations", uploadDate: "2026-05-15", status: "pending", uploader: "David Brown" },
  { id: "DOC-005", name: "NDA - TechStart Inc", type: "Contract", department: "Legal", uploadDate: "2026-05-14", status: "approved", uploader: "Lisa Anderson" },
  { id: "DOC-006", name: "Tax Compliance Form 2026", type: "Tax Report", department: "Compliance", uploadDate: "2026-05-13", status: "pending", uploader: "John Smith" },
  { id: "DOC-007", name: "Office Supplies Invoice", type: "Invoice", department: "Operations", uploadDate: "2026-05-12", status: "approved", uploader: "Sarah Chen" },
  { id: "DOC-008", name: "Annual Audit Report", type: "Compliance File", department: "Compliance", uploadDate: "2026-05-11", status: "archived", uploader: "Mike Johnson" },
];

const statusColors = {
  pending: "warning",
  approved: "success",
  rejected: "destructive",
  archived: "secondary",
} as const;

export function DocumentsPage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredDocs = documents.filter(doc => {
    if (selectedType !== "all" && doc.type !== selectedType) return false;
    if (selectedStatus !== "all" && doc.status !== selectedStatus) return false;
    return true;
  });

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Document Management" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative flex-1 min-w-[300px]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search documents..."
                    className="pl-10"
                  />
                </div>

                <div className="flex gap-2">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="flex h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="Invoice">Invoices</option>
                    <option value="Contract">Contracts</option>
                    <option value="Tax Report">Tax Reports</option>
                    <option value="Employee Document">Employee Docs</option>
                    <option value="Compliance File">Compliance</option>
                  </select>

                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="flex h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="archived">Archived</option>
                  </select>

                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    More Filters
                  </Button>

                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border bg-accent/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Document ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Upload Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Uploader
                      </th>
                      <th className="px-6 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-background">
                    {filteredDocs.map((doc) => (
                      <tr key={doc.id} className="hover:bg-accent/30 transition-colors">
                        <td className="px-6 py-4 text-sm text-blue-600">
                          {doc.id}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {doc.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {doc.type}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {doc.department}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {doc.uploadDate}
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant={statusColors[doc.status as keyof typeof statusColors]}>
                            {doc.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {doc.uploader}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => navigate("/approvals")}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between border-t border-border px-6 py-4">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredDocs.length} of {documents.length} documents
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
