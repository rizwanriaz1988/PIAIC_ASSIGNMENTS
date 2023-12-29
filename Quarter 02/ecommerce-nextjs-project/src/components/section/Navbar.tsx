"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; }[] = [
  {
    title: "Female",
    href: "/female",
  },
  {
    title: "Male",
    href: "/male",
  },
  {
    title: "Kids",
    href: "/kids",
  },
  {
    title: "All Products",
    href: "/allProducts",
  },

]

export function Navbar() {
  return (
    <div className="flex items-center justify-between   mx-32 my-9 ">

      <div>
        <Link href="/">
          <Image src="/Logo.webp" alt="logo" width={150} height={150} className="flex " />
        </Link>
      </div>

      <div className="flex gap-12">
        {components.map((component) => (
          <div key={component.title} >
            <Link href={component.href} legacyBehavior passHref >
              {component.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center border border-slate-300 rounded-md px-2 h-7 ">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search "><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>

        <input type="text" placeholder="What you looking for" className="border-none text-[12px] px-2 h-[26px] flex-grow w-[458px] " />
      </div>


      <div className="">
        <div className="justify-center flex items-center">
          <div className="bg-slate-100 rounded-full p-3.5 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart "><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
          </div>
          <input type="text" value="0" className="rounded-full read-only relative text-xs text-white bottom-[16px] right-[26px] w-[18px] h-[18px] bg-red-500 text-center font-bold self-center" />
        </div>
      </div>

    </div>


  )
}


export default Navbar;
