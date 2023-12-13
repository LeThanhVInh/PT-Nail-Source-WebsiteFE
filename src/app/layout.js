import { Inter } from "next/font/google";
import "./globals.scss";
import "./customcss.scss";
import HeaderContact from "@/components/Header/HeaderContact";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header/Header";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
></link>;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderContact />
        <Header />

        {children}
      </body>
    </html>
  );
}
