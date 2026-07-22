import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Building2,
    Users,
    CheckCircle2,
    Clock,
    AlertCircle,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Trash2,
    Edit2,
    CheckSquare,
    X,
    Send,
    BarChart3,
    ShieldCheck,
    Bell,
    UserPlus
} from "lucide-react";
import TopNavbar from "./a-components/TopNavbar";
import TaskCards from "./a-components/TaskCards";
import StatusFilter from "./a-components/StatusFilter";
import TeamList from "./a-components/TeamList";
import AssignTaskModal from "./a-components/AssignTaskModal";
import TaskList from "./a-components/TaskList";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

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
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">

            {/* TOP HEADER */}
            <TopNavbar setIsCreateModalOpen={setIsCreateModalOpen} />

            {/* MAIN CONTAINER */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

                {/* STATS OVERVIEW CARDS (MAP FUNCTION) */}
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
                            <StatusFilter setActiveTab={setActiveTab} activeTab={activeTab} />

                            {/* Task List Table */}
                            <TaskList
                                filteredTasks={filteredTasks}
                                getPriorityBadge={getPriorityBadge}
                                getStatusBadge={getStatusBadge}
                                handleDeleteTask={handleDeleteTask}
                            />
                        </Card>
                    </div>

                    {/* TEAM WORKLOAD SIDEBAR (1 COL) */}
                    <TeamList />

                </div>

            </div>

            {/* ASSIGN NEW TASK MODAL */}
            {isCreateModalOpen && (
                <AssignTaskModal
                    setIsCreateModalOpen={setIsCreateModalOpen}
                    handleCreateTask={handleCreateTask}
                    setNewTask={setNewTask}
                    newTask={newTask}
                />
            )}

        </div>
    );
}