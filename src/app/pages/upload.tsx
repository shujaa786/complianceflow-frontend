import { useState } from "react";
import { Header } from "../components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Upload, FileText, X, CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";

export function UploadPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<Array<{ name: string; size: string; status: "uploading" | "processing" | "complete" }>>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  };

  const processFiles = (fileList: File[]) => {
    const newFiles = fileList.map(file => ({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      status: "uploading" as const,
    }));

    setFiles(prev => [...prev, ...newFiles]);

    newFiles.forEach((_, index) => {
      setTimeout(() => {
        setFiles(prev => prev.map((f, i) =>
          i === prev.length - newFiles.length + index ? { ...f, status: "processing" } : f
        ));
      }, 1000);

      setTimeout(() => {
        setFiles(prev => prev.map((f, i) =>
          i === prev.length - newFiles.length + index ? { ...f, status: "complete" } : f
        ));
      }, 2500);
    });
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Header title="Upload Documents" />

      <main className="flex-1 overflow-y-auto bg-accent/30 p-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Documents</CardTitle>
              <CardDescription>
                Drag and drop files or click to browse. Supported formats: PDF, DOCX, CSV
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-colors ${
                  isDragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-border bg-accent/50 hover:border-blue-400 hover:bg-accent"
                }`}
              >
                <input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.csv"
                  onChange={handleFileSelect}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                <Upload className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-lg">Drop files here or click to upload</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Maximum file size: 50MB
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm">Document Type</label>
                  <select className="flex h-10 w-full rounded-lg border border-border bg-input-background px-3 py-2 text-sm">
                    <option>Invoice</option>
                    <option>Contract</option>
                    <option>Tax Report</option>
                    <option>Employee Document</option>
                    <option>Compliance File</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Department</label>
                  <select className="flex h-10 w-full rounded-lg border border-border bg-input-background px-3 py-2 text-sm">
                    <option>Finance</option>
                    <option>Legal</option>
                    <option>Human Resources</option>
                    <option>Operations</option>
                    <option>Compliance</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {files.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Upload Queue</CardTitle>
                <CardDescription>Files being processed by AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-lg border border-border bg-background p-4"
                    >
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm">{file.name}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-xs text-muted-foreground">{file.size}</p>
                          {file.status === "uploading" && (
                            <>
                              <span className="text-xs text-muted-foreground">•</span>
                              <p className="text-xs text-blue-600">Uploading...</p>
                            </>
                          )}
                          {file.status === "processing" && (
                            <>
                              <span className="text-xs text-muted-foreground">•</span>
                              <Loader2 className="h-3 w-3 animate-spin text-blue-600" />
                              <p className="text-xs text-blue-600">AI Processing...</p>
                            </>
                          )}
                          {file.status === "complete" && (
                            <>
                              <span className="text-xs text-muted-foreground">•</span>
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <p className="text-xs text-green-600">Complete</p>
                            </>
                          )}
                        </div>
                        {file.status === "uploading" && (
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-accent">
                            <div className="h-full w-2/3 animate-pulse rounded-full bg-blue-600" />
                          </div>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {files.every(f => f.status === "complete") && (
                  <div className="mt-6 flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setFiles([])}>
                      Clear All
                    </Button>
                    <Button onClick={() => navigate("/extraction")}>
                      View Extracted Data
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
