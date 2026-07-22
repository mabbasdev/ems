import React from "react";
import {
    Building2,
    X,
    LogOut,
    User,
    Settings,
} from "lucide-react";
const MobileSidebar = (props) => {

    return (


        <div
            className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${props.mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                onClick={() => props.setMobileMenuOpen(false)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            />

            <aside
                className={`absolute top-0 left-0 bottom-0 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-5 transform transition-transform duration-300 ease-in-out ${props.mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
                            onClick={() => props.setMobileMenuOpen(false)}
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

    )
}

export default MobileSidebar
