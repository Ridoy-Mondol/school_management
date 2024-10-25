"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ListHeader from '@/app/components/ListHeader'
import homeworkIcon from '@/app/assets/Homework.svg'
import crossIcon from '@/app/assets/cross.png'
import polygon from '@/app/assets/polygon.svg'
import DropdownButton from '@/app/components/DropdownButton'
import { useSpring, animated } from '@react-spring/web';
import Notice from '@/app/components/Notice'


const Create = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState('');
  const animation = useSpring({
    height: open ? '11rem' : '0rem',
    opacity: open ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });
  const handleTaskSelect = (element) => {
      setTask(element);
      setOpen(!open);
  }
  return (
    <div>
      <div className='w-[100%] pr-[60px]'>
      <ListHeader image={homeworkIcon} title="HOME WORK" />
      
      {/* Top task bar starts here */}
      <div className='h-[130px] w-[100%] border-[1px] border-dark/60 px-[20px] flex items-center justify-between backdrop-blur-[4px] mt-[4px] ml-[4px] pr-[100px] relative'>
        <h1 className='text-[3rem] font-[600] font-montagu leading-[61.54px] text-dark/60'>{task || 'Assignment'}</h1>

        <div>
        <button className={`w-[146px] h-[51px] bg-[#14238AAD] rounded-[16px] text-[20px] font-[600] font-montserrat leading-[24.38px] flex items-center justify-center gap-[4px] transition-[border-radius] duration-300 ${open ? 'rounded-b-none transition-all duration-300 ease-in-out' : ''}`} onClick={() => setOpen(!open)}>
          <span className='text-white text-[1rem] font-[500] font-montserrat leading-[19.5px]'>
          {task || 'Assignment'}
          </span>
          <Image src={polygon} alt='polygon' className='w-[12px] h-[12px] cursor-pointer'/>
        </button>

        <animated.div style={animation} className="h-auto absolute">
          <ul className='h-auto bg-[#14238AAD] flex flex-col justify-between w-[146px] rounded-b-[16px]'>
            {['Assignment', 'Lab Test', 'Class Test', 'Lab Report'].map((task) => (
                <li
                  key={task}
                  className={`text-white py-2 border-y-[1px] border-white cursor-pointer text-center ${task === '4th year even' ? 'border-b-0' : ''}`}
                  onClick={() => handleTaskSelect(task)}
                >
                  {task}
                </li>
              ))}
          </ul>
         </animated.div>
        </div>
        <Image src={crossIcon} alt='crossIcon' className='w-[14.24px] h-[14.24px] cursor-pointer' />
      </div>
      {/* Top task bar ends here */}

      <div>
        <p className='text-[24px] text-[#716D6D] font-[500] font-montserrat leading-[29.26px] my-[30px] ml-[27px]'>For</p>
        {/* dropdown buttons */}
        <div className='w-[80%] ml-[60px] flex flex-wrap justify-between gap-[20px]'>
            <DropdownButton text= "Bangla" />
            <DropdownButton text= "Student" />
            <DropdownButton text= "Point" />
            <DropdownButton text= "Due Date" />
        </div>
        <form className='w-[80%] ml-[60px] mt-[20px] p-[20px] border-[1px] border-dark shadow-[23px_23px_0px_#00000040]'>
        <input
          type="text"
          className="w-[100%] h-[66px] bg-[#CCCCCC] px-[10px] text-[36px] text-dark/80 font-[600] font-montagu leading-[46.15px] focus:outline-none placeholder:text-[36px] placeholder:font-[600] placeholder:font-montagu placeholder:leading-[46.15px]
          placeholder:text-dark/80"
          placeholder="Description"
        />

        <textarea
          type="text"
          className="w-[100%] bg-[#CCCCCC] mt-[20px] px-[40px] pt-[35px] pb-[140px] text-[24px] text-dark font-[400] font-montagu leading-[30.77px] focus:outline-none placeholder:text-[24px] placeholder:font-[400] placeholder:font-montagu placeholder:leading-[30.77px]
          placeholder:text-dark"
          placeholder="Instruction (Optional)"
        />
        </form>
      </div>
      </div>

      <div className='w-[100] mt-[30px] mb-[100px] mr-[1px] pl-[26px]'>
        <Notice />
        </div>

    </div>
  )
}

export default Create
