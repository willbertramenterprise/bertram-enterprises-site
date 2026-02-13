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
  title: "Bertram Enterprises | Technology Consulting & Engineering",
  description:
    "Software engineering, AI & automation, and technology consulting. We build intelligent systems and deliver results.",
  openGraph: {
    title: "Bertram Enterprises | Technology Consulting & Engineering",
    description:
      "Software engineering, AI & automation, and technology consulting. We build intelligent systems and deliver results.",
    url: "https://bertramenterpises.com",
    siteName: "Bertram Enterprises",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
