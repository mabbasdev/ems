import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users } from 'lucide-react'
import React from 'react'

const TeamList = () => {
    return (
        <div>
            <div className="space-y-4">
                <Card className="border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
                    <CardHeader className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <CardTitle className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <Users className="w-4 h-4 text-emerald-600" /> Team Workload
                        </CardTitle>
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                            3 Active Members
                        </span>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3.5">
                        {[
                            { name: "Muhammad Abbas", role: "Software Engineer Intern", avatar: "MA", activeCount: 2, dept: "Frontend" },
                            { name: "Asif Khan", role: "Backend Developer", avatar: "AK", activeCount: 1, dept: "API Engineering" },
                            { name: "Sarah Ahmed", role: "IT Support Lead", avatar: "SA", activeCount: 1, dept: "Operations" },
                        ].map((member) => (
                            <div key={member.name} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-8 w-8 rounded-full bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                                        {member.avatar}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{member.name}</p>
                                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{member.dept}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{member.activeCount}</span>
                                    <p className="text-[9px] text-slate-400">Tasks</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default TeamList
