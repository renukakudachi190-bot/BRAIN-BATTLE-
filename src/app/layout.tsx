import type { Metadata } from "next";
import "./globals.css";
import { eventConfig } from "@/lib/event-config";

export const metadata: Metadata = {
  title: `${eventConfig.name} | ${eventConfig.tagline}`,
  description: eventConfig.description,
  openGraph: {
    title: eventConfig.name,
    description: eventConfig.shortDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-neural min-h-screen">
        {children}
      </body>
    </html>
  );
}
