import type {Metadata} from "next";
import {Poppins} from "next/font/google";

import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {Providers} from "@/components/Providers/Providers";

import "./globals.css";
import styles from "./page.module.css";

export const fetchCache = "force-no-store";

const poppins = Poppins({subsets: ["latin"], weight: ["400", "500", "700"]});

export const metadata: Metadata = {
  title: "Blog | Home",
  description: "Test task - Blog.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{backgroundColor: "rgb(45, 55, 72)"}}
      >
        <Providers>
          <div className="main_wrapper">
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
