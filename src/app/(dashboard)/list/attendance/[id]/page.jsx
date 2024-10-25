import React from 'react'
import attendanceIcon from '@/app/assets/attendance.svg' 
import ListHeader from '@/app/components/ListHeader'

const studentList = [
    {
        id: 1,
        name: 'Hamim'
    },
    {
        id: 2,
        name: 'Rakib'
    },
    {
        id: 3,
        name: 'Tamim'
    },
];


export async function generateStaticParams() {
    const students = studentList;

    return students.map((student) => ({
        id: student.id.toString(),
    }));
}

const AttendanceSheet = ({params}) => {
    const { id } = params;
  return (
    <div className='h-[100vh] w-[100%] pr-[40px]'>

       <ListHeader image = {attendanceIcon} title = 'ATTENDANCE SHEET'/>
        
       <div className='bg-[#14238A]/80 w-[100%] h-[67px] px-[20px] border-[1px] border-dark flex items-center justify-between mt-[2px]'>
          <p className='text-white text-[20px] font-[600] font-openSans leading-[27.24px]'>Class:4</p>
          <p className='text-white text-[20px] font-[600] font-openSans leading-[27.24px]'>Section: B</p>
          <p className='text-white text-[20px] font-[600] font-openSans leading-[27.24px]'>Subject: Bangla</p>
       </div>

       <div className='w-[100%] h-[328px] bg-[#DDDEEE] p-[20px] mt-[7.5px] flex flex-col justify-between'>

        <div className='h-[57px] pl-[15px] pr-[6rem] border-[1px] border-dark flex items-center justify-between'>
            <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark'>Student Name</p>
            <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark'>Present</p>
            <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark'>Absent</p>
        </div>

        <div>
            {
                studentList.map((item) => (
                    <div className='bg-[#F1F1F1] h-[57px] mt-[18px] flex items-center justify-between pl-[15px] pr-[6.5rem]' key={item.id}>
                       <p className='font-[600] font-openSans text-[20px] leading-[27.24px] text-dark w-[33%]'>{item.name}</p>
                       <div className='w-[33%]'>
                       <input
                        type="checkbox"
                        className='w-[18px] h-[18px] border-black border-[2px] rounded-[3px] cursor-pointer ml-[55%]'
                        />
                       </div>
                       <div className='w-[33%] text-end'>
                       <input
                        type="checkbox"
                        className='w-[18px] h-[18px] border-black border-[2px] rounded-[3px] cursor-pointer'
                        />
                        </div>
                    </div>
                ))
            }
        </div>

       </div>

    </div>
  )
}

export default AttendanceSheet
