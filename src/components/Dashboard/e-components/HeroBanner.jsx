import React from 'react'

const HeroBanner = () => {
    return (

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 dark:from-emerald-950 dark:via-emerald-900 dark:to-teal-950 text-white p-4 sm:p-8 shadow-lg shadow-emerald-950/10">
            <div className="relative z-10 space-y-1.5 sm:space-y-2 max-w-xl">
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md">
                    Shift Status: On Clock
                </span>
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                    Welcome back, Muhammad!
                </h1>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                    Here is an overview of your work metrics, active requests, and upcoming organizational updates today.
                </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-60 sm:w-80 h-60 sm:h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </div>
    )
}

export default HeroBanner
