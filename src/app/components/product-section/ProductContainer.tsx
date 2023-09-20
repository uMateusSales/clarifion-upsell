import React from 'react'
import PromoCard from './PromoCard'
import Image from 'next/image'

interface ProductContainerPros {
    children: React.ReactNode
}


const ProductContainer:React.FC<ProductContainerPros> = ({children}) => {
  return (
    <section className='flex h-[1062px] flex-col justify-start items-start gap-6'><PromoCard /><Image className='rounded-[10px] self-center' width={320} height={328} alt='product banner' src='/product-banner.png'  /> {children}</section>
  )
}

export default ProductContainer