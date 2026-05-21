import { useState } from "react";
import { Header } from "../components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { CheckCircle2, XCircle, MessageSquare, Clock, User, FileText } from "lucide-react";

const workflowSteps = [
  { step: "Uploaded", user: "Sarah Chen", date: "2026-05-15 10:30 AM", status: "complete" },
  { step: "AI Extraction", user: "System", date: "2026-05-15 10:31 AM", status: "complete" },
  { step: "Finance Review", user: "Mike Johnson", date: "2026-05-15 2:45 PM", status: "complete" },
  { step: "Manager Approval", user: "Emma Wilson", date: "Pending", status: "current" },
  { step: "Final Approval", user: "David Brown", date: "Pending", status: "pending" },
];

const comments = [
  { user: "Mike Johnson", role: "Finance Reviewer", date: "2026-05-15 2:45 PM", comment: "Amounts verified against PO. Everything looks good." },
  { user: "Sarah Chen", role: "Uploader", date: "2026-05-15 10:35 AM", comment: "Urgent - payment due by end of month" },
];

export function ApprovalsPage() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Approval Workflow" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl">Vendor Contract - Acme Corp</h2>
              <p className="text-sm text-muted-foreground">Document ID: DOC-002</p>
            </div>
            <Badge variant="warning" className="h-fit">
              <Clock className="mr-1 h-3 w-3" />
              Awaiting Your Approval
            </Badge>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Document Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-border bg-accent/50">
                    <div className="text-center">
                      <FileText className="mx-auto h-16 w-16 text-muted-foreground" />
                      <p className="mt-4 text-sm text-muted-foreground">
                        Contract_Acme_2026.pdf
                      </p>
                      <Button variant="link" className="mt-2">
                        Open Full Document
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workflow Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workflowSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="relative flex flex-col items-center">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              step.status === "complete"
                                ? "bg-green-100 text-green-600"
                                : step.status === "current"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {step.status === "complete" ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : step.status === "current" ? (
                              <Clock className="h-5 w-5" />
                            ) : (
                              <User className="h-5 w-5" />
                            )}
                          </div>
                          {index < workflowSteps.length - 1 && (
                            <div
                              className={`h-12 w-0.5 ${
                                step.status === "complete"
                                  ? "bg-green-300"
                                  : "bg-gray-200"
                              }`}
                            />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{step.step}</p>
                            {step.status === "current" && (
                              <Badge variant="warning">In Progress</Badge>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {step.user}
                          </p>
                          <p className="text-xs text-muted-foreground">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comments & Discussion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {comments.map((comment, index) => (
                      <div key={index} className="rounded-lg border border-border bg-accent/30 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-700">
                            {comment.user.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm">{comment.user}</p>
                              <span className="text-xs text-muted-foreground">•</span>
                              <p className="text-xs text-muted-foreground">{comment.role}</p>
                            </div>
                            <p className="mt-2 text-sm">{comment.comment}</p>
                            <p className="mt-2 text-xs text-muted-foreground">{comment.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex h-10 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm"
                      />
                      <Button>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Comment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Document Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="mt-1">Contract</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="mt-1">Legal</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Uploaded By</p>
                    <p className="mt-1">Mike Johnson</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Upload Date</p>
                    <p className="mt-1">May 17, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">SLA Deadline</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <p className="text-orange-600">2 days remaining</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Approval Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    className="w-full"
                    onClick={() => setSelectedAction("approve")}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setSelectedAction("request-changes")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request Changes
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={() => setSelectedAction("reject")}
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>

                  {selectedAction && (
                    <div className="mt-4 rounded-lg bg-blue-50 p-4">
                      <p className="text-sm text-blue-900">
                        Action selected: <strong className="capitalize">{selectedAction}</strong>
                      </p>
                      <p className="mt-1 text-xs text-blue-700">
                        This will move the document to the next stage
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assigned Reviewers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
                      MJ
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Mike Johnson</p>
                      <p className="text-xs text-muted-foreground">Approved</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700">
                      EW
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">Emma Wilson</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                    <Clock className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-700">
                      DB
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">David Brown</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
