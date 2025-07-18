"use client";

import React from "react";
import Image from "next/image";
import {
    LayoutDashboard,
    UserCheck,
    BarChart3,
    Settings,
    Users,
    CreditCard,
    HelpCircle,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface SidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
    onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    activeTab,
    onTabChange,
    isCollapsed,
    onToggleCollapse,
    onLogout,
}) => {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "verification", label: "Verifikasi & Cek Skor", icon: UserCheck },
        { id: "analytics", label: "Analitik & Laporan", icon: BarChart3 },
        { id: "api-settings", label: "Pengaturan API", icon: Settings },
        { id: "team", label: "Manajemen Tim", icon: Users },
        { id: "billing", label: "Penagihan & Langganan", icon: CreditCard },
        { id: "help", label: "Pusat Bantuan", icon: HelpCircle },
    ];

    return (
        <div
            className={`bg-white border-r border-gray-200 transition-all duration-300 ${
                isCollapsed ? "w-20" : "w-64"
            } flex flex-col h-screen`}
        >
            {/* Header */}
            <div
                className={`p-4 border-b border-gray-200 flex items-center ${
                    isCollapsed ? "justify-center" : "justify-between"
                }`}
            >
                {!isCollapsed && (
                    <Image
                        src="/sentra-logo.png"
                        alt="Sentra"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                )}
                <button
                    onClick={onToggleCollapse}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-label={
                        isCollapsed ? "Expand sidebar" : "Collapse sidebar"
                    }
                >
                    {isCollapsed ? (
                        <ChevronRight size={20} className="text-gray-600" />
                    ) : (
                        <ChevronLeft size={20} className="text-gray-600" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-2 space-y-1">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => onTabChange(item.id)}
                            className={`group w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? "bg-[#e43827] text-white shadow"
                                    : "text-gray-700 hover:bg-gray-100"
                            } ${
                                isCollapsed
                                    ? "justify-center space-x-0"
                                    : "justify-start"
                            }`}
                            title={item.label}
                            aria-label={item.label}
                        >
                            <IconComponent
                                size={20}
                                className="flex-shrink-0"
                            />
                            {!isCollapsed && (
                                <span className="text-sm font-medium truncate">
                                    {item.label}
                                </span>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* User Profile & Logout */}
            <div className="p-3 border-t border-gray-200">
                {!isCollapsed && (
                    <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#e43827] rounded-full flex items-center justify-center text-white font-semibold">
                                PT
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    PT. Tech Corp
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    admin@techcorp.com
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    onClick={onLogout}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors ${
                        isCollapsed
                            ? "justify-center space-x-0"
                            : "justify-start"
                    }`}
                    title="Logout"
                    aria-label="Logout"
                >
                    <LogOut size={20} className="flex-shrink-0" />
                    {!isCollapsed && (
                        <span className="text-sm font-medium">Logout</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
