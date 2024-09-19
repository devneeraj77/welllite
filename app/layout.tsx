import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "../components/ui/toaster";
import "./globals.css";
import { Alata, Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});
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
