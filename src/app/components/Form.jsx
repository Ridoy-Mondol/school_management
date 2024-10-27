import React from 'react'

const Form = () => {
  return (
    <form className='w-[80%] ml-[60px] mt-[20px] p-[20px] border-[1px] border-dark shadow-[23px_23px_0px_#00000040]'>
        <input
          type="text"
          className="w-[100%] h-[66px] bg-[#CCCCCC] px-[10px] text-[36px] text-dark/80 font-[600] font-montagu leading-[46.15px] focus:outline-none placeholder:text-[36px] placeholder:font-[600] placeholder:font-montagu placeholder:leading-[46.15px]
          placeholder:text-dark/80"
          placeholder="Description"
        />

        <textarea
          type="text"
          className="w-[100%] bg-[#CCCCCC] mt-[20px] px-[40px] pt-[35px] pb-[140px] text-[24px] text-dark font-[400] font-montagu leading-[30.77px] focus:outline-none placeholder:text-[24px] placeholder:font-[400] placeholder:font-montagu placeholder:leading-[30.77px]
          placeholder:text-dark"
          placeholder="Instruction (Optional)"
        />
    </form>
  )
}

export default Form
