"use client";

import React from "react";
import {
    Shield,
    Award,
    CheckCircle,
    Star,
    Building2,
    Globe,
} from "lucide-react";

interface PartnershipSectionProps {
    language: "id" | "en";
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({
    language,
}) => {
    const content = {
        id: {
            title: "Dipercaya dan Didukung oleh Ekosistem Terdepan",
            subtitle:
                "Sentra telah mendapat kepercayaan dari berbagai institusi dan perusahaan teknologi terkemuka di Indonesia",
            categories: {
                regulators: "Regulator & Pemerintah",
                associations: "Asosiasi Industri",
                partners: "Mitra Teknologi",
            },
            stats: [
                { number: "50+", label: "Mitra Terintegrasi" },
                { number: "99.9%", label: "Uptime Sistem" },
                { number: "1M+", label: "Transaksi Diproses" },
                { number: "24/7", label: "Dukungan Teknis" },
            ],
            security: {
                title: "Keamanan & Kepatuhan Terjamin",
                description:
                    "Sentra mematuhi standar keamanan internasional dan regulasi lokal untuk memastikan data Anda selalu aman dan terlindungi.",
                certifications: {
                    iso: "ISO 27001",
                    pdp: "UU PDP Compliant",
                    soc: "SOC 2 Type II",
                },
                features: [
                    {
                        title: "Bank-Grade Security",
                        description: "Enkripsi end-to-end untuk semua data",
                    },
                    {
                        title: "Audit Berkala",
                        description:
                            "Pemeriksaan keamanan rutin oleh pihak ketiga",
                    },
                ],
            },
        },
        en: {
            title: "Trusted and Supported by Leading Ecosystem",
            subtitle:
                "Sentra has gained trust from various institutions and leading technology companies in Indonesia",
            categories: {
                regulators: "Regulators & Government",
                associations: "Industry Associations",
                partners: "Technology Partners",
            },
            stats: [
                { number: "50+", label: "Integrated Partners" },
                { number: "99.9%", label: "System Uptime" },
                { number: "1M+", label: "Transactions Processed" },
                { number: "24/7", label: "Technical Support" },
            ],
            security: {
                title: "Security & Compliance Guaranteed",
                description:
                    "Sentra complies with international security standards and local regulations to ensure your data is always safe and protected.",
                certifications: {
                    iso: "ISO 27001",
                    pdp: "GDPR Compliant",
                    soc: "SOC 2 Type II",
                },
                features: [
                    {
                        title: "Bank-Grade Security",
                        description: "End-to-end encryption for all data",
                    },
                    {
                        title: "Regular Audits",
                        description: "Routine security checks by third parties",
                    },
                ],
            },
        },
    };

    const t = content[language];

    const partnerCategories = [
        {
            title: t.categories.regulators,
            icon: Shield,
            color: "from-blue-500 to-blue-600",
            partners: [
                {
                    name: "Bank Indonesia",
                    role: "Central Bank",
                    verified: true,
                },
                {
                    name: "OJK",
                    role: "Financial Services Authority",
                    verified: true,
                },
                {
                    name: "Kemkominfo",
                    role: "Ministry of Communication",
                    verified: true,
                },
            ],
        },
        {
            title: t.categories.associations,
            icon: Award,
            color: "from-green-500 to-green-600",
            partners: [
                { name: "AFTECH", role: "Fintech Association", verified: true },
                {
                    name: "APJII",
                    role: "Internet Providers Association",
                    verified: true,
                },
                { name: "ABFI", role: "Banking Institute", verified: true },
            ],
        },
        {
            title: t.categories.partners,
            icon: Building2,
            color: "from-purple-500 to-purple-600",
            partners: [
                {
                    name: "TechCorp",
                    role: "Cloud Infrastructure",
                    verified: true,
                },
                {
                    name: "DataSecure",
                    role: "Security Solutions",
                    verified: true,
                },
                {
                    name: "BlockchainID",
                    role: "Blockchain Technology",
                    verified: true,
                },
            ],
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C252C] mb-6">
                        {t.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {t.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-3xl lg:text-4xl font-bold text-[#e43827] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partner Categories */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {partnerCategories.map((category, categoryIndex) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={categoryIndex}
                                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-center mb-8">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                                    >
                                        <IconComponent
                                            size={32}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1C252C]">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {category.partners.map(
                                        (partner, partnerIndex) => (
                                            <div
                                                key={partnerIndex}
                                                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-[#e43827] to-[#ea6254] rounded-lg flex items-center justify-center">
                                                        <span className="text-white font-bold text-sm">
                                                            {partner.name.charAt(
                                                                0
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-[#1C252C]">
                                                            {partner.name}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            {partner.role}
                                                        </p>
                                                    </div>
                                                </div>
                                                {partner.verified && (
                                                    <CheckCircle
                                                        size={20}
                                                        className="text-green-500"
                                                    />
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-r from-[#e43827] to-[#ea6254] rounded-3xl p-8 lg:p-12 text-white">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                {t.security.title}
                            </h3>
                            <p className="text-white/90 leading-relaxed mb-6">
                                {t.security.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                                    <Shield size={20} />
                                    <span className="font-medium">
                                        {t.security.certifications.iso}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                                    <Globe size={20} />
                                    <span className="font-medium">
                                        {t.security.certifications.pdp}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                                    <Star size={20} />
                                    <span className="font-medium">
                                        {t.security.certifications.soc}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {t.security.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm"
                                    >
                                        <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-4">
                                            {index === 0 ? (
                                                <Shield size={24} />
                                            ) : (
                                                <CheckCircle size={24} />
                                            )}
                                        </div>
                                        <h4 className="font-bold mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-white/80">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;
