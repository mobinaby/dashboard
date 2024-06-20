import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/page";
import Sidebar from "./components/layout/sidebar/page";
import 'swiper/css';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <Header />
        <div className="flex ">
          <div className="w-[230px] bg-red-300">
            {" "}
            <Sidebar />
          </div>
          <div className="w-full"> {children}</div>
        </div>
      </body>
    </html>
  );
}
