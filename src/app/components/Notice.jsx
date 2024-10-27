import React from 'react'

const data = [
    {
        id: 1,
        title: 'Result published: 1st Semester 2024(Class 9)',
        date: '10 Jan',
        year: '2024',
    },
    {
        id: 2,
        title: 'Result published: 2nd Semester 2024(Class 10)',
        date: '20 Jan',
        year: '2024',
    },
    {
        id: 3,
        title: 'Result published: 3rd Semester 2024(Class 11)',
        date: '10 Jun',
        year: '2023',
    },
]
const Notice = () => {
  return (
    <div className='w-[100%] h-[650px] shadow-[inset_1px_-7px_4px_10px_#CCCCCCD4] p-[20px]'>
      <div className='bg-darkRed/90 w-[100%] h-[82px] flex items-center justify-center'>
      <h1 className='text-white text-[3rem] font-[600] font-montagu leading-[61.54px]'>Notice & Event</h1>
      </div>

      <div>
        {
          data.map((item) => (
                <div className='flex gap-[10px] mt-[20px]' key={item.id}>
                    <div className='h-[122px] w-[194px] p-[10px] flex flex-col items-center justify-between'>
                    <p className='w-[174px] h-[50px] bg-blue font-[800] font-openSans text-[16px] leading-[21.79px] text-white flex items-center justify-center'>{item.date}</p>
                    <p className='w-[174px] h-[50px] bg-blue font-[800] font-openSans text-[16px] leading-[21.79px] text-white flex items-center justify-center'>{item.year}</p>
                    </div>
                    <div className='h-[122px] w-[100%] bg-[#DDDEEE] py-[23px] pl-[32px] flex items-center'>
                        <p className='font-[400] font-openSans text-[24px] leading-[32.68px] text-dark'>{item.title}</p>
                    </div>
                </div>
          ))
        }
      </div>
    </div>
  )
}

export default Notice
