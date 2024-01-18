"use client"
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
const components: { heading: string, content: { subheading: string, href_subheading: string }[] }[] = [
    {
        heading: "Company",
        content: [
            {
                subheading: "About",
                href_subheading: "/about"
            },
            {
                subheading: "Terms of Use",
                href_subheading: "/terms"
            },
            {
                subheading: "Privacy Policy",
                href_subheading: "/privacy"
            },
            {
                subheading: "How it Works",
                href_subheading: "/how-it-works"
            },
            {
                subheading: "Contact Us",
                href_subheading: "/contact"
            }
        ]
    }, {
        heading: "Support",
        content: [
            {
                subheading: "Support Carrer",
                href_subheading: "/support"
            },
            {
                subheading: "24h Service",
                href_subheading: "/service"
            },
            {
                subheading: "Quick Chat",
                href_subheading: "/chat"
            },
        ]
    }, {
        heading: "Contact",
        content: [
            {
                subheading: "Whatsapp",
                href_subheading: "/whatsapp"
            },
            {
                subheading: "Support 24h",
                href_subheading: "/support-24h"
            },

        ]
    },
]
function Footbar() {
    return (
        <>
            <div className='flex flex-wrap justify-between items-start mx-12 lg:mx-32 my-9'>
                {/* left side */}
                <div className='basis-1/3 flex-col flex flex-shrink-0 my-4'>
                    <div className=''>
                        {/* left side one column */}
                        <Image src="/Logo.webp" alt="logo" width={180} height={180} className='pb-4 pt-1 ' />

                        <p className="leading-5 [&:not(:first-child)]:mt-6 pb-8 ">
                            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <Link href="https://twitter.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter bg-slate-100 rounded-lg p-2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </Link>
                        <Link href="https://www.facebook.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook bg-slate-100 rounded-lg p-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </Link>
                        <Link href="https://www.linkedin.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin bg-slate-100 rounded-lg p-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </Link>
                    </div>
                </div>
                {/* right side */}
                {components.map((component) => (
                    <div key={component.heading} className='my-4 mx-4'>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{component.heading}</h3>
                        {component.content.map((content) => (
                            <div key={content.subheading} className='mt-[15px]'>
                                <Link href={content.href_subheading} className='font-[16px]'>
                                    {content.subheading}
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* ================================================================================= */}
            <div className='mt-24  border-t-2 border-slate-200  py-5  '>
                <div className='flex justify-between items-center mx-12 lg:mx-32 flex-wrap'>
                <div><p className="leading-7 [&:not(:first-child)]:mt-6 text-[#666666]">Copyright © 2022 Dine Market</p></div>
                 <div><p className="leading-7 [&:not(:first-child)]:mt-6 text-[#666666]">Design by.<span className='font-bold text-black'>Rizi Tech Studio</span></p></div>
                <div><p className="leading-7 [&:not(:first-child)]:mt-6 text-[#666666]">Code by.<span className='font-bold text-black'>rizwanriaz1988 on github</span></p></div>

                </div>

                </div>

            </>
            )
}

            export default Footbar