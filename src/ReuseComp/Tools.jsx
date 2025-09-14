import React from 'react'

function Tools({ icon: Icon, name, desc, iconClass}) {
  return (
    <div className='flex justify-center items-center gap-2 bg-[#ff9ea2] hover:bg-[#ffb2b4] cursor-default lg:w-[180px] rounded-[5px] p-2 border-solid border-2 border-black'>
        <Icon className={`md:text-[30px] xs:text-[20px] ${iconClass}`} />
        <div className='flex flex-col leading-tight'>
            <h1 className='font-semibold lg:text-[18px] xs:text-[15px] '>{name}</h1>
        </div>
    </div> 
  )
}

export default Tools