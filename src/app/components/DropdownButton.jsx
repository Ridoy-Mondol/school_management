import React from 'react'
import polygonblack from '@/app/assets/polygon-black.svg'
import Image from 'next/image'

const DropdownButton = (props) => {
  return (
    <div>
      <button className='w-[392px] h-[70px] bg-[#C4C4C4] rounded-[15px] flex items-center justify-center gap-[4px]'>
             <span className='text-dark text-[1rem] font-[500] font-montserrat leading-[19.5px]'>
              {props.text}
              </span>
              <Image src={polygonblack} alt='polygon' className='w-[12px] h-[12px] cursor-pointer'/>
        </button>
    </div>
  )
}

export default DropdownButton
