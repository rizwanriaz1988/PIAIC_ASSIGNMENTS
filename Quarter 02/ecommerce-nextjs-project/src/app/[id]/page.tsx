"use client"
import React from 'react'
import products_db from '@/app/productsDB.json'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { IoCartOutline } from 'react-icons/io5'
import Counter from '@/components/section/Counter'
import Link from 'next/link'
import SizeSelect from '@/components/section/SizeSelect'
import Navbar from '@/components/section/Navbar'
import Cart from '../cart/page'
import { createContext, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, addToCart } from '@/store/slice'
import toast from 'react-hot-toast'



function ProductID({ params }: { params: { id: string } }) {
    const dispatch = useDispatch()
    const [hoverImage, setHoverImage] = useState('')
    const [quantity, setQuantity] = useState(1)

    // const [counterValue, setCounterValue] = useState(1)
    // console.log("🚀 ~ ProductID ~ counterValue:", counterValue)
    const [size, setSize] = useState('')


    // const counterCallback = (counterQuantity: any) => {
    //     setCounterValue(counterQuantity)
    // }

    const sizeCallbackfunction = (size: any) => {
        setSize(size)
    }
    const addItem = (product: any) => {
        const completeData = { ...product, counterValue: quantity, orderSize: size }
        console.log("🚀 ~ addItem ~ product:", completeData,)
        dispatch(increment(quantity))
        dispatch(addToCart(completeData))
        toast.success(`${quantity} Item added to cart `)
    }


    return (
        <div className='flex-1 md:px-32 px-12 py-16 justify-center bg-[#fcfcfc]'>
            {/* {params.id} */}

            {products_db.map((product) => (
                product.id === params.id && (
                    <div className='flex flex-col items-center' key={product.id}>
                        <div className='flex flex-wrap justify-center md:items-start'>
                            <div className='flex'>
                                {/* for multiple images */}
                                <div className='flex flex-col gap-5'>
                                    {product.sub_images.map((image) => (
                                        <img src={image} alt="" key={image} className='size-10 sm:size-14 md:size-24 hover:' onMouseEnter={(e) => (setHoverImage(image))} />
                                    ))}

                                </div>

                                {/* for single image */}
                                <div className='mx-8'>
                                    <img src={hoverImage ? hoverImage : product.image} alt="" className='w-[500px]' />

                                </div>
                            </div>


                            {/* for sideline text */}
                            <div className='flex flex-col gap-10 mt-10 justify-start '>

                                <div>
                                    <h1 className=' text-2xl tracking-widest'>{product.name}</h1>
                                    <h1 className='text-slate-300 text-xl font-bold'>{product.category}</h1>
                                </div>


                                <div>
                                    <SizeSelect size={product.sizes} sizeCallback={sizeCallbackfunction} />
                                </div>

                                <div>
                                    {/* order quantity */}
                                    {/* <Counter callback={counterCallback} /> */}
                                    <div className='flex items-center gap-5'>
                                        <h1 className='text-lg font-bold'>Quantity:</h1>

                                        <div className='flex items-center justify-center gap-4 '>

                                            <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
                                                <button className=' text-3xl' onClick={() => (quantity > 1 ? (setQuantity(quantity - 1))  : null)}
                                                >-</button>
                                            </div>
                                            <div className='text-xl'>{quantity}</div>
                                            <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
                                                <button className='text-3xl ' onClick={() => (setQuantity(quantity + 1))}>+</button>
                                            </div>

                                        </div>



                                    </div>

                                </div>

                                <div className='flex items-center gap-5'>
                                    {/* for button and price */}
                                    <Button onClick={() => addItem(product)} className='rounded-none bg-[#212121] px-5 py-5 text-sm font-bold leading-5 items-center w-fit shadow-lg'>
                                        <IoCartOutline className="mr-3 h-5 w-5" /> Add to Cart
                                    </Button>
                                    <h1 className='text-2xl font-bold text-slate-800'>{product.price}</h1>
                                </div>
                            </div>
                        </div>

                        {/* ====================product detail text=========================== */}

                        <div className='relative mt-16 pt-8  sm:px-16 pb-24 bg-slate-50 shadow-lg flex flex-col justify-center items-center flex-wrap'>
                            <div className='text-6xl absolute border-b-4 top-0 left-0 px-16 flex justify-center pt-8  w-full  z-[1] md:text-9xl text-[#2121218f] font-extrabold border-slate-600   leading-[110px]  opacity-[0.07] '>Overview</div>

                            <div className='pt-12'>
                                <h1 className='font-bold text-xl '> Product Information</h1>
                            </div>
                            <div className='flex mt-16 md:justify-between flex-wrap justify-center '>
                                <h1 className='flex flex-shrink-0 font-bold '>PRODUCT DETAILS</h1>
                                <p className='text-justify w-full px-4 md:w-2/3 leading-8 '>{product.product_detail}</p>
                            </div>

                            <div className='flex mt-4 md:justify-between w-full flex-wrap justify-center '>
                                <h1 className='flex flex-shrink-0 font-bold '>PRODUCT CARE</h1>
                                <div className=' flex flex-col w-full md:w-2/3 px-4'>
                                    {product.product_care.map((item) => (
                                        <li key={item} className=' leading-5 font-bold'>{item}  </li>

                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* =========================use context usage============================== */}


                        {/* <Cart params = {{name:product.name}}/> */}



                    </div>
                )
            ))}








        </div>
    )
}

export default ProductID
