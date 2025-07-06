import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sentra",
    description:
        "Sentra adalah platform kredibilitas digital TERBAIK untuk bisnis anda. Kami menggabungkan skor kredit prediktif Al dengan identitas terdesentralisasi (SBT) di blockchain untuk memitigasi risiko secara fundamental, mencegah fraud, dan memberdayakan keputusan finansial yang lebih aman dan akurat.",
    icons: {
        icon: "/sentra-logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
