import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jether Balabagno | Software Developer",
  description:
    "Professional portfolio of Jether Balabagno, a software developer building web and mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-900`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
