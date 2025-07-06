"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
    language: "id" | "en";
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
    const content = {
        id: {
            headline:
                "Pusat Kredibilitas Digital Indonesia Terbaik untuk Bisnis Anda",
            description:
                "Sentra adalah platform API terpadu yang memberdayakan bisnis Anda dengan skor kredit berbasis AI yang akurat dan identitas digital terdesentralisasi (SBT) yang aman. Kurangi risiko, percepat persetujuan, dan bangun kepercayaan di setiap transaksi.",
            ctaPrimary: "Jadwalkan Demo Gratis",
            ctaSecondary: "Lihat Cara Kerja",
        },
        en: {
            headline:
                "Indonesia's Premier Digital Credibility Hub for Your Business",
            description:
                "Sentra is a unified API platform that empowers your business with accurate AI-based credit scoring and secure decentralized digital identity (SBT). Reduce risk, accelerate approvals, and build trust in every transaction.",
            ctaPrimary: "Schedule Free Demo",
            ctaSecondary: "See How It Works",
        },
    };

    const t = content[language];

    const handleDemoClick = () => {
        const element = document.getElementById("demo");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleWatchDemo = () => {
        const element = document.getElementById("how-it-works");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1C252C] leading-tight">
                                {t.headline}
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                {t.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleDemoClick}
                                className="bg-[#e43827] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ea6254] transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                                aria-label="Schedule free demo"
                            >
                                {t.ctaPrimary}
                                <ArrowRight
                                    size={20}
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                            <button
                                onClick={handleWatchDemo}
                                className="border-2 border-[#ea6254] text-[#e43827] px-8 py-4 rounded-lg font-semibold hover:bg-[#ea6254] hover:text-white transition-all duration-300 flex items-center justify-center group"
                                aria-label="Watch demo video"
                            >
                                <Play
                                    size={20}
                                    className="mr-2 group-hover:scale-110 transition-transform"
                                />
                                {t.ctaSecondary}
                            </button>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        <div className="relative z-10">
                            {/* Abstract Network Visualization */}
                            <div className="w-full h-96 bg-gradient-to-br from-[#f08c81]/20 to-[#ea6254]/30 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="relative w-full h-full">
                                    {/* Central Node */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#e43827] rounded-full shadow-lg animate-pulse"></div>

                                    {/* Surrounding Nodes */}
                                    <div
                                        className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#ea6254] rounded-full shadow-md animate-bounce"
                                        style={{ animationDelay: "0.5s" }}
                                    ></div>
                                    <div
                                        className="absolute top-1/4 right-1/4 w-6 h-6 bg-[#f08c81] rounded-full shadow-md animate-bounce"
                                        style={{ animationDelay: "1s" }}
                                    ></div>
                                    <div
                                        className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-[#ea6254] rounded-full shadow-md animate-bounce"
                                        style={{ animationDelay: "1.5s" }}
                                    ></div>
                                    <div
                                        className="absolute bottom-1/3 right-1/4 w-7 h-7 bg-[#f08c81] rounded-full shadow-md animate-bounce"
                                        style={{ animationDelay: "2s" }}
                                    ></div>

                                    {/* Connection Lines */}
                                    <svg
                                        className="absolute inset-0 w-full h-full"
                                        viewBox="0 0 100 100"
                                        aria-hidden="true"
                                    >
                                        <line
                                            x1="50"
                                            y1="50"
                                            x2="25"
                                            y2="25"
                                            stroke="#ea6254"
                                            strokeWidth="0.5"
                                            opacity="0.6"
                                            className="animate-pulse"
                                        />
                                        <line
                                            x1="50"
                                            y1="50"
                                            x2="75"
                                            y2="25"
                                            stroke="#ea6254"
                                            strokeWidth="0.5"
                                            opacity="0.6"
                                            className="animate-pulse"
                                        />
                                        <line
                                            x1="50"
                                            y1="50"
                                            x2="33"
                                            y2="75"
                                            stroke="#ea6254"
                                            strokeWidth="0.5"
                                            opacity="0.6"
                                            className="animate-pulse"
                                        />
                                        <line
                                            x1="50"
                                            y1="50"
                                            x2="75"
                                            y2="67"
                                            stroke="#ea6254"
                                            strokeWidth="0.5"
                                            opacity="0.6"
                                            className="animate-pulse"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div
                            className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#e43827]/10 to-[#f08c81]/10 rounded-full blur-3xl"
                            aria-hidden="true"
                        ></div>
                        <div
                            className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-[#ea6254]/10 to-[#f08c81]/10 rounded-full blur-3xl"
                            aria-hidden="true"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
