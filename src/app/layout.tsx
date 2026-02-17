import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";

// Body font - Clean sans-serif
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Heading font - Premium serif for luxury/trade feel
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRC Carpentry & Joinery | Kitchen Fitters Milton Keynes",
  description:
    "CRC Carpentry & Joinery - Expert kitchen fitting, carpentry, and flooring services in Milton Keynes, UK. Quality craftsmanship with over 20 years of experience.",
  keywords: [
    "kitchen fitting",
    "kitchen fitter",
    "Milton Keynes",
    "carpentry",
    "joinery",
    "flooring installation",
    "CRC Carpentry",
    "kitchen renovation",
    "bespoke kitchens",
    "MK",
  ],
  authors: [{ name: "CRC Carpentry & Joinery" }],
  openGraph: {
    title: "CRC Carpentry & Joinery | Kitchen Fitters Milton Keynes",
    description:
      "Expert kitchen fitting, carpentry, and flooring services in Milton Keynes, UK. Quality craftsmanship with over 20 years of experience.",
    type: "website",
    locale: "en_GB",
    siteName: "CRC Carpentry & Joinery",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "", // Add Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased pt-[90px]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
