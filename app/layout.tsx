import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wpxq.vercel.app/'), 
  title : {
    default: "wpxq - Portfolio",
    template: "%s | wpxq"
  },
  description: "wpxq - cau",
  authors : [{ name: "wpxq" }],
  openGraph: {
    title: "wpxq - Portfolio",
    description: "wpxq - cau",
    url: "https://wpxq.vercel.app/",
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
    <html lang="en" className="bg-black">
      <body className="bg-black text-white m-0 p-0 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
