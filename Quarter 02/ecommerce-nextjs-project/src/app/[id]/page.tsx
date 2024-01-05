"use client"
import React from 'react'
import products_db from '@/app/productsDB.json'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { IoCartOutline } from 'react-icons/io5'
import Counter from '@/components/section/Counter'
import Link from 'next/link'


function ProductID({ params }: { params: { id: string } }) {
    const [hoverImage, setHoverImage] = useState('')
    return (
        <div className='flex-1 px-32 py-16 bg-[#fcfcfc]'>
            {/* {params.id} */}

            {products_db.map((product) => (
                product.id === params.id && (
                    // setHoverImage(product.image),
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


                            <div className='gap-3 flex flex-col'>
                                {/* for size */}
                                <h1 className='font-bold'>Select Size</h1>

                                <div className='flex gap-4'>
                                    {product.sizes.map((size) =>
                                        <div className=' bg-white size-10 hover:bg-white hover:shadow-lg items-center justify-center rounded-full flex'>
                                            <button className=' text-md' key={size}>{size}</button>
                                        {/* <Link href={`/${product.id}`} className='' key={size}> */}
                                        {/* <h1 className='font-extrabold text-slate-500 hover:bg-slate-300 hover:bg-slate-700'>{size}</h1> */}
                                        {/* <h1 className=''>{size}</h1> */}
                                        {/* </Link> */}
                                        </div>
                                        
                                    )}
                                </div>
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




















                        {/* <h1>{product.sub_images}</h1>
                    <h1>{product.product_detail}</h1>
                    <h1>{product.product_care}</h1>
                    <h1>{product.quantity}</h1>
                    <h1>{product.family}</h1> */}
                    </div>
                )
            ))}


        </div>
    )
}

export default ProductID