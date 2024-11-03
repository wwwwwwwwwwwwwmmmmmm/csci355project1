import type {Metadata} from "next";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import React from "react";
import Footer from "@/app/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Zen Bites",
    description: "An Asian cuisine restaurant, serving a variety of East Asian food",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <NavBar/>
        <main>{children}</main>
        {/* Children is rendered here */}
        <Footer/>
        </body>
        </html>
    );
}


