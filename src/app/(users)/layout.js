import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { Provider } from "@/components/themeProvider/Provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Shineway HealthCare Official",
    template: '%s',
  },
  description: "SHINEWAY is a Pharmaceutical company which began her operations in the year 1970, Producing over 400 different Pharmaceutical Products.  Shineway is known for using modern technology to produce and promote Traditional Chinese Medicine, with seven factories across China.",
  keywords: ["Innovative Business Plan", "Evening Prime Rose", "Kings Capsule", "Golden Six", "ISK-Clear", "Astree Life", "Neuro Booster", "Pearl Bloom Granules", "Feminine Gel", "Pearl Bloom Capsule (Fibro Cure)", "Thirsty Away Capsule (Anti Diabetes)", "King's Capsule","Prosta Plus", "OPTA Bright", "Gastro Calm Capsule (Ulcer Care)", "Athrilax", "Peptide Coffee", "Ginsing and Oyster Coffee", "Premium Peptide Coffee", "Golden Drop Toothpaste (Propolis)", "Anti Blue Energy Glasses", "Body Wash", "Buy One Get One Free", "shineway Academy", "Chinese Herbal Medicine", "Shineway Official" ],
  
  
  robots: {
    '*': {
      disallow: ['/studio/'],
      allow: ['/'],
    },
    sitemap: 'https://www.example.com/sitemap.xml',
  }
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
