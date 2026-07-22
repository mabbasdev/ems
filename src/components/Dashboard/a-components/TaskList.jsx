import React from 'react';
import { Button } from "@/components/ui/button";
import { Trash2, Edit2 } from "lucide-react"; // <--- Added Edit2

const TaskList = (props) => {
    return (
        <div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800 overflow-x-auto">
                {props.filteredTasks.length > 0 ? (
                    props.filteredTasks.map((task) => (
                        <div
                            key={task.id}
                            className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors"
                        >
                            <div className="space-y-1 min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono font-bold text-slate-400">
                                        {task.id}
                                    </span>
                                    <span
                                        className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${props.getPriorityBadge(
                                            task.priority
                                        )}`}
                                    >
                                        {task.priority}
                                    </span>
                                    <span
                                        className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${props.getStatusBadge(
                                            task.status
                                        )}`}
                                    >
                                        {task.status}
                                    </span>
                                </div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                                    {task.title}
                                </h4>
                                <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
                                    <span>
                                        Assignee:{" "}
                                        <strong className="text-slate-700 dark:text-slate-300">
                                            {task.assignee}
                                        </strong>
                                    </span>
                                    <span>•</span>
                                    <span>Dept: {task.department}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1 shrink-0">
                                {/* EDIT BUTTON */}
                                <Button
                                    onClick={() => props.handleOpenEditModal(task)}
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
                                    title="Edit Task"
                                >
                                    <Edit2 className="w-4 h-4" />
                                </Button>

                                {/* DELETE BUTTON */}
                                <Button
                                    onClick={() => props.handleDeleteTask(task.id)}
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                                    title="Delete Task"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400">
                        No matching tasks found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskList;