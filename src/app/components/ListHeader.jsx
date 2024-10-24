import React from 'react'
import Image from 'next/image'
const ListHeader = (props) => {
  return (
    <div className='bg-[#0C46C4] w-[100%] h-[70px] flex items-center mt-[100px]'>
          <Image src={props.image} alt='attendanceIcon' className='w-[79.04px] h-[38px] cursor-pointer ml-[3rem]' />
          <h1 className='text-white text-[24px] font-[700] font-openSans leading-[32.68px] ml-[3rem]'>{props.title}</h1>
       </div>
  )
}

export default ListHeader
