import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { SP } from 'next/dist/shared/lib/utils'

function EventSec() {
    return (
        <div className=' my-16 flex flex-col'>

            {/* upper text */}
            {/* ========================================================== */}
            <div className='flex items-center flex-col gap-2 mb-8'>

                <span className='text-[#0062f5] tracking-widest text-xs font-bold'>PROMOTIONS</span>
                <h2 className=' text-[32px] font-bold'>Our Promotions Events</h2>
            </div>

            {/* ======================================================= */}


            <div className='flex flex-col gap-8 lg:flex-row'>

                {/* Left Side */}
                <div className='flex flex-col justify-between gap-4 flex-1 basis-1/2'>
                    <div className='bg-[#d6d6d8] flex flex-col sm:flex-row justify-between items-center basis-1/2 px-8'>
                        <div className='pt-4'>
                            <h3 className="font-bold text-[1.75rem] leading-[35px]">
                                GET UP TO&nbsp;
                                <span className='text-4xl font-extrabold'>60%</span>
                            </h3>
                            <p className="font-normal text-lg leading-[23px] tracking-[0.03em]">
                                For the summer season
                            </p>
                        </div>
                        <Image src="/event1.webp" alt="hero" width={260} height={200} className='flex flex-shrink-0' />
                    </div>
                    <div className=' p-8 pt-12 bg-[#212121] text-white flex  flex-col basis-1/2 justify-center items-center'>
                        <h3 className=" tracking-tight font-extrabold text-4xl mb-4">
                            GET 30% Off
                        </h3>
                        <p className="font-normal text-sm leading-[18px] tracking-[0.03em];">
                            USE PROMO CODE
                        </p>
                        <button className='font-bold text-[10px] sm:text-[17px] leading-[21px] tracking-[0.25em] text-white mt-[5px] px-4 sm:px-10 py-2 rounded-lg border-[none] bg-[#474747]'>
                            DINEWEEKENDSALE
                        </button>
                    </div>
                </div>
                {/* Right Side */}
                <div className='flex flex-col md:flex-row gap-4 flex-shrink-0 basis-1/2'>
                    <div className='bg-[#efe1c7] pt-6 flex justify-between items-center w-full md:w-1/2 flex-col '>
                        <p className="mx-5 self-start">Flex Sweatshirt</p>
                        <div className="mx-5 self-start">
                            <span><s>$100.00</s></span>
                            <span className='font-extrabold'>&nbsp;$75.00</span>
                        </div>
                        <Image src="/event2.webp" alt="hero" width={280} height={340} className='' />
                    </div>
                    <div className='bg-[#d7d7d9] pt-6 flex justify-between items-center w-full md:w-1/2  flex-col '>
                        <p className="mx-5 self-start">Flex Push Button Bomber</p>
                        <div className="mx-5 self-start">
                            <span><s>$225.00</s></span>
                            <span className='font-extrabold'>&nbsp;$190.00</span>
                        </div>
                        <Image src="/event3.webp" alt="hero" width={280} height={340} className=' ' />
                    </div>
                </div>

            </div>



























        </div>
    )
}

export default EventSec