"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img from '@/app/assets/Rectangle.png'
import studentIcon from '@/app/assets/student.svg'
import menuBar from '@/app/assets/menu-bar.svg'
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web';
import chevron from '@/app/assets/chevron.svg'
import { useRouter } from 'next/navigation'


const teacherDropdown = [
  {
    id: 1,
    name: 'All Teachers',
    link: '/teacher/allteacher',
  },
  {
    id: 2,
    name: 'Add Teachers',
    link: '/teacher/addteacher',
  },
]

const studentDropdown = [
  {
    id: 1,
    name: 'All Students',
    link: '/teacher/allstudent',
  },
  {
    id: 2,
    name: 'Add Students',
    link: '/teacher/addstudent',
  },
  {
    id: 3,
    name: 'Students Promotion',
    link: '/teacher/studentpromotion',
  }
]

const accountDropdown = [
  {
    id: 1,
    name: 'Fees Group',
    link: '#',
  },
  {
    id: 2,
    name: 'Student Fees',
    link: '#',
  },
  {
    id: 3,
    name: 'Expenses',
    link: '#',
  },
  {
    id: 4,
    name: 'Add Expenses',
    link: '#',
  }
]


const Menu = ({ MenuList }) => {
  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [isTeacherOpen, setIsTeacherOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const router = useRouter()

  const studentAnimation = useSpring({
    height: isStudentOpen ? '12.25rem' : '0rem',
    opacity: isStudentOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 150 },
  });

  const teacherAnimation = useSpring({
    height: isTeacherOpen ? '8.375rem' : '0rem',
    opacity: isTeacherOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 150 },
  });

  const accountAnimation = useSpring({
    height: isAccountOpen ? '16.125rem' : '0rem',
    opacity: isAccountOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 150 },
  });

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    router.push(item.link);
  }

  const handleDropdown = (itemName) => {
     if (itemName === 'Student') {
      setIsStudentOpen(!isStudentOpen);
     }
     if (itemName === 'Teachers') {
      setIsTeacherOpen(!isTeacherOpen);
     }
     if (itemName === 'Account') {
      setIsAccountOpen(!isAccountOpen);
     }
  }

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
        <div className='h-auto'>
        <div className='shadow-custom-bottom h-[77px]' key={item.id} onClick={() => handleDropdown(item.name)}>
         <Link href={item.link} onClick={(e) => (item.name === 'Account' || item.name === 'Students' || item.name === 'Teachers') && e.preventDefault()}>
         <div className='flex items-center h-[100%]
         px-[21px]'>
          <div className='flex items-center'>
           <div className='w-[26px] h-[26px] flex'>
          <Image src={item.image} alt='user' className={`w-[100%] h-auto cursor-pointer ${item.name === 'Student' && 'w-[50%]'}`} />
          {item.name === 'Student' && <Image src = {studentIcon} alt='student' className='w-[50%] cursor-pointer mb-[11%]' />}
          </div>
          <p className='text-white text-[1.125rem] font-[600] leading-[27px] font-poppins ml-[0.85rem]'>{item.name}</p>
          </div>
          {
          item.icon && <Image src={item.icon} alt='chevron' className='w-[17.41px] h-[12px] cursor-pointer ml-auto' />
          }            
          </div>
          </Link>         
        </div>

        {/* Teacher dropdown menu */}
        <div>
             {item.name === 'Teachers' && (
               <animated.div style={teacherAnimation} className="w-[100%]h-auto">
               <ul className='h-auto w-[100%] bg-[#263AC3] flex flex-col justify-between gap-[10px] py-[10px]'>
                 {
                 teacherDropdown.map((item) => (
                   <li
                     key={item.id}
                     className={`h-[52px] text-[18px] font-poppins leading-[27px] cursor-pointer flex items-center pl-[30px] ${selectedItem === item ? 'bg-blue text-white font-[600]' : 'bg-[#263AC3] text-white/80 font-[400]'}`}
                     onClick={() => handleItemSelect(item)}
                   >
                    <Image src={chevron} alt='chevron' className='w-[12px] h-[12px] cursor-pointer -rotate-90' />
                    <p className='ml-[9px]'> {item.name}</p>
                   </li>
                 ))}
             </ul>
            </animated.div>
             )}
          </div>

        {/* student dropdown menu */}
        <div>
             {item.name === 'Student' && (
               <animated.div style={studentAnimation} className="w-[100%]h-auto">
               <ul className='h-auto w-[100%] bg-[#263AC3] flex flex-col justify-between gap-[10px] py-[10px]'>
                 {
                 studentDropdown.map((item) => (
                   <li
                     key={item.id}
                     className={`h-[52px] text-[18px] font-poppins leading-[27px] cursor-pointer flex items-center pl-[30px] ${selectedItem === item ? 'bg-blue text-white font-[600]' : 'bg-[#263AC3] text-white/80 font-[400]'}`}
                     onClick={() => handleItemSelect(item)}
                   >
                    <Image src={chevron} alt='chevron' className='w-[12px] h-[12px] cursor-pointer -rotate-90' />
                    <p className='ml-[9px]'> {item.name}</p>
                   </li>
                 ))}
             </ul>
            </animated.div>
             )}
          </div>

          {/* account dropdown menu */}
        <div>
             {item.name === 'Account' && (
               <animated.div style={accountAnimation} className="w-[100%]h-auto">
               <ul className='h-auto w-[100%] bg-[#263AC3] flex flex-col justify-between gap-[10px] py-[10px]'>
                 {
                 accountDropdown.map((item) => (
                   <li
                     key={item.id}
                     className={`h-[52px] text-[18px] font-poppins leading-[27px] cursor-pointer flex items-center pl-[30px] ${selectedItem === item ? 'bg-blue text-white font-[600]' : 'bg-[#263AC3] text-white/80 font-[400]'}`}
                     onClick={() => handleItemSelect(item)}
                   >
                    <Image src={chevron} alt='chevron' className='w-[12px] h-[12px] cursor-pointer -rotate-90' />
                    <p className='ml-[9px]'> {item.name}</p>
                   </li>
                 ))}
             </ul>
            </animated.div>
             )}
          </div>

        </div>
       ))}

       </div>
    </div>
  )
}

export default Menu
