import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art museum",
  description: "Historic artworks displayed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
