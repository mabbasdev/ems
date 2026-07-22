import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, ChevronLeft, ChevronRight } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`fixed top-1/2 -translate-y-1/2 right-0 z-50 flex items-center transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-[calc(100%-2.5rem)]"
                }`}
        >
            {/* Drawer Toggle Tab Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close theme panel" : "Open theme panel"}
                className="flex h-12 w-10 items-center justify-center rounded-l-2xl border border-r-0 border-slate-200/80 bg-white/80 text-slate-600 shadow-md backdrop-blur-md transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
                {isOpen ? (
                    <ChevronRight className="h-5 w-5" />
                ) : (
                    <ChevronLeft className="h-5 w-5" />
                )}
            </button>

            {/* Expanded Theme Action Card */}
            <div className="flex items-center gap-3 rounded-l-none rounded-r-none border border-r-0 border-slate-200/80 bg-white/95 p-2.5 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95">
                <button
                    onClick={toggleTheme}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 text-slate-700 transition-all hover:scale-105 active:scale-95 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
                    aria-label="Toggle dark and light mode"
                >
                    <Sun className="h-4 w-4 rotate-0 scale-100 text-amber-500 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 text-emerald-400 transition-all dark:rotate-0 dark:scale-100" />
                </button>

                <span className="pr-1 text-xs font-medium text-slate-600 dark:text-slate-300 select-none">
                    {theme === "dark" ? "Dark" : "Light"}
                </span>
            </div>
        </div>
    );
}