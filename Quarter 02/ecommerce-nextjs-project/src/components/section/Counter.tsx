"use client"
import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '@/app/[id]/page'

function Counter() {
  const [quantity, setQuantity] = useState(1)
  const contextValue = useContext(UserContext);

  if (typeof contextValue !== 'string') {
    const { dataFunction } = contextValue;

    return (
      <div className='flex items-center gap-5'>
        <h1 className='text-lg font-bold'>Quantity:</h1>

        <div className='flex items-center justify-center gap-4 '>

          <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
            <button className=' text-3xl' onClick={() => quantity > 1 ? (setQuantity(quantity - 1), dataFunction(quantity)) : setQuantity(1)}>-</button>
          </div>
          <div className='text-xl'>{quantity}</div>
          <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
            <button className='text-3xl ' onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

        </div>



      </div>
    )
  }
}

export default Counter