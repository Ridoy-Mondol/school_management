import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import classScheduleIcon from '@/app/assets/schedule.svg'
import ClassRoutine from '@/app/components/ClassRoutine'
import Notice from '@/app/components/Notice'

const Schedule = () => {
  return (
    <div className='w-[100%]'>
      <ListHeader image={classScheduleIcon} title="CLASS SCHEDULE" />
      <div className='px-[18px]'>
        <ClassRoutine />
      </div>
      <div className='mb-[5px] mx-[15px]'>
        <Notice />
      </div>

    </div>
  )
}

export default Schedule
