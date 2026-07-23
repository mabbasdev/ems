import React, { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./components/Auth/Login";
import ThemeToggle from "./components/ThemeToggle";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
// import { SkeletonWrapper } from "./components/SkeletonWrapper";

export default function App() {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()

  }, [])

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        {/* Floating Theme Toggle (Responsive position) */}
        <div className="absolute top-4 right-4 z-50 sm:top-6 sm:right-6">
          <ThemeToggle />
        </div>

        <Login />
        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}

      </div>
    </ThemeProvider>
  );
}