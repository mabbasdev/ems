import React from 'react'

const StatusFilter = (props) => {
    return (
        <div>
            <div className="flex items-center gap-1 p-1 bg-slate-200/60 dark:bg-slate-900 rounded-xl overflow-x-auto">
                {[
                    { id: "all", label: "All Tasks" },
                    { id: "in-progress", label: "In Progress" },
                    { id: "under-review", label: "Under Review" },
                    { id: "completed", label: "Completed" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => props.handleTabChange(tab.id)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ease-out ${props.activeTab === tab.id
                            ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs scale-[1.02]"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
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
