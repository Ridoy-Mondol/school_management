import React from 'react'
import Image from 'next/image'
import crossIcon from '@/app/assets/cross.png'
import polygon from '@/app/assets/polygon.svg'

const Attendance = () => {
  return (
    <div className='flex items-center h-[100vh] w-[100%]'>

       <div className='w-[27.25rem] h-[36.3125rem] ml-[20%] bg-white rounded-[12px] pt-[64px] pb-[105px] px-[46px] flex flex-col'>
            <div>
             <Image src={crossIcon} alt='crossIcon' className='w-[14.24px] h-[14.24px] cursor-pointer ml-auto ' />
             <h1 className='text-dark text-[3rem] font-[600] font-montagu leading-[61.54px]'>Attendence</h1>
             </div>
             
             {/* select class */}
             <div className='h-[451px] flex flex-col justify-center'>
             <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem]'>
             <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Class</p>
             <div className='w-[65%] h-[1rem] bg-[#CCCCCC]'></div>
             <Image src={polygon} alt='poligon' className='w-[14px] h-[14px]' />
             </div>
             
             {/* select section */}
             <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem] my-[1rem]'>
             <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Section</p>
             <div className='w-[65%] h-[1rem] bg-[#CCCCCC]'></div>
             <Image src={polygon} alt='poligon' className='w-[14px] h-[14px]' />
             </div>
             
             {/* select subject */}
             <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem]'>
             <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Subject</p>
             <div className='w-[65%] h-[1rem] bg-[#CCCCCC]'></div>
             <Image src={polygon} alt='poligon' className='w-[14px] h-[14px]' />
             </div>

             </div>
          </div>

    </div>
  )
}

export default Attendance
