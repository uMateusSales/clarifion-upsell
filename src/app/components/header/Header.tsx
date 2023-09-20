'use client'
import React from 'react'
import BannerHeader from './BannerHeader'
import IconCheck from './IconCheck'
import IconCheckCircle from './IconCheckCircle'
import IconHeart from './IconHeart'
import IconTruck from './IconTruck'


const Header = () => {
  return (
    <header className='flex flex-row max-h-[10] justify-between md:justify-around py-2.5 bg-slate-800 '>

<BannerHeader icon={<IconCheck />} text='30-DAY SATISFACTION GUARANTEE' />
<BannerHeader icon={<IconTruck />} text='FREE DELIVERY ON ODERS OVER $40.000' />
<BannerHeader icon={<IconHeart />} text='50.000 + HAPPY CUSTOMERS' />
<BannerHeader icon={<IconCheckCircle />} text='100% Money Back Guarantee' />
</header>
  )
}




export default Header