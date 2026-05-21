import { useState } from "react";
import { Header } from "../components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { FileText, CheckCircle2, AlertCircle, Edit2, Save } from "lucide-react";
import { useNavigate } from "react-router";

const extractedData = [
  { field: "Vendor Name", value: "Acme Corporation", confidence: 98, editable: true },
  { field: "Invoice Number", value: "INV-2026-00142", confidence: 99, editable: true },
  { field: "Invoice Date", value: "2026-05-15", confidence: 97, editable: true },
  { field: "Due Date", value: "2026-06-14", confidence: 96, editable: true },
  { field: "Amount", value: "$12,450.00", confidence: 99, editable: true },
  { field: "Tax Amount", value: "$1,245.00", confidence: 95, editable: true },
  { field: "Payment Terms", value: "Net 30", confidence: 92, editable: true },
  { field: "Currency", value: "USD", confidence: 100, editable: false },
];

export function ExtractionPage() {
  const navigate = useNavigate();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [fields, setFields] = useState(extractedData);

  const handleEdit = (field: string) => {
    setEditingField(field);
  };

  const handleSave = () => {
    setEditingField(null);
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="AI Metadata Extraction" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl">Review Extracted Data</h2>
              <p className="text-sm text-muted-foreground">
                AI-powered extraction with confidence scores
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Reject</Button>
              <Button onClick={() => navigate("/documents")}>Approve & Save</Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Document Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex aspect-[3/4] items-center justify-center rounded-lg border-2 border-dashed border-border bg-accent/50">
                  <div className="text-center">
                    <FileText className="mx-auto h-16 w-16 text-muted-foreground" />
                    <p className="mt-4 text-sm text-muted-foreground">
                      Invoice_Acme_May2026.pdf
                    </p>
                    <Button variant="link" className="mt-2">
                      View Full Document
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Extracted Fields</CardTitle>
                  <Badge variant="success">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Ready for Review
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fields.map((item) => (
                    <div
                      key={item.field}
                      className="rounded-lg border border-border bg-background p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <label className="text-sm text-muted-foreground">
                              {item.field}
                            </label>
                            <Badge
                              variant={item.confidence >= 95 ? "success" : "warning"}
                              className="text-xs"
                            >
                              {item.confidence}% confidence
                            </Badge>
                          </div>
                          {editingField === item.field ? (
                            <div className="mt-2 flex gap-2">
                              <Input
                                defaultValue={item.value}
                                className="flex-1"
                                onChange={(e) => {
                                  setFields(fields.map(f =>
                                    f.field === item.field
                                      ? { ...f, value: e.target.value }
                                      : f
                                  ));
                                }}
                              />
                              <Button size="icon" variant="outline" onClick={handleSave}>
                                <Save className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <p className="mt-2">{item.value}</p>
                          )}
                        </div>
                        {item.editable && editingField !== item.field && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(item.field)}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      {item.confidence < 95 && (
                        <div className="mt-2 flex items-center gap-2 text-xs text-yellow-600">
                          <AlertCircle className="h-3 w-3" />
                          <span>Low confidence - please verify</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg bg-blue-50 p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-900">
                        All required fields extracted successfully
                      </p>
                      <p className="mt-1 text-xs text-blue-700">
                        Review the data and click "Approve & Save" to continue the workflow
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
