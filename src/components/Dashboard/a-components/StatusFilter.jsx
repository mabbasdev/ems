import React from 'react'

const StatusFilter = (props) => {
    return (
        <div>
            <div className="px-4 sm:px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex items-center gap-1.5 overflow-x-auto">
                {[
                    { id: "all", label: "All Tasks" },
                    { id: "in-progress", label: "In Progress" },
                    { id: "under-review", label: "Under Review" },
                    { id: "completed", label: "Completed" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => props.setActiveTab(tab.id)}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${props.activeTab === tab.id
                            ? "bg-slate-900 dark:bg-slate-800 text-white shadow-xs"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default StatusFilter
