import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import questionIcon from '@/app/assets/question.svg'
import Form from '@/app/components/Form'
import Notice from '@/app/components/Notice'

const Question = () => {
  return (
    <div className='w-[100%]'>
       <div className='pl-[2px]'>     
         <ListHeader title='Question' image={questionIcon}/>
         </div>
         <Form />
         <div className='pl-[15px] pr-[1px] pb-[1px]'>
         <Notice />
         </div>
    </div>
  )
}

export default Question
