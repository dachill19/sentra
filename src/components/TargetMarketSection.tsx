"use client";

import React from "react";
import { Building2, ShoppingCart, Landmark } from "lucide-react";

interface TargetMarketSectionProps {
    language: "id" | "en";
}

const TargetMarketSection: React.FC<TargetMarketSectionProps> = ({
    language,
}) => {
    const [activeTab, setActiveTab] = React.useState(0);

    const content = {
        id: {
            title: "Dirancang untuk Berbagai Skala Bisnis",
            markets: [
                {
                    icon: Building2,
                    title: "Fintech & P2P Lending",
                    benefit:
                        "Turunkan NPL (Non-Performing Loan) secara drastis, percepat proses persetujuan dari hari ke menit, dan tingkatkan akuisisi pengguna dengan skor yang akurat.",
                },
                {
                    icon: ShoppingCart,
                    title: "E-commerce & Marketplace",
                    benefit:
                        "Amankan layanan PayLater Anda, verifikasi penjual baru secara instan, dan cegah penipuan transaksi dengan identitas digital yang terpercaya.",
                },
                {
                    icon: Landmark,
                    title: "Enterprise & Lembaga Keuangan",
                    benefit:
                        "Pastikan kepatuhan terhadap regulasi OJK & BI, integrasikan dengan sistem inti Anda secara mudah, dan dapatkan akses ke analitik data mendalam untuk pengambilan keputusan strategis.",
                },
            ],
        },
        en: {
            title: "Designed for Various Business Scales",
            markets: [
                {
                    icon: Building2,
                    title: "Fintech & P2P Lending",
                    benefit:
                        "Drastically reduce NPL (Non-Performing Loan), accelerate approval processes from days to minutes, and increase user acquisition with accurate scoring.",
                },
                {
                    icon: ShoppingCart,
                    title: "E-commerce & Marketplace",
                    benefit:
                        "Secure your PayLater services, verify new sellers instantly, and prevent transaction fraud with trusted digital identity.",
                },
                {
                    icon: Landmark,
                    title: "Enterprise & Financial Institutions",
                    benefit:
                        "Ensure compliance with OJK & BI regulations, integrate easily with your core systems, and gain access to deep data analytics for strategic decision making.",
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section id="solutions" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C252C] mb-6">
                        {t.title}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Tab Navigation */}
                    <div className="flex flex-col sm:flex-row justify-center mb-12 bg-gray-100 rounded-2xl p-2">
                        {t.markets.map((market, index) => {
                            const IconComponent = market.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                                        activeTab === index
                                            ? "bg-white text-[#e43827] shadow-lg transform scale-105"
                                            : "text-gray-600 hover:text-[#e43827]"
                                    }`}
                                >
                                    <IconComponent size={20} />
                                    <span className="hidden sm:inline">
                                        {market.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="relative">
                        {t.markets.map((market, index) => {
                            const IconComponent = market.icon;
                            return (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ${
                                        activeTab === index
                                            ? "opacity-100 transform translate-y-0"
                                            : "opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none"
                                    }`}
                                >
                                    <div className="bg-gradient-to-br from-[#f08c81]/10 to-[#ea6254]/20 rounded-3xl p-8 lg:p-12">
                                        <div className="text-center space-y-6">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#e43827] to-[#ea6254] rounded-3xl flex items-center justify-center mx-auto">
                                                <IconComponent
                                                    size={40}
                                                    className="text-white"
                                                />
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-[#1C252C]">
                                                {market.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                                {market.benefit}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetMarketSection;
