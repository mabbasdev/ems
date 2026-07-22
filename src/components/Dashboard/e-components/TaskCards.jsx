import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle, CheckCircle2, Clock, ListTodoIcon } from 'lucide-react'
import React from 'react'

const TaskCards = (props) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
                {
                    id: "total",
                    label: "Total Assigned",
                    count: props.tasks.length,
                    subtext: "Active Sprint Tasks",
                    icon: ListTodoIcon,
                    textColor: "text-slate-900 dark:text-slate-100",
                    iconBg: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
                },
                {
                    id: "in-progress",
                    label: "In Progress",
                    count: props.tasks.filter((t) => t.status === "In Progress").length,
                    subtext: "Currently active",
                    icon: Clock,
                    textColor: "text-indigo-600 dark:text-indigo-400",
                    iconBg: "bg-indigo-100/60 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400",
                },
                {
                    id: "under-review",
                    label: "Under Review",
                    count: props.tasks.filter((t) => t.status === "Under Review").length,
                    subtext: "Awaiting Admin Verification",
                    icon: AlertCircle,
                    textColor: "text-blue-600 dark:text-blue-400",
                    iconBg: "bg-blue-100/60 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400",
                },
                {
                    id: "completed",
                    label: "Completed",
                    count: props.tasks.filter((t) => t.status === "Completed").length,
                    subtext: "Verified & Finished",
                    icon: CheckCircle2,
                    textColor: "text-emerald-600 dark:text-emerald-400",
                    iconBg: "bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400",
                },
            ].map(({ id, label, count, subtext, icon: Icon, textColor, iconBg }) => (
                <Card
                    key={id}
                    className="border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-300"
                >
                    <CardContent className="p-3.5 sm:p-5 flex items-center justify-between">
                        <div className="space-y-0.5 sm:space-y-1">
                            <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
                                {label}
                            </p>
                            <h3 className={`text-xl sm:text-2xl font-bold ${textColor}`}>
                                {count}
                            </h3>
                            <p className="hidden sm:block text-[11px] font-medium text-slate-400 dark:text-slate-500">
                                {subtext}
                            </p>
                        </div>
                        <div className={`p-2 sm:p-3 rounded-xl shrink-0 ${iconBg}`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default TaskCards
