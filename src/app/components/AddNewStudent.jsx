"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import polygonBlack from '@/app/assets/polygon-black.svg'
import calenderImg from '@/app/assets/calendar.svg'

const AddNewStudent = (props) => {
 const [uploadedImg, setUploadedImg] = useState(null)

 const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadedImg(URL.createObjectURL(file))
    }
  }
  return (
    <div className='bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] w-[100%] p-[20px] mt-[40px] rounded-[10px]'>

      <h1 className='text-dark font-[500] font-poppins text-[26px] leading-[39px]'>{props.title}</h1>

      <div className='flex flex-wrap mt-[20px] justify-start gap-[4%] gap-y-[20px]'>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Name *</label>
        <input 
          type='text'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Gender *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>Please Select Gender</span>
            <Image src ={polygonBlack} alt='img' />
         </div>
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Class *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>Please Select Class</span>
            <Image src ={polygonBlack} alt='img' />
         </div>
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Date Of Birth *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>dd/mm/yy</span>
            <Image src ={calenderImg} alt='Calender' />
         </div>
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Blood group *</label>
        <input 
          type='text'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Religion *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>Please Select Religion</span>
            <Image src ={polygonBlack} alt='img' />
         </div>
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Admission Date *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>dd/mm/yy</span>
            <Image src ={calenderImg} alt='Calender' />
         </div>
        </div>

      </div>
      
      <div className='mt-[40px]'>
      <h1 className='text-dark font-[500] font-poppins text-[26px] leading-[39px]'>Add New Parent</h1>

      <div className='flex flex-wrap mt-[20px] justify-start gap-[4%] gap-y-[20px]'>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Father’s Name</label>
        <input 
          type='text'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Mother’s Name</label>
        <input 
          type='text'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Email</label>
        <input 
          type='email'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Phone</label>
        <input 
          type='number'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Father’s Occupation</label>
        <input 
          type='text'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Address *</label>
        <input 
          type='text'
          className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576]'
        />
        </div>

        <div className='flex flex-col gap-[10px] w-[22%]'>
        <label>Religion *</label>
         <div className='bg-[#DDDEEE80]/50 w-[100%] h-[3rem] rounded-[5px] px-[16px] outline-none font-poppins font-[400] leading-[19.5px] text-[13px] text-[#757576] flex justify-between items-center'>
            <span>Please Select Religion</span>
            <Image src ={polygonBlack} alt='img' />
         </div>
        </div>
        </div>

        <div className='flex items-center gap-[42px] mt-[30px]'>
            {
            !uploadedImg &&
            <div className='w-[280px] h-[280px] bg-[#DDDEEE] rounded-[50%]'></div>
            }

            {
            uploadedImg &&
            <Image src={uploadedImg} alt='uploadedImg' className='w-[280px] h-[280px] bg-[#DDDEEE] rounded-[50%]' width={280} height={280} />
            }
            <div>
                <p className='font-[400] font-poppins text-[18px] leading-[27px] text-dark'>Upload Student Photo (150px X 150px)</p>
                <input type='file' accept='image/*' onChange={handleImageUpload} className='text-dark font-[400] font-poppins text-[15px] leading-[22.5px]' />
            </div>
        </div>

        <div className='mt-[40px]'>
            <button className='bg-darkRed w-[162px] h-[54px] text-white font-[600] font-poppins text-[20px] leading-[30px] rounded-[5px]'>Save</button>
            <button className='bg-blue w-[162px] h-[54px] text-white font-[600] font-poppins text-[20px] leading-[30px] rounded-[5px] ml-[14px]'>Reset</button>
        </div>

      </div>

    </div>
  )
}

export default AddNewStudent
