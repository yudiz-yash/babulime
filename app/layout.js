import { Inter } from "next/font/google";
import "./globals.scss";
import ScrollProgressBar from "@/components/ScrollProgressBar/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Babu Lime & Minerals - Production Ready Site",
  description: "A premium UI matching the design reference for Babu Lime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
