import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const yekan = localFont({
  src: "../../public/Fonts/YekanBakh-VF.ttf",
  variable: "--font-yekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nestak",
  description: "nestak",
  icons: {
    icon: "/Nestap-Logo-Icon.svg", // 👈 path inside /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekan.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
