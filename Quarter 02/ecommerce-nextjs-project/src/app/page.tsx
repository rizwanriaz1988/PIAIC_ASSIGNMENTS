import EventSec from '@/components/section/EventSec'
import HeroSec from '@/components/section/HeroSec'
import ProductSec from '@/components/section/ProductSec'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      
      <HeroSec />
      <EventSec />
      <ProductSec />
    </div>
  )
}
