"use client";

import React from "react";
import { Brain, Fingerprint, Network } from "lucide-react";

interface SolutionSectionProps {
    language: "id" | "en";
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ language }) => {
    const content = {
        id: {
            title: "Sentra: Satu API, Tiga Kekuatan Utama untuk Bisnis Anda",
            solutions: [
                {
                    icon: Brain,
                    title: "Skor Kredit Prediktif Berbasis AI",
                    description:
                        "Tinggalkan penilaian tradisional. Model AI kami menganalisis ratusan variabel secara real-time untuk memberikan skor kredit yang dinamis dan akurat. Buat keputusan pinjaman yang lebih cerdas, lebih cepat, dan dengan risiko lebih rendah.",
                },
                {
                    icon: Fingerprint,
                    title: "Identitas Digital Aman dengan Soul-Bound Token (SBT)",
                    description:
                        "Revolusi proses KYC Anda. Dengan teknologi blockchain, kami menciptakan identitas digital tunggal (Satu NIK = Satu Wallet) yang terverifikasi, tidak dapat dipindahtangankan, dan portabel. Hilangkan risiko pemalsuan dan berikan pengalaman onboarding yang mulus bagi pelanggan.",
                },
                {
                    icon: Network,
                    title: "Ekosistem Data Terpadu & Transparan",
                    description:
                        "Dapatkan gambaran utuh riwayat transaksi pengguna di seluruh platform mitra kami. Analisis data yang kaya ini memungkinkan Anda untuk mengelola risiko secara proaktif dan menawarkan produk yang lebih personal.",
                },
            ],
        },
        en: {
            title: "Sentra: One API, Three Core Powers for Your Business",
            solutions: [
                {
                    icon: Brain,
                    title: "AI-Based Predictive Credit Scoring",
                    description:
                        "Leave traditional assessments behind. Our AI model analyzes hundreds of variables in real-time to provide dynamic and accurate credit scores. Make smarter, faster lending decisions with lower risk.",
                },
                {
                    icon: Fingerprint,
                    title: "Secure Digital Identity with Soul-Bound Token (SBT)",
                    description:
                        "Revolutionize your KYC process. With blockchain technology, we create a single digital identity (One NIK = One Wallet) that is verified, non-transferable, and portable. Eliminate forgery risks and provide seamless onboarding experience for customers.",
                },
                {
                    icon: Network,
                    title: "Integrated & Transparent Data Ecosystem",
                    description:
                        "Get a complete picture of user transaction history across all our partner platforms. This rich data analysis enables you to manage risk proactively and offer more personalized products.",
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section
            id="features"
            className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C252C] mb-6">
                        {t.title}
                    </h2>
                </div>

                <div className="space-y-16">
                    {t.solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${
                                    !isEven ? "lg:grid-flow-col-dense" : ""
                                }`}
                            >
                                <div
                                    className={`space-y-6 ${
                                        !isEven ? "lg:col-start-2" : ""
                                    }`}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#e43827] to-[#ea6254] rounded-2xl flex items-center justify-center">
                                        <IconComponent
                                            size={32}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1C252C]">
                                        {solution.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>

                                <div
                                    className={`${
                                        !isEven
                                            ? "lg:col-start-1 lg:row-start-1"
                                            : ""
                                    }`}
                                >
                                    <div className="relative">
                                        <div className="w-full h-80 bg-gradient-to-br from-[#f08c81]/20 to-[#ea6254]/30 rounded-3xl p-8 backdrop-blur-sm">
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <div className="w-32 h-32 bg-gradient-to-br from-[#e43827] to-[#ea6254] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                                                    <IconComponent
                                                        size={64}
                                                        className="text-white"
                                                    />
                                                </div>

                                                {/* Floating elements */}
                                                <div
                                                    className="absolute top-4 left-4 w-4 h-4 bg-[#ea6254] rounded-full animate-bounce"
                                                    style={{
                                                        animationDelay: "0.5s",
                                                    }}
                                                ></div>
                                                <div
                                                    className="absolute top-8 right-8 w-3 h-3 bg-[#f08c81] rounded-full animate-bounce"
                                                    style={{
                                                        animationDelay: "1s",
                                                    }}
                                                ></div>
                                                <div
                                                    className="absolute bottom-6 left-8 w-5 h-5 bg-[#ea6254] rounded-full animate-bounce"
                                                    style={{
                                                        animationDelay: "1.5s",
                                                    }}
                                                ></div>
                                                <div
                                                    className="absolute bottom-4 right-4 w-4 h-4 bg-[#f08c81] rounded-full animate-bounce"
                                                    style={{
                                                        animationDelay: "2s",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Background decoration */}
                                        <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-br from-[#e43827]/10 to-[#f08c81]/10 rounded-full blur-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
