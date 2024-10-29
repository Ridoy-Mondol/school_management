import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import exmRoutineIcon from '@/app/assets/exm_routine.svg'
import ClassRoutine from '@/app/components/ClassRoutine'
import Notice from '@/app/components/Notice'

const ExamRoutine = () => {
  return (
    <div className='w-[100%]'>
      <div className='ml-[2px] pr-[60px]'>
        <ListHeader image={exmRoutineIcon} title="EXAM ROUTINE" />
      </div>
      <div className='ml-[15px] mr-[20px]'>
        <ClassRoutine />
      </div>
      <div className='ml-[15px] mr-[30px] mb-[50px]'>
        <Notice />
      </div>
    </div>
  )
}

export default ExamRoutine
