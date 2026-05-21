import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Upload,
  FileText,
  CheckSquare,
  History,
  Bell,
  BarChart3,
  Settings,
  FileSearch,
} from "lucide-react";
import { cn } from "../../lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Upload", href: "/upload", icon: Upload },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "AI Extraction", href: "/extraction", icon: FileSearch },
  { name: "Approvals", href: "/approvals", icon: CheckSquare },
  { name: "Audit Logs", href: "/audit", icon: History },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center gap-3 border-b border-border px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg leading-tight">ComplianceFlow AI</h1>
          <p className="text-xs text-muted-foreground">Enterprise Edition</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
            JD
          </div>
          <div className="flex-1">
            <p className="text-sm">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
