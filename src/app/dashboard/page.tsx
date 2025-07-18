// src/app/dashboard/page.tsx
"use client";

import React from "react";
import {
    TrendingUp,
    Users,
    Shield,
    AlertTriangle,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Eye,
    FileText,
} from "lucide-react";

interface KpiData {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down";
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: "blue" | "green" | "purple" | "red";
}

interface RecentActivity {
    id: number;
    action: string;
    wallet: string;
    time: string;
    status: "success" | "error" | "info";
}

const DashboardMain: React.FC = () => {
    const kpiData: KpiData[] = [
        {
            title: "Total Panggilan API Hari Ini",
            value: "2,847",
            change: "+12.5%",
            trend: "up",
            icon: Activity,
            color: "blue",
        },
        {
            title: "Pengguna Terverifikasi Bulan Ini",
            value: "1,234",
            change: "+8.2%",
            trend: "up",
            icon: Users,
            color: "green",
        },
        {
            title: "Rata-rata Skor Kredit",
            value: "742",
            change: "+2.1%",
            trend: "up",
            icon: TrendingUp,
            color: "purple",
        },
        {
            title: "Peringatan Risiko",
            value: "23",
            change: "-15.3%",
            trend: "down",
            icon: AlertTriangle,
            color: "red",
        },
    ];

    const recentActivities: RecentActivity[] = [
        {
            id: 1,
            action: "Skor berhasil diambil",
            wallet: "0xABC...123",
            time: "2 menit yang lalu",
            status: "success",
        },
        {
            id: 2,
            action: "Verifikasi gagal",
            wallet: "user_456",
            time: "5 menit yang lalu",
            status: "error",
        },
        {
            id: 3,
            action: "API Key baru dibuat",
            wallet: "admin",
            time: "10 menit yang lalu",
            status: "info",
        },
        {
            id: 4,
            action: "Skor berhasil diambil",
            wallet: "0xDEF...789",
            time: "15 menit yang lalu",
            status: "success",
        },
        {
            id: 5,
            action: "Webhook berhasil dikirim",
            wallet: "system",
            time: "20 menit yang lalu",
            status: "success",
        },
    ];

    const getStatusColor = (status: string): string => {
        switch (status) {
            case "success":
                return "text-green-600 bg-green-100";
            case "error":
                return "text-red-600 bg-red-100";
            case "info":
                return "text-blue-600 bg-blue-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    const getKpiColor = (color: string): string => {
        switch (color) {
            case "blue":
                return "bg-blue-500";
            case "green":
                return "bg-green-500";
            case "purple":
                return "bg-purple-500";
            case "red":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    const handleViewDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Handle view details logic here
        console.log("View details clicked");
    };

    const handleViewAll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Handle view all logic here
        console.log("View all clicked");
    };

    const handleQuickAction = (actionType: string) => {
        console.log(`Quick action: ${actionType}`);
        // Handle quick action logic here
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#1C252C]">Dashboard</h1>
                <p className="text-gray-600 mt-2">
                    Selamat datang kembali! Berikut ringkasan aktivitas Anda
                    hari ini.
                </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiData.map((kpi, index) => {
                    const IconComponent = kpi.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className={`w-12 h-12 ${getKpiColor(
                                        kpi.color
                                    )} rounded-xl flex items-center justify-center`}
                                >
                                    <IconComponent
                                        size={24}
                                        className="text-white"
                                    />
                                </div>
                                <div
                                    className={`flex items-center space-x-1 text-sm font-medium ${
                                        kpi.trend === "up"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {kpi.trend === "up" ? (
                                        <ArrowUpRight size={16} />
                                    ) : (
                                        <ArrowDownRight size={16} />
                                    )}
                                    <span>{kpi.change}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#1C252C] mb-1">
                                    {kpi.value}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {kpi.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Activity Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-[#1C252C]">
                            Tren Aktivitas API (30 Hari)
                        </h2>
                        <button
                            onClick={handleViewDetails}
                            className="text-[#e43827] hover:text-[#ea6254] font-medium text-sm transition-colors"
                        >
                            Lihat Detail
                        </button>
                    </div>

                    {/* Simple Chart Placeholder */}
                    <div className="h-64 bg-gradient-to-br from-[#f08c81]/10 to-[#ea6254]/20 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                            <TrendingUp
                                size={48}
                                className="text-[#e43827] mx-auto mb-4"
                            />
                            <p className="text-gray-600">
                                Grafik tren aktivitas API
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Menampilkan peningkatan 15% dari bulan lalu
                            </p>
                        </div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-[#1C252C]">
                            Aktivitas Terbaru
                        </h2>
                        <button
                            onClick={handleViewAll}
                            className="text-[#e43827] hover:text-[#ea6254] font-medium text-sm transition-colors"
                        >
                            Lihat Semua
                        </button>
                    </div>

                    <div className="space-y-4">
                        {recentActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div
                                    className={`w-2 h-2 rounded-full mt-2 ${
                                        getStatusColor(activity.status).split(
                                            " "
                                        )[1]
                                    }`}
                                ></div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-[#1C252C]">
                                        {activity.action}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        untuk {activity.wallet}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                    Aksi Cepat
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button
                        onClick={() => handleQuickAction("check-score")}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#e43827] hover:bg-[#f08c81]/5 transition-all duration-300 group"
                    >
                        <div className="w-10 h-10 bg-[#e43827] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Eye size={20} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-[#1C252C]">
                                Cek Skor Pengguna
                            </p>
                            <p className="text-sm text-gray-600">
                                Verifikasi pengguna baru
                            </p>
                        </div>
                    </button>

                    <button
                        onClick={() => handleQuickAction("weekly-report")}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#e43827] hover:bg-[#f08c81]/5 transition-all duration-300 group"
                    >
                        <div className="w-10 h-10 bg-[#ea6254] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FileText size={20} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-[#1C252C]">
                                Laporan Mingguan
                            </p>
                            <p className="text-sm text-gray-600">
                                Unduh laporan terbaru
                            </p>
                        </div>
                    </button>

                    <button
                        onClick={() => handleQuickAction("api-security")}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#e43827] hover:bg-[#f08c81]/5 transition-all duration-300 group"
                    >
                        <div className="w-10 h-10 bg-[#f08c81] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield size={20} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-[#1C252C]">
                                API Security
                            </p>
                            <p className="text-sm text-gray-600">
                                Kelola keamanan API
                            </p>
                        </div>
                    </button>

                    <button
                        onClick={() => handleQuickAction("invite-team")}
                        className="flex items-center space-x-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#e43827] hover:bg-[#f08c81]/5 transition-all duration-300 group"
                    >
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Users size={20} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-[#1C252C]">
                                Undang Tim
                            </p>
                            <p className="text-sm text-gray-600">
                                Tambah anggota baru
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
