import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Montana Summer Adventures | Authentic Montana Experiences",
  description: "Experience the best of Montana with guided river floats, gold panning, fishing, mountain lake trips, shed hunting, cattle drives, trail rides, rifle shooting, and wildlife viewing.",
  keywords: "Montana adventures, river float, gold panning, fishing Montana, cattle drive, trail rides, shed hunting, wildlife viewing, rifle shooting, Montana vacation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
