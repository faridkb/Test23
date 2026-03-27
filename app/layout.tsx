import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CorpDash — Manage Your Business with Confidence",
  description:
    "CorpDash gives your team real-time analytics, seamless collaboration tools, and enterprise-grade security — all in one powerful dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
