import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Gamepad Tester Online | Test Your Controller Free",
  description:
    "Free online gamepad tester to check controller drift, polling rate (Hz), input lag, and buttons for Xbox, PlayStation, and generic USB controllers.",
  openGraph: {
    title: "Gamepad Tester Online | Test Your Controller Free",
    description: "Professional browser-based hardware diagnostics for your controller.",
    url: "https://gamepadtester.me",
    siteName: "Gamepad Tester",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamepad Tester Online | Test Your Controller Free",
    description: "Instantly test your Xbox, PlayStation, or generic controller for stick drift and input issues right in your browser.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1434000394357253"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        id="top"
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
