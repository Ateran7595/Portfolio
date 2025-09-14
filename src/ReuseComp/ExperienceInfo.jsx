import React from 'react'

function ExperienceInfo({ imgSrc, title, company, date, desc }) {
  return (
    <div className='flex items-center justify-center gap-4 border-solid border-l-2 border-black pl-4 pt-2 pb-2 mt-4 mb-4'>
        <img src={imgSrc} alt={`${company} image preview`} className='sm:w-[100px] xs:w-[80px] rounded-[100px]' />
        <div className='sm:text-[16px] xs:text-[14px] flex flex-col gap-2'>
            <h1 className='font-semibold'>{title} - <span className='font-normal italic'>{company}</span></h1>
            <p ><b>Date: </b>{date}</p>
            <p >{desc}</p>
        </div>
    </div>
  )
}

export default ExperienceInfo