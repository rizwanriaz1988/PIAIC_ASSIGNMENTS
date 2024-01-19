import React from 'react'
import products_db from '@/app/productsDB.json'
import Link from 'next/link'


function Male() {
    return (
        <div className='flex-1 mx-12 sm:mx-32 my-16 flex flex-wrap gap-5 sm:justify-start justify-center'>
            {products_db.map((product) => (product.family === "Male" &&
                <Link href={`/${product.id}`} key={product.id}>
                <div className='hover:scale-105 transition duration-300' key={product.id} >
                    <div>
                        <img src={product.image} width={250} height={266} alt="" />
                    </div>

                    <div className='flex flex-col gap-2 my-2'>
                    <div className='font-bold'>{product.name}</div>
                    <div className='text-slate-400 font-bold'>{product.category}</div>
                    <div className='font-bold text-lg'>{product.price}</div>
                    </div>  

                </div>
                </Link>
            ))}
        </div>
    )
}

export default Male