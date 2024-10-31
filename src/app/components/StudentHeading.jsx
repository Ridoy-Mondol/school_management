import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import chevron from '@/app/assets/chevron-red.svg' 

const StudentHeading = (props) => {
  return (
    <div className='pl-[28px] mt-[52px]'>
       <h3 className='text-dark font-[600] font-poppins text-[22px] leading-[33px]'>{props.title}</h3>
       <div className='border-b-[4px] border-b-[#FB2F30] w-[45px]'></div>
       <div className='flex items-center gap-[10px] mt-[10px]'>
          <Link href='#' className='text-[#494949] font-[400] font-poppins text-[18px] leading-[27px] cursor-pointer'>
             {props.home}
          </Link>
          <p className='text-[#D60A0B] font-[500] font-poppins text-[18px] leading-[27px] cursor-pointer'>
              <Image src ={chevron} alt='chevron' className='w-[12px] h-[12px] inline-block' />
              <span>{props.currentRoute}</span>
          </p>
       </div>
    </div>
  )
}

export default StudentHeading
