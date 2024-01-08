"use client"
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../layout'

function Cart(params:any) {
    const value = useContext(UserContext)
  return (
    <div>
        {/* Cart: {value.map((item: { name: any }) => item.name)} */}
        Cart: {params.name}
        {/* cart */}
        
        </div>
  )
}

export default Cart