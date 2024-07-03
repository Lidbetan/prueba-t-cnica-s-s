import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "User stories",
    description: "Prueba técnica",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={ubuntu.className}>{children}</body>
        </html>
    );
}
