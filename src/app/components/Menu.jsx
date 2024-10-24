import React from 'react'
import Image from 'next/image'
import img from '@/app/assets/Rectangle.png'
import menuBar from '@/app/assets/menu-bar.svg'
import TeacherIcon from '@/app/assets/user.svg'
import dashboardIcon from '@/app/assets/dashboard.svg'
import studentIcon from '@/app/assets/student.svg'
import attendanceIcon from '@/app/assets/attendance.svg'
import homeworkIcon from '@/app/assets/Homework.svg'
import solutionIcon from '@/app/assets/solution.svg'
import resultIcon from '@/app/assets/result.svg'
import classScheduleIcon from '@/app/assets/schedule.svg'
import studyMaterialIcon from '@/app/assets/material.svg'
import accountIcon from '@/app/assets/account.svg'
import settingIcon from '@/app/assets/settings.svg'
import chevron from '@/app/assets/chevron.svg'
import Link from 'next/link'

const MenuList = [
    {
        id: 1,
        name: 'Teachers',
        image: TeacherIcon,
        icon: chevron,
        link: '#',
    },
    {
        id: 2,
        name: 'Dashboard',
        image: dashboardIcon,
        link: '#',
    },
    {
        id: 3,
        name: 'Student',
        image: studentIcon,
        icon: chevron,
        link: '#',
    },
    {
        id: 4,
        name: 'Attendance',
        image: attendanceIcon,
        link: '/list/attendance',
    },
    {
        id: 5,
        name: 'Homework',
        image: homeworkIcon,
        link: '/list/homework',
    },
    {
        id: 6,
        name: 'Solution',
        image: solutionIcon,
        link: '#',
    },
    {
        id: 7,
        name: 'Result',
        image: resultIcon,
        link: '#',
    },
    {
        id: 8,
        name: 'Class Schedule',
        image: classScheduleIcon,
        link: '#',
    },
    {
        id: 9,
        name: 'Study Material',
        image: studyMaterialIcon,
        link: '#',
    },
    {
        id: 10,
        name: 'Account',
        image: accountIcon,
        icon: chevron,
        link: '#',
    },
    {
        id: 11,
        name: 'Settings',
        image: settingIcon,
        link: '#',
    },
]

const Menu = () => {
  return (
    <div className='w-[386px] flex flex-col'>
        {/* top red component */}
       <div className='w-[100%] h-[99px] bg-darkRed flex items-center px-[21px]'>
         <div className='w-[51px] h-[53.62px] bg-white rounded-[50%] border-[5px] border-green flex justify-center items-center'>
         <Image src={img} alt='img' className='w-[27.2px]' />
         </div>
         <Image src={menuBar} alt='menuBar' className='w-[28.5px] h-[19px] cursor-pointer ml-auto' />
       </div>

       {/* bottom blue component */}
       <div className='w-[100%] flex-1 bg-blue'>
       { MenuList.map((item) => (
        <div className='shadow-custom-bottom h-[77px]' key={item.id}>
         <Link href={item.link}>
         <div className='flex items-center h-[100%]
         px-[21px]'>
          <div className='flex items-center'>
           <div className='w-[26px] h-[26px] flex'>
          <Image src={item.image} alt='user' className={`w-[100%] h-auto cursor-pointer ${item.name === 'Student' && 'w-[50%]'}`} />
          {item.name === 'Student' && <Image src = {studentIcon} alt='student' className='w-[50%] cursor-pointer mb-[11%]' />}
          </div>
          <p className='text-white text-[1.125rem] font-[600] leading-[27px] font-poppins ml-[0.85rem]'>{item.name}</p>
          </div>

          {item.icon && <Image src={item.icon} alt='chevron' className='w-[17.41px] h-[12px] cursor-pointer ml-auto' />}
          </div>
          </Link>
        </div>
       ))}
       </div>
    </div>
  )
}

export default Menu
