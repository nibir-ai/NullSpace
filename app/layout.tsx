import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nothing • Notion",
  description: "Notion clone with pure Nothing OS soul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-nothing-bg text-nothing-text overflow-hidden">
        {children}
      </body>
    </html>
  );
}