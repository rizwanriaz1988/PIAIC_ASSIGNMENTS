"use client"
import React from 'react'
import { useState } from 'react'

function Counter() {
    const [quantity, setQuantity] = useState(1)
  return (
    <div className='flex items-center gap-5'>
        <h1 className='text-lg font-bold'>Quantity:</h1>

        <div className='flex items-center justify-center gap-4 '>

            <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
            <button className=' text-3xl' onClick={() =>  quantity>0 ? setQuantity(quantity - 1) : setQuantity(0)}>-</button>
            </div>
            <div className='text-xl'>{quantity}</div>
            <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
            <button className='text-3xl ' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

        </div>
    </div>
  )
}

export default Counter