import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./components/Auth/Login";
import ThemeToggle from "./components/ThemeToggle";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

export default function App() {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    setLocalStorage()
    if (authData) {
      const getLoggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if (getLoggedInUser) {
        setUser(getLoggedInUser)
        setLoggedInUser(getLoggedInUser)
      }
    }
  }, [authData])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser({ email: email, role: "Admin" })
      localStorage.setItem("loggedInUser", JSON.stringify({ email: email, role: 'Admin' }))
      setLoggedInUser({ email: email, role: "Admin" })

    } else if (authData?.employees) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser({ email: email, role: "Employee" })
        setLoggedInUser({ email: email, role: "Employee" })
        localStorage.setItem("loggedInUser", JSON.stringify({ email: email, role: "Employee" }))
      }

    } else {
      console.log("Invalid Credentials");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };





  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        {/* Floating Theme Toggle (Responsive position) */}
        <div className="absolute top-4 right-4 z-50 sm:top-6 sm:right-6">
          <ThemeToggle />
        </div>

        {!user ? (
          <Login handleLogin={handleLogin} />
        ) : user.role === "Admin" ? (
          <AdminDashboard user={user} handleLogout={handleLogout} />
        ) : user.role === "Employee" ? (
          <EmployeeDashboard user={user} handleLogout={handleLogout} />
        ) : null}
        {/* {user == { email: "admin@me.com", role: "Admin" } ? "<AdminDashboard user={user} />" : ""} */}
        {/* {user?.role == "Admin" && user?.email == "admin@me.com" ? <EmployeeDashboard user={user} /> : ""} */}

        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}

      </div>
    </ThemeProvider>
  );
}