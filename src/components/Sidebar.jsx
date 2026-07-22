import React from "react";
import {
    ShieldCheck,
    LayoutDashboard,
    BarChart3,
    UserCheck,
    FileText,
    KeyRound,
    Settings,
    X,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";

export default function Sidebar({
    activeNav,
    setActiveNav,
    isCollapsed,
    setIsCollapsed,
    mobileOpen,
    setMobileOpen,
}) {
    const navItems = [
        { id: "dashboard", label: "Operations Hub", icon: LayoutDashboard, badge: null },
        { id: "analytics", label: "Sprint Analytics", icon: BarChart3, badge: "Soon" },
        { id: "team", label: "Team Directory", icon: UserCheck, badge: null },
        { id: "audit", label: "System Audit Logs", icon: FileText, badge: "Soon" },
        { id: "access", label: "Access & Roles", icon: KeyRound, badge: null },
        { id: "settings", label: "Portal Settings", icon: Settings, badge: null },
    ];

    return (
        <>
            {/* DESKTOP SIDEBAR */}
            <aside
                className={`hidden lg:flex flex-col justify-between border-r border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 h-screen z-40 shrink-0 transition-all duration-300 ease-in-out ${isCollapsed ? "w-20 p-3" : "w-64 p-4"
                    }`}
            >
                <div className="space-y-6">
                    {/* Logo Header */}
                    <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : "px-2"} py-1`}>
                        <div className="h-9 w-9 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
                            <ShieldCheck className="w-5 h-5 text-emerald-400 dark:text-white" />
                        </div>
                        {!isCollapsed && (
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

                    {/* Nav Items */}
                    <div className="space-y-1">
                        {!isCollapsed && (
                            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
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
                                    title={isCollapsed ? item.label : undefined}
                                    className={`w-full flex items-center ${isCollapsed ? "justify-center px-0 py-3" : "justify-between px-3 py-2.5"
                                        } rounded-xl text-xs font-semibold transition-all duration-200 ${isActive
                                            ? "bg-emerald-700 dark:bg-emerald-600 text-white shadow-xs"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                                        }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                                        {!isCollapsed && <span>{item.label}</span>}
                                    </div>
                                    {!isCollapsed && item.badge && (
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
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className={`flex items-center ${isCollapsed ? "justify-center" : "gap-2.5 px-2"}`}>
                        <div className="h-8 w-8 rounded-full bg-slate-900 dark:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border border-slate-300 dark:border-slate-700 shrink-0">
                            MA
                        </div>
                        {!isCollapsed && (
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                                    Muhammad Abbas
                                </p>
                                <p className="text-[10px] text-slate-400 truncate">System Administrator</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* MOBILE OVERLAY & DRAWER */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        onClick={() => setMobileOpen(false)}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
                    />
                    <aside className="absolute top-0 left-0 bottom-0 w-64 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between z-50">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2.5">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                    <span className="font-bold text-sm">Admin Control</span>
                                </div>
                                <button onClick={() => setMobileOpen(false)} className="p-1">
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
                                                setMobileOpen(false);
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
                        </div>
                    </aside>
                </div>
            )}

            {/* FLOATING ACTION ICON (TOGGLES SIDEBAR) */}
            <button
                onClick={() => {
                    if (window.innerWidth < 1024) {
                        setMobileOpen(!mobileOpen);
                    } else {
                        setIsCollapsed(!isCollapsed);
                    }
                }}
                className="fixed bottom-5 left-5 z-50 h-11 w-11 rounded-2xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 flex items-center justify-center transition-all duration-200 active:scale-90 hover:scale-105"
                title="Toggle Sidebar"
                aria-label="Toggle Sidebar"
            >
                {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
            </button>
        </>
    );
}