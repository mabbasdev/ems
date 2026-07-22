import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Send, X } from 'lucide-react'
import React from 'react'

const TaskDetailModal = (props) => {
    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
                <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-5 animate-in zoom-in-95 duration-200">

                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-mono font-bold text-slate-400">{props.selectedTask.id}</span>
                                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${props.getPriorityBadge(props.selectedTask.priority)}`}>
                                    {props.selectedTask.priority}
                                </span>
                            </div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{props.selectedTask.title}</h2>
                        </div>
                        <button
                            onClick={() => props.setSelectedTask(null)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                        <p className="font-semibold text-slate-900 dark:text-slate-100">Instructions from Admin:</p>
                        <p>{props.selectedTask.description}</p>
                        <div className="pt-2 flex justify-between text-[11px] text-slate-400 border-t border-slate-200 dark:border-slate-800">
                            <span>Assigned by: {props.selectedTask.assignedBy}</span>
                            <span>Created: {props.selectedTask.createdDate}</span>
                        </div>
                    </div>

                    {/* Quick Status Update Buttons */}
                    <div className="space-y-2">
                        <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Update Task Status</Label>
                        <div className="grid grid-cols-3 gap-2">
                            {["In Progress", "Under Review", "Completed"].map((st) => (
                                <button
                                    key={st}
                                    onClick={() => props.handleUpdateStatus(st)}
                                    className={`py-2 text-xs font-semibold rounded-lg border transition-all duration-200 active:scale-95 ${props.selectedTask.status === st
                                        ? "bg-emerald-700 dark:bg-emerald-600 text-white border-emerald-700 dark:border-emerald-600 shadow-xs"
                                        : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                        }`}
                                >
                                    {st}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Work Submission / Note Input */}
                    <div className="space-y-2">
                        <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Submission Note or Output Link</Label>
                        <div className="relative">
                            <textarea
                                rows={3}
                                placeholder="Add details, GitHub commit link, or submission notes for admin review..."
                                value={props.submissionNote}
                                onChange={(e) => props.setSubmissionNote(e.target.value)}
                                className="w-full p-3 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-slate-100 transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Modal Actions */}
                    <div className="flex items-center justify-end gap-2 pt-2">
                        <Button
                            variant="outline"
                            onClick={() => props.setSelectedTask(null)}
                            className="text-xs border-slate-200 dark:border-slate-800 transition-colors"
                        >
                            Close
                        </Button>
                        <Button
                            onClick={() => props.setSelectedTask(null)}
                            className="text-xs bg-emerald-700 dark:bg-emerald-600 hover:bg-emerald-800 text-white transition-all duration-200 active:scale-95"
                        >
                            <Send className="w-3.5 h-3.5 mr-1.5" /> Save Changes
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskDetailModal
