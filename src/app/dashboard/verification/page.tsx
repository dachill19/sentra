"use client";

import React from "react";
import {
    Search,
    Shield,
    CheckCircle,
    AlertCircle,
    TrendingUp,
    Calendar,
    ExternalLink,
    Copy,
    User,
    Wallet,
} from "lucide-react";

interface SearchResult {
    userId: string;
    walletAddress: string;
    verificationStatus: string;
    verificationDate: string;
    creditScore: number;
    riskLevel: "low" | "medium" | "high";
    maxLoanRecommendation: number;
    factors: Array<{
        factor: string;
        impact: "positive" | "negative";
    }>;
    transactionHistory: Array<{
        platform: string;
        amount: number;
        status: string;
        date: string;
    }>;
}

const VerificationPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [searchResult, setSearchResult] = React.useState<SearchResult | null>(
        null
    );
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setSearchResult({
                userId: "SENTRA_ID_12345",
                walletAddress: "0xABC123...DEF789",
                verificationStatus: "verified",
                verificationDate: "2024-01-15",
                creditScore: 742,
                riskLevel: "low",
                maxLoanRecommendation: 50000000,
                factors: [
                    {
                        factor: "Riwayat pembayaran sangat baik",
                        impact: "positive",
                    },
                    {
                        factor: "Jumlah pinjaman aktif sedang tinggi",
                        impact: "negative",
                    },
                    {
                        factor: "Diversifikasi platform baik",
                        impact: "positive",
                    },
                ],
                transactionHistory: [
                    {
                        platform: "Platform A",
                        amount: 5000000,
                        status: "completed",
                        date: "2024-01-10",
                    },
                    {
                        platform: "Platform B",
                        amount: 2500000,
                        status: "completed",
                        date: "2024-01-08",
                    },
                    {
                        platform: "Platform C",
                        amount: 1000000,
                        status: "pending",
                        date: "2024-01-12",
                    },
                ],
            });
            setIsLoading(false);
        }, 1500);
    };

    const copyToClipboard = (text: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const getRiskLevelText = (riskLevel: string) => {
        switch (riskLevel) {
            case "low":
                return "Rendah";
            case "medium":
                return "Sedang";
            case "high":
                return "Tinggi";
            default:
                return "Tidak diketahui";
        }
    };

    const getRiskLevelClass = (riskLevel: string) => {
        switch (riskLevel) {
            case "low":
                return "bg-green-100 text-green-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "high":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[#1C252C]">
                    Verifikasi & Cek Skor
                </h1>
                <p className="text-gray-600 mt-2">
                    Cari dan verifikasi profil pengguna berdasarkan alamat
                    wallet
                </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <form onSubmit={handleSearch} className="space-y-4">
                    <div>
                        <label
                            htmlFor="wallet-search"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Alamat Wallet Pengguna
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Wallet className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="wallet-search"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                placeholder="Masukkan alamat wallet (contoh: 0xABC123...DEF789)"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading || !searchQuery.trim()}
                        className="bg-[#e43827] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Search size={20} />
                        <span>
                            {isLoading ? "Mencari..." : "Cari Profil Pengguna"}
                        </span>
                    </button>
                </form>
            </div>

            {/* Search Results */}
            {searchResult && (
                <div className="space-y-6">
                    {/* User Identity */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-[#1C252C]">
                                Informasi Pengenal
                            </h2>
                            <div className="flex items-center space-x-2">
                                <Shield className="h-5 w-5 text-green-500" />
                                <span className="text-green-600 font-semibold">
                                    Identitas Terverifikasi
                                </span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    ID Pengguna Sentra
                                </label>
                                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                    <User className="h-5 w-5 text-gray-400" />
                                    <span className="font-mono text-[#1C252C]">
                                        {searchResult.userId}
                                    </span>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(searchResult.userId)
                                        }
                                        className="p-1 hover:bg-gray-200 rounded"
                                        type="button"
                                    >
                                        <Copy
                                            size={16}
                                            className="text-gray-500"
                                        />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Alamat Wallet
                                </label>
                                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                    <Wallet className="h-5 w-5 text-gray-400" />
                                    <span className="font-mono text-[#1C252C]">
                                        {searchResult.walletAddress}
                                    </span>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                searchResult.walletAddress
                                            )
                                        }
                                        className="p-1 hover:bg-gray-200 rounded"
                                        type="button"
                                    >
                                        <Copy
                                            size={16}
                                            className="text-gray-500"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                                <div>
                                    <p className="font-semibold text-green-800">
                                        SBT Terverifikasi
                                    </p>
                                    <p className="text-sm text-green-600">
                                        Diverifikasi pada{" "}
                                        {new Date(
                                            searchResult.verificationDate
                                        ).toLocaleDateString("id-ID")}
                                    </p>
                                </div>
                                <button
                                    className="ml-auto flex items-center space-x-1 text-green-600 hover:text-green-700"
                                    type="button"
                                >
                                    <ExternalLink size={16} />
                                    <span className="text-sm">
                                        Lihat di Blockchain
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Credit Score */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                            Skor Kredit Sentra
                        </h2>

                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-1">
                                <div className="text-center">
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-[#e43827]">
                                                    {searchResult.creditScore}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    Skor
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRiskLevelClass(
                                            searchResult.riskLevel
                                        )}`}
                                    >
                                        Risiko{" "}
                                        {getRiskLevelText(
                                            searchResult.riskLevel
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-4">
                                <div>
                                    <h3 className="font-semibold text-[#1C252C] mb-3">
                                        Faktor Penentu Skor
                                    </h3>
                                    <div className="space-y-2">
                                        {searchResult.factors.map(
                                            (factor, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50"
                                                >
                                                    {factor.impact ===
                                                    "positive" ? (
                                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                                    ) : (
                                                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                                                    )}
                                                    <span className="text-sm text-gray-700">
                                                        {factor.factor}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="p-4 bg-[#f08c81]/10 rounded-lg border border-[#ea6254]/20">
                                    <div className="flex items-center space-x-3">
                                        <TrendingUp className="h-6 w-6 text-[#e43827]" />
                                        <div>
                                            <p className="font-semibold text-[#1C252C]">
                                                Rekomendasi Maksimal Pinjaman
                                            </p>
                                            <p className="text-2xl font-bold text-[#e43827]">
                                                {formatCurrency(
                                                    searchResult.maxLoanRecommendation
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transaction History */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                            Riwayat Transaksi (Ekosistem Sentra)
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                            Platform
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                            Jumlah
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                            Status
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                            Tanggal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResult.transactionHistory.map(
                                        (transaction, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-gray-100 hover:bg-gray-50"
                                            >
                                                <td className="py-3 px-4 font-medium text-[#1C252C]">
                                                    {transaction.platform}
                                                </td>
                                                <td className="py-3 px-4">
                                                    {formatCurrency(
                                                        transaction.amount
                                                    )}
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span
                                                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                            transaction.status ===
                                                            "completed"
                                                                ? "bg-green-100 text-green-800"
                                                                : "bg-yellow-100 text-yellow-800"
                                                        }`}
                                                    >
                                                        {transaction.status ===
                                                        "completed"
                                                            ? "Selesai"
                                                            : "Pending"}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-gray-600">
                                                    {new Date(
                                                        transaction.date
                                                    ).toLocaleDateString(
                                                        "id-ID"
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!searchResult && !isLoading && (
                <div className="bg-white rounded-2xl p-12 border border-gray-100 text-center">
                    <Search size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Belum Ada Pencarian
                    </h3>
                    <p className="text-gray-500">
                        Masukkan alamat wallet pengguna untuk melihat profil dan
                        skor kredit mereka
                    </p>
                </div>
            )}
        </div>
    );
};

export default VerificationPage;
