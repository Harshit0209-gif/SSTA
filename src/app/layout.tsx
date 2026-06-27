import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSTA — Sainik Surakhsa Training Academy",
  description:
    "Sainik Surakhsa Training Academy prepares retired Indian Army personnel for professional careers in the private security sector across Northeast India.",
  keywords: [
    "security training",
    "retired army",
    "Northeast India",
    "SSTA",
    "Sainik Surakhsa",
    "private security",
    "security guard training",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
