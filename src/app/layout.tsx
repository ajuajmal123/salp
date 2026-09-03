import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrochureModal from "@/components/ui/BrochureModal";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Srinivasan Associates Private Limited (SAPL) | Engineers & Builders",
  description: "Established in 1987, SAPL is a renowned premier construction and infrastructure engineering firm specializing in Commercial, Industrial, Healthcare, and IT Park landmarks.",
  keywords: "SAPL, Srinivasan Associates, Construction company Tamil Nadu, Infrastructure engineering, Industrial builders Coimbatore, Commercial contractors Chennai, Healthcare infrastructure",
  authors: [{ name: "SAPL Engineering Team" }],
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-white text-navy-950 min-h-screen flex flex-col">
        {/* Global Floating Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Global Detailed Footer */}
        <Footer />

        {/* Global Brochure Modal */}
        <BrochureModal />
      </body>
    </html>
  );
}
