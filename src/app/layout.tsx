import "@/styles/global.css";

import { ReactNode } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <head />
      <body className="bg-[#030007] text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
