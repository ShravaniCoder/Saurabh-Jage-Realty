import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";



const outfit = Outfit({
  subsets: ["latin"], weight : ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shravani Chendwankar Portfolio",
  description: "Shravani portfolio using next.js and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
       
          {children}
      
      </body>
    </html>
  );
}