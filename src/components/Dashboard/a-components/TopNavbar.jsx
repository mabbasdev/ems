import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Plus,
    PanelLeftClose,
    PanelLeftOpen,
    Menu,
} from "lucide-react";

const TopNavbar = (props) => {
    return (
        <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => props.setMobileSidebarOpen(true)}
                        className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Open Mobile Sidebar"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Desktop Sidebar Toggle Button (Header) */}
                    <button
                        onClick={() => props.setIsSidebarCollapsed(!props.isSidebarCollapsed)}
                        className="hidden lg:flex p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title={props.isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {props.isSidebarCollapsed ? (
                            <PanelLeftOpen className="w-5 h-5" />
                        ) : (
                            <PanelLeftClose className="w-5 h-5" />
                        )}
                    </button>

                    <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                        {props.navItems.find((n) => n.id === props.activeNav)?.label || "Operations Hub"}
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => props.setIsCreateModalOpen(true)}
                        className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
                    >
                        <Plus className="w-4 h-4" /> Assign New Task
                    </Button>
                </div>
            </div>
        </header>
    );
};
export default TopNavbar