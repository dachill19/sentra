"use client";

import React from "react";
import { AlertTriangle, Shield, RefreshCw } from "lucide-react";

interface ProblemSectionProps {
    language: "id" | "en";
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ language }) => {
    const content = {
        id: {
            title: "Tantangan Kredibilitas di Era Digital",
            problems: [
                {
                    icon: RefreshCw,
                    title: "Skor Kredit Terisolasi",
                    description:
                        "Setiap platform memiliki standar penilaian sendiri, menciptakan silo data yang tidak efisien dan memaksa pelanggan membangun reputasi berulang kali.",
                },
                {
                    icon: AlertTriangle,
                    title: "Risiko Gagal Bayar & Fraud",
                    description:
                        "Tanpa gambaran menyeluruh, bisnis Anda rentan terhadap pinjaman berisiko tinggi dan penipuan identitas yang semakin canggih.",
                },
                {
                    icon: Shield,
                    title: "Kurangnya Data Kredit yang Real Time & Akurat",
                    description:
                        "Data kredit yang tersedia memiliki sela waktu pembaruan yang cukup panjang, membuat data tersebut kurang relevan sehingga resiko NPL (Non Performing Loan) tetap tinggi.",
                },
            ],
        },
        en: {
            title: "Credibility Challenges in the Digital Era",
            problems: [
                {
                    icon: RefreshCw,
                    title: "Isolated Credit Scores",
                    description:
                        "Each platform has its own assessment standards, creating inefficient data silos and forcing customers to rebuild their reputation repeatedly.",
                },
                {
                    icon: AlertTriangle,
                    title: "Default Risk & Fraud",
                    description:
                        "Without a comprehensive view, your business is vulnerable to high-risk loans and increasingly sophisticated identity fraud.",
                },
                {
                    icon: Shield,
                    title: "Lack of Real-Time & Accurate Credit Data",
                    description:
                        "Available credit data has long update intervals, making it less relevant and keeping NPL (Non Performing Loan) risk high.",
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C252C] mb-6">
                        {t.title}
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {t.problems.map((problem, index) => {
                        const IconComponent = problem.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#ea6254]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#e43827] to-[#ea6254] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent
                                        size={32}
                                        className="text-white"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#1C252C] mb-4">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
