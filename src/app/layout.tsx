import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unitvent | Automation Systems and Custom Software",
  description:
    "We design workflows, automation systems and custom software for teams that need cleaner operations and better visibility.",
  keywords:
    "custom software, workflow automation, operations systems, internal tools, AI systems, digital transformation",
  authors: [{ name: "Unitvent" }],
  openGraph: {
    title: "Unitvent | Automation Systems and Custom Software",
    description:
      "We build software and workflow systems that help teams operate with more clarity, speed and control.",
    url: "https://unitvent.com",
    siteName: "Unitvent",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
