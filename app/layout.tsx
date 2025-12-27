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
  title: "Go Extra Mile - Log every commute",
  description:
    "India's First Rewards Based Mobility App. Earn GEM Coins for every kilometer you travel and redeem them for cashback, discounts, coupons, events, and more.",
  icons: {
    icon: "/app_icon.png",
    apple: "/app_icon.png",
    shortcut: "/app_icon.png",
  },
  openGraph: {
    title: "Go Extra Mile - Log every commute",
    description:
      "India's First Rewards Based Mobility App. Earn GEM Coins for every kilometer you travel and redeem them for cashback, discounts, coupons, events, and more.",
    images: ["/app_icon.png"],
  },
  twitter: {
    card: "summary",
    title: "Go Extra Mile - Log every commute",
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
      <head>
        <link rel="icon" href="/app_icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/app_icon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
