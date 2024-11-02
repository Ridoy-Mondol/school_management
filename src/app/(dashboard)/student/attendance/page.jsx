// import React from 'react'
// import Image from 'next/image'
// import crossIcon from '@/app/assets/cross.png'
// import polygon from '@/app/assets/polygon.svg'

// const Attendance = () => {
//   return (
//     <div className='flex items-center h-[100vh] w-[100%]'>

//        <div className='w-[27.25rem] h-[36.3125rem] ml-[20%] bg-white rounded-[12px] pt-[64px] pb-[105px] px-[46px] flex flex-col'>
//             <div>
//              <Image src={crossIcon} alt='crossIcon' className='w-[14.24px] h-[14.24px] cursor-pointer ml-auto ' />
//              <h1 className='text-dark text-[3rem] font-[600] font-montagu leading-[61.54px]'>Attendence</h1>
//              </div>
             
//              {/* select class */}
//              <div className='h-[451px] flex flex-col justify-center'>
//              <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem]'>
//              <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Class</p>
//              <div className='w-[65%] h-[1rem] bg-[#CCCCCC]'></div>
//              <Image src={polygon} alt='poligon' className='w-[14px] h-[14px]' />
//              </div>
             
//              {/* select section */}
//              <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem] my-[1rem]'>
//              <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Section</p>
//              <div className='w-[65%] h-[1rem] bg-[#CCCCCC]'></div>
//              <Image src={polygon} alt='poligon' className='w-[14px] h-[14px]' />
//              </div>
             
//              {/* select subject */}
//              <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem]'>
//              <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Subject</p>
//              <div className='w-[65%] h-[1rem] bg-[#CCCCCC]'></div>
//              <Image src={polygon} alt='poligon' className='w-[14px] h-[14px]' />
//              </div>

//              </div>
//           </div>

//     </div>
//   )
// }

// export default Attendance








"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import crossIcon from '@/app/assets/cross.png'
import polygon from '@/app/assets/polygon.svg'
import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link'

const Attendance = () => {
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [classItem, setClassItem] = useState('');
  const [sectionItem, setSectionItem] = useState('');
  const [subItem, setSubItem] = useState('');

  const animation = useSpring({
    height: isClassOpen ? '32.5rem' : '0rem',
    opacity: isClassOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });

  const sectionAnimation = useSpring({
    height: isSectionOpen ? '14.1rem' : '0rem',
    opacity: isSectionOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });

  const subAnimation = useSpring({
    height: isSubOpen ? '26.3rem' : '0rem',
    opacity: isSubOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });

  const handleClassSelect = (element) => {
    setClassItem(element);
    setIsClassOpen(!isClassOpen);
  }

  const handleSectionSelect = (element) => {
    setSectionItem(element);
    setIsSectionOpen(!isSectionOpen);
  }

  const handleSubSelect = (element) => {
    setSubItem(element);
    setIsSubOpen(!isSubOpen);
  }

  const ClearItem = () => {
    setClassItem('');
    setSectionItem('');
    setSubItem('');
  }

  return (
    <div className='w-[100%] h-[100vh] flex items-center'>
       <div className='w-[27.25rem] h-[18.3125rem] ml-[20%] bg-white rounded-[12px] px-[46px]'>

            <div>
             <Image src={crossIcon} alt='crossIcon' className='w-[14.24px] h-[14.24px] cursor-pointer ml-auto' onClick={ClearItem}/>
             <h1 className='text-dark text-[3rem] font-[600] font-montagu leading-[61.54px]'>Attendence</h1>
             </div>
             
             <div className='h-auto flex flex-col justify-center items-center pt-[1rem]'>
              {/* select class */}
             <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem]'>
             <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Class</p>
             <div className={`w-[65%] h-[1rem] cursor-pointer ${classItem ? 'bg-blue' : 'bg-[#CCCCCC]'}`} onClick={() => setIsClassOpen(!isClassOpen)}></div>
             <Image src={polygon} alt='poligon' className={`w-[14px] h-[14px] ${isClassOpen ? 'rotate-180 transition duration-300' : 'rotate-0 transition duration-300'}`} />
             </div>

            <animated.div style={animation} className="w-[100%] my-[0.5rem]">
            <ul className='h-auto w-[100%] p-[20px] bg-[#C4C4C4] flex flex-col justify-between gap-[10px]'>
            {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].map((item) => (
                <li
                  key={item}
                  className={`h-[39px] text-[24px] font-[500] font-montserrat leading-[39.01px] cursor-pointer text-center ${item === classItem ? 'bg-blue text-white' : 'bg-white text-dark'}`}
                  onClick={() => handleClassSelect(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
         </animated.div>
             
             {/* select section */}
             <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem]'>
             <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Section</p>
             <div className={`w-[65%] h-[1rem] cursor-pointer ${sectionItem ? 'bg-blue' : 'bg-[#CCCCCC]'}`} onClick={() => setIsSectionOpen(!isSectionOpen)}></div>
             <Image src={polygon} alt='poligon' className={`w-[14px] h-[14px] ${isSectionOpen ? 'rotate-180 transition duration-300' : 'rotate-0 transition duration-300'}`} />
             </div>

             <animated.div style={sectionAnimation} className="w-[100%] my-[0.5rem]">
            <ul className='h-auto w-[100%] p-[20px] bg-[#C4C4C4] flex flex-col justify-between gap-[10px]'>
            {['A', 'B', 'C', 'D'].map((item) => (
                <li
                  key={item}
                  className={`h-[39px] text-[24px] font-[500] font-montserrat leading-[39.01px] cursor-pointer text-center ${item === sectionItem ? 'bg-blue text-white' : 'bg-white text-dark'}`}
                  onClick={() => handleSectionSelect(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
         </animated.div>
             
             {/* select subject */}
             <div className='flex items-center justify-between w-[100%] h-[3rem] border-[1px] border-dark px-[1rem]'>
             <p className='font-montserrat font-[500] text-[1rem] text-[#1C1B1F] leading-[19.5px]'>Subject</p>
             <div className={`w-[65%] h-[1rem] cursor-pointer ${subItem ? 'bg-blue' : 'bg-[#CCCCCC]'}`} onClick={() => setIsSubOpen(!isSubOpen)}></div>
             <Image src={polygon} alt='poligon' className={`w-[14px] h-[14px] ${isSubOpen ? 'rotate-180 transition duration-300' : 'rotate-0 transition duration-300'}`} />
             </div>

             <animated.div style={subAnimation} className="w-[100%] my-[0.5rem]">
            <ul className='h-auto w-[100%] p-[20px] bg-[#C4C4C4] flex flex-col justify-between gap-[10px]'>
            {['Bangla', 'English', 'Math', 'Science', 'Biology', 'Chemistry', 'Islam', 'Physics'].map((item) => (
                <li
                  key={item}
                  className={`h-[39px] text-[24px] font-[500] font-montserrat leading-[39.01px] cursor-pointer text-center ${item === subItem ? 'bg-blue text-white' : 'bg-white text-dark'}`}
                  onClick={() => handleSubSelect(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
         </animated.div>
        </div>
        {
        (classItem && sectionItem && subItem) &&
        <Link href='/student/attendance/attendance_sheet'>
        <button className='bg-[#0C46C4] w-[100%] h-[51.67px] rounded-[16px] text-white text-[1.5rem] font-[700] font-montserrat leading-[29.26px] mt-[2rem]'>Go</button>
        </Link>
        }

      </div>
    </div>
  )
}

export default Attendance
