import React from 'react'
import Notice from './Notice'

const Data = [
    {
        id: 1,
        day: 'Day',
        period1: '9-9:40(AM)',
        period2: '10-10:30(AM)',
        period3: '11-11:20(AM)',
        period4: '12-12:10(PM)',
        period5: '1-1:00(PM)',
        period6: '2-2:50(PM)',
    },
    {
        id: 2,
        day: 'Sun',
        period1: 'Bangla (class-9)',
        period2: 'Bangla (class-9)',
        period3: 'Bangla (class-9)',
        period4: 'Bangla (class-9)',
        period5: 'Bangla (class-9)',
        period6: 'Bangla (class-9)',
    },
    {
        id: 3,
        day: 'Mon',
        period1: 'Bangla (class-9)',
        period2: 'Bangla (class-9)',
        period3: 'Bangla (class-9)',
        period4: 'Bangla (class-9)',
        period5: 'Bangla (class-9)',
        period6: 'Bangla (class-9)',
    },
    {
        id: 4,
        day: 'Tue',
        period1: 'Bangla (class-9)',
        period2: 'Bangla (class-9)',
        period3: 'Bangla (class-9)',
        period4: 'Bangla (class-9)',
        period5: 'Bangla (class-9)',
        period6: 'Bangla (class-9)',
    },
    {
        id: 5,
        day: 'Wed',
        period1: 'Bangla (class-9)',
        period2: 'Bangla (class-9)',
        period3: 'Bangla (class-9)',
        period4: 'Bangla (class-9)',
        period5: 'Bangla (class-9)',
        period6: 'Bangla (class-9)',
    },
    {
        id: 6,
        day: 'Thu',
        period1: 'Bangla (class-9)',
        period2: 'Bangla (class-9)',
        period3: 'Bangla (class-9)',
        period4: 'Bangla (class-9)',
        period5: 'Bangla (class-9)',
        period6: 'Bangla (class-9)',
    },
]
const ClassRoutine = () => {
 return (
 <div className="w-[100%] px-[18px]">
  <div className=" w-full p-2 shadow-[inset_10px_10px_4px_20px_#00000040] pb-[15px] pr-[15px] my-[127px] bg-white overflow-hidden flex flex-col">
    {Data.map((item) => (
      <div className="flex items-center justify-between" key={item.id}>
        <p className={`w-[13.75%] h-[127px] flex items-center justify-center mt-[10px] text-white font-semibold font-openSans text-[18px] leading-[24.51px] ${item.id === 1 ? 'bg-[#14238A]' : 'bg-darkRed'}`}>
          {item.day}
        </p>
        {[item.period1, item.period2, item.period3, item.period4, item.period5, item.period6].map((period, index) => (
          <p
            key={index}
            className={`w-[13.75%] h-[127px] flex items-center justify-center mt-[10px] text-dark font-medium font-poppins text-[16px] leading-[24px] ${item.id === 1 ? 'bg-[#14238A] text-white font-semibold text-[18px] leading-[27px]' : 'bg-[#CCCCCC]'}`}
          >
            {period}
          </p>
        ))}
      </div>
    ))}
  </div>
 
  <div className='mb-[5px]'>
  <Notice />
  </div>

</div>


  )
}

export default ClassRoutine
