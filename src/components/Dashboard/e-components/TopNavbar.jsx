import React, { useState } from "react";
import {
    Building2,
    Bell,
    Menu,
} from "lucide-react";

const TopNavbar = (props) => {
    
    return (
        <header header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Brand Logo & Hamburger */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => props.setMobileMenuOpen(true)}
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
        </header >
    )
}

export default TopNavbar
