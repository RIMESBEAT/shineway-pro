import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { Provider } from "@/components/themeProvider/Provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shineway Healthcare",
  description: "Shineway, makes life better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-200 text-black dark:bg-gray-900   dark:text-white h-full `}>
       <Provider>

<main>

        <Navbar />



        {children}
        <Footer />
</main>
       </Provider>
<Analytics />
      </body>
    </html>
  );
}
