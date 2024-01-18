import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "../components/section/Navbar";
import Image from "next/image";
import Footbar from "@/components/section/Footbar";
import { useState } from "react";
import { createContext } from "react";
import ProductID from "./[id]/page";

const inter = Inter({ subsets: ["latin"] });



 const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// =====================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  


  return (
    <html lang="en">
      <body className={inter.className} >
        
        <Navbar />
        {children}
        <Footbar />

      </body>
    </html>
  );
}
