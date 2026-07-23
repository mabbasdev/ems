import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Search,
    X,
    BarChart3,
    ShieldCheck,
    LayoutDashboard,
    UserCheck,
    FileText,
    KeyRound,
    Settings,
    Sparkles,
} from "lucide-react";
import TopNavbar from "./a-components/TopNavbar";
import AssignTaskModal from "./a-components/AssignTaskModal";
import TaskCards from "./a-components/TaskCards";
import StatusFilter from "./a-components/StatusFilter";
import TaskList from "./a-components/TaskList";
import TeamList from "./a-components/TeamList";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("all");
    const [activeNav, setActiveNav] = useState("dashboard");
    const [searchQuery, setSearchQuery] = useState("");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    // State for Desktop Collapsible Sidebar
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    // State for Editing the Task
    const [editingTask, setEditingTask] = useState(null);

    // Initial Master Task Data
    const [tasks, setTasks] = useState([
        {
            id: "TSK-101",
            title: "Fix Cross-Device Responsiveness on Chamber Portal",
            assignee: "Muhammad Abbas",
            assigneeAvatar: "MA",
            priority: "High",
            status: "In Progress",
            dueDate: "2026-07-22",
            department: "Frontend Dev",
        },
        {
            id: "TSK-102",
            title: "Update API Authentication Middleware",
            assignee: "Asif Khan",
            assigneeAvatar: "AK",
            priority: "Medium",
            status: "Under Review",
            dueDate: "2026-07-23",
            department: "Backend Dev",
        },
        {
            id: "TSK-103",
            title: "Optimize Image Assets & Web Vitals",
            assignee: "Muhammad Abbas",
            assigneeAvatar: "MA",
            priority: "Low",
            status: "Completed",
            dueDate: "2026-07-19",
            department: "Performance",
        },
        {
            id: "TSK-104",
            title: "Configure Active Directory Permissions",
            assignee: "Sarah Ahmed",
            assigneeAvatar: "SA",
            priority: "High",
            status: "In Progress",
            dueDate: "2026-07-24",
            department: "IT Support",
        },
    ]);

    // Navigation Items Breakdown
    const navItems = [
        { id: "dashboard", label: "Operations Hub", icon: LayoutDashboard, badge: null },
        { id: "analytics", label: "Sprint Analytics", icon: BarChart3, badge: "Soon" },
        { id: "team", label: "Team Directory", icon: UserCheck, badge: "Soon" },
        { id: "audit", label: "System Audit Logs", icon: FileText, badge: "Soon" },
        { id: "access", label: "Access & Roles", icon: KeyRound, badge: "Soon" },
        { id: "settings", label: "Portal Settings", icon: Settings, badge: "Soon" },
    ];

    // New Task Form State
    const [newTask, setNewTask] = useState({
        title: "",
        assignee: "Muhammad Abbas",
        priority: "Medium",
        department: "Frontend Dev",
        dueDate: "",
        description: "",
    });

    // Badge Stylers
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

    // Handlers
    const handleCreateTask = (e) => {
        e.preventDefault();
        if (!newTask.title) return;

        const createdTask = {
            id: `TSK-${101 + tasks.length}`,
            title: newTask.title,
            assignee: newTask.assignee,
            assigneeAvatar: newTask.assignee
                .split(" ")
                .map((n) => n[0])
                .join(""),
            priority: newTask.priority,
            status: "In Progress",
            dueDate: newTask.dueDate || "2026-07-25",
            department: newTask.department,
        };

        setTasks([createdTask, ...tasks]);
        setNewTask({
            title: "",
            assignee: "Muhammad Abbas",
            priority: "Medium",
            department: "Frontend Dev",
            dueDate: "",
            description: "",
        });
        setIsCreateModalOpen(false);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };
    const handleOpenCreateModal = () => {
        setEditingTask(null);
        setNewTask({
            title: "",
            assignee: "Muhammad Abbas",
            priority: "Medium",
            department: "Frontend Dev",
            dueDate: "",
            description: "",
        });
        setIsCreateModalOpen(true);
    };

    const handleOpenEditModal = (task) => {
        setEditingTask(task);
        setNewTask({
            title: task.title,
            assignee: task.assignee,
            priority: task.priority,
            department: task.department,
            dueDate: task.dueDate,
            description: task.description || "",
        });
        setIsCreateModalOpen(true);
    };

    const handleSaveTask = (e) => {
        e.preventDefault();
        if (!newTask.title) return;

        if (editingTask) {
            // UPDATE EXISTING TASK
            setTasks(
                tasks.map((t) =>
                    t.id === editingTask.id
                        ? {
                            ...t,
                            title: newTask.title,
                            assignee: newTask.assignee,
                            assigneeAvatar: newTask.assignee
                                .split(" ")
                                .map((n) => n[0])
                                .join(""),
                            priority: newTask.priority,
                            department: newTask.department,
                            dueDate: newTask.dueDate || t.dueDate,
                        }
                        : t
                )
            );
        } else {
            // CREATE NEW TASK
            const createdTask = {
                id: `TSK-${101 + tasks.length}`,
                title: newTask.title,
                assignee: newTask.assignee,
                assigneeAvatar: newTask.assignee
                    .split(" ")
                    .map((n) => n[0])
                    .join(""),
                priority: newTask.priority,
                status: "In Progress",
                dueDate: newTask.dueDate || "2026-07-25",
                department: newTask.department,
            };
            setTasks([createdTask, ...tasks]);
        }

        // Reset & Close
        setEditingTask(null);
        setNewTask({
            title: "",
            assignee: "Muhammad Abbas",
            priority: "Medium",
            department: "Frontend Dev",
            dueDate: "",
            description: "",
        });
        setIsCreateModalOpen(false);
    };

    // Filter Logic
    const filteredTasks = tasks.filter((task) => {
        const matchesTab =
            activeTab === "all" ||
            task.status.toLowerCase().replace(" ", "-") === activeTab;
        const matchesSearch =
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 flex">
            {/* LEFT NAVIGATION SIDEBAR (DESKTOP COLLAPSIBLE) */}
            <aside
                className={`hidden lg:flex flex-col justify-between border-r border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 h-screen z-40 shrink-0 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? "w-20 p-3" : "w-64 p-4"
                    }`}
            >
                <div className="space-y-6">
                    {/* Logo Header */}
                    <div
                        className={`flex items-center gap-3 ${isSidebarCollapsed ? "justify-center" : "px-2"
                            } py-1`}
                    >
                        <div className="h-9 w-9 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
                            <ShieldCheck className="w-5 h-5 text-emerald-400 dark:text-white" />
                        </div>
                        {!isSidebarCollapsed && (
                            <div className="overflow-hidden transition-opacity duration-200">
                                <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 block truncate">
                                    Admin Control
                                </span>
                                <span className="text-[10px] font-semibold text-slate-400 block -mt-0.5 truncate">
                                    ICCI Operations
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1">
                        {!isSidebarCollapsed && (
                            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 transition-opacity duration-200">
                                Management
                            </p>
                        )}
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeNav === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveNav(item.id)}
                                    title={isSidebarCollapsed ? item.label : undefined}
                                    className={`w-full flex items-center ${isSidebarCollapsed
                                        ? "justify-center px-0 py-3"
                                        : "justify-between px-3 py-2.5"
                                        } rounded-xl text-xs font-semibold transition-all duration-200 ${isActive
                                            ? "bg-emerald-700 dark:bg-emerald-600 text-white shadow-xs"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                                        }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <Icon
                                            className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"
                                                }`}
                                        />
                                        {!isSidebarCollapsed && <span>{item.label}</span>}
                                    </div>
                                    {!isSidebarCollapsed && item.badge && (
                                        <span
                                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${isActive
                                                ? "bg-white/20 text-white"
                                                : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                                                }`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* User Info Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div
                        className={`flex items-center ${isSidebarCollapsed ? "justify-center" : "gap-2.5 px-2"
                            }`}
                    >
                        <div className="h-8 w-8 rounded-full bg-slate-900 dark:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border border-slate-300 dark:border-slate-700 shrink-0">
                            MA
                        </div>
                        {!isSidebarCollapsed && (
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                                    Muhammad Abbas
                                </p>
                                <p className="text-[10px] text-slate-400 truncate">
                                    System Administrator
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* MOBILE SIDEBAR OVERLAY */}
            {mobileSidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        onClick={() => setMobileSidebarOpen(false)}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
                    />
                    <aside className="absolute top-0 left-0 bottom-0 w-64 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between z-50">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2.5">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                    <span className="font-bold text-sm">Admin Control</span>
                                </div>
                                <button
                                    onClick={() => setMobileSidebarOpen(false)}
                                    className="p-1"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            <div className="space-y-1">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setActiveNav(item.id);
                                                setMobileSidebarOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold ${activeNav === item.id
                                                ? "bg-emerald-700 text-white"
                                                : "text-slate-600 dark:text-slate-400"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <Icon className="w-4 h-4" />
                                                <span>{item.label}</span>
                                            </div>
                                            {item.badge && (
                                                <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            {/* User Info Footer */}
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3 bottom-5 absolute">
                                <div
                                    className={`flex items-center ${isSidebarCollapsed ? "justify-center" : "gap-2.5 px-2"
                                        }`}
                                >
                                    <div className="h-8 w-8 rounded-full bg-slate-900 dark:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border border-slate-300 dark:border-slate-700 shrink-0">
                                        MA
                                    </div>
                                    {!isSidebarCollapsed && (
                                        <div className="overflow-hidden">
                                            <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                                                Muhammad Abbas
                                            </p>
                                            <p className="text-[10px] text-slate-400 truncate">
                                                System Administrator
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col">
                {/* TOP HEADER */}
                <TopNavbar
                    setMobileSidebarOpen={setMobileSidebarOpen}
                    setIsCreateModalOpen={handleOpenCreateModal}
                    isSidebarCollapsed={isSidebarCollapsed}
                    setIsSidebarCollapsed={setIsSidebarCollapsed}
                    navItems={navItems}
                    activeNav={activeNav}
                />

                {/* MAIN CONTAINER */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 w-full flex-1">
                    {activeNav === "dashboard" ? (
                        <>
                            {/* STATS OVERVIEW CARDS */}
                            <TaskCards tasks={tasks} />

                            {/* MAIN GRID: MASTER TABLE + SIDEBAR */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* MASTER TASK MANAGEMENT TABLE (2 COLS) */}
                                <div className="lg:col-span-2 space-y-4">
                                    <Card className="border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
                                        <CardHeader className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div>
                                                <CardTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
                                                    Master Task Operations
                                                </CardTitle>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                                    Monitor, filter, and manage all assigned organization tasks.
                                                </p>
                                            </div>

                                            {/* Search */}
                                            <div className="relative w-full sm:w-56">
                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                                <Input
                                                    type="text"
                                                    placeholder="Search task or team..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="pl-9 text-xs py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-emerald-500 transition-all duration-200"
                                                />
                                            </div>
                                        </CardHeader>

                                        {/* Status Filter Tabs */}
                                        <StatusFilter
                                            setActiveTab={setActiveTab}
                                            activeTab={activeTab}
                                        />

                                        {/* Task List Table */}
                                        <TaskList
                                            filteredTasks={filteredTasks}
                                            getPriorityBadge={getPriorityBadge}
                                            getStatusBadge={getStatusBadge}
                                            handleDeleteTask={handleDeleteTask}
                                            handleOpenEditModal={handleOpenEditModal} // <--- Added
                                        />
                                    </Card>
                                </div>

                                {/* TEAM WORKLOAD SIDEBAR (1 COL) */}
                                <TeamList tasks={tasks} />
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 space-y-3">
                            <Sparkles className="w-10 h-10 mx-auto text-emerald-600 animate-pulse" />
                            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                                {navItems.find((n) => n.id === activeNav)?.label} Module
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                                This feature section is queued for deployment. You can hook up API endpoints or extra sub-components here later!
                            </p>
                            <Button
                                onClick={() => setActiveNav("dashboard")}
                                variant="outline"
                                className="text-xs border-slate-200 dark:border-slate-800"
                            >
                                Back to Operations
                            </Button>
                        </div>
                    )}
                </main>
            </div>

            {/* ASSIGN NEW TASK MODAL */}
            {isCreateModalOpen && (
                <AssignTaskModal
                    setIsCreateModalOpen={setIsCreateModalOpen}
                    handleSaveTask={handleSaveTask}
                    setNewTask={setNewTask}
                    newTask={newTask}
                    isEditing={!!editingTask}
                />
            )}
        </div>
    );
}