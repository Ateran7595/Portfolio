import React from 'react'

function Tools({ icon: Icon, name, desc, iconClass}) {
  return (
    <div className='flex justify-center items-center gap-1 bg-[#ff9ea2] lg:w-[250px] rounded-[5px] p-2 border-solid border-2 border-black'>
        <Icon className={`text-[35px] ${iconClass}`} />
        <div className='flex flex-col leading-tight'>
            <h1 className='font-semibold lg:text-[20px]'>{name}</h1>
            <p className='lg:text-[15px] sm:text-[13px] xs:text-[10px]'>{desc}</p>
        </div>
    </div> 
  )
}

export default Tools