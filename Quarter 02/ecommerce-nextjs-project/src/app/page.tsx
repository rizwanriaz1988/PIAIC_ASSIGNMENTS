import EventSec from '@/components/section/EventSec'
import HeroSec from '@/components/section/HeroSec'
import NewsSec from '@/components/section/NewsSec'
import ProductSec from '@/components/section/ProductSec'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      
      <HeroSec />
      <EventSec />
      <ProductSec />
      <NewsSec />
    </div>
  )
}
