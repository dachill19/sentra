"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("dashboard");
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Map routes to tab IDs
    const routeToTabMap: { [key: string]: string } = {
        "/dashboard": "dashboard",
        "/dashboard/analytics": "analytics",
        "/dashboard/help": "help",
        "/dashboard/verification": "verification",
        "/dashboard/api-settings": "api-settings",
        "/dashboard/team": "team",
        "/dashboard/billing": "billing",
    };

    // Update activeTab based on current route
    useEffect(() => {
        const tab = routeToTabMap[pathname] || "dashboard";
        setActiveTab(tab);
    }, [pathname]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        // Navigate to the corresponding route
        const tabToRouteMap: { [key: string]: string } = {
            dashboard: "/dashboard",
            analytics: "/dashboard/analytics",
            help: "/dashboard/help",
            verification: "/dashboard/verification",
            "api-settings": "/dashboard/api-settings",
            team: "/dashboard/team",
            billing: "/dashboard/billing",
        };
        router.push(tabToRouteMap[tab]);
    };

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        // Implement logout logic here (e.g., clear auth tokens, redirect to login)
        console.log("User logged out");
        router.push("/login");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Fixed Sidebar */}
            <div className="fixed left-0 top-0 h-full z-50">
                <Sidebar
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    isCollapsed={isCollapsed}
                    onToggleCollapse={handleToggleCollapse}
                    onLogout={handleLogout}
                />
            </div>

            {/* Main Content with left margin to account for fixed sidebar */}
            <main
                className={`flex-1 p-8 transition-all duration-300 ${
                    isCollapsed ? "ml-20" : "ml-64"
                } min-h-screen overflow-y-auto`}
            >
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
