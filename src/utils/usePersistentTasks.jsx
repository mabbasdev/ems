import { useState, useEffect } from "react";

// Default initial tasks array to seed LocalStorage if empty
const INITIAL_TASKS = [
    {
        id: "TSK-101",
        title: "Fix Cross-Device Responsiveness on Chamber Portal",
        assignee: "Muhammad Abbas",
        assigneeAvatar: "MA",
        priority: "High",
        status: "In Progress",
        dueDate: "2026-07-28",
        department: "Frontend Dev",
        description: "Resolve breakpoint overflow and padding issues on mobile screens.",
    },
    {
        id: "TSK-102",
        title: "Update API Authentication Middleware",
        assignee: "Asif Khan",
        assigneeAvatar: "AK",
        priority: "Medium",
        status: "Under Review",
        dueDate: "2026-07-29",
        department: "Backend Dev",
        description: "Implement JWT validation refresh tokens.",
    },
];

// Single shared key across both Admin and Employee dashboards
export const STORAGE_KEY = "icci_tasks_db";

export function usePersistentTasks() {
    // 1. Initialize state lazily from LocalStorage
    const [tasks, setTasks] = useState(() => {
        try {
            // Check if task database already exists in browser storage
            const savedTasks = localStorage.getItem(STORAGE_KEY);
            // If found, parse JSON string into array; otherwise seed with default data
            return savedTasks ? JSON.parse(savedTasks) : INITIAL_TASKS;
        } catch (error) {
            // Fallback gracefully to default array if JSON parsing fails
            console.error("Failed to read tasks from LocalStorage:", error);
            return INITIAL_TASKS;
        }
    });

    // 2. Automatically sync state changes to LocalStorage whenever `tasks` changes
    useEffect(() => {
        try {
            // Convert the updated tasks JavaScript array to a JSON string
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error("Failed to persist tasks to LocalStorage:", error);
        }
    }, [tasks]); // Runs whenever `tasks` state updates

    // 3. Listen for changes in other browser tabs or windows
    useEffect(() => {
        const handleStorageChange = (event) => {
            // Only react if the storage key matches our shared database key
            if (event.key === STORAGE_KEY && event.newValue) {
                // Parse updated JSON string and update local state automatically
                setTasks(JSON.parse(event.newValue));
            }
        };

        // Attach native browser event listener for cross-tab synchronization
        window.addEventListener("storage", handleStorageChange);

        // Cleanup event listener when component unmounts to prevent memory leaks
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // Return state and standard updater function (identical to useState tuple)
    return [tasks, setTasks];
}