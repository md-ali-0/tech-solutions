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
      <body className={Mont.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
