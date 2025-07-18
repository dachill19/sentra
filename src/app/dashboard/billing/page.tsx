// src/app/billing/page.tsx
"use client";

import React, { useState } from "react";
import {
    CreditCard,
    Download,
    Calendar,
    CheckCircle,
    Package,
    Zap,
    Star,
    Crown,
    Shield,
} from "lucide-react";

interface CurrentPlan {
    name: string;
    price: number;
    currency: string;
    billing: string;
    nextBilling: string;
    features: string[];
    usage: {
        apiCalls: number;
        limit: number;
    };
}

interface Invoice {
    id: string;
    date: string;
    amount: number;
    status: "paid" | "pending" | "overdue";
    description: string;
}

interface Plan {
    name: string;
    price: number;
    description: string;
    features: string[];
    popular: boolean;
    badge?: string;
    icon?: React.ReactNode;
}

const BillingPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState("standard");

    const currentPlan: CurrentPlan = {
        name: "Starter",
        price: 2500000,
        currency: "IDR",
        billing: "monthly",
        nextBilling: "2024-02-15",
        features: [
            "10,000 API calls per month",
            "Real-time credit scoring",
            "SBT verification",
            "Advanced analytics",
            "Email support",
            "Team management (up to 10 users)",
        ],
        usage: {
            apiCalls: 7500,
            limit: 10000,
        },
    };

    const invoices: Invoice[] = [
        {
            id: "INV-2024-001",
            date: "2024-01-15",
            amount: 2500000,
            status: "paid",
            description: "Professional Plan - January 2024",
        },
        {
            id: "INV-2023-012",
            date: "2023-12-15",
            amount: 2500000,
            status: "paid",
            description: "Professional Plan - December 2023",
        },
        {
            id: "INV-2023-011",
            date: "2023-11-15",
            amount: 2500000,
            status: "paid",
            description: "Professional Plan - November 2023",
        },
        {
            id: "INV-2023-010",
            date: "2023-10-15",
            amount: 1500000,
            status: "paid",
            description: "Starter Plan - October 2023",
        },
    ];

    const standardPlans: Plan[] = [
        {
            name: "Free",
            price: 0,
            description: "Perfect for small businesses",
            features: [
                "5,000 API calls per month",
                "Basic credit scoring",
                "SBT verification",
                "Standard analytics",
                "Email support",
            ],
            popular: false,
            icon: <Package className="h-5 w-5" />,
        },
        {
            name: "Starter",
            price: 2500000,
            description: "Most popular for growing companies",
            features: [
                "10,000 API calls per month",
                "Real-time credit scoring",
                "SBT verification",
                "Advanced analytics",
                "Priority support",
                "Team management",
            ],
            popular: true,
            icon: <Zap className="h-5 w-5" />,
        },
        {
            name: "Professional",
            price: 5000000,
            description: "For large organizations",
            features: [
                "Unlimited API calls",
                "Custom AI models",
                "White-label solution",
                "Custom analytics",
                "24/7 dedicated support",
                "Advanced team management",
            ],
            popular: false,
            icon: <Star className="h-5 w-5" />,
        },
    ];

    const enterprisePlan: Plan = {
        name: "Enterprise",
        price: 0, // Contact sales
        description: "For businesses operating at scale",
        features: [
            "Everything in Professional, plus:",
            "More usage*",
            "Expanded context window",
            "Single sign-on (SSO)",
            "Role-based access with permissioning",
            "System for Cross-domain Identity Management (SCIM)",
            "Audit logs",
            "Custom integrations",
            "Dedicated account manager",
            "SLA guarantee",
        ],
        popular: false,
        badge: "Contact Sales",
        icon: <Crown className="h-5 w-5" />,
    };

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const getStatusColor = (status: string): string => {
        switch (status) {
            case "paid":
                return "text-green-600 bg-green-100";
            case "pending":
                return "text-yellow-600 bg-yellow-100";
            case "overdue":
                return "text-red-600 bg-red-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    const handleDownloadInvoice = (invoiceId: string): void => {
        console.log(`Downloading invoice ${invoiceId}...`);
        // Handle download logic here
    };

    const handleUpgradePlan = (planName: string): void => {
        console.log(`Upgrading to ${planName} plan...`);
        // Handle upgrade logic here
    };

    const handleUpdatePaymentMethod = (): void => {
        console.log("Opening payment method update form...");
        // Handle payment method update logic here
    };

    const handleContactSales = (): void => {
        console.log("Opening contact sales form...");
        // Handle contact sales logic here
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#1C252C]">
                    Penagihan & Langganan
                </h1>
                <p className="text-gray-600 mt-2">
                    Kelola paket langganan dan riwayat pembayaran Anda
                </p>
            </div>

            {/* Current Plan */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#1C252C]">
                        Paket Saat Ini
                    </h2>
                    <div className="flex items-center space-x-2">
                        <Package className="h-5 w-5 text-[#e43827]" />
                        <span className="font-semibold text-[#e43827]">
                            {currentPlan.name}
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <div className="flex items-baseline space-x-2 mb-2">
                                <span className="text-3xl font-bold text-[#1C252C]">
                                    {formatCurrency(currentPlan.price)}
                                </span>
                                <span className="text-gray-600">/ bulan</span>
                            </div>
                            <p className="text-gray-600">
                                Perpanjangan otomatis pada{" "}
                                {new Date(
                                    currentPlan.nextBilling
                                ).toLocaleDateString("id-ID")}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#1C252C] mb-3">
                                Fitur Termasuk:
                            </h3>
                            <div className="grid md:grid-cols-2 gap-2">
                                {currentPlan.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2"
                                    >
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-[#1C252C] mb-2">
                                Penggunaan API Bulan Ini
                            </h4>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Digunakan</span>
                                    <span>
                                        {currentPlan.usage.apiCalls.toLocaleString()}{" "}
                                        /{" "}
                                        {currentPlan.usage.limit.toLocaleString()}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-[#e43827] h-2 rounded-full transition-all duration-300"
                                        style={{
                                            width: `${
                                                (currentPlan.usage.apiCalls /
                                                    currentPlan.usage.limit) *
                                                100
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-600">
                                    {Math.round(
                                        ((currentPlan.usage.limit -
                                            currentPlan.usage.apiCalls) /
                                            currentPlan.usage.limit) *
                                            100
                                    )}
                                    % tersisa
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleUpdatePaymentMethod}
                            className="w-full bg-[#e43827] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors flex items-center justify-center space-x-2"
                        >
                            <CreditCard size={20} />
                            <span>Update Metode Pembayaran</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Available Plans with Tab Navigation */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#1C252C]">
                        Paket Tersedia
                    </h2>

                    {/* Tab Navigation */}
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setSelectedTab("standard")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                selectedTab === "standard"
                                    ? "bg-white text-[#e43827] shadow-sm"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            Standard Plans
                        </button>
                        <button
                            onClick={() => setSelectedTab("enterprise")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                selectedTab === "enterprise"
                                    ? "bg-white text-[#e43827] shadow-sm"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            Enterprise
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {selectedTab === "standard" ? (
                    <div className="grid md:grid-cols-3 gap-6">
                        {standardPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                                    plan.popular
                                        ? "border-[#e43827] bg-gradient-to-br from-[#f08c81]/5 to-[#ea6254]/10"
                                        : "border-gray-200 hover:border-[#ea6254]/50"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#e43827] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Paling Populer
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <div className="flex items-center justify-center mb-2">
                                        {plan.icon}
                                        <h3 className="text-xl font-bold text-[#1C252C] ml-2">
                                            {plan.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline justify-center space-x-1">
                                        <span className="text-3xl font-bold text-[#1C252C]">
                                            {formatCurrency(plan.price)}
                                        </span>
                                        {plan.price > 0 && (
                                            <span className="text-gray-600">
                                                /bulan
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {plan.features.map(
                                        (feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center space-x-2"
                                            >
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">
                                                    {feature}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>

                                <button
                                    onClick={() => handleUpgradePlan(plan.name)}
                                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                                        plan.name === currentPlan.name
                                            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                                            : plan.popular
                                            ? "bg-[#e43827] text-white hover:bg-[#ea6254]"
                                            : "border-2 border-[#e43827] text-[#e43827] hover:bg-[#e43827] hover:text-white"
                                    }`}
                                    disabled={plan.name === currentPlan.name}
                                >
                                    {plan.name === currentPlan.name
                                        ? "Paket Saat Ini"
                                        : "Pilih Paket"}
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-md mx-auto">
                        <div className="relative border-2 border-purple-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Enterprise
                                </span>
                            </div>

                            <div className="text-center mb-6">
                                <div className="flex items-center justify-center mb-2">
                                    <Crown className="h-6 w-6 text-purple-600" />
                                    <h3 className="text-xl font-bold text-[#1C252C] ml-2">
                                        {enterprisePlan.name}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    {enterprisePlan.description}
                                </p>
                                <div className="flex items-baseline justify-center space-x-1">
                                    <span className="text-2xl font-bold text-purple-600">
                                        Custom Pricing
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                {enterprisePlan.features.map(
                                    (feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start space-x-2"
                                        >
                                            {feature.includes(
                                                "Everything in"
                                            ) ? (
                                                <Shield className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            )}
                                            <span
                                                className={`text-sm ${
                                                    feature.includes(
                                                        "Everything in"
                                                    )
                                                        ? "font-semibold text-purple-700"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                {feature}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>

                            <button
                                onClick={handleContactSales}
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                    Metode Pembayaran
                </h2>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                                VISA
                            </span>
                        </div>
                        <div>
                            <p className="font-semibold text-[#1C252C]">
                                •••• •••• •••• 4242
                            </p>
                            <p className="text-sm text-gray-600">
                                Berakhir 12/25
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleUpdatePaymentMethod}
                        className="text-[#e43827] hover:text-[#ea6254] font-medium"
                    >
                        Edit
                    </button>
                </div>
            </div>

            {/* Invoice History */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#1C252C]">
                        Riwayat Tagihan
                    </h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar size={16} />
                        <span>Semua invoice</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Invoice ID
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Tanggal
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Deskripsi
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Jumlah
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Status
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice) => (
                                <tr
                                    key={invoice.id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="py-3 px-4 font-mono text-sm text-[#1C252C]">
                                        {invoice.id}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600">
                                        {new Date(
                                            invoice.date
                                        ).toLocaleDateString("id-ID")}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                        {invoice.description}
                                    </td>
                                    <td className="py-3 px-4 font-semibold text-[#1C252C]">
                                        {formatCurrency(invoice.amount)}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                invoice.status
                                            )}`}
                                        >
                                            {invoice.status === "paid"
                                                ? "Lunas"
                                                : invoice.status === "pending"
                                                ? "Pending"
                                                : "Terlambat"}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() =>
                                                handleDownloadInvoice(
                                                    invoice.id
                                                )
                                            }
                                            className="flex items-center space-x-1 text-[#e43827] hover:text-[#ea6254] text-sm"
                                        >
                                            <Download size={16} />
                                            <span>Download</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;
