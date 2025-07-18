// src/app/api-settings/page.tsx
"use client";

import React, { useState, useCallback } from "react";
import {
    Key,
    Copy,
    Trash2,
    Plus,
    Eye,
    EyeOff,
    Activity,
    Webhook,
    AlertCircle,
    CheckCircle,
    Clock,
    RefreshCw,
    Settings,
    Shield,
} from "lucide-react";

interface ApiKey {
    id: string;
    name: string;
    key: string;
    created: string;
    lastUsed: string;
    status: "active" | "inactive";
}

interface ApiLog {
    id: string;
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    status: number;
    timestamp: string;
    responseTime: string;
    wallet: string;
}

const ApiSettingsPage: React.FC = () => {
    const [showApiKey, setShowApiKey] = useState<Record<string, boolean>>({});
    const [webhookUrl, setWebhookUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const apiKeys: ApiKey[] = [
        {
            id: "1",
            name: "Production API Key",
            key: "sk_live_abc123...xyz789",
            created: "2024-01-15",
            lastUsed: "2024-01-20",
            status: "active",
        },
        {
            id: "2",
            name: "Development API Key",
            key: "sk_test_def456...uvw012",
            created: "2024-01-10",
            lastUsed: "2024-01-19",
            status: "active",
        },
        {
            id: "3",
            name: "Backup API Key",
            key: "sk_live_ghi789...rst345",
            created: "2024-01-05",
            lastUsed: "2024-01-18",
            status: "inactive",
        },
    ];

    const apiLogs: ApiLog[] = [
        {
            id: "1",
            endpoint: "/api/v1/credit-score",
            method: "GET",
            status: 200,
            timestamp: "2024-01-20 14:30:25",
            responseTime: "245ms",
            wallet: "0xABC...123",
        },
        {
            id: "2",
            endpoint: "/api/v1/verify-identity",
            method: "POST",
            status: 200,
            timestamp: "2024-01-20 14:28:15",
            responseTime: "1.2s",
            wallet: "0xDEF...456",
        },
        {
            id: "3",
            endpoint: "/api/v1/credit-score",
            method: "GET",
            status: 404,
            timestamp: "2024-01-20 14:25:10",
            responseTime: "120ms",
            wallet: "0xGHI...789",
        },
        {
            id: "4",
            endpoint: "/api/v1/transaction-history",
            method: "GET",
            status: 200,
            timestamp: "2024-01-20 14:22:45",
            responseTime: "890ms",
            wallet: "0xJKL...012",
        },
    ];

    const toggleApiKeyVisibility = useCallback((keyId: string) => {
        setShowApiKey((prev) => ({ ...prev, [keyId]: !prev[keyId] }));
    }, []);

    const copyToClipboard = useCallback((text: string) => {
        navigator.clipboard.writeText(text);
        console.log("API key disalin:", text);
        // TODO: Add toast notification
    }, []);

    const createNewApiKey = useCallback(() => {
        console.log("API Key baru dibuat.");
        // TODO: Add modal for creating new API key
    }, []);

    const revokeApiKey = useCallback((keyId: string) => {
        const confirmed = window.confirm("Yakin ingin mencabut API Key?");
        if (confirmed) {
            console.log("Dicabut:", keyId);
            // TODO: Add API call to revoke key
        }
    }, []);

    const saveWebhook = useCallback(() => {
        setIsLoading(true);
        console.log("Webhook URL disimpan:", webhookUrl);
        // TODO: Add API call to save webhook
        setTimeout(() => setIsLoading(false), 1000);
    }, [webhookUrl]);

    const getStatusColor = (status: number): string => {
        if (status >= 200 && status < 300) return "text-green-600 bg-green-100";
        if (status >= 400 && status < 500)
            return "text-yellow-600 bg-yellow-100";
        return "text-red-600 bg-red-100";
    };

    const getStatusIcon = (status: string): React.ReactNode => {
        switch (status) {
            case "active":
                return <CheckCircle className="h-4 w-4 text-green-500" />;
            case "inactive":
                return <Clock className="h-4 w-4 text-gray-500" />;
            default:
                return <AlertCircle className="h-4 w-4 text-red-500" />;
        }
    };

    const getMethodColor = (method: string): string => {
        switch (method) {
            case "GET":
                return "text-green-600 bg-green-100";
            case "POST":
                return "text-blue-600 bg-blue-100";
            case "PUT":
                return "text-yellow-600 bg-yellow-100";
            case "DELETE":
                return "text-red-600 bg-red-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#1C252C]">
                    Pengaturan API
                </h1>
                <p className="text-gray-600 mt-2">
                    Kelola API keys, webhook, dan monitor aktivitas API Anda
                </p>
            </div>

            {/* API Keys Section */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#e43827] rounded-xl flex items-center justify-center">
                            <Key size={24} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#1C252C]">
                                API Keys
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Kelola kunci API untuk autentikasi
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={createNewApiKey}
                        className="flex items-center space-x-2 bg-[#e43827] text-white px-4 py-2 rounded-lg hover:bg-[#ea6254] transition-colors"
                    >
                        <Plus size={16} />
                        <span>Buat API Key Baru</span>
                    </button>
                </div>

                <div className="space-y-4">
                    {apiKeys.map((apiKey) => (
                        <div
                            key={apiKey.id}
                            className="p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                    {getStatusIcon(apiKey.status)}
                                    <div>
                                        <h3 className="font-semibold text-[#1C252C]">
                                            {apiKey.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Dibuat: {apiKey.created} | Terakhir
                                            digunakan: {apiKey.lastUsed}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() =>
                                            toggleApiKeyVisibility(apiKey.id)
                                        }
                                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {showApiKey[apiKey.id] ? (
                                            <EyeOff size={16} />
                                        ) : (
                                            <Eye size={16} />
                                        )}
                                    </button>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(apiKey.key)
                                        }
                                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        <Copy size={16} />
                                    </button>
                                    <button
                                        onClick={() => revokeApiKey(apiKey.id)}
                                        className="p-2 text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
                                {showApiKey[apiKey.id]
                                    ? apiKey.key
                                    : "•".repeat(32)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Webhook Configuration */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-[#ea6254] rounded-xl flex items-center justify-center">
                        <Webhook size={24} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#1C252C]">
                            Webhook Configuration
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Konfigurasi URL webhook untuk notifikasi real-time
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Webhook URL
                        </label>
                        <input
                            type="url"
                            value={webhookUrl}
                            onChange={(e) => setWebhookUrl(e.target.value)}
                            placeholder="https://your-domain.com/webhook"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={saveWebhook}
                            disabled={isLoading}
                            className="flex items-center space-x-2 bg-[#e43827] text-white px-4 py-2 rounded-lg hover:bg-[#ea6254] transition-colors disabled:opacity-50"
                        >
                            {isLoading ? (
                                <RefreshCw size={16} className="animate-spin" />
                            ) : (
                                <Settings size={16} />
                            )}
                            <span>Simpan Webhook</span>
                        </button>
                        <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <Activity size={16} />
                            <span>Test Webhook</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* API Logs */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#f08c81] rounded-xl flex items-center justify-center">
                            <Activity size={24} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#1C252C]">
                                Log Aktivitas API
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Monitor semua request API terbaru
                            </p>
                        </div>
                    </div>
                    <button className="text-[#e43827] hover:text-[#ea6254] font-medium text-sm transition-colors">
                        Lihat Semua Log
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Endpoint
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Method
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Status
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Response Time
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Wallet
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                    Timestamp
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiLogs.map((log) => (
                                <tr
                                    key={log.id}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="py-3 px-4">
                                        <code className="text-sm text-[#1C252C] font-mono">
                                            {log.endpoint}
                                        </code>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${getMethodColor(
                                                log.method
                                            )}`}
                                        >
                                            {log.method}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                log.status
                                            )}`}
                                        >
                                            {log.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                        {log.responseTime}
                                    </td>
                                    <td className="py-3 px-4">
                                        <code className="text-sm text-gray-600 font-mono">
                                            {log.wallet}
                                        </code>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                        {log.timestamp}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Security Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield size={20} className="text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">
                            Keamanan API
                        </h3>
                        <p className="text-yellow-700 text-sm mb-3">
                            Jaga keamanan API keys Anda dengan tidak
                            membagikannya kepada pihak yang tidak berwenang.
                            Rotasi API keys secara berkala untuk keamanan
                            maksimal.
                        </p>
                        <ul className="text-yellow-700 text-sm space-y-1">
                            <li>• Simpan API keys di environment variables</li>
                            <li>• Gunakan HTTPS untuk semua request</li>
                            <li>• Monitor aktivitas API secara berkala</li>
                            <li>• Cabut API keys yang tidak digunakan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiSettingsPage;
