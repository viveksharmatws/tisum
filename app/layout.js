import "./globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { Poly, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"],
weight : ['400','700','500','600','800'],
variable: '--font-poppins',
}); 

const poly = Poly({ subsets: ["latin"],
weight : ['400'],
variable: '--font-poly'
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable}   ${poly.variable} `}>
        <Header/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
