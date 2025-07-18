// src/app/dashboard/analytics/page.tsx
"use client";

import React from "react";
import {
    BarChart3,
    TrendingUp,
    Download,
    Calendar,
    Filter,
    Users,
    Target,
    AlertTriangle,
} from "lucide-react";

const AnalyticsPage: React.FC = () => {
    const [dateRange, setDateRange] = React.useState("30days");

    const portfolioData = {
        totalUsers: 1234,
        averageScore: 57,
        distribution: [
            { range: "80-100", count: 123, percentage: 10 },
            { range: "60-79", count: 345, percentage: 28 },
            { range: "40-59", count: 456, percentage: 37 },
            { range: "20-39", count: 234, percentage: 19 },
            { range: "0-19", count: 76, percentage: 6 },
        ],
    };

    const performanceData = [
        {
            scoreRange: "80+",
            defaultRate: 2.1,
            approvalRate: 95,
            avgLoan: 45000000,
        },
        {
            scoreRange: "60-79",
            defaultRate: 3.8,
            approvalRate: 88,
            avgLoan: 35000000,
        },
        {
            scoreRange: "40-59",
            defaultRate: 6.2,
            approvalRate: 75,
            avgLoan: 25000000,
        },
        {
            scoreRange: "20-39",
            defaultRate: 12.5,
            approvalRate: 45,
            avgLoan: 15000000,
        },
        {
            scoreRange: "0-19",
            defaultRate: 24.3,
            approvalRate: 20,
            avgLoan: 8000000,
        },
    ];

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const exportData = (format: "csv" | "pdf") => {
        // Simulate export - in real app, this would trigger actual export
        alert(`Mengunduh laporan dalam format ${format.toUpperCase()}...`);
    };

    const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDateRange(e.target.value);
    };

    const getDateRangeLabel = (range: string) => {
        switch (range) {
            case "7days":
                return "7 Hari Terakhir";
            case "30days":
                return "30 Hari Terakhir";
            case "90days":
                return "90 Hari Terakhir";
            case "1year":
                return "1 Tahun Terakhir";
            default:
                return "30 Hari Terakhir";
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#1C252C]">
                        Analitik & Laporan
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Analisis mendalam performa portofolio dan skor kredit
                    </p>
                </div>

                <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <select
                        value={dateRange}
                        onChange={handleDateRangeChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827]"
                        aria-label="Pilih rentang waktu"
                    >
                        <option value="7days">7 Hari Terakhir</option>
                        <option value="30days">30 Hari Terakhir</option>
                        <option value="90days">90 Hari Terakhir</option>
                        <option value="1year">1 Tahun Terakhir</option>
                    </select>

                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => exportData("csv")}
                            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            aria-label="Export data as CSV"
                        >
                            <Download size={16} />
                            <span>CSV</span>
                        </button>
                        <button
                            onClick={() => exportData("pdf")}
                            className="flex items-center space-x-2 px-4 py-2 bg-[#e43827] text-white rounded-lg hover:bg-[#ea6254] transition-colors"
                            aria-label="Export data as PDF"
                        >
                            <Download size={16} />
                            <span>PDF</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                            <Users size={24} className="text-white" />
                        </div>
                        <span className="text-sm text-green-600 font-medium">
                            +8.2%
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C252C]">
                        {portfolioData.totalUsers.toLocaleString()}
                    </h3>
                    <p className="text-gray-600">Total Pengguna Dianalisis</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                            <Target size={24} className="text-white" />
                        </div>
                        <span className="text-sm text-green-600 font-medium">
                            +2.1%
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C252C]">
                        {portfolioData.averageScore}
                    </h3>
                    <p className="text-gray-600">Rata-rata Skor Portofolio</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                            <AlertTriangle size={24} className="text-white" />
                        </div>
                        <span className="text-sm text-red-600 font-medium">
                            -15.3%
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C252C]">4.2%</h3>
                    <p className="text-gray-600">Tingkat Gagal Bayar</p>
                </div>
            </div>

            {/* Portfolio Distribution */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#1C252C]">
                        Distribusi Skor Kredit Portofolio
                    </h2>
                    <button
                        className="text-[#e43827] hover:text-[#ea6254] font-medium text-sm transition-colors"
                        aria-label="Lihat detail distribusi skor"
                    >
                        Lihat Detail
                    </button>
                </div>

                <div className="space-y-4">
                    {portfolioData.distribution.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4"
                        >
                            <div className="w-20 text-sm font-medium text-gray-700">
                                {item.range}
                            </div>
                            <div className="flex-1 bg-gray-200 rounded-full h-3 relative">
                                <div
                                    className="bg-gradient-to-r from-[#e43827] to-[#ea6254] h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${item.percentage}%` }}
                                    role="progressbar"
                                    aria-valuenow={item.percentage}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    aria-label={`${item.range}: ${item.percentage}%`}
                                ></div>
                            </div>
                            <div className="w-16 text-sm text-gray-600 text-right">
                                {item.count}
                            </div>
                            <div className="w-12 text-sm text-gray-500 text-right">
                                {item.percentage}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Performance Analysis */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#1C252C]">
                        Laporan Performa Skor
                    </h2>
                    <div className="text-sm text-gray-600">
                        Data menunjukkan korelasi kuat antara skor Sentra dan
                        performa pembayaran
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table
                        className="w-full"
                        role="table"
                        aria-label="Tabel performa skor kredit"
                    >
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Rentang Skor
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Tingkat Gagal Bayar
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Tingkat Persetujuan
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Rata-rata Pinjaman
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {performanceData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="py-4 px-4 font-medium text-[#1C252C]">
                                        {row.scoreRange}
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center space-x-2">
                                            <span
                                                className={`font-medium ${
                                                    row.defaultRate < 5
                                                        ? "text-green-600"
                                                        : row.defaultRate < 15
                                                        ? "text-yellow-600"
                                                        : "text-red-600"
                                                }`}
                                            >
                                                {row.defaultRate}%
                                            </span>
                                            <div
                                                className={`w-2 h-2 rounded-full ${
                                                    row.defaultRate < 5
                                                        ? "bg-green-500"
                                                        : row.defaultRate < 15
                                                        ? "bg-yellow-500"
                                                        : "bg-red-500"
                                                }`}
                                                aria-hidden="true"
                                            ></div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="font-medium text-blue-600">
                                            {row.approvalRate}%
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        {formatCurrency(row.avgLoan)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                        <TrendingUp className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                            <h4 className="font-semibold text-green-800">
                                Insight Kunci
                            </h4>
                            <p className="text-sm text-green-700 mt-1">
                                Pengguna dengan skor 60+ menunjukkan tingkat
                                gagal bayar 85% lebih rendah dibanding skor di
                                bawah 20. Ini memvalidasi akurasi prediksi model
                                AI Sentra.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trend Chart Placeholder */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#1C252C]">
                        Tren Performa Bulanan
                    </h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar size={16} />
                        <span>Periode: {getDateRangeLabel(dateRange)}</span>
                    </div>
                </div>

                <div className="h-64 bg-gradient-to-br from-[#f08c81]/10 to-[#ea6254]/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                        <BarChart3
                            size={48}
                            className="text-[#e43827] mx-auto mb-4"
                        />
                        <p className="text-gray-600">
                            Grafik tren performa portofolio
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Menampilkan peningkatan kualitas portofolio 12% dari
                            bulan lalu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
