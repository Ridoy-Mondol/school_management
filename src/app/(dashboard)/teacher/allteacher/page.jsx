import ShowData from '@/app/components/ShowData'
import StudentHeading from '@/app/components/StudentHeading'
import StudentTopBar from '@/app/components/StudentTopBar'
import React from 'react'

const AllTeacher = () => {
  return (
    <div className='bg-[#F0F1F3] w-[100%]'>
       <div className='pr-[46px]'>
         <StudentTopBar />
       </div>
       <StudentHeading title='Teacher' home='Home' currentRoute='All Teachers' />
       <div className='pl-[28px] pr-[65px]'>
         <ShowData title='All Teachers Data' />
       </div>
    </div>
  )
}

export default AllTeacher
