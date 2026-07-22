import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Send, X } from 'lucide-react'
import React from 'react'

const AssignTaskModal = (props) => {
    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
                <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4">

                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <Plus className="w-4 h-4 text-emerald-600" /> Assign New Task
                        </h3>
                        <button
                            onClick={() => props.setIsCreateModalOpen(false)}
                            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <form onSubmit={props.handleCreateTask} className="space-y-3.5">
                        <div className="space-y-1">
                            <Label className="text-xs font-semibold">Task Title</Label>
                            <Input
                                required
                                placeholder="e.g. Optimize React component rendering..."
                                value={props.newTask.title}
                                onChange={(e) => props.setNewTask({ ...props.newTask, title: e.target.value })}
                                className="text-xs bg-slate-50 dark:bg-slate-950"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <Label className="text-xs font-semibold">Assignee</Label>
                                <select
                                    value={props.newTask.assignee}
                                    onChange={(e) => props.setNewTask({ ...props.newTask, assignee: e.target.value })}
                                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100"
                                >
                                    <option value="Muhammad Abbas">Muhammad Abbas</option>
                                    <option value="Asif Khan">Asif Khan</option>
                                    <option value="Sarah Ahmed">Sarah Ahmed</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <Label className="text-xs font-semibold">Priority</Label>
                                <select
                                    value={props.newTask.priority}
                                    onChange={(e) => props.setNewTask({ ...props.newTask, priority: e.target.value })}
                                    className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100"
                                >
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <Label className="text-xs font-semibold">Department</Label>
                                <Input
                                    placeholder="e.g. Frontend Dev"
                                    value={props.newTask.department}
                                    onChange={(e) => props.setNewTask({ ...props.newTask, department: e.target.value })}
                                    className="text-xs bg-slate-50 dark:bg-slate-950"
                                />
                            </div>

                            <div className="space-y-1">
                                <Label className="text-xs font-semibold">Due Date</Label>
                                <Input
                                    type="date"
                                    value={props.newTask.dueDate}
                                    onChange={(e) => props.setNewTask({ ...props.newTask, dueDate: e.target.value })}
                                    className="text-xs bg-slate-50 dark:bg-slate-950"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => props.setIsCreateModalOpen(false)}
                                className="text-xs"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="text-xs bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 text-white"
                            >
                                <Send className="w-3.5 h-3.5 mr-1.5" /> Dispatch Task
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AssignTaskModal
