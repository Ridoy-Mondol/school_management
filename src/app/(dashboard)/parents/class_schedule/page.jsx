import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import classScheduleIcon from '@/app/assets/schedule.svg'
import ClassRoutine from '@/app/components/ClassRoutine'
import Notice from '@/app/components/Notice'

const ClassSchedule = () => {
  return (
    <div className='w-[100%]'>
      <div className='pr-[60px] ml-[2px]'>
        <ListHeader image={classScheduleIcon} title="CLASS SCHEDULE" />
      </div>
      <div className='pl-[15px] pr-[20px]'>
        <ClassRoutine />
      </div>
      <div className='pl-[15px] pr-[30px] mb-[1px]'>
        <Notice />
      </div>
    </div>
  )
}

export default ClassSchedule
