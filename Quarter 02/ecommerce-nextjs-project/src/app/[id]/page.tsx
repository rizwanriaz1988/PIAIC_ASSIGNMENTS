"use client"
import React from 'react'
import products_db from '@/app/productsDB.json'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { IoCartOutline } from 'react-icons/io5'
import Counter from '@/components/section/Counter'
import Link from 'next/link'
import SizeSelect from '@/components/section/SizeSelect'


function ProductID({ params }: { params: { id: string } }) {
    const [hoverImage, setHoverImage] = useState('')

    return (
        <div className='flex-1 px-32 py-16 bg-[#fcfcfc]'>
            {/* {params.id} */}

            {products_db.map((product) => (
                product.id === params.id && (
                    <>
                        <div className='flex'>
                            {/* for multiple images */}
                            <div className='flex flex-col gap-5'>
                                {product.sub_images.map((image) => (
                                    <img src={image} alt="" key={image} className='w-24 h-24 hover:' onMouseEnter={(e) => (setHoverImage(image))} />
                                ))}

                            </div>

                            {/* for single image */}
                            <div className='mx-8'>
                                <img src={hoverImage ? hoverImage : product.image} alt="" className='w-[500px]' />

                            </div>

                            {/* for sideline text */}
                            <div className='flex flex-col gap-10 mt-10'>

                                <div>
                                    <h1 className=' text-2xl tracking-widest'>{product.name}</h1>
                                    <h1 className='text-slate-300 text-xl font-bold'>{product.category}</h1>
                                </div>


                                <div>
                                    <SizeSelect size={product.sizes} />
                                </div>

                                <div>
                                    {/* order quantity */}
                                    <Counter />

                                </div>

                                <div className='flex items-center gap-5'>
                                    {/* for button and price */}
                                    <Button className='rounded-none bg-[#212121] px-5 py-5 text-sm font-bold leading-5 items-center w-fit shadow-lg'>
                                        <IoCartOutline className="mr-3 h-5 w-5" /> Add to Cart
                                    </Button>
                                    <h1 className='text-2xl font-bold text-slate-800'>{product.price}</h1>
                                </div>
                            </div>
                        </div>

                        {/* =============================================== */}

                        <div className='relative mt-16 pt-8 px-16 pb-24 bg-slate-50 shadow-lg flex flex-col justify-center items-center'>
                            <div className='absolute border-b-4 top-0 left-0 px-16 flex justify-center pt-8  w-full  z-[1] text-9xl text-[#2121218f] font-extrabold border-slate-600   leading-[110px]  opacity-[0.07] '>Overview</div>

                            <div className='pt-12'>
                                <h1 className='font-bold text-xl '> Product Information</h1>
                            </div>
                            <div className='flex mt-16 justify-between'>
                                <h1 className='flex flex-shrink-0 font-bold'>PRODUCT DETAILS</h1>
                                <p className='text-justify w-2/3 leading-8'>{product.product_detail}</p>
                            </div>

                            <div className='flex mt-4 justify-between w-full '>
                                <h1 className='flex flex-shrink-0 font-bold'>PRODUCT CARE</h1>
                                <div className=' flex flex-col w-2/3'>
                                    {product.product_care.map((item) => (
                                        <li key={item} className=' leading-5 font-bold'>{item}  </li>

                                    ))}
                                </div>

                            </div>
                        </div>
                    </>
                )
            ))}








        </div>
    )
}

export default ProductID