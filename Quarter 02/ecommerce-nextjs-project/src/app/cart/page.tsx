"use client"
import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
function Cart() {
  return (
    <div className='mx-32 flex-col items-center flex my-32'>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#373737"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <div className='my-12'>
        <h1 className='font-bold'>Soon will be available</h1>
      </div>

    </div>
  )
}

export default Cart