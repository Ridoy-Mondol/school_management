import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import resultIcon from '@/app/assets/result.svg' 
import polygonWhite from '@/app/assets/polygon-white.svg'
import plusIcon from '@/app/assets/plusIcon.svg'
import Image from 'next/image'
import Notice from '@/app/components/Notice'

const Result = () => {
  return (
    <div className='w-[100%] pr-[60px]'>
      <ListHeader image={resultIcon} title="RESULT" />
      <div className='w-[75%] h-[249px] border-[1px] border-dark p-[20px] shadow-[23px_23px_4px_0px_#00000040] my-[290px] ml-[66px] flex flex-col items-center justify-between'>

      <button className={`w-[100%] h-[65px] bg-[#14238AAD]/60 rounded-[15px] flex items-center justify-center gap-[4px] transition-[border-radius] duration-300`}>
          <span className='text-white text-[1rem] font-[500] font-montserrat leading-[19.5px]'>
          First Terminal
          </span>
          <Image src={polygonWhite} alt='polygon' className='w-[12px] h-[12px] cursor-pointer'/>
       </button>

       <button className='w-[100%] h-[55px] bg-[#D91E1F] flex items-center justify-center'>
         <Image src={plusIcon} alt='plusIcon' className='w-[14px] h-[14px] cursor-pointer'/>
       </button>

       <button className={`w-[100%] h-[47px] bg-[#CCCCCC] flex items-center justify-center`}>
         <span className='text-dark text-[15px] font-[400] font-openSans leading-[20.43px]'>Publish</span>
       </button>                 
      </div>
      
      <div className='ml-[20px] mb-[60px]'>
      <Notice />
      </div>

    </div>
  )
}

export default Result
