import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import exmRoutineIcon from '@/app/assets/exm_routine.svg'
import ClassRoutine from '@/app/components/ClassRoutine'
import Notice from '@/app/components/Notice'

const ExamRoutine = () => {
  return (
    <div className='w-[100%]'>
      <div className='pr-[18px]'>
      <ListHeader image={exmRoutineIcon} title="EXAM ROUTINE" />
      </div>
      <ClassRoutine />
      <div className='ml-[15px] mr-[40px] mb-[1px]'>
      <Notice />
      </div>
    </div>
  )
}

export default ExamRoutine
