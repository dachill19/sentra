"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TargetMarketSection from "@/components/TargetMarketSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnershipSection from "@/components/PartnershipSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
    const [language, setLanguage] = React.useState<"id" | "en">("id");

    const handleLanguageChange = (lang: "id" | "en") => {
        setLanguage(lang);
    };

    const showAuth = (mode: "login" | "signup") => {
        // Navigate to auth pages using Next.js router
        if (mode === "login") {
            window.location.href = "/login";
        } else {
            window.location.href = "/signup";
        }
    };

    // Landing page with smooth scroll and animations
    React.useEffect(() => {
        // Smooth scroll behavior for anchor links
        const handleSmoothScroll = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener("click", handleSmoothScroll);
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", handleSmoothScroll);
            });
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar
                language={language}
                onLanguageChange={handleLanguageChange}
            />
            <HeroSection language={language} />
            <ProblemSection language={language} />
            <SolutionSection language={language} />
            <TargetMarketSection language={language} />
            <HowItWorksSection language={language} />
            <PartnershipSection language={language} />
            <FAQSection language={language} />
            <FinalCTASection language={language} />
            <Footer language={language} />
        </div>
    );
}
