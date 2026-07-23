const employees = [
    {
        "id": "EMP-101",
        "email": "m.abbas@icci.org.pk",
        "password": "123",
        "tasks": [
            {
                "id": "TSK-101",
                "title": "Fix Cross-Device Responsiveness on Chamber Portal",
                "priority": "High",
                "status": "In Progress",
                "dueDate": "2026-07-22",
                "department": "Frontend Dev"
            },
            {
                "id": "TSK-103",
                "title": "Optimize Image Assets & Web Vitals",
                "priority": "Low",
                "status": "Completed",
                "dueDate": "2026-07-19",
                "department": "Performance"
            }
        ]
    },
    {
        "id": "EMP-102",
        "email": "asif@me.com",
        "password": "123",
        "tasks": [
            {
                "id": "TSK-102",
                "title": "Update API Authentication Middleware",
                "priority": "Medium",
                "status": "Under Review",
                "dueDate": "2026-07-23",
                "department": "Backend Dev"
            }
        ]
    },
    {
        "id": "EMP-103",
        "email": "sarah.ahmed@icci.org.pk",
        "password": "123",
        "tasks": [
            {
                "id": "TSK-104",
                "title": "Configure Active Directory Permissions",
                "priority": "High",
                "status": "In Progress",
                "dueDate": "2026-07-24",
                "department": "IT Support"
            }
        ]
    },
    {
        "id": "EMP-104",
        "email": "usman.ali@icci.org.pk",
        "password": "123",
        "tasks": [
            {
                "id": "TSK-105",
                "title": "Database Schema Optimization",
                "priority": "High",
                "status": "In Progress",
                "dueDate": "2026-07-26",
                "department": "Database"
            }
        ]
    },
    {
        "id": "EMP-105",
        "email": "ayesha.malik@icci.org.pk",
        "password": "123",
        "tasks": [
            {
                "id": "TSK-106",
                "title": "UI Accessibility Audit & Testing",
                "priority": "Medium",
                "status": "Completed",
                "dueDate": "2026-07-20",
                "department": "UI/UX Design"
            }
        ]
    }
]
const admin = [{
    "id": "ADM-001",
    "email": "admin@me.com",
    "password": "123"
}]

export const setLocalStorage = () => {
    localStorage.setItem("Employees", JSON.stringify(employees))
    localStorage.setItem("Admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("Employees"))
    const admin = JSON.parse(localStorage.getItem("Admin"))
    return { employees, admin }
}