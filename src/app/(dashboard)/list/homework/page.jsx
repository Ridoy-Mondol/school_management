import React from 'react'
import ListHeader from '@/app/components/ListHeader'
import homeworkIcon from '@/app/assets/Homework.svg'
import plusIcon from '@/app/assets/plusIcon.svg'
import kidsImg from '@/app/assets/kidsImg.svg'
import Image from 'next/image'
import Link from 'next/link'

const Homework = () => {
  return (
    <div className='h-[100vh] w-[100%] pr-[20px]'>
      <ListHeader image={homeworkIcon} title="HOME WORK" />

      <div className='flex flex-col items-center'>
        <Link href = '/list/homework/create' className='w-[173px] h-[72px] bg-[#1A1F42] rounded-[26px] flex items-center justify-between px-[30px] mt-[110px]'>
            <Image src={plusIcon} alt='plusIcon' className='w-[20px] h-[20px] cursor-pointer' />
            <p  className='text-white text-[20px] font-[800] font-montserrat leading-[24.38px]'>Create</p>
        </Link>

        <Image src={kidsImg} alt='kidsImg' className='w-[217px] h-[153px] mt-[110px]' />
        <p className='w-[312px] text-[10px] font-[400] font-openSans leading-[24.38px] text-dark mt-[27px]'>
        The standard Lorem Ipsum passage
        </p>
        <p className='w-[312px] text-[10px] font-[300] font-openSans leading-[24.38px] text-dark'>
        &quot;Lorem ipsum dolor sit amet, consectetur   adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

      </div>
    </div>
  )
}

export default Homework
