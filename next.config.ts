import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the ChatDrill widget script to load from chatdrill.com
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Allows the ChatDrill widget script + your own origin
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://chatdrill.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://chatdrill.com wss://chatdrill.com",
              "frame-src 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  // Compress responses
  compress: true,

  // Trailing slash consistency
  trailingSlash: false,

  // Power header removed (don't leak framework info)
  poweredByHeader: false,
};

export default nextConfig;
