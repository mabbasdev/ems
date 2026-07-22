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
      <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Brand Logo & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open Navigation Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-emerald-700 dark:bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-slate-100">
                ICCI Operations Center
              </span>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
            </button>

            <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">Muhammad Abbas</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Software Engineer Intern</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center border border-emerald-300 dark:border-emerald-800">
                MA
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR & BACKDROP OVERLAY */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        />

        <aside
          className={`absolute top-0 left-0 bottom-0 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-5 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-emerald-700 dark:bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="font-bold text-xs tracking-tight text-slate-900 dark:text-slate-100">
                  ICCI Operations
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center border border-emerald-300 dark:border-emerald-800 shrink-0">
                MA
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">Muhammad Abbas</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Software Engineer Intern</p>
              </div>
            </div>

            <nav className="space-y-1">
              <button className="w-full text-left px-3 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2.5">
                <User className="w-4 h-4 text-slate-500" /> Profile Details
              </button>
              <button className="w-full text-left px-3 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-slate-500" /> Settings
              </button>
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <button className="w-full text-left px-3 py-2.5 text-xs font-medium text-rose-600 dark:text-rose-400 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors flex items-center gap-2.5">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </aside>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-5 sm:space-y-8">

        {/* HERO WELCOME BANNER */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 dark:from-emerald-950 dark:via-emerald-900 dark:to-teal-950 text-white p-4 sm:p-8 shadow-lg shadow-emerald-950/10">
          <div className="relative z-10 space-y-1.5 sm:space-y-2 max-w-xl">
            <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md">
              Shift Status: On Clock
            </span>
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, Muhammad!
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Here is an overview of your work metrics, active requests, and upcoming organizational updates today.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-60 sm:w-80 h-60 sm:h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-300">
            <CardContent className="p-3.5 sm:p-5 flex items-center justify-between">
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">Total Assigned</p>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">{tasks.length}</h3>
                <p className="hidden sm:block text-[11px] font-medium text-slate-400 dark:text-slate-500">Active Sprint Tasks</p>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                <ListTodo className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-300">
            <CardContent className="p-3.5 sm:p-5 flex items-center justify-between">
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">In Progress</p>
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {tasks.filter((t) => t.status === "In Progress").length}
                </h3>
                <p className="hidden sm:block text-[11px] font-medium text-slate-400 dark:text-slate-500">Currently active</p>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-indigo-100/60 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-300">
            <CardContent className="p-3.5 sm:p-5 flex items-center justify-between">
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">Under Review</p>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {tasks.filter((t) => t.status === "Under Review").length}
                </h3>
                <p className="hidden sm:block text-[11px] font-medium text-slate-400 dark:text-slate-500">Awaiting Admin Verification</p>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-blue-100/60 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-300">
            <CardContent className="p-3.5 sm:p-5 flex items-center justify-between">
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">Completed</p>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {tasks.filter((t) => t.status === "Completed").length}
                </h3>
                <p className="hidden sm:block text-[11px] font-medium text-slate-400 dark:text-slate-500">Verified & Finished</p>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TASK FILTERING & LIST SECTION */}
        <div className="space-y-4">

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">

            {/* Status Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/60 dark:bg-slate-900 rounded-xl overflow-x-auto">
              {[
                { id: "all", label: "All Tasks" },
                { id: "in-progress", label: "In Progress" },
                { id: "under-review", label: "Under Review" },
                { id: "completed", label: "Completed" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ease-out ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs scale-[1.02]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search tasks or IDs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 text-xs py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus-visible:ring-emerald-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Cross-Fading Task Container */}
          <div
            className={`space-y-3 transition-all duration-200 ease-in-out transform ${
              isTransitioning
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

      {/* TASK DETAIL & WORK SUBMISSION MODAL WITH SMOOTH ANIMATION */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-5 animate-in zoom-in-95 duration-200">

            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-slate-400">{selectedTask.id}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${getPriorityBadge(selectedTask.priority)}`}>
                    {selectedTask.priority}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{selectedTask.title}</h2>
              </div>
              <button
                onClick={() => setSelectedTask(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
              <p className="font-semibold text-slate-900 dark:text-slate-100">Instructions from Admin:</p>
              <p>{selectedTask.description}</p>
              <div className="pt-2 flex justify-between text-[11px] text-slate-400 border-t border-slate-200 dark:border-slate-800">
                <span>Assigned by: {selectedTask.assignedBy}</span>
                <span>Created: {selectedTask.createdDate}</span>
              </div>
            </div>

            {/* Quick Status Update Buttons */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Update Task Status</Label>
              <div className="grid grid-cols-3 gap-2">
                {["In Progress", "Under Review", "Completed"].map((st) => (
                  <button
                    key={st}
                    onClick={() => handleUpdateStatus(st)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all duration-200 active:scale-95 ${
                      selectedTask.status === st
                        ? "bg-emerald-700 dark:bg-emerald-600 text-white border-emerald-700 dark:border-emerald-600 shadow-xs"
                        : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Work Submission / Note Input */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Submission Note or Output Link</Label>
              <div className="relative">
                <textarea
                  rows={3}
                  placeholder="Add details, GitHub commit link, or submission notes for admin review..."
                  value={submissionNote}
                  onChange={(e) => setSubmissionNote(e.target.value)}
                  className="w-full p-3 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 transition-all duration-200"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setSelectedTask(null)}
                className="text-xs border-slate-200 dark:border-slate-800 transition-colors"
              >
                Close
              </Button>
              <Button
                onClick={() => setSelectedTask(null)}
                className="text-xs bg-emerald-700 dark:bg-emerald-600 hover:bg-emerald-800 text-white transition-all duration-200 active:scale-95"
              >
                <Send className="w-3.5 h-3.5 mr-1.5" /> Save Changes
              </Button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}