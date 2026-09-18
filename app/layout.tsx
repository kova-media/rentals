import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rentals | Northeast Kansas",
    template: "%s | Rentals"
  },
  description: "Local rental listings and property management for renters and property owners in northeast Kansas.",
  openGraph: {
    title: "Rentals | Northeast Kansas",
    description: "Find a rental or get help managing your property.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
