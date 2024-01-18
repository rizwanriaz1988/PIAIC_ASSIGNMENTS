import EventSec from '@/components/section/EventSec'
import HeroSec from '@/components/section/HeroSec'
import NewsSec from '@/components/section/NewsSec'
import ProductSec from '@/components/section/ProductSec'
import Image from 'next/image'
import { useState } from 'react'





export default function Home() {
  return (
    <div className='mx-12 lg:mx-32'>
      
      <HeroSec />
      <EventSec />
      <ProductSec />
      <NewsSec />
    </div>
  )
}
