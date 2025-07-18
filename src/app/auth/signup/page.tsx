"use client";

import React from "react";
import Image from "next/image";
import {
    ArrowRight,
    ArrowLeft,
    Building,
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    Globe,
    CheckCircle,
} from "lucide-react";

interface SignupPageProps {
    onSignup: () => void;
    onToggleAuth: () => void;
}

interface FormData {
    fullName: string;
    businessEmail: string;
    businessPhone: string;
    password: string;
    companyName: string;
    companyWebsite: string;
    npwp: string;
    industry: string;
    position: string;
    primaryNeeds: string[];
    monthlyVolume: string;
    agreeTerms: boolean;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onToggleAuth }) => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [showPassword, setShowPassword] = React.useState(false);
    const [formData, setFormData] = React.useState<FormData>({
        fullName: "",
        businessEmail: "",
        businessPhone: "",
        password: "",
        companyName: "",
        companyWebsite: "",
        npwp: "",
        industry: "",
        position: "",
        primaryNeeds: [],
        monthlyVolume: "",
        agreeTerms: false,
    });

    const industries = [
        "Fintech - P2P Lending",
        "Multifinance",
        "Perbankan",
        "E-commerce",
        "Asuransi",
        "Lainnya",
    ];

    const positions = [
        "C-Level/Founder",
        "Manajer/Kepala Divisi",
        "Developer/Insinyur",
        "Analis",
        "Lainnya",
    ];

    const primaryNeeds = [
        "Penilaian Risiko Kredit",
        "Verifikasi Identitas (e-KYC)",
        "Pencegahan Fraud",
        "Integrasi untuk Produk Baru",
    ];

    const monthlyVolumes = [
        "< 1,000 Panggilan API",
        "1,000 - 10,000 Panggilan API",
        "10,001 - 100,000 Panggilan API",
        "Butuh Kustomisasi",
    ];

    const handleInputChange = (
        field: keyof FormData,
        value: string | boolean
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCheckboxChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            primaryNeeds: prev.primaryNeeds.includes(value)
                ? prev.primaryNeeds.filter((item) => item !== value)
                : [...prev.primaryNeeds, value],
        }));
    };

    const validateStep = (step: number) => {
        switch (step) {
            case 1:
                return (
                    formData.fullName &&
                    formData.businessEmail &&
                    isBusinessEmail(formData.businessEmail) &&
                    formData.businessPhone &&
                    formData.password
                );
            case 2:
                return (
                    formData.companyName &&
                    formData.companyWebsite &&
                    formData.npwp &&
                    formData.industry &&
                    formData.position
                );
            case 3:
                return (
                    formData.primaryNeeds.length > 0 &&
                    formData.monthlyVolume &&
                    formData.agreeTerms
                );
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, 4));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep(3)) {
            setCurrentStep(4);
            onSignup();
        }
    };

    const handleGoogleSignup = () => {
        onSignup();
    };

    const isBusinessEmail = (email: string) => {
        const genericDomains = [
            "gmail.com",
            "yahoo.com",
            "hotmail.com",
            "outlook.com",
        ];
        const domain = email.split("@")[1];
        return domain && !genericDomains.includes(domain.toLowerCase());
    };

    if (currentStep === 4) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <Image
                            src="/sentra-logo.png"
                            alt="Sentra"
                            width={56}
                            height={56}
                            className="h-14 w-auto mx-auto mb-8"
                            priority
                        />
                        <h2 className="text-3xl font-bold text-[#1C252C]">
                            Terima Kasih Telah Mendaftar!
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Tim kami akan segera meninjau informasi Anda.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-gray-100 space-y-6">
                        <h3 className="text-xl font-semibold text-[#1C252C]">
                            Langkah Selanjutnya
                        </h3>
                        <div className="space-y-4 text-left">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-[#e43827] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-xs">
                                        1
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1C252C]">
                                        Verifikasi Email
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Periksa email Anda untuk link verifikasi
                                        yang telah kami kirim.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-[#e43827] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-xs">
                                        2
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1C252C]">
                                        Kontak dari Tim Kami
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Seorang Account Executive akan
                                        menghubungi Anda dalam 1x24 jam kerja.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-[#e43827] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-xs">
                                        3
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1C252C]">
                                        Demo Produk
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Kami akan menjadwalkan sesi demo produk
                                        yang disesuaikan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-600">
                            Ada pertanyaan? Hubungi tim kami di{" "}
                            <a
                                href="mailto:hello@sentra.id"
                                className="text-[#e43827] hover:text-[#ea6254] font-medium"
                            >
                                hello@sentra.id
                            </a>
                        </p>
                        <p className="text-gray-600 mt-2">
                            Sudah punya akun?{" "}
                            <button
                                onClick={onToggleAuth}
                                className="text-[#e43827] hover:text-[#ea6254] font-medium"
                            >
                                Masuk di sini
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side - Branding (Fixed) */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#e43827] to-[#ea6254] p-12 flex-col justify-center fixed top-0 bottom-0">
                <div className="max-w-md">
                    <Image
                        src="/sentra-logo.png"
                        alt="Sentra"
                        width={64}
                        height={64}
                        className="h-16 w-auto mb-8 brightness-0 invert"
                        priority
                    />
                    <h1 className="text-4xl font-bold text-white mb-6">
                        Bergabung dengan Sentra
                    </h1>
                    <p className="text-xl text-white/90 leading-relaxed mb-8">
                        Mulai perjalanan digital kredibilitas bisnis Anda
                        bersama platform AI terdepan di Indonesia.
                    </p>
                    <div className="space-y-4 text-white/80">
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Skor kredit berbasis AI yang akurat</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Identitas digital terdesentralisasi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Integrasi API yang mudah</span>
                        </div>
                    </div>
                    {/* Abstract visualization */}
                    <div className="relative mt-8">
                        <div className="w-full h-64 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                            <div
                                className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-bounce"
                                style={{ animationDelay: "0.5s" }}
                            ></div>
                            <div
                                className="absolute top-1/4 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-bounce"
                                style={{ animationDelay: "1s" }}
                            ></div>
                            <div
                                className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-white/15 rounded-full animate-bounce"
                                style={{ animationDelay: "1.5s" }}
                            ></div>
                            <div
                                className="absolute bottom-1/3 right-1/4 w-7 h-7 bg-white/10 rounded-full animate-bounce"
                                style={{ animationDelay: "2s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Multi-Step Form */}
            <div className="w-full lg:w-1/2 lg:ml-[50%] flex items-center justify-center p-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Mobile Logo */}
                    <div className="lg:hidden mb-8">
                        <Image
                            src="/sentra-logo.png"
                            alt="Sentra"
                            width={56}
                            height={56}
                            className="h-14 w-auto mx-auto"
                            priority
                        />
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                                        currentStep >= step
                                            ? "bg-[#e43827] text-white"
                                            : "bg-gray-200 text-gray-500"
                                    }`}
                                >
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div
                                        className={`w-12 h-1 mx-2 ${
                                            currentStep > step
                                                ? "bg-[#e43827]"
                                                : "bg-gray-200"
                                        }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Personal Account */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-[#1C252C]">
                                    Buat Akun Baru
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    Mulai transformasi digital kredibilitas Anda
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={handleGoogleSignup}
                                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                            >
                                <svg
                                    className="w-5 h-5 mr-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Daftar dengan Google
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-50 text-gray-500">
                                        atau
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="fullName"
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "fullName",
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                            placeholder="Nama Lengkap Anda"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="businessEmail"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email Bisnis
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="businessEmail"
                                            type="email"
                                            required
                                            value={formData.businessEmail}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "businessEmail",
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                            placeholder="nama@perusahaan.com"
                                        />
                                    </div>
                                    {formData.businessEmail &&
                                        !isBusinessEmail(
                                            formData.businessEmail
                                        ) && (
                                            <p className="text-red-500 text-sm mt-1">
                                                Gunakan email domain perusahaan
                                            </p>
                                        )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="businessPhone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Nomor Telepon Bisnis
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="businessPhone"
                                            type="tel"
                                            required
                                            value={formData.businessPhone}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "businessPhone",
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                            placeholder="+62 21 1234 5678"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            required
                                            value={formData.password}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                            placeholder="Minimal 8 karakter"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5 text-gray-400" />
                                            ) : (
                                                <Eye className="h-5 w-5 text-gray-400" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={nextStep}
                                disabled={!validateStep(1)}
                                className="w-full bg-[#e43827] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Lanjutkan ke Informasi Perusahaan
                                <ArrowRight
                                    size={20}
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                        </div>
                    )}

                    {/* Step 2: Company Information */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-[#1C252C]">
                                    Informasi Perusahaan
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    Lengkapi detail perusahaan Anda
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="companyName"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Nama Perusahaan
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Building className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="companyName"
                                            type="text"
                                            required
                                            value={formData.companyName}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "companyName",
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                            placeholder="PT. Nama Perusahaan"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="companyWebsite"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Website Perusahaan
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Globe className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="companyWebsite"
                                            type="url"
                                            required
                                            value={formData.companyWebsite}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "companyWebsite",
                                                    e.target.value
                                                )
                                            }
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                            placeholder="https://perusahaan.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="npwp"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        NPWP Perusahaan
                                    </label>
                                    <input
                                        id="npwp"
                                        type="text"
                                        required
                                        value={formData.npwp}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "npwp",
                                                e.target.value
                                            )
                                        }
                                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                        placeholder="XX.XXX.XXX.X-XXX.XXX"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="industry"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Industri Bisnis
                                    </label>
                                    <select
                                        id="industry"
                                        value={formData.industry}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "industry",
                                                e.target.value
                                            )
                                        }
                                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                    >
                                        <option value="">Pilih industri</option>
                                        {industries.map((industry) => (
                                            <option
                                                key={industry}
                                                value={industry}
                                            >
                                                {industry}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="position"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Jabatan Anda
                                    </label>
                                    <select
                                        id="position"
                                        value={formData.position}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "position",
                                                e.target.value
                                            )
                                        }
                                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                    >
                                        <option value="">Pilih jabatan</option>
                                        {positions.map((position) => (
                                            <option
                                                key={position}
                                                value={position}
                                            >
                                                {position}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    onClick={prevStep}
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                                >
                                    <ArrowLeft size={20} className="mr-2" />
                                    Kembali
                                </button>
                                <button
                                    onClick={nextStep}
                                    disabled={!validateStep(2)}
                                    className="flex-1 bg-[#e43827] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Lanjutkan
                                    <ArrowRight
                                        size={20}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Usage Purpose */}
                    {currentStep === 3 && (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-[#1C252C]">
                                    Tujuan Penggunaan
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    Bantu kami memahami kebutuhan Anda
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kebutuhan Utama
                                    </label>
                                    <div className="space-y-2">
                                        {primaryNeeds.map((need) => (
                                            <label
                                                key={need}
                                                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.primaryNeeds.includes(
                                                        need
                                                    )}
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            need
                                                        )
                                                    }
                                                    className="h-4 w-4 text-[#e43827] focus:ring-[#e43827] border-gray-300 rounded"
                                                />
                                                <span className="text-gray-700">
                                                    {need}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="monthlyVolume"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Estimasi Volume Bulanan
                                    </label>
                                    <select
                                        id="monthlyVolume"
                                        value={formData.monthlyVolume}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "monthlyVolume",
                                                e.target.value
                                            )
                                        }
                                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                    >
                                        <option value="">
                                            Pilih estimasi volume
                                        </option>
                                        {monthlyVolumes.map((volume) => (
                                            <option key={volume} value={volume}>
                                                {volume}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        id="agreeTerms"
                                        type="checkbox"
                                        required
                                        checked={formData.agreeTerms}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "agreeTerms",
                                                e.target.checked
                                            )
                                        }
                                        className="h-4 w-4 text-[#e43827] focus:ring-[#e43827] border-gray-300 rounded mt-1"
                                    />
                                    <label
                                        htmlFor="agreeTerms"
                                        className="ml-2 block text-sm text-gray-700"
                                    >
                                        Saya setuju dengan{" "}
                                        <button
                                            type="button"
                                            className="text-[#e43827] hover:text-[#ea6254] font-medium"
                                        >
                                            Syarat & Ketentuan
                                        </button>{" "}
                                        dan{" "}
                                        <button
                                            type="button"
                                            className="text-[#e43827] hover:text-[#ea6254] font-medium"
                                        >
                                            Kebijakan Privasi
                                        </button>
                                    </label>
                                </div>
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                                >
                                    <ArrowLeft size={20} className="mr-2" />
                                    Kembali
                                </button>
                                <button
                                    type="submit"
                                    disabled={!validateStep(3)}
                                    className="flex-1 bg-[#e43827] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Selesaikan Pendaftaran
                                    <ArrowRight
                                        size={20}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="text-center">
                        <p className="text-gray-600">
                            Sudah punya akun?{" "}
                            <button
                                onClick={onToggleAuth}
                                className="text-[#e43827] hover:text-[#ea6254] font-medium"
                            >
                                Masuk di sini
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
