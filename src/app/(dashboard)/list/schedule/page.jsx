import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import classScheduleIcon from '@/app/assets/schedule.svg'
import ClassRoutine from '@/app/components/ClassRoutine'

const Schedule = () => {
  return (
    <div className='w-[100%]'>
      <ListHeader image={classScheduleIcon} title="CLASS SCHEDULE" />
      <ClassRoutine />
    </div>
  )
}

export default Schedule
