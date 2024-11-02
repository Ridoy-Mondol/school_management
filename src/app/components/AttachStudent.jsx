"use client";
import Image from 'next/image';
import { useState } from 'react';
import youtubeIcon from '@/app/assets/youtubeIcon.svg'
import driveIcon from '@/app/assets/driveIcon.svg'
import linkIcon from '@/app/assets/linkIcon.svg'
import uploadIcon from '@/app/assets/uploadIcon.svg'

export default function Attach() {
  const [attachments, setAttachments] = useState([]);

  const handleAttach = (type) => {
    
  };

  return (
    <div className="w-[80%] border-[1px] border-dark shadow-[23px_23px_4px_0px_#00000040] p-[20px] ml-[60px] my-[33px]">

      <div className="bg-white shadow-[0px_4px_10px_5px_#00000040] flex flex-col items-center gap-[100px] p-[20px]">

      <h3 className="bg-blue h-[66px] px-[10px] shadow-[0px_4px_20px_0px_#00000040] flex items-center text-white text-[36px] font-[600] font-montagu leading-[46.15px] w-[100%]">Attach</h3>

        <div className='flex items-center justify-between w-[70%]'>
        <button
          onClick={() => handleAttach('link')}
          className="w-[163px] h-[163px] shadow-[0px_4px_10px_5px_#00000040] rounded-[50%] flex items-center justify-center"
          aria-label="Attach Link"
        >
          <Image src={linkIcon} alt="YouTube" className='w-[50px] h-[54.33px]' />
        </button>

        <button
          onClick={() => handleAttach('upload')}
          className="w-[163px] h-[163px] shadow-[0px_4px_10px_5px_#00000040] rounded-[50%] flex items-center justify-center"
          aria-label="Upload File"
        >
          <Image src={uploadIcon} alt="YouTube" className='w-[50px] h-[54.33px]' />
        </button>
        </div>

        <button className='bg-[#D91E1F] w-[100%] h-[58px] text-white text-[24px] font-[600] font-poppins leading-[36px]'>Send</button>
      </div>
    </div>
  );
}
