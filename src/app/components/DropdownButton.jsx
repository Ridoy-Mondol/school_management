import React, { useState } from 'react'
import polygonblack from '@/app/assets/polygon-black.svg'
import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web';

const DropdownButton = ({ text, data, CalendarComponent }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const animation = useSpring({
    height: open ? `${data?.length * 3.3}rem` : '0rem', 
    opacity: open ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  });  

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setOpen(!open);
  }

  return (
    <div>
      <button className='w-[392px] h-[70px] bg-[#C4C4C4] rounded-[15px] flex items-center justify-center gap-[4px]' onClick={() => setOpen(!open)}>
             <span className='text-dark text-[1rem] font-[500] font-montserrat leading-[19.5px]'>
              {selectedItem.name || text}
              </span>
              <Image src={polygonblack} alt='polygon' className={`w-[12px] h-[12px] cursor-pointer ${open ? 'rotate-180 transition-rotate duration-300' : 'rotate-0 transition-rotate duration-300'}`}/>
        </button>
        {
        data &&
        <animated.div style={animation} className="w-[100%] my-[0.5rem]">
            <ul className='h-auto w-[100%] p-[20px] bg-[#C4C4C4] flex flex-col justify-between gap-[10px]'>
              {
              data && data.map((item) => (
                <li
                  key={item.id}
                  className={`h-[39px] text-[24px] font-[500] font-montserrat leading-[39.01px] cursor-pointer text-center ${selectedItem === item ? 'bg-blue text-white' : 'bg-white text-dark'}`}
                  onClick={() => handleItemSelect(item)}
                >
                  {item.name}
                </li>
              ))}
          </ul>
         </animated.div>
        }
       <div className='w-[100%]'>
        {open && CalendarComponent}
       </div>
    </div>
  )
}

export default DropdownButton
