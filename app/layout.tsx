import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Gagarin Super Study - Education Center",
  description:
    "Unlock your potential with expert-led courses in IELTS, Math, and IT. Register for a free trial lesson today.",
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {/* --- GOOGLE TAG (gtag.js) ASOSIY SCRIPT --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17934497146"
          strategy="afterInteractive"
        />

        {/* --- GOOGLE ANALYTICS VA KONVERSIYA FUNKSIYASI --- */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Asosiy identifikator
            gtag('config', 'AW-17934497146');

            // --- SIZNING YANGI KONVERSIYA FUNKSIYANGIZ ---
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17934497146/J56mCN-sk4AcEPrq6udC',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}