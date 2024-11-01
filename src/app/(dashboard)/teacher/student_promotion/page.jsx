import StudentHeading from '@/app/components/StudentHeading'
import StudentTopBar from '@/app/components/StudentTopBar'
import Promotion from '@/app/components/Promotion'
import React from 'react'

const StudentPromotion = () => {
  return (
    <div className='w-[100%] bg-[#F0F1F3]'>
        <StudentTopBar />
        <StudentHeading title='Students' home='Home' currentRoute='Student Promotion' />
        <div className='px-[28px] pb-[200px]'>
          <Promotion />
        </div>
    </div>
  )
}

export default StudentPromotion
