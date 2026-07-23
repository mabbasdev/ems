import {
    LayoutDashboard,
    CheckSquare,
    User,
    Settings,
} from "lucide-react";

export const NAV_ITEMS = [
    {
        id: "dashboard",
        label: "Overview Dashboard",
        icon: LayoutDashboard,
        badge: null,
    },
    {
        id: "tasks",
        label: "My Tasks",
        icon: CheckSquare,
        badge: "Soon",
    },
    {
        id: "profile",
        label: "Profile Details",
        icon: User,
        badge: "Soon",
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings,
        badge: "Soon",
    },
];