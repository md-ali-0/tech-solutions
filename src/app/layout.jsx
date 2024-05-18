"use client"

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

const Mont = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//     title: "Tech Solutions",
//     description: "Tech Solutions Web application",
// };

export default function RootLayout({ children }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <html lang="en">
            <body
                // className={Mont.className}
                className={
                    "flex flex-col min-h-screen font-Montserrat text-[#F5F9FD]"
                }
                suppressHydrationWarning={true}
            >
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
