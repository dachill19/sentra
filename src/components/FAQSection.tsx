"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQSectionProps {
    language: "id" | "en";
}

const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const content = {
        id: {
            title: "Menjawab Keraguan Anda",
            faqs: [
                {
                    question:
                        "Apakah Sentra aman dan sesuai dengan regulasi di Indonesia?",
                    answer: "Ya, arsitektur kami dirancang khusus untuk mematuhi UU PDP No. 27/2022 dan regulasi OJK dengan tidak menyimpan PII di blockchain dan menggunakan metode hashing.",
                },
                {
                    question: "Seberapa sulit proses integrasi API-nya?",
                    answer: "Kami menyediakan dokumentasi lengkap, SDK, dan tim dukungan teknis untuk memastikan proses integrasi yang cepat dan lancar bagi tim developer Anda.",
                },
                {
                    question:
                        "Bagaimana model AI Anda dilatih tanpa melanggar privasi?",
                    answer: "Model kami dilatih menggunakan data historis yang sepenuhnya dianonimisasi dan dipisahkan dari identitas pengguna, sesuai dengan prinsip privacy-by-design.",
                },
            ],
        },
        en: {
            title: "Addressing Your Concerns",
            faqs: [
                {
                    question:
                        "Is Sentra secure and compliant with Indonesian regulations?",
                    answer: "Yes, our architecture is specifically designed to comply with PDP Law No. 27/2022 and OJK regulations by not storing PII on blockchain and using hashing methods.",
                },
                {
                    question: "How difficult is the API integration process?",
                    answer: "We provide comprehensive documentation, SDKs, and technical support team to ensure a fast and smooth integration process for your developer team.",
                },
                {
                    question:
                        "How is your AI model trained without violating privacy?",
                    answer: "Our model is trained using fully anonymized historical data separated from user identities, following privacy-by-design principles.",
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C252C] mb-6">
                        {t.title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {t.faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-[#1C252C] pr-4">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <ChevronUp
                                        size={24}
                                        className="text-[#e43827] flex-shrink-0"
                                    />
                                ) : (
                                    <ChevronDown
                                        size={24}
                                        className="text-gray-400 flex-shrink-0"
                                    />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-8 pb-6">
                                    <div className="pt-4 border-t border-gray-100">
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
        </section>
    );
};

export default FAQSection;
