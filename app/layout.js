import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
});

export const metadata = {
  title: "My Megam | AI Solutions",
  description: "Automate, Innovate, Elevate with My Megam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${pixelify.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
