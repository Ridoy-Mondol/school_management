import React from 'react'
import Image from 'next/image'
import polygonBlack from '@/app/assets/polygon-black.svg'

const Promotion = () => {
  return (
    <div className='bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] w-[100%] p-[20px] mt-[40px] py-[300px]'>
       <h1 className='text-dark font-[500] font-poppins text-[26px] leading-[39px]'>Student Promotion</h1>

       <div className='flex flex-wrap mt-[20px] justify-start gap-[4%] gap-y-[20px]'>
       <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Name</label>
        <input 
          type='text'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Current Class</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>Please Select Class</span>
            <Image src ={polygonBlack} alt='img' />
         </div>
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Promotion From Class *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>Please Select</span>
            <Image src ={polygonBlack} alt='img' />
         </div>
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Promotion To Class *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>Please Select</span>
            <Image src ={polygonBlack} alt='img' />
         </div>
        </div>
      </div>

      <div className='mt-[40px]'>
            <button className='bg-darkRed w-[162px] h-[54px] text-white font-[600] font-poppins text-[20px] leading-[30px] rounded-[5px]'>Save</button>
            <button className='bg-blue w-[162px] h-[54px] text-white font-[600] font-poppins text-[20px] leading-[30px] rounded-[5px] ml-[14px]'>Reset</button>
        </div>

    </div>
  )
}

export default Promotion
