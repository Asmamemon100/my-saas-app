import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Converso",
    description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={`${bricolage.variable} antialiased`}>
            <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' }} }>
            <Navbar />
            {children}
            </ClerkProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}
