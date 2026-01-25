import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unitvent | Automatizacion Inteligente y Desarrollo de Software",
  description: "Transformamos ideas en soluciones digitales. Desarrollo de software personalizado, automatizacion de procesos e inteligencia artificial para impulsar tu negocio.",
  keywords: "desarrollo software, automatizacion, inteligencia artificial, ERP, CRM, apps moviles, transformacion digital, Mexico",
  authors: [{ name: "Unitvent" }],
  openGraph: {
    title: "Unitvent | Automatizacion Inteligente",
    description: "Transformamos ideas en soluciones digitales para impulsar tu negocio.",
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
    <html lang="es">
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
