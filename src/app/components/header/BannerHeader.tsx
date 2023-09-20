
import React from 'react'

interface BannerHeaderProps {
    icon: React.ReactNode
    text: string
}

const BannerHeader:React.FC<BannerHeaderProps> = ({icon, text}) => {
  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      <div>
        {icon}
        </div>
    <p className='text-white text-xs font-medium font-[Manrope] uppercase leading-3'>{text}</p>
    </div>
  )
}

export default BannerHeader