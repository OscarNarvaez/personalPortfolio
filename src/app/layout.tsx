import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "../../main.3f6952e4.css";
import { Navbar } from "@/components/Navbar";
import { BodyClassManager } from "@/components/BodyClassManager";
import { SectionEntranceEffects } from "@/components/SectionEntranceEffects";
import { MouseTrail } from "@/components/MouseTrail";

export const metadata: Metadata = {
    title: "Portafolio | Oscar Narvaez",
    description: "Portafolio personal construido con Next.js y TypeScript.",
    applicationName: "Portafolio Oscar Narvaez",
    metadataBase: new URL("http://localhost:3000"),
    openGraph: {
        title: "Portafolio | Oscar Narvaez",
        description: "Portafolio personal construido con Next.js y TypeScript.",
        type: "website",
        locale: "es_CO",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portafolio | Oscar Narvaez",
        description: "Portafolio personal construido con Next.js y TypeScript.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="es">
            <body>
                <MouseTrail />
                <BodyClassManager />
                <SectionEntranceEffects />
                <div id="site-border-left" />
                <div id="site-border-right" />
                <div id="site-border-top" />
                <div id="site-border-bottom" />
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
