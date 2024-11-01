import StudentTopBar from '@/app/components/StudentTopBar'
import StudentHeading from '@/app/components/StudentHeading'
import React from 'react'
import AddNewTeacher from '@/app/components/AddNewTeacher'

const AddStudent = () => {
  return (
    <div className='w-[100%] bg-[#F0F1F3]'>
       <StudentTopBar />
       <StudentHeading title='Teachers' home='Home' currentRoute='Add Teacher' />
       <div className='px-[28px] pb-[40px]'>
           <AddNewTeacher title='Add New Teacher' />
       </div>
    </div>
  )
}

export default AddStudent
