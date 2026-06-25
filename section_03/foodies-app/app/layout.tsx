import type { Metadata } from "next";
import "./globals.css";

import MainHeader from "@/components/main-header/main-header";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious food, delivered to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
