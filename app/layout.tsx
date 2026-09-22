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

// Widget ID comes from the environment — set NEXT_PUBLIC_CHATDRILL_WIDGET_ID
// in .env.local for local dev, or in Vercel → Settings → Environment Variables
// for production.
const WIDGET_ID = process.env.NEXT_PUBLIC_CHATDRILL_WIDGET_ID;

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

        {/*
          ChatDrill Widget
          ─────────────────────────────────────────────────────────────
          Only injected when NEXT_PUBLIC_CHATDRILL_WIDGET_ID is set.
          Set it in:
            • Local dev  → .env.local
            • Vercel     → Project Settings → Environment Variables
        */}
        {WIDGET_ID && (
          <Script
            id="chatdrill-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(d) {
                  var s = d.createElement('script');
                  s.src = 'https://chatdrill.com/widget.js';
                  s.async = true;
                  s.setAttribute('data-widget-id', '${WIDGET_ID}');
                  d.head.appendChild(s);
                })(document);
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
