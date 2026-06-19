import { Inter } from "next/font/google";
import "./globals.scss";
import ScrollProgressBar from "@/components/ScrollProgressBar/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Babu Lime",
  description: "India's trusted authority in food-grade natural white lime processing. Manufactured in Rajkot. Serving Gujarat. Expanding Pan-India.",
  icons: {
    icon: '/icon.webp',
    shortcut: '/icon.webp',
    apple: '/icon.webp',
  },
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
