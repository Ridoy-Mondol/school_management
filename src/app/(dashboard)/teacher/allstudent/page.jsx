import ShowData from '@/app/components/ShowData'
import StudentHeading from '@/app/components/StudentHeading'
import StudentTopBar from '@/app/components/StudentTopBar'
import React from 'react'

const AllStudent = () => {
  return (
    <div className='bg-[#F0F1F3] w-[100%]'>
       <div className='pr-[46px]'>
       <StudentTopBar />
       </div>
       <StudentHeading title='Students' home='Home' currentRoute='All Students' />
       <div className='pl-[28px] pr-[65px]'>
         <ShowData title='All Students data' />
       </div>
    </div>
  )
}

export default AllStudent
