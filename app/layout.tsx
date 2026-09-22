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
  title: "FlowDesk — Customer Support That Converts",
  description:
    "AI-powered chat support for SaaS teams. Resolve tickets faster, capture leads automatically, and delight customers 24/7 with FlowDesk.",
  keywords: ["customer support", "live chat", "SaaS", "AI chat", "helpdesk"],
  openGraph: {
    title: "FlowDesk — Customer Support That Converts",
    description:
      "AI-powered chat support for SaaS teams. Resolve tickets faster and delight customers 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}

        {/* Add your ChatDrill widget script here after deployment */}
      </body>
    </html>
  );
}
