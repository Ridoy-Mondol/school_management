"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import img from '@/app/assets/Rectangle.png'
import crossIcon from '@/app/assets/cross.png'
// import { CheckIcon } from '@heroicons/react/24/solid';

const Login = () => {
  // const [isChecked, setIsChecked] = useState(false)
  // const toggleCheckbox = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div className='flex justify-between h-[100vh] bg-softRed'>
       <div className='w-[50%] flex justify-center items-center'>
         <div className='w-[12.7rem] h-[12.7rem] transform translate-y-[-40%] bg-white rounded-[50%] border-[5px] border-green flex justify-center items-center'>
          <Image src={img} alt='img' />
          </div>
       </div>
       <div className='bg-blue w-[70%] h-[100%] flex justify-center items-center clip-blue'>
          <div className='w-[27.25rem] h-[36.3125rem] ml-[15%] bg-white rounded-[12px] pt-[64px] pb-[105px] px-[46px] flex flex-col justify-between'>
            <div>
             <Image src={crossIcon} alt='crossIcon' className='w-[14.24px] h-[14.24px] cursor-pointer ml-auto ' />
             <h1 className='text-dark text-[3rem] font-[600] font-montagu leading-[61.54px]'>Login</h1>
             <p className='text-black text-[1rem] font-[400] font-montserrat opacity-[0.75] leading-[19.5px]    mt-[0.5rem]'>Login to access your  account</p>
             </div>
             <form className='relative'>
             <div className="relative mt-[1.5rem]">
                <input type="email" className='w-[100%] h-[3rem] border border-solid border-[1px] border-[#79747E] rounded-[4px] px-[16px] outline-none font-montserrat'/>
                <label
                 htmlFor="email"
                 className="absolute bg-white text-[#1C1B1F] top-0 left-[16px] transform -translate-y-1/2 text-[14px] font-[400] leading-[17.07px] font-montserrat"
                 >Email
                </label>
              </div>
              <div className="relative mt-[1.5rem]">
                <input type="password" className='w-[100%] h-[3rem] border border-solid border-[1px] border-[#79747E] rounded-[4px] px-[16px] outline-none font-montserrat'/>
                <label
                 htmlFor="password"
                 className="absolute bg-white text-[#1C1B1F] top-0 left-[16px] transform -translate-y-1/2 text-[14px] font-[400] leading-[17.07px] font-montserrat"
                 >Password
                </label>
              </div>
                <div className='flex justify-between mt-[1.5rem]'>
                    <div className='flex items-center gap-2'>
                        {/* <div className='w-[18px] h-[18px] border-black border-[2px] rounded-[3px] cursor-pointer flex justify-center items-center' onClick={toggleCheckbox}>
                        {isChecked && (
                         <CheckIcon className="w-4 h-4 text-black" />
                        )}
                        </div> */}

                        <input
                        type="checkbox"
                        // checked={isChecked}
                        // onChange={toggleCheckbox}
                        className='w-[18px] h-[18px] border-black border-[2px] rounded-[3px] cursor-pointer'
                        />

                        <p className='text-[14px] text-black font-[500] font-montserrat leading-[17.07px]'>Remember me</p>
                    </div>
                    <p className='text-[14px] text-[#FF8682] font-[500] font-montserrat leading-[17.07px]'>Forgot Password</p>
                </div>


                {/* <label className="reg-checkbox">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  className='w-[18px] h-[18px] border-black border-[2px] rounded-[3px] cursor-pointer'
                />
                <span className='ms-2'>
                  I accept all terms & conditions
                </span>
                <span className="checkmark"></span>
              </label> */}


                <button className='w-[100%] h-[3rem] bg-darkRed text-white font-[600] font-montserrat text-[14px] leading-[17.07px] rounded-[4px] mt-[1.5rem] outline-none'>
                   Login
                </button>
             </form>
          </div>
       </div>
    </div>
  )
}

export default Login
