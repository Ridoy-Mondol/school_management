import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import questionIcon from '@/app/assets/question.svg'
import Form from '@/app/components/Form'
import Notice from '@/app/components/Notice'
import Attach from '@/app/components/AttachStudent'

const Question = () => {
  return (
    <div className='w-[100%]'>
      <div className='pl-[2px]'>
        <ListHeader image={questionIcon} title="QUESTION" />
      </div>
      <div>
        <Form />
      </div>
      <Attach />
      <div className='ml-[15px] mr-[20px] mb-[1px]'>
        <Notice />
      </div>
    </div>
  )
}

export default Question
