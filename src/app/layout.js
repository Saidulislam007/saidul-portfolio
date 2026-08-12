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

export const metadata = {
  title: "Saidul Islam — MERN Stack Developer",
  description: "Portfolio of Saidul Islam, a MERN Stack Developer building fast, secure, and expressive full-stack web applications.",
  keywords: [
    "Saidul Islam",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer Bangladesh",
  ],
  authors: [{ name: "Saidul Islam", url: "https://github.com/Saidulislam007" }],
  openGraph: {
    title: "Saidul Islam — MERN Stack Developer",
    description: "Engineering digital products people remember.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
