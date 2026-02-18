import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel.app/wpxq'), 
  title : {
    default: "wpxq - Portfolio",
    template: "%s | wpxq"
  },
  description: "wpxq - cau",
  authors : [{ name: "wpxq" }],
  openGraph: {
    title: "wpxq - Portfolio",
    description: "wpxq - cau",
    url: "https://vercel.app/wpxq",
    siteName: "wpxq",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-500 font-mono text-sm md:text-base mt-4 ml-2 tracking-[0.2em] uppercase">
        {children}
      </body>
    </html>
  )
}
