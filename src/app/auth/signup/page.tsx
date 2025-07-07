"use client";

import React from "react";
import Image from "next/image";
import {
    ArrowRight,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Building,
    User,
} from "lucide-react";

interface SignupPageProps {
    onSignup: () => void;
    onToggleAuth: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onToggleAuth }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [formData, setFormData] = React.useState({
        companyName: "",
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate signup
        onSignup();
    };

    const handleGoogleSignup = () => {
        // Simulate Google signup
        onSignup();
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#e43827] to-[#ea6254] p-12 flex-col justify-center">
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
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <div className="lg:hidden mb-8">
                            <Image
                                src="/NO BG Logo.png"
                                alt="Sentra"
                                width={56}
                                height={56}
                                className="h-14 w-auto mx-auto"
                                priority
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-[#1C252C]">
                            Buat Akun Baru
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Mulai transformasi digital kredibilitas Anda
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Google Signup */}
                        <button
                            type="button"
                            onClick={handleGoogleSignup}
                            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                        >
                            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
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

                        {/* Company Name */}
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
                                    name="companyName"
                                    type="text"
                                    required
                                    value={formData.companyName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            companyName: e.target.value,
                                        })
                                    }
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                    placeholder="PT. Nama Perusahaan"
                                />
                            </div>
                        </div>

                        {/* Full Name */}
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
                                    name="fullName"
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            fullName: e.target.value,
                                        })
                                    }
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                    placeholder="Nama Lengkap Anda"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Perusahaan
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                    placeholder="nama@perusahaan.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
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
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
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

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Konfirmasi Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    required
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827] focus:border-transparent"
                                    placeholder="Ulangi password"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms Agreement */}
                        <div className="flex items-start">
                            <input
                                id="agreeTerms"
                                name="agreeTerms"
                                type="checkbox"
                                required
                                checked={formData.agreeTerms}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        agreeTerms: e.target.checked,
                                    })
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#e43827] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors flex items-center justify-center group"
                        >
                            Buat Akun Sekarang
                            <ArrowRight
                                size={20}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </button>
                    </form>

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
