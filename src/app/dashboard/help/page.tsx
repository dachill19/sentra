// src/app/dashboard/help/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
    Search,
    Book,
    MessageCircle,
    Mail,
    Phone,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Code,
    FileText,
    Video,
} from "lucide-react";

const HelpPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [openFaq, setOpenFaq] = React.useState<number | null>(0);

    const faqs = [
        {
            question: "Bagaimana cara mengintegrasikan API Sentra?",
            answer: "Integrasi API Sentra sangat mudah. Pertama, dapatkan API key dari halaman Pengaturan API. Kemudian gunakan endpoint kami dengan autentikasi Bearer token. Dokumentasi lengkap tersedia di bagian API Documentation.",
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk verifikasi SBT?",
            answer: "Proses verifikasi SBT biasanya memakan waktu 2-5 menit tergantung pada beban jaringan blockchain. Anda akan menerima notifikasi real-time melalui webhook ketika proses selesai.",
        },
        {
            question: "Apakah data pengguna aman dan sesuai regulasi?",
            answer: "Ya, Sentra dirancang khusus untuk mematuhi UU PDP No. 27/2022 dan regulasi OJK. Kami tidak menyimpan PII di blockchain dan menggunakan metode hashing untuk melindungi identitas pengguna.",
        },
        {
            question: "Bagaimana cara mengundang anggota tim baru?",
            answer: 'Buka halaman Manajemen Tim, klik "Undang Anggota Baru", masukkan email dan pilih peran yang sesuai. Undangan akan dikirim melalui email dan anggota baru dapat langsung mengakses dashboard setelah konfirmasi.',
        },
        {
            question: "Apa yang terjadi jika saya melebihi batas API calls?",
            answer: "Jika Anda mendekati batas, kami akan mengirim notifikasi. Setelah batas terlampaui, API calls akan dibatasi hingga periode billing berikutnya atau Anda dapat upgrade paket untuk mendapatkan limit yang lebih tinggi.",
        },
    ];

    const quickLinks = [
        {
            title: "API Documentation",
            description: "Dokumentasi lengkap untuk semua endpoint API",
            icon: Code,
            href: "/docs/api",
            external: true,
        },
        {
            title: "Getting Started Guide",
            description: "Panduan langkah demi langkah untuk memulai",
            icon: Book,
            href: "/docs/getting-started",
            external: false,
        },
        {
            title: "Video Tutorials",
            description: "Tutorial video untuk fitur-fitur utama",
            icon: Video,
            href: "/tutorials",
            external: true,
        },
        {
            title: "Best Practices",
            description: "Tips dan trik untuk optimasi penggunaan",
            icon: FileText,
            href: "/docs/best-practices",
            external: false,
        },
    ];

    const contactOptions = [
        {
            title: "Email Support",
            description: "Kirim pertanyaan detail melalui email",
            icon: Mail,
            contact: "support@sentra.id",
            action: "Kirim Email",
            href: "mailto:support@sentra.id",
        },
        {
            title: "Live Chat",
            description: "Chat langsung dengan tim support",
            icon: MessageCircle,
            contact: "Online 24/7",
            action: "Mulai Chat",
            href: "/chat",
        },
        {
            title: "Phone Support",
            description: "Hubungi tim support melalui telepon",
            icon: Phone,
            contact: "+62 21 1234 5678",
            action: "Telepon",
            href: "tel:+622112345678",
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search logic here
        console.log("Search query:", searchQuery);
    };

    const handleTryAPI = () => {
        // Open API documentation or redirect to API playground
        window.open("/docs/api-playground", "_blank");
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-[#1C252C]">
                    Pusat Bantuan & Dokumentasi
                </h1>
                <p className="text-gray-600 mt-2">
                    Temukan jawaban untuk pertanyaan Anda atau hubungi tim
                    support kami
                </p>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSearchSubmit}>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent text-lg"
                                placeholder="Cari artikel, panduan, atau FAQ..."
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                    Akses Cepat
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickLinks.map((link, index) => {
                        const IconComponent = link.icon;
                        const LinkComponent = link.external ? "a" : Link;
                        const linkProps = link.external
                            ? {
                                  href: link.href,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                              }
                            : { href: link.href };

                        return (
                            <LinkComponent
                                key={index}
                                {...linkProps}
                                className="group p-4 border border-gray-200 rounded-lg hover:border-[#e43827] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-[#e43827] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <IconComponent
                                            size={20}
                                            className="text-white"
                                        />
                                    </div>
                                    {link.external && (
                                        <ExternalLink
                                            size={16}
                                            className="text-gray-400 group-hover:text-[#e43827]"
                                        />
                                    )}
                                </div>
                                <h3 className="font-semibold text-[#1C252C] group-hover:text-[#e43827] transition-colors">
                                    {link.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {link.description}
                                </p>
                            </LinkComponent>
                        );
                    })}
                </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                aria-expanded={openFaq === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <h3 className="font-semibold text-[#1C252C] pr-4">
                                    {faq.question}
                                </h3>
                                {openFaq === index ? (
                                    <ChevronUp
                                        size={20}
                                        className="text-[#e43827] flex-shrink-0"
                                    />
                                ) : (
                                    <ChevronDown
                                        size={20}
                                        className="text-gray-400 flex-shrink-0"
                                    />
                                )}
                            </button>

                            {openFaq === index && (
                                <div
                                    id={`faq-answer-${index}`}
                                    className="px-6 pb-4"
                                >
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                    Hubungi Tim Support
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {contactOptions.map((option, index) => {
                        const IconComponent = option.icon;
                        return (
                            <div
                                key={index}
                                className="text-center p-6 border border-gray-200 rounded-lg hover:border-[#e43827] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-[#e43827] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IconComponent
                                        size={24}
                                        className="text-white"
                                    />
                                </div>
                                <h3 className="font-semibold text-[#1C252C] mb-2">
                                    {option.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    {option.description}
                                </p>
                                <p className="text-sm font-medium text-[#e43827] mb-4">
                                    {option.contact}
                                </p>
                                <Link
                                    href={option.href}
                                    className="inline-block bg-[#e43827] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors"
                                >
                                    {option.action}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* API Documentation Preview */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#1C252C]">
                        Dokumentasi API Interaktif
                    </h2>
                    <Link
                        href="/docs/api"
                        className="flex items-center space-x-2 text-[#e43827] hover:text-[#ea6254] font-medium"
                    >
                        <span>Buka Dokumentasi Lengkap</span>
                        <ExternalLink size={16} />
                    </Link>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                GET
                            </span>
                            <code className="text-sm font-mono text-[#1C252C]">
                                /api/v1/credit-score
                            </code>
                        </div>
                        <p className="text-sm text-gray-600">
                            Mendapatkan skor kredit pengguna berdasarkan alamat
                            wallet
                        </p>

                        <div className="bg-white rounded border p-3">
                            <p className="text-xs text-gray-500 mb-2">
                                Example Request:
                            </p>
                            <code className="text-xs font-mono text-gray-700 block">
                                {`curl -H "Authorization: Bearer YOUR_API_KEY" \\
    https://api.sentra.id/v1/credit-score?wallet=0xABC...123`}
                            </code>
                        </div>

                        <button
                            onClick={handleTryAPI}
                            className="bg-[#e43827] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#ea6254] transition-colors"
                        >
                            Coba Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
