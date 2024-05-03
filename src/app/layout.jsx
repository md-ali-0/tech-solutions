import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";

const Mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Tech Solutions",
    description: "Tech Solutions Web application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                // className={Mont.className}
                className={"flex flex-col min-h-screen font-Montserrat text-[#F5F9FD]"}
                suppressHydrationWarning={true}
            >
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
