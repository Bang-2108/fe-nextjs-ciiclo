import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Zoan Thi Bang | Portfolio",
  description: "Trang portfolio cá nhân đồng bộ dữ liệu thời gian real-time từ Admin CMS.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased min-h-screen bg-black text-white flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}