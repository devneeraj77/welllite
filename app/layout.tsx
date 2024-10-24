import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "../components/ui/toaster";
import "./globals.css";
import {  Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
  );
}
