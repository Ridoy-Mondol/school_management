import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import solutionIcon from '@/app/assets/solution.svg' 
import polygonWhite from '@/app/assets/polygon-white.svg'
import plusIcon from '@/app/assets/plusIcon.svg'
import Image from 'next/image'
import Notice from '@/app/components/Notice'

const Solution = () => {
  return (
    <div className='w-[100%]'>
      <div className='w-[100%] pr-[60px]'>
      <ListHeader image={solutionIcon} title="SOLUTION" />

      {/* middle part */}
       <div className='p-[20px]'>
          <div className='p-[15px]'>
          <h1 className='font-roboto text-[20px] font-[800] text-dark leading-[23.44px]'>Question #1</h1>
          <p className='font-roboto text-[18px] font-[400] text-dark leading-[21.09px] mt-[10px]'>Lorem ipsum dolor sit amet consectetur. Pulvinar auctor lacus elit diam nunc sed. Sagittis ultrices pellentesque feugiat netus volutpat turpis.</p>
          </div>

          <div className='mt-[40px] pb-[40px] mb-[60px]'>
          <p className='font-openSans text-[15px] font-[400] text-dark leading-[20.43px] mb-[5px]'>Enter Details</p>
          <textarea className='w-[100%] h-[293px] border-[1px] border-[#0C46C4] rounded-[3px] p-[10px] text-dark font-openSans text-[15px] font-[400] leading-[20.43px] outline-[#0C46C4]'></textarea>

          <div className="relative w-[303px] h-[49px] mt-[5px]">
            <input type="file" id="fileInput" className="hidden" />
            <label for="fileInput" className="flex items-center justify-center w-full h-[100%] rounded-[15px] bg-darkRed/80 text-white font-openSans text-[20px] font-[400] leading-[27.24px] cursor-pointer">
            Attached
            </label>
           </div>

          <button className={`w-[100%] h-[49px] bg-blue rounded-[15px] mt-[10px] text-white font-openSans text-[20px] font-[400] leading-[27.24px] flex items-center justify-center`}>
          Send
          </button>
          </div>
       </div>
      </div>

      <div className='ml-[20px] mb-[1px] mr-[1px]'>
      <Notice />
      </div>

    </div>
  )
}

export default Solution
