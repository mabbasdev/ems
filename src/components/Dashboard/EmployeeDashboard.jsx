import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Building2,
  Bell,
  CheckCircle2,
  Clock,
  AlertCircle,
  Menu,
  X,
  ListTodo,
  FileText,
  Search,
  ArrowUpRight,
  Send,
  LogOut,
  User,
  Settings,
} from "lucide-react";
import TopNavbar from "./e-components/TopNavbar";
import MobileSidebar from "./e-components/MobileSidebar";
import HeroBanner from "./e-components/HeroBanner";
import TaskCards from "./e-components/TaskCards";
import StatusFilter from "./e-components/StatusFilter";
import TaskDetailModal from "./e-components/TaskDetailModal";

export default function EmployeeDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [submissionNote, setSubmissionNote] = useState("");

  // Animation state for smooth tab transitions
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample Task Data Assigned by Admin
  const [tasks, setTasks] = useState([
    {
      id: "TSK-101",
      title: "Fix Cross-Device Responsiveness on Chamber Portal",
      description:
        "Ensure all breakpoint grids scale properly across mobile and tablet viewports. Check mobile drawer navigation performance.",
      priority: "High",
      status: "In Progress",
      dueDate: "Today",
      assignedBy: "Admin (HR/IT)",
      createdDate: "July 20, 2026",
    },
    {
      id: "TSK-102",
      title: "Update API Authentication Middleware",
      description:
        "Implement persistent token refresh headers and handle active session timeouts gracefully.",
      priority: "Medium",
      status: "Under Review",
      dueDate: "Tomorrow",
      assignedBy: "Lead Architect",
      createdDate: "July 18, 2026",
    },
    {
      id: "TSK-103",
      title: "Optimize Image Assets & Web Vitals",
      description:
        "Compress hero graphic assets and implement lazy loading to improve Largest Contentful Paint (LCP) score.",
      priority: "Low",
      status: "Completed",
      dueDate: "July 19, 2026",
      assignedBy: "Admin (HR/IT)",
      createdDate: "July 15, 2026",
    },
    {
      id: "TSK-104",
      title: "Integrate Dark Mode Theme Context",
      description:
        "Verify smooth dark mode toggle persistence using Tailwind utility classes across all operational views.",
      priority: "High",
      status: "In Progress",
      dueDate: "July 24, 2026",
      assignedBy: "Admin (HR/IT)",
      createdDate: "July 21, 2026",
    },
  ]);

  // Priority Badge Styling Helper
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200 dark:border-rose-900";
      case "Medium":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-900";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  // Status Badge Styling Helper
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900";
      case "Under Review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200 dark:border-blue-900";
      default:
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900";
    }
  };

  // Smooth Tab Switch Handler
  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 150); // Matches out duration
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesTab =
      activeTab === "all" ||
      task.status.toLowerCase().replace(" ", "-") === activeTab;
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Handle Task Status Change
  const handleUpdateStatus = (newStatus) => {
    if (!selectedTask) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === selectedTask.id ? { ...t, status: newStatus } : t))
    );
    setSelectedTask((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 relative overflow-x-hidden">
      {/* TOP NAVBAR */}
      <TopNavbar setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />

      {/* MOBILE SIDEBAR & BACKDROP OVERLAY */}
      <MobileSidebar setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-5 sm:space-y-8">

        {/* HERO WELCOME BANNER */}
        <HeroBanner />

        {/* STATS OVERVIEW */}
        <TaskCards tasks={tasks} />

        {/* TASK FILTERING & LIST SECTION */}
        <div className="space-y-4">

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">

            {/* Status Filter Tabs */}
            <StatusFilter activeTab={activeTab} handleTabChange={handleTabChange} />

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search tasks or IDs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 text-xs py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-emerald-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Cross-Fading Task Container */}
          <div
            className={`space-y-3 transition-all duration-200 ease-in-out transform ${isTransitioning
              ? "opacity-0 translate-y-2 scale-[0.99]"
              : "opacity-100 translate-y-0 scale-100"
              }`}
          >
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <Card
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                  className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xs hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.99]"
                >
                  <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                          {task.id}
                        </span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border transition-colors ${getPriorityBadge(task.priority)}`}>
                          {task.priority} Priority
                        </span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border transition-colors ${getStatusBadge(task.status)}`}>
                          {task.status}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                        {task.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {task.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
                      <div className="text-left sm:text-right">
                        <p className="text-[10px] text-slate-400">Due Date</p>
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{task.dueDate}</p>
                      </div>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>

                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 transition-all duration-300">
                <FileText className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">No tasks found matching your filter</p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* TASK DETAIL & WORK SUBMISSION MODAL */}
      {selectedTask && (
        <TaskDetailModal
          setSelectedTask={setSelectedTask}
          selectedTask={selectedTask}
          getPriorityBadge={getPriorityBadge}
          handleUpdateStatus={handleUpdateStatus}
          setSubmissionNote={setSubmissionNote}
          submissionNote={submissionNote}
        />

      )}


    </div>
  );
}