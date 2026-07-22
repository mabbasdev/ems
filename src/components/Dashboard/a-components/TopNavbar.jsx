import { Button } from '@/components/ui/button'
import { Plus, ShieldCheck } from 'lucide-react'
import React from 'react'

const TopNavbar = (props) => {
    return (
        <div>
            <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-md bg-slate-900 dark:bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                            <ShieldCheck className="w-5 h-5 text-emerald-400 dark:text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-slate-100 block">
                                Admin Control Center
                            </span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block -mt-1">
                                ICCI Management Systems
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            onClick={() => props.setIsCreateModalOpen(true)}
                            className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
                        >
                            <Plus className="w-4 h-4" /> Assign New Task
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default TopNavbar
