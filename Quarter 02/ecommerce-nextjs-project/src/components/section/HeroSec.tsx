"use client"
import React from 'react'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { IoCartOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import Image from 'next/image';
function HeroSec() {
    return (
        <div className='flex-1 mx-32 my-16 gap-16 flex relative'>


            <div className='w-1/2 flex justify-between flex-col py-[48px] gap-10'>
                <span className='bg-[#E1EDFF] text-[#0000FF] font-bold py-2.5 px-6 rounded-md align-start w-fit'>Sale 70%</span>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-[#212121]">An Industrial Take on Streetwear</h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-[#212121]">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Button className='rounded-none bg-[#212121] px-5 py-8 text-lg leading-5 items-center w-fit'>
                    <IoCartOutline className="mr-3 h-5 w-5 hover:bg-none" /> Start Shopping
                </Button>


                <div className='grid md:grid-rows-1 md:grid-cols-4 gap-5 grid-cols-2 grid-rows-2'>
                <Image src="/Featured1.webp" alt="hero" width={100} height={35} className='flex flex-shrink-0'/>
                <Image src="/Featured2.webp" alt="hero" width={100} height={35} className=' flex flex-shrink-0'/>
                <Image src="/Featured3.webp" alt="hero" width={100} height={35} className=' flex flex-shrink-0'/>
                <Image src="/Featured4.webp" alt="hero" width={100} height={35} className='flex flex-shrink-0 '/>
                </div>
            </div>








            <div className=' items-center flex justify-center'>
                <div className='bg-[#FFECE3] h-[550px] w-[550px]  rounded-full  '>

                </div>
                <img src="/header.webp" alt="hero" width={650} height={650} className='absolute  bottom-0 '/>
                {/* <Image src="/header.webp" alt="hero" width={650} height={650} className=' bottom-10 -top-5%  relative '/> */}
            </div>
        

          










        </div>
    )
}

export default HeroSec