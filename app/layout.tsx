import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Electronic Device Repair in Winston-Salem, NC | Green Wireless",
    template: "%s | Green Wireless Repair",
  },
  description:
    "Professional iPhone, iPad, MacBook, PS5 and Xbox repair, diagnostics, mail-in service and electronics repair training in Winston-Salem, NC.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Green Wireless Repair",
    title: "Green Wireless Repair",
    description:
      "Professional electronic device repair and training in Winston-Salem, NC.",
    url: "/",
    images: [
      {
        url: "/GW-Hero.png",
        alt: "Green Wireless electronic device repair and training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Wireless Repair",
    description:
      "Professional electronic device repair and training in Winston-Salem, NC.",
    images: ["/GW-Hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
