import React, { useState, useRef, useEffect } from "react";
import {
  Building2,
  Bell,
  Menu,
  ChevronDown,
  User,
  Settings,
  CheckSquare,
  LogOut,
  HelpCircle,
  Check,
  CheckCheck,
  Trash2,
  Info,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const TopNavbar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const profileDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  // Sample Notifications State
  const [notifications, setNotifications] = useState([
    {
      id: "ntf-1",
      title: "New Task Assigned",
      message: "Admin assigned 'Fix Cross-Device Responsiveness' to you.",
      time: "10m ago",
      type: "info", // info, alert, success
      unread: true,
    },
    {
      id: "ntf-2",
      title: "Task Review Approved",
      message: "Your submission for 'Optimize Image Assets' was marked as Completed.",
      time: "2h ago",
      type: "success",
      unread: true,
    },
    {
      id: "ntf-3",
      title: "Deadline Approaching",
      message: "Task 'Update API Authentication Middleware' is due tomorrow.",
      time: "5h ago",
      type: "alert",
      unread: false,
    },
  ]);

  // Unread counter
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Notification Action Handlers
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />;
      case "success":
        return <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />;
      default:
        return <Info className="w-4 h-4 text-blue-500 shrink-0" />;
    }
  };

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     window.location.reload(); // Trigger re-render back to login
//   };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => props.setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open Navigation Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-emerald-700 dark:bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-slate-100">
              ICCI Operations Center
            </span>
          </div>
        </div>

        {/* User Actions & Notifications */}
        <div className="flex items-center gap-3">
          
          {/* Notification System Dropdown Container */}
          <div className="relative" ref={notificationDropdownRef}>
            <button
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                setIsDropdownOpen(false); // Close profile if open
              }}
              className="relative p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
              )}
            </button>

            {/* NOTIFICATIONS DROPDOWN MENU */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                
                {/* Header */}
                <div className="p-3.5 px-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Notifications
                    </h4>
                    {unreadCount > 0 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>

                  {notifications.length > 0 && (
                    <div className="flex items-center gap-2">
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <CheckCheck className="w-3 h-3" /> Mark all read
                        </button>
                      )}
                      <button
                        onClick={clearNotifications}
                        className="p-1 text-slate-400 hover:text-rose-500 rounded-md transition-colors"
                        title="Clear all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Notifications Body List */}
                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
                  {notifications.length > 0 ? (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => markAsRead(n.id)}
                        className={`p-3.5 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer relative ${
                          n.unread
                            ? "bg-emerald-50/30 dark:bg-emerald-950/10"
                            : "opacity-80"
                        }`}
                      >
                        {/* Type Icon */}
                        <div className="mt-0.5">{getNotificationIcon(n.type)}</div>

                        {/* Details */}
                        <div className="flex-1 space-y-0.5">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                              {n.title}
                            </p>
                            <span className="text-[10px] text-slate-400 shrink-0">
                              {n.time}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                            {n.message}
                          </p>
                        </div>

                        {/* Read/Unread Status Indicator */}
                        {n.unread ? (
                          <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 self-center" />
                        ) : (
                          <Check className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0 self-center" />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center text-xs text-slate-400">
                      No notifications right now
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-2 border-t border-slate-100 dark:border-slate-800 text-center bg-slate-50/50 dark:bg-slate-950/40">
                  <span className="text-[10px] text-slate-400">
                    Activity updates refresh automatically
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Container */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setNotificationsOpen(false); // Close notifications if open
              }}
              className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors border border-transparent focus:outline-none"
            >
              <div className="hidden sm:block text-right pl-2">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                  {props.user?.email || "Muhammad Abbas"}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {props.user?.role || "Software Engineer Intern"}
                </p>
              </div>

              <div className="h-9 w-9 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center border border-emerald-300 dark:border-emerald-800 shrink-0">
                MA
              </div>

              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* PROFILE DROPDOWN MENU */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* Mobile-only User Details Header */}
                <div className="sm:hidden px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                    {props.user?.email || "Muhammad Abbas"}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {props.user?.role || "Software Engineer Intern"}
                  </p>
                </div>

                <div className="px-2 py-1 space-y-0.5">
                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <User className="w-4 h-4 text-slate-400" />
                    View Profile
                  </button>

                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <CheckSquare className="w-4 h-4 text-slate-400" />
                    My Assigned Tasks
                  </button>

                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <Settings className="w-4 h-4 text-slate-400" />
                    Account Settings
                  </button>

                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                    Help & Support
                  </button>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-1 mt-1 px-2">
                  <button
                    onClick={props.handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;