"use client"
import ListHeader from '@/app/components/ListHeader'
import React, { useState } from 'react'
import studyMaterialIcon from '@/app/assets/material.svg'
import youtubeIcon from '@/app/assets/youtubeIcon.svg'
import Form from '@/app/components/Form'
import Image from 'next/image'
import Notice from '@/app/components/Notice'

const StudyMaterial = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const handleChange = (event) => {
    setVideoUrl(event.target.value);
  };
  return (
    <div className='w-[100%] pr-[60px]'>
      <ListHeader image={studyMaterialIcon} title="STUDY MATERIAL" />
      <Form />

      <Notice />

    </div>
  )
}

export default StudyMaterial
