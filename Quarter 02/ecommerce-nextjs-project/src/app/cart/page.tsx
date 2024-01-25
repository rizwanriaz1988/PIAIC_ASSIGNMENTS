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
  const count = useSelector((state: any) => state.cart.value)
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()

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

  const totalOrderCount = basket.reduce((sum: any, item: { counterValue?: any }) => {
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
    // // const newQuantityinBasket = {newBasket.counterValue-}
    setBasket(newBasket);
    dispatch(removeItem({id: id}))
  }

  const handleDecrement = (id: any) => {
    const newBasket = basket.map((item: any) => {
      if (item.id === id) {
        return { ...item, counterValue: item.counterValue - 1 };
      }
    })
    // setBasket(newBasket)
    dispatch(decrement1({id: id, counterValue: 1}))
    
  }

  const handleIncrement = (id: any) => {
    const newBasket = basket.map((item: any) => {
      if (item.id === id) {
        return { ...item, counterValue: item.counterValue + 1 };
      }
    })
    // setBasket(newBasket)
    dispatch(increment1({id: id, counterValue: 1}))
  }
  return (
    <div className='mx-40 '>
      <h1 className='font-bold  text-xl my-5'>Shopping Cart</h1>


      <div className='flex justify-between gap-10 '>
        <div className='flex flex-col gap-5  basis-2/3'>
          {/* <h1 className='font-bold text-center'>quantity: {count}</h1> */}
          
          {basket.length > 0 &&
            basket.map((item: any) => (item.image &&
              <div className=' flex p-2 justify-between bg-slate-100 shadow rounded-md ' key={item.id}>

                <div className='flex gap-5'>
                  <Image src={item.image} alt={item.name} width={150} height={10} className='rounded-md '></Image>

                  <div className='flex flex-col justify-between bg-green-300 flex-shrink-0'>
                    <h1 className='font-bold text-xl'>{item.name}</h1>
                    <h1>{item.category}</h1>

                    <h1 className='font-bold'>{item.price}</h1>
                  </div>
                </div>

                <div className=' bg-yellow-200 flex flex-col justify-between items-end'>
                  <button title="Remove" onClick={() => removeItemhandler(item.id )}>
                    <RiDeleteBinLine className="h-5 w-5  text-red-500 hover:text-red-600" size={20} />
                  </button>
                  {/* ==================counter=============== */}
                  <div className='flex items-center gap-5'>
                    {/* <h1 className='text-lg font-bold'></h1> */}

                    <div className='flex items-center justify-center gap-4 '>

                      <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
                        {/* <button className=' text-3xl' onClick={() => (dispatch(decrement1(item)))} */}
                        <button className=' text-3xl' onClick={()=>dispatch(decrement1({id: item.id, counterValue: 1}))}
                        >-</button>
                      </div>

                      <div className='text-xl'>{item.counterValue}</div>

                      <div className='flex justify-center items-center size-8 bg-slate-100 hover:bg-slate-500 shadow-lg rounded-full'>
                        <button className='text-3xl ' onClick={() => dispatch(increment1({id: item.id, counterValue: 1}))}>+</button>
                      </div>

                    </div>



                  </div>
                  {/* <Counter /> */}
                </div>
              </div>
            ))
          }
        </div>



        <div className='bg-slate-100 shadow rounded-md p-5 gap-5 flex flex-col max-h-52 basis-1/3'>
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



    </div>
  )
}

export default Cart