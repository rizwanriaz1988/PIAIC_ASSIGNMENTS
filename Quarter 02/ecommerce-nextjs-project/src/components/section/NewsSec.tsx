import React from 'react'
import { Button } from '../ui/button'
import { Input } from "@/components/ui/input"
function NewsSec() {
    return (
        <div className=' pb-16 flex flex-col'>
            <div className='  flex flex-col lg:flex-row items-center '>


                {/* lefts side*/}
                <div className='basis-1/2 relative flex flex-col justify-center '>

                    {/* background text */}
                    <div className='font-extrabold text-[60px] md:text-[110px] leading-[110px] absolute text-[#212121] opacity-[0.07] z-[1]'>Different from others</div>

                    {/*  4 sections  */}
                    <div className=' grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-14 pr-18 '>

                        <div className=''>
                            <h3 className="scroll-m-20 text-xl leading-none font-semibold tracking-tight">Using Good Quality Materials</h3>
                            <p className="leading-2 [&:not(:first-child)]:mt-6 grow-0">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className=''>
                            <h3 className="scroll-m-20 text-xl leading-none font-semibold tracking-tight">Modern Fashion Design</h3>
                            <p className="leading-2 [&:not(:first-child)]:mt-6">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className=''>
                            <h3 className="scroll-m-20 text-xl leading-none font-semibold tracking-tight">100% Handmade Products</h3>
                            <p className="leading-2 [&:not(:first-child)]:mt-6">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className=''>
                            <h3 className="scroll-m-20 text-xl leading-none font-semibold tracking-tight">Discount for Bulk Orders</h3>
                            <p className="leading-2 [&:not(:first-child)]:mt-6">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>



                    </div>


                </div>




                {/* right side "picture" and "text" */}
                {/* ========================================================================================== */}

                <div className='basis-1/2 flex gap-10 my-8 flex-col md:flex-row items-center '>
                    <img src="\product7.png" alt="hero" width={285} height={350} className="object-fill" />
                    <div className='flex flex-col justify-center gap-8'>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
                            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                        </p>

                        <button className='font-semibold leading-[18px] width-1/2 bg-[#212121] flex items-center self-center sm:self-start  justify-center gap-2 text-white px-12 py-3 font-family: Sora, sans-serif;'>See All Product</button>
                    </div>
                </div>
            </div>

            {/* news letter */}
            {/* ========================================================================================== */}
            <div className='relative py-40 flex flex-col justify-center items-center'>
                <div className='font-extrabold text-[40px] sm:text-[40px] md:text-[110px] leading-[110px] absolute text-[#212121] opacity-[0.07] '>Newsletter</div>
                <div className=' flex flex-col items-center  '>
                    <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl pb-4">
                        Subscribe Our Newsletter
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 pb-8 text-center">
                        Get the latest information and promo offers directly
                    </p>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Input Email Address" className='border-[#212121] rounded-none' />
                        <Button type="submit" className='bg-[#212121] rounded-none'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSec