import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import attendanceIcon from '@/app/assets/attendance.svg'
import studentImg from '@/app/assets/sultana.png'
import Image from 'next/image'

const subjectList = [
    {
        id: 1,
        name: 'Bangla',
        totalClass: 20,
        present: 15,
        absent: 5
    },
    {
        id: 2,
        name: 'English',
        totalClass: 20,
        present: 18,
        absent: 2
    },
    {
        id: 3,
        name: 'Math',
        totalClass: 20,
        present: 20,
        absent: 0
    },
];

const Attendance = () => {
  return (
    <div className='w-[100%]'>
       <div className='pr-[30px] ml-[2px]'>
          <ListHeader title="Attendance" image={attendanceIcon} />
       </div>

       <div className='flex flex-col items-center justify-center mt-[6px]'>
         <Image src={studentImg} alt='student' className='w-[100px] h-[100px] rounded-[50%]' />
         <p className='font-[400] font-poppins text-[24px] leading-[36px] text-dark mt-[2px]'>Sultana</p>
       </div>

       <div className='bg-[#14238A]/80 w-[100%] h-[67px] px-[20px] border-[1px] border-dark flex items-center justify-between mt-[2px]'>
          <p className='text-white text-[20px] font-[600] font-openSans leading-[27.24px]'>Class:4</p>
          <p className='text-white text-[20px] font-[600] font-openSans leading-[27.24px]'>Section: B</p>
          <p className='text-white text-[20px] font-[600] font-openSans leading-[27.24px]'>Subject: Bangla</p>
       </div>

       <div className='w-[100%] h-[328px] bg-[#DDDEEE] p-[20px] mt-[7.5px] flex flex-col justify-between mb-[300px]'>

        <div className='h-[57px] pl-[15px] pr-[6rem] border-[1px] border-dark flex items-center justify-between'>
            <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%]'>Subject Name</p>
            <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%] text-center'>Day</p>
            <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%] text-center'>Present</p>
            <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%] text-center'>Absent</p>
        </div>

        <div>
            {
                subjectList.map((item) => (
                    <div className='bg-[#F1F1F1] h-[57px] mt-[18px] flex items-center justify-between pl-[15px] pr-[6.5rem]' key={item.id}>
                       <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%]'>{item.name}</p>

                        <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%] text-center'>{item.totalClass}</p>

                       <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%] text-center'>{item.present}</p>

                       <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%] text-center'>{item.absent}</p>

                    </div>
                ))
            }
        </div>
       </div>

    </div>
  )
}

export default Attendance
