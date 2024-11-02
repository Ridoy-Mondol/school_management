import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import studyMaterialIcon from '@/app/assets/material.svg'
import resultImg from '@/app/assets/result_img.png'
import Image from 'next/image'
import Notice from '@/app/components/Notice'

const data = [
    {
        id: 1,
        img: resultImg,
        title: 'Bangla book.pdf'
    },
    {
        id: 2,
        img: resultImg,
        title: 'English book.pdf'
    },
    {
        id: 3,
        img: resultImg,
        title: 'Math book.pdf'
    },
]
const Material = () => {
  return (
    <div className='w-[100%]'>

      <div className='pl-[2px]'>
      <ListHeader image={studyMaterialIcon} title="STUDY MATERIAL" />
      </div>

      <div className='ml-[26px] mr-[15px] mt-[30px] p-[20px] flex flex-col gap-[20px] bg-white shadow-[0px_4px_20px_0px_#0000004D]'>
        {
            data.map((item) => (
                <div className='flex items-center gap-[20px] py-[20px]' key={item.id}>
                    <div className='w-[221px] h-[154px] border-[1px] border-[#00000073] flex items-center justify-center'>
                    <Image src={item.img} alt='img' className='w-[182px] h-[100%]' />
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <p className='text-[20px] font-[600] font-poppins leading-[30px] text-black'>{item.title}</p>
                        <p className='text-[20px] font-[600] font-poppins leading-[30px] text-[#747474]'>PDF</p>
                    </div>
                </div>
            ))
        }
      </div>

      <div className='ml-[16px] mr-[1px] mt-[150px] mb-[1px]'>
        <Notice />
      </div>

    </div>
  )
}

export default Material
