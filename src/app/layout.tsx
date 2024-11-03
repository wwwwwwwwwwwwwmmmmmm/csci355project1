import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import React from "react";
import Footer from "@/app/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Zen Bites",
    description: "An Asian cuisine restaurant, serving a variety of East Asian food",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className={"nav"}>
            <NavBar/>
        </header>
        <main>{children}</main>
        {/* Children is rendered here */}
        <Footer/>
        </body>
        </html>
    );
}


