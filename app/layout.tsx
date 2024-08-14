import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سكول كيت | خياركم الاول ",
  description: "افضل منصة لطلب الادوات المدرسية و التجهيز للدخول المدرسي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
