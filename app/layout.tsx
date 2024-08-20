import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "قائمتي  | خياركم الاول",
  description: "افضل منصة لطلب الادوات المدرسية و التجهيز للدخول المدرسي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
        <link rel="image" href="/logo.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
