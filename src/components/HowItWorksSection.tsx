"use client";

import React from "react";
import { Plug, UserCheck, Zap, TrendingUp } from "lucide-react";

interface HowItWorksSectionProps {
    language: "id" | "en";
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ language }) => {
    const content = {
        id: {
            title: "Integrasi Mudah dalam 4 Langkah",
            steps: [
                {
                    icon: Plug,
                    title: "Integrasi API",
                    description:
                        "Hubungkan sistem Anda dengan API kami yang lengkap dan mudah digunakan.",
                },
                {
                    icon: UserCheck,
                    title: "Verifikasi Pengguna",
                    description:
                        "Pengguna melakukan KYC satu kali. Sistem kami akan memverifikasi dan me-minting SBT sebagai bukti identitas digital mereka.",
                },
                {
                    icon: Zap,
                    title: "Ambil Skor Real-time",
                    description:
                        "Panggil API kami kapan saja untuk mendapatkan skor kredit terbaru dan status verifikasi pengguna.",
                },
                {
                    icon: TrendingUp,
                    title: "Buat Keputusan Berbasis Data",
                    description:
                        "Gunakan data akurat dari Sentra untuk menyetujui pinjaman, mengelola risiko, dan mengembangkan bisnis Anda.",
                },
            ],
        },
        en: {
            title: "Easy Integration in 4 Steps",
            steps: [
                {
                    icon: Plug,
                    title: "API Integration",
                    description:
                        "Connect your system with our comprehensive and easy-to-use API.",
                },
                {
                    icon: UserCheck,
                    title: "User Verification",
                    description:
                        "Users perform KYC once. Our system will verify and mint SBT as proof of their digital identity.",
                },
                {
                    icon: Zap,
                    title: "Get Real-time Score",
                    description:
                        "Call our API anytime to get the latest credit score and user verification status.",
                },
                {
                    icon: TrendingUp,
                    title: "Make Data-Driven Decisions",
                    description:
                        "Use accurate data from Sentra to approve loans, manage risk, and grow your business.",
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C252C] mb-6">
                        {t.title}
                    </h2>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e43827] via-[#ea6254] to-[#f08c81] transform -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                        {/* Step Number */}
                                        <div className="absolute -top-4 left-8 w-8 h-8 bg-[#e43827] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>

                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#e43827] to-[#ea6254] rounded-2xl flex items-center justify-center">
                                                <IconComponent
                                                    size={32}
                                                    className="text-white"
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#1C252C]">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
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

export default HowItWorksSection;
