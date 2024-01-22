"use client"
import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RiDeleteBinLine } from "react-icons/ri";
function Cart() {
  const count = useSelector((state: any) => state.cart.value)
  // const title = useSelector((state: any) => state.cart.title)

  const basket = useSelector((state: any) => state.cart.basket)
  const totalSum = basket.reduce((sum: any, item: { price?: any }) => {
    // Check if item.price is defined and not null
    if (item.price !== undefined && item.price !== null) {
      // Extract the numerical value from the string and add to the sum
      return sum + parseFloat(item.price.replace('$', ''));
    } else {
      // Handle the case where item.price is undefined or null
      return sum;
    }
  }, 0);

  return (
    <div className='mx-40 flex justify-between'>

      <div className='flex flex-col items-start gap-5'>
        <h1 className='font-bold  text-xl'>Shopping Cart</h1>
        <div className=''>
          {/* <h1 className='font-bold text-center'>quantity: {count}</h1> */}
          {basket.length > 0 &&
            basket.map((item: any) => (item.image &&
              <div className=' flex gap-5 mb-5 p-2 bg-slate-100 shadow-md rounded-md' key={item.id}>
                <Image src={item.image} alt={item.name} width={110} height={110} className='rounded-md '></Image>

                <div className='flex flex-col justify-between'>
                  <h1>{item.name}</h1>
                  <h1>{item.category}</h1>

                  <h1>{item.price}</h1>
                </div>

                <button title="Remove" className='flex justify-end'>
                  <RiDeleteBinLine className="h-5 w-5  text-red-500 hover:text-red-600" />
                </button>
              </div>
            ))
          }
        </div>
      </div>

      <div className='bg-slate-100 shadow rounded-md p-5 gap-5 flex flex-col max-h-52'>
        <h1 className='font-bold  text-xl '>Cart Summary</h1>

        <div className='flex justify-between'>
          <h1 className=''>Total Items:</h1>
          <h1 className=''>{count}</h1>
        </div>
        <div className='flex justify-between'>
          <h1 className=''>Sub Total:</h1>
          <h1 className=''>${totalSum}</h1>
        </div>
        <button className='bg-[#373737] text-white rounded  w-full'>Checkout</button>


      </div>



    </div>
  )
}

export default Cart