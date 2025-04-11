import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Oladeji Johnson | Portfolio",
  description: "Welcome to my portfolio website!",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Navbar />
        <SpeedInsights/>
        <ParticlesBackground/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
