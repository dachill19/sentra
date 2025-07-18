"use client";

import React from "react";
import { ArrowRight, BriefcaseBusiness, Calendar, Rocket } from "lucide-react";

interface FinalCTASectionProps {
    language: "id" | "en";
    onShowAuth?: (mode: "login" | "signup") => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
    language,
    onShowAuth,
}) => {
    const content = {
        id: {
            title: "Tingkatkan Kredibilitas Bisnis Anda Hari Ini",
            description:
                "Temukan bagaimana Sentra dapat merevolusi cara Anda mengelola risiko dan melayani pelanggan. Jadwalkan sesi demo personal tanpa komitmen dengan ahli kami.",
            cta: "Bergabung dengan Kami",
        },
        en: {
            title: "Enhance Your Business Credibility Today",
            description:
                "Discover how Sentra can revolutionize the way you manage risk and serve customers. Schedule a personal demo session with no commitment from our experts.",
            cta: "Join Us",
        },
    };

    const t = content[language];

    const handleDemoClick = () => {
        if (onShowAuth) {
            onShowAuth("login");
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#f08c81]/20 to-[#ea6254]/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1C252C]">
                        {t.title}
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        {t.description}
                    </p>

                    <div className="pt-8">
                        <button
                            onClick={handleDemoClick}
                            className="bg-[#e43827] text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-[#ea6254] transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-xl"
                        >
                            <BriefcaseBusiness
                                size={24}
                                className="mr-3 group-hover:scale-110 transition-transform"
                            />
                            {t.cta}
                            <ArrowRight
                                size={24}
                                className="ml-3 group-hover:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
