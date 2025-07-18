"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
    language: "id" | "en";
    onLanguageChange: (lang: "id" | "en") => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const content = {
        id: {
            features: "Fitur",
            solutions: "Solusi",
            faq: "FAQ",
            docs: "Dokumentasi API",
            demo: "Daftar Sekarang",
            login: "Masuk",
        },
        en: {
            features: "Features",
            solutions: "Solutions",
            faq: "FAQ",
            docs: "API Documentation",
            demo: "Sign Up Now",
            login: "Login",
        },
    };

    const t = content[language];

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/sentra-logo.png"
                                alt="Sentra"
                                width={120}
                                height={48}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            onClick={(e) => handleSmoothScroll(e, "features")}
                            className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                        >
                            {t.features}
                        </a>
                        <a
                            href="#solutions"
                            onClick={(e) => handleSmoothScroll(e, "solutions")}
                            className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                        >
                            {t.solutions}
                        </a>
                        <a
                            href="#faq"
                            onClick={(e) => handleSmoothScroll(e, "faq")}
                            className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                        >
                            {t.faq}
                        </a>
                        <a
                            href="#docs"
                            onClick={(e) => handleSmoothScroll(e, "docs")}
                            className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                        >
                            {t.docs}
                        </a>
                    </div>

                    {/* Right side */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Toggle */}
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => onLanguageChange("id")}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                    language === "id"
                                        ? "bg-white text-[#e43827] shadow-sm"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                ID
                            </button>
                            <button
                                onClick={() => onLanguageChange("en")}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                    language === "en"
                                        ? "bg-white text-[#e43827] shadow-sm"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Auth Buttons */}
                        <Link
                            href="/auth"
                            className="text-gray-700 hover:text-[#e43827] transition-colors font-medium"
                        >
                            {t.login}
                        </Link>
                        <Link
                            href="/auth"
                            className="bg-[#e43827] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors"
                        >
                            {t.demo}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-[#e43827] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#features"
                                onClick={(e) =>
                                    handleSmoothScroll(e, "features")
                                }
                                className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                            >
                                {t.features}
                            </a>
                            <a
                                href="#solutions"
                                onClick={(e) =>
                                    handleSmoothScroll(e, "solutions")
                                }
                                className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                            >
                                {t.solutions}
                            </a>
                            <a
                                href="#faq"
                                onClick={(e) => handleSmoothScroll(e, "faq")}
                                className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                            >
                                {t.faq}
                            </a>
                            <a
                                href="#docs"
                                onClick={(e) => handleSmoothScroll(e, "docs")}
                                className="text-gray-700 hover:text-[#e43827] transition-colors font-medium cursor-pointer"
                            >
                                {t.docs}
                            </a>

                            {/* Language Toggle Mobile */}
                            <div className="flex items-center space-x-2 pt-2">
                                <Globe size={16} className="text-gray-500" />
                                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => onLanguageChange("id")}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                            language === "id"
                                                ? "bg-white text-[#e43827] shadow-sm"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        ID
                                    </button>
                                    <button
                                        onClick={() => onLanguageChange("en")}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                            language === "en"
                                                ? "bg-white text-[#e43827] shadow-sm"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>

                            {/* Auth Buttons Mobile */}
                            <Link
                                href="/auth"
                                className="text-gray-700 hover:text-[#e43827] transition-colors font-medium text-left"
                            >
                                {t.login}
                            </Link>
                            <Link
                                href="/auth"
                                className="bg-[#e43827] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors w-full"
                            >
                                {t.demo}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
