import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import solutionIcon from '@/app/assets/solution.svg'
import polygonIcon from '@/app/assets/polygon-white.svg'
import plusIcon from '@/app/assets/plusIcon.svg'
import Image from 'next/image'
import Notice from '@/app/components/Notice'

const Solution = () => {
  return (
    <div>
    <div className='w-[100%] pr-[60px]'>
      <ListHeader image={solutionIcon} title="SOLUTION" />

      <div className='p-[15px] mt-[15px]'>
         <p className='pl-[33px] pb-[80px] p-[29px] font-poppins text-[26px] font-[600] text-blue leading-[29px]'>Lorem ipsum dolor sit amet consectetur. Fringilla rhoncus ac sed fermentum pellentesque lacus. Felis mauris at facilisi velit.</p>
      </div>

      <div className='bg-[#CCCCCC] pt-[35px] px-[40px] pb-[250px] ml-[15px]'>
        <h1 className='font-montagu text-[24px] font-[400] text-dark leading-[30.77px]'>Solution</h1>
        <p className='font-montagu text-[24px] font-[400] text-dark leading-[30.77px] mt-[20px]'>Lorem ipsum dolor sit amet consectetur. Quis quis velit rhoncus risus sem turpis. Massa id nullam eget id id nunc. Sit enim duis nunc libero pulvinar congue.</p>
      </div>

      {/* <div className='p-[10px] mx-[15px] mt-[18px] mb-[30px] shadow-[0px_4px_20px_5px_#00000040]'>
         <div className='w-[100%] h-[90px] flex justify-between border-[0.5px] border-[#00000040] flex items-center pl-[15px] pr-[30px]'>
            <p className='font-poppins text-[20px] font-[600] text-dark leading-[30px]'>Your work</p>
            <button className='w-[146px] h-[51px] bg-[#716D6D] rounded-[16px] flex items-center justify-center gap-[4px]'>
                <span className='text-white text-[1rem] font-[500] font-montserrat leading-[19.5px]'>Assign</span>
                <Image src={polygonIcon} alt='polygon' className='w-[12px] h-[12px] cursor-pointer' />
            </button>
         </div>

         <div className="bg-[#D91E1F] h-[80px] flex justify-center items-center gap-[10px] relative cursor-pointer">
         <Image src={plusIcon} alt="polygon" className="w-[16px] h-[16px]" />
         <span className="text-white text-[1.5rem] font-[600] font-poppins leading-[36px]">Add to file</span>
         <input
         type="file"
         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
         />
         </div>

         <div className='bg-blue h-[55px] flex justify-center items-center'>
            <p className='text-white text-[1.5rem] font-[600] font-poppins leading-[36px]'>Submit</p>
         </div>
      </div> */}
    </div>
    <div className='mx-[15px] mt-[15px] mb-[30px]'>
    <Notice />
    </div>
    </div>
  )
}

export default Solution
