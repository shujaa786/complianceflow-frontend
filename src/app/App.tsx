import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Sidebar } from "./components/layout/sidebar";
import { LoginPage } from "./pages/login";
import { DashboardPage } from "./pages/dashboard";
import { UploadPage } from "./pages/upload";
import { ExtractionPage } from "./pages/extraction";
import { DocumentsPage } from "./pages/documents";
import { ApprovalsPage } from "./pages/approvals";
import { AuditPage } from "./pages/audit";
import { NotificationsPage } from "./pages/notifications";
import { AnalyticsPage } from "./pages/analytics";
import { SettingsPage } from "./pages/settings";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      {children}
    </div>
  );
}

export default function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <AppLayout>
                <DashboardPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/upload"
          element={
            isAuthenticated ? (
              <AppLayout>
                <UploadPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/extraction"
          element={
            isAuthenticated ? (
              <AppLayout>
                <ExtractionPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/documents"
          element={
            isAuthenticated ? (
              <AppLayout>
                <DocumentsPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/approvals"
          element={
            isAuthenticated ? (
              <AppLayout>
                <ApprovalsPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/audit"
          element={
            isAuthenticated ? (
              <AppLayout>
                <AuditPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/notifications"
          element={
            isAuthenticated ? (
              <AppLayout>
                <NotificationsPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/analytics"
          element={
            isAuthenticated ? (
              <AppLayout>
                <AnalyticsPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/settings"
          element={
            isAuthenticated ? (
              <AppLayout>
                <SettingsPage />
              </AppLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
