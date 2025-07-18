"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
    language: "id" | "en";
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
    const content = {
        id: {
            headline: "Pusat Kredibilitas Digital untuk Ekonomi Indonesia",
            description:
                "Sentra adalah Platform Identitas dan reputasi kredit terpadu yang memberdayakan ekonomi Indonesia dengan skor kredit real time berbasis AI yang akurat dan identitas digital SBT yang unik untuk setiap user. Kurangi risiko, percepat persetujuan, dan bangun kepercayaan di setiap transaksi.",
            ctaPrimary: "Jadilah Mitra Kami",
            ctaSecondary: "Lihat Cara Kerja",
        },
        en: {
            headline: "Digital Credibility Hub for Indonesia's Economy",
            description:
                "Sentra is a unified platform for credit reputation and digital identity, empowering Indonesia's economy through real-time AI credit scoring and unique SBT credentials. Reduce risk, speed up approvals, and foster trust at every transaction.",
            ctaPrimary: "Become Our Partner",
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
                            <h2 className="text-2xl lg:text-2xl font-semibold text-[#e43827] italic">
                                “One Credit Identity for Everything”
                            </h2>
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
                    <div className="relative w-full h-96 bg-gradient-to-br from-[#f08c81]/20 to-[#ea6254]/30 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
                        <div className="relative w-full h-full">
                            {/* Wave Background */}
                            <div className="absolute inset-0 opacity-30">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 400 300"
                                >
                                    <path
                                        d="M0,150 Q100,50 200,150 T400,150"
                                        stroke="#ea6254"
                                        strokeWidth="2"
                                        fill="none"
                                        opacity="0.6"
                                    >
                                        <animate
                                            attributeName="d"
                                            values="M0,150 Q100,50 200,150 T400,150;M0,150 Q100,250 200,150 T400,150;M0,150 Q100,50 200,150 T400,150"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                    <path
                                        d="M0,100 Q100,200 200,100 T400,100"
                                        stroke="#f08c81"
                                        strokeWidth="2"
                                        fill="none"
                                        opacity="0.4"
                                    >
                                        <animate
                                            attributeName="d"
                                            values="M0,100 Q100,200 200,100 T400,100;M0,100 Q100,0 200,100 T400,100;M0,100 Q100,200 200,100 T400,100"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                    <path
                                        d="M0,200 Q100,100 200,200 T400,200"
                                        stroke="#ea6254"
                                        strokeWidth="2"
                                        fill="none"
                                        opacity="0.5"
                                    >
                                        <animate
                                            attributeName="d"
                                            values="M0,200 Q100,100 200,200 T400,200;M0,200 Q100,300 200,200 T400,200;M0,200 Q100,100 200,200 T400,200"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                </svg>
                            </div>

                            {/* Central Neural Hub */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#e43827] via-[#ea6254] to-[#f08c81] rounded-full shadow-2xl">
                                <div
                                    className="absolute inset-3 bg-white/20 rounded-full animate-spin"
                                    style={{ animationDuration: "8s" }}
                                >
                                    <div
                                        className="absolute inset-2 bg-white/30 rounded-full animate-spin"
                                        style={{
                                            animationDuration: "6s",
                                            animationDirection: "reverse",
                                        }}
                                    >
                                        <div
                                            className="absolute inset-2 bg-white/40 rounded-full animate-spin"
                                            style={{ animationDuration: "4s" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Orbiting Data Points */}
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 animate-spin"
                                style={{ animationDuration: "20s" }}
                            >
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#ea6254] rounded-full shadow-lg"></div>
                                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 bg-[#f08c81] rounded-full shadow-lg"></div>
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#ea6254] rounded-full shadow-lg"></div>
                                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-7 h-7 bg-[#f08c81] rounded-full shadow-lg"></div>
                            </div>

                            {/* Secondary Orbit */}
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 animate-spin"
                                style={{
                                    animationDuration: "15s",
                                    animationDirection: "reverse",
                                }}
                            >
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ea6254] rounded-full shadow-md"></div>
                                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-5 h-5 bg-[#f08c81] rounded-full shadow-md"></div>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ea6254] rounded-full shadow-md"></div>
                                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-[#f08c81] rounded-full shadow-md"></div>
                            </div>

                            {/* Pulsing Outer Ring */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#ea6254]/30 rounded-full animate-pulse"></div>
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#f08c81]/20 rounded-full animate-pulse"
                                style={{ animationDelay: "1s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
