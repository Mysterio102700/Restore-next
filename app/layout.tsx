import type { Metadata } from "next";
import { Poppins  } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/Navbar/page";
import Footer from "@/app/Components/Footer/page"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';



const poppins = Poppins({
  variable: "--font-poppins-regular",
  subsets: ['latin', 'latin-ext'],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Restore Podiatry & Laser Center",
  description: "Restore Podiatry & Laser Center is a podiatry clinic in Hicksville, NY. We offer a wide range of services including laser therapy, sports medicine, and regenerative podiatric medicine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
