import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

        {/* ChatDrill Widget */}
        <Script id="chatdrill-config" strategy="afterInteractive">
          {`window.CHATDRILL_WIDGET_KEY = "pk_live_2e8ace29c321"; window.CHATDRILL_API_URL = "https://api.chatdrill.com";`}
        </Script>
        <Script
          src="https://api.chatdrill.com/widget-loader/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
