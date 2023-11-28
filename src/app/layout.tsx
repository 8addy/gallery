import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Images Gallery",
  description: "First application with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <main className="max-w-6xl m-auto">{children}</main>
      </body>
    </html>
  );
}
