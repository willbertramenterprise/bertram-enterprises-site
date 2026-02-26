import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bertram Enterprises | Technology Consulting & Engineering",
  description:
    "Software engineering, AI systems, and technology consulting. We build what matters.",
  openGraph: {
    title: "Bertram Enterprises",
    description:
      "Software engineering, AI systems, and technology consulting. We build what matters.",
    url: "https://bertramenterprises.org",
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
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
