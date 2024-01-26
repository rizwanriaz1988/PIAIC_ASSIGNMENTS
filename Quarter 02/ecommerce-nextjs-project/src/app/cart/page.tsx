"use client"
import React, { useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RiDeleteBinLine } from "react-icons/ri";
import Counter from '@/components/section/Counter'
import { decrement1, increment1, removeItem } from '@/store/slice'

function Cart() {
  const [basket, setBasket] = useState<any>(useSelector((state: any) => state.cart.basket))
  const dispatch = useDispatch()
  const newBasket = useSelector((state: any) => state.cart.basket);

  const totalSum = newBasket.reduce((sum: any, item: { price?: any,counterValue?: any }) => {
    // Check if item.price is defined and not null
    if (item.price !== undefined && item.price !== null) {
      // Extract the numerical value from the string and add to the sum
      return sum + parseFloat(item.price.replace('$', ''))*item.counterValue;
    } else {
      // Handle the case where item.price is undefined or null
      return sum;
    }
  }, 0);

  const totalOrderCount = newBasket.reduce((sum: any, item: { counterValue?: any }) => {
    // Check if item.price is defined and not null
    if (item.counterValue !== undefined && item.counterValue !== null) {
      // Extract the numerical value from the string and add to the sum
      return sum + item.counterValue;
    } else {
      // Handle the case where item.price is undefined or null
      return sum;
    }
  }, 0);

  const removeItemhandler = (id: any) => {
    const newBasket = basket.filter((item: any) => item.id !== id);
    setBasket(newBasket);
    dispatch(removeItem({id: id}))
  }

  const handleDecrement = (itemId: any) => {
    setBasket((prevItems:any) =>
    prevItems.map((item: any) =>
      item.id === itemId && item.counterValue > 1 ? { ...item, counterValue: item.counterValue - 1 } : item
    )
  )
    dispatch(decrement1({id: itemId, counterValue: 1}))
    
  }

  const handleIncrement = (itemId: any) => {
    setBasket((prevItems:any) =>
    prevItems.map((item: any) =>
      item.id === itemId ? { ...item, counterValue: item.counterValue + 1 } : item
    )
  )
    dispatch(increment1({id: itemId, counterValue: 1}))
  }
  return (
    <div className='md:mx-40 mx-12 '>
      <h1 className='font-bold  text-xl my-5'>Shopping Cart</h1>


      <div className='flex justify-between gap-10 flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col gap-5  lg:basis-2/3 basis-full'>
          {/* <h1 className='font-bold text-center'>quantity: {count}</h1> */}
          
          {basket.length > 0 &&
            basket.map((item: any) => (item.image &&
              <div className=' flex p-2 justify-between bg-slate-100 shadow rounded-md flex-wrap md:flex-nowrap' key={item.id}>

                <div className='flex gap-5 flex-wrap sm:flex-nowrap'>
                  <Image src={item.image} alt={item.name} width={150} height={10} className='rounded-md w-full'></Image>

                  <div className='flex flex-col justify-between  flex-shrink-0'>
                    <h1 className='font-bold text-xl'>{item.name}</h1>
                    <h1>{item.category}</h1>
                    <h1>Deliver Time: &nbsp;{item.id}&nbsp;Days</h1>

                    <h1 className='font-bold'>${parseFloat(item.price.replace('$', ''))*item.counterValue}</h1>
                  </div>
                </div>

                <div className='  flex flex-row-reverse  basis-full items-center justify-between md:flex-col md:justify-between md:items-end '>
                  <button title="Remove" onClick={() => removeItemhandler(item.id )}>
                    <RiDeleteBinLine className="h-5 w-5  text-red-500 hover:text-red-600" size={20} />
                  </button>
                  {/* ==================counter=============== */}
                  <div className='flex items-center gap-5'>
                    {/* <h1 className='text-lg font-bold'></h1> */}

                    <div className='flex items-center justify-center gap-4 '>

                      <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
                        {/* <button className=' text-3xl' onClick={() => (dispatch(decrement1(item)))} */}
                        <button className=' text-3xl' onClick={()=>handleDecrement(item.id)}>-</button>
                      </div>

                      <div className='text-xl'>{item.counterValue}</div>
                      <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
                        <button className='text-3xl ' onClick={() => handleIncrement(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>



        <div className='bg-slate-100 shadow rounded-md p-5 gap-5 flex flex-col max-h-52 basis-full lg:basis-1/3'>
          <h1 className='font-bold  text-xl '>Cart Summary</h1>
          <div className='flex justify-between'>
            <h1 className=''>Total Items:</h1>
            <h1 className=''>{totalOrderCount}</h1>
          </div>
          <div className='flex justify-between'>
            <h1 className=''>Sub Total:</h1>
            <h1 className=''>${totalSum}</h1>
          </div>
          <button className='bg-[#373737] text-white rounded py-2 w-full'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart