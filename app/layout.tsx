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
  title: "Andrew James - Developer",
  description:
    "Welcome to my portfolio! I am a passionate developer who believes in simplicity and effectiveness. I focus on creating straightforward solutions that solve real problems, with clean code and intuitive user experiences.",
  keywords: [
    "Software Developer",
    "Full stack developer",
    "Back end developer",
    "Web Developer",
    "Clean Code",
    "Simple Design",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "C#",
    ".NET",
    "Python",
    "Rust",
    "User Experience",
    "Problem Solving",
    "Effective Solutions",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Andrew James",
  ],
  authors: [{ name: "Andrew James" }],
  creator: "Andrew James",
  openGraph: {
    title: "Andrew James - Developer Portfolio",
    description:
      "Passionate full-stack developer solving real-world problems. Explore my projects and development approach.",
    url: "https://portfolio.titanexperts.com",
    siteName: "Andrew James - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andrew James - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
