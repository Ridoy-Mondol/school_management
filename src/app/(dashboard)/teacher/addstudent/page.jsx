import StudentTopBar from '@/app/components/StudentTopBar'
import StudentHeading from '@/app/components/StudentHeading'
import React from 'react'
import AddNewStudent from '@/app/components/AddNewStudent'

const AddStudent = () => {
  return (
    <div className='w-[100%] bg-[#F0F1F3]'>
       <StudentTopBar />
       <StudentHeading title='Students' home='Home' currentRoute='Student Admit Form' />
       <div className='px-[28px] pb-[200px]'>
           <AddNewStudent title='Add New Student' />
       </div>
    </div>
  )
}

export default AddStudent
