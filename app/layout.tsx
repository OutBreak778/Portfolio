import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OUTBREAK | Portfolio",
  description: "Generated by Nikhil Mishra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">

      <body  
        className={`${inter.className} min-h-screen bg-white text-black dark:bg-dark `}
        >
        <Navbar/>

        {children}
        <Footer />
      </body>
    </html>
  );
}
