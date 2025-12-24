import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go Extra Mile — Rewarding Every Ride",
  description:
    "India's First Rewards Based Mobility App. Earn GEM Coins for every kilometer you travel and redeem them for cashback, discounts, coupons, events, and more.",
  icons: {
    icon: "/app_icon.png",
    apple: "/app_icon.png",
    shortcut: "/app_icon.png",
  },
  openGraph: {
    title: "Go Extra Mile — Rewarding Every Ride",
    description:
      "India's First Rewards Based Mobility App. Earn GEM Coins for every kilometer you travel and redeem them for cashback, discounts, coupons, events, and more.",
    images: ["/app_icon.png"],
  },
  twitter: {
    card: "summary",
    title: "Go Extra Mile — Rewarding Every Ride",
    description:
      "India's First Rewards Based Mobility App. Earn GEM Coins for every kilometer you travel and redeem them for cashback, discounts, coupons, events, and more.",
    images: ["/app_icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
