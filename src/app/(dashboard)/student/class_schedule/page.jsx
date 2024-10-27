import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import classScheduleIcon from '@/app/assets/schedule.svg'
import ClassRoutine from '@/app/components/ClassRoutine'
import Notice from '@/app/components/Notice'

const ClassSchedule = () => {
  return (
    <div className='w-[100%]'>
      <div className='pr-[60px]'>
      <ListHeader image={classScheduleIcon} title="CLASS SCHEDULE" />
      </div>
      <div className='px-[18px]'>
      <ClassRoutine />
      </div>
      <div className='ml-[15px] mr-[40px] mb-[1px]'>
      <Notice />
      </div>
    </div>
  )
}

export default ClassSchedule
