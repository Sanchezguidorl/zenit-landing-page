import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./src/components/styles/main.css";
import BgEffectContainer from "./src/components/layouts/BgEffectContainer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="absolute h-full w-full overflow-hidden">
        <BgEffectContainer/>

        <div className=" aspect-square border top-3/4 -left-1/4 border-no-dark w-[900px] rounded-full absolute "></div>
        <div className=" aspect-square border top-96 -right-20 border-no-dark w-96 rounded-full absolute "></div>
        <div className=" aspect-square border top-1/3 -right-40 border-no-dark w-[600px] rounded-full absolute "></div>
        <div className=" aspect-square border top-1/4 right-1/2 border-no-dark w-32 rounded-full absolute "></div>
        <div className=" aspect-square border top-32 right-1/3 border-no-dark w-28 rounded-full absolute "></div>
        <div className=" aspect-square border top-3/4 right-1/4 border-no-dark w-28 rounded-full absolute "></div>
        <div className=" aspect-square border top-2/4 right-2/3 border-no-dark w-[400px] rounded-full absolute "></div>
        </div>
        {children}
      </body>
    </html>
  );
}
