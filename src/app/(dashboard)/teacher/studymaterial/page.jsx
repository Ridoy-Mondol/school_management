import ListHeader from '@/app/components/ListHeader'
import React from 'react'
import studyMaterialIcon from '@/app/assets/material.svg'
import Form from '@/app/components/Form'
import Notice from '@/app/components/Notice'
import Attach from '@/app/components/Attach'

const StudyMaterial = () => {
  return (
    <div className='w-[100%]'>
      <div className='pr-[60px]'>
         <ListHeader image={studyMaterialIcon} title="STUDY MATERIAL" />
      </div>
      <Form />
      <Attach />
      <div className='px-[10px]'>
      <Notice />
      </div>
    </div>
  )
}

export default StudyMaterial
