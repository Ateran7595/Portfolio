import React from 'react'

function Tools({ icon: Icon, name, iconClass}) {
  return (
    <div className='flex justify-center items-center gap-2 bg-[#e4efff] hover:bg-[#cadefc] cursor-default rounded-[5px] p-2 border-solid border-2 border-black transition-all duration-300'>
        <Icon className={`md:text-[30px] xs:text-[20px] ${iconClass}`} />
        <div className='flex flex-col leading-tight'>
            <h1 className='font-semibold lg:text-[18px] xs:text-[15px] '>{name}</h1>
        </div>
    </div> 
  )
}

export default Tools