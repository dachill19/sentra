"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

interface FooterProps {
    language: "id" | "en";
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    const content = {
        id: {
            company: "Perusahaan",
            aboutUs: "Tentang Kami",
            careers: "Karir",
            news: "Berita",
            contact: "Kontak",
            product: "Produk",
            features: "Fitur",
            pricing: "Harga",
            documentation: "Dokumentasi",
            support: "Dukungan",
            resources: "Sumber Daya",
            blog: "Blog",
            whitepapers: "Whitepaper",
            caseStudies: "Studi Kasus",
            webinars: "Webinar",
            legal: "Legal",
            privacy: "Kebijakan Privasi",
            terms: "Syarat & Ketentuan",
            security: "Keamanan",
            compliance: "Kepatuhan",
            description:
                "Platform identitas dan reputasi terpadu untuk skor kredit berbasis AI dan identitas digital terdesentrasil yang aman.",
            rights: "Hak Cipta Dilindungi.",
            address: "Jakarta, Indonesia",
        },
        en: {
            company: "Company",
            aboutUs: "About Us",
            careers: "Careers",
            news: "News",
            contact: "Contact",
            product: "Product",
            features: "Features",
            pricing: "Pricing",
            documentation: "Documentation",
            support: "Support",
            resources: "Resources",
            blog: "Blog",
            whitepapers: "Whitepapers",
            caseStudies: "Case Studies",
            webinars: "Webinars",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms & Conditions",
            security: "Security",
            compliance: "Compliance",
            description:
                "Unified identity and reputation platform for AI-powered credit scoring and secure decentralized digital identity.",
            rights: "All Rights Reserved.",
            address: "Jakarta, Indonesia",
        },
    };

    const t = content[language];

    return (
        <footer className="bg-[#1C252C] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <Image
                                src="/sentra-logo.png"
                                alt="Sentra"
                                width={120}
                                height={32}
                                className="h-8 w-auto mb-4 brightness-0 invert"
                                priority
                            />
                            <p className="text-gray-300 leading-relaxed max-w-md">
                                {t.description}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MapPin size={18} className="text-[#e43827]" />
                                <span>{t.address}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail size={18} className="text-[#e43827]" />
                                <span>hello@sentra.id</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Phone size={18} className="text-[#e43827]" />
                                <span>+62 21 1234 5678</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#e43827] transition-colors"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#e43827] transition-colors"
                            >
                                <Twitter size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#e43827] transition-colors"
                            >
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.company}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.aboutUs}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.careers}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.news}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t.product}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.features}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.pricing}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.documentation}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.support}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">
                            {t.resources}
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.blog}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.whitepapers}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.caseStudies}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-300 hover:text-[#e43827] transition-colors"
                                >
                                    {t.webinars}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © 2024 Sentra. {t.rights}
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-[#e43827] transition-colors"
                            >
                                {t.privacy}
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-[#e43827] transition-colors"
                            >
                                {t.terms}
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-[#e43827] transition-colors"
                            >
                                {t.security}
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-[#e43827] transition-colors"
                            >
                                {t.compliance}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
