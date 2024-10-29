import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import questionIcon from '@/app/assets/question.svg'
import Form from '@/app/components/Form'
import Notice from '@/app/components/Notice'

const Question = () => {
  return (
    <div className='w-[100%]'>
      <div className='pl-[2px]'>
        <ListHeader image={questionIcon} title="QUESTION" />
      </div>
      <div>
        <Form />
      </div>
      <div className='ml-[15px] mr-[20px] mb-[1px]'>
        <Notice />
      </div>
    </div>
  )
}

export default Question
