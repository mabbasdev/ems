import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Search,
  ArrowUpRight,
  HelpCircle,
  Hammer,
} from "lucide-react";
import TopNavbar from "./e-components/TopNavbar";
import MobileSidebar from "./e-components/MobileSidebar";
import HeroBanner from "./e-components/HeroBanner";
import TaskCards from "./e-components/TaskCards";
import StatusFilter from "./e-components/StatusFilter";
import TaskDetailModal from "./e-components/TaskDetailModal";
import { NAV_ITEMS } from "./e-components/navItems";
// import { NAV_ITEMS } from "./config/navConfig"; // Importing centralized nav items

export default function EmployeeDashboard(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState("dashboard");
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [submissionNote, setSubmissionNote] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample Task Data
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
  ]);

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

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 150);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesTab =
      activeTab === "all" ||
      task.status.toLowerCase().replace(" ", "-") === activeTab;
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleUpdateStatus = (newStatus) => {
    if (!selectedTask) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === selectedTask.id ? { ...t, status: newStatus } : t))
    );
    setSelectedTask((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col overflow-hidden">
      {/* TOP NAVBAR */}
      <div className="shrink-0 z-40">
        <TopNavbar
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
          user={props.user}
          handleLogout={props.handleLogout}
        />
      </div>

      {/* MOBILE SIDEBAR */}
      <MobileSidebar
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        user={props.user}
        currentModule={currentModule}
        setCurrentModule={setCurrentModule}
        handleLogout={props.handleLogout}
      />

      {/* MAIN LAYOUT */}
      <div className="flex-1 flex overflow-hidden max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:flex flex-col justify-between w-64 shrink-0 h-full py-6 pr-6 border-r border-slate-200/80 dark:border-slate-800/80 overflow-y-auto">
          <div className="space-y-6">
            <div className="px-2">
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                Menu Navigation
              </p>
            </div>

            {/* Mapped Centralized Navigation Links */}
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = currentModule === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentModule(item.id)}
                    className={`w-full text-left px-3 py-2.5 text-xs font-semibold rounded-xl transition-colors flex items-center justify-between ${isActive
                      ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 ${isActive
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-slate-500"
                          }`}
                      />
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
            <button className="w-full text-left px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-xl transition-colors flex items-center gap-2.5">
              <HelpCircle className="w-4 h-4" /> Help & Support
            </button>
          </div>
        </aside>

        {/* INDEPENDENT MAIN SCROLL CONTENT */}
        <main className="flex-1 min-w-0 overflow-y-auto py-6 lg:pl-6 space-y-5 sm:space-y-8 pr-1">
          {currentModule === "dashboard" ? (
            <>
              {/* HERO WELCOME BANNER */}
              <HeroBanner />

              {/* STATS OVERVIEW */}
              <TaskCards tasks={tasks} />

              {/* TASK FILTERING & LIST */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <StatusFilter
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                  />

                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Search tasks or IDs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 text-xs py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-emerald-500"
                    />
                  </div>
                </div>

                <div
                  className={`space-y-3 transition-all duration-200 ease-in-out ${isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                    }`}
                >
                  {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                      <Card
                        key={task.id}
                        onClick={() => setSelectedTask(task)}
                        className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xs hover:border-emerald-500/50 hover:shadow-md cursor-pointer transition-all duration-200"
                      >
                        <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[11px] font-mono font-bold text-slate-400">
                                {task.id}
                              </span>
                              <span
                                className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${getPriorityBadge(
                                  task.priority
                                )}`}
                              >
                                {task.priority} Priority
                              </span>
                              <span
                                className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${getStatusBadge(
                                  task.status
                                )}`}
                              >
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
                              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                {task.dueDate}
                              </p>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 text-slate-400 hover:text-emerald-600"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                      <FileText className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        No tasks found
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* PLACEHOLDER MODULE VIEW FOR UNBUILT NAV ITEMS */
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-900">
                <Hammer className="w-7 h-7 animate-bounce" />
              </div>
              <div className="max-w-md space-y-1">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 capitalize">
                  {currentModule} Module
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  This operational view is currently under active development. Modules are scheduled for deployment in the upcoming sprint update.
                </p>
              </div>
              <Button
                onClick={() => setCurrentModule("dashboard")}
                variant="outline"
                className="text-xs border-slate-200 dark:border-slate-800 rounded-xl"
              >
                Back to Dashboard
              </Button>
            </div>
          )}
        </main>
      </div>

      {/* TASK DETAIL MODAL */}
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