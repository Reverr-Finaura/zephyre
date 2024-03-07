import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";

const inter = Noto_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Zephyer",
  description: "Elevating Wealth Management for the Ultra High Net Worth",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
