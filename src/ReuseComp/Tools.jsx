import React from 'react'

function Tools({ icon: Icon, name, desc, iconClass}) {
  return (
    <div className='flex justify-center items-center gap-1 bg-[#ff9ea2] w-[250px] rounded-[5px] p-2 border-solid border-2 border-black'>
        <Icon className={`text-[35px] ${iconClass}`} />
        <div className='flex flex-col leading-tight'>
            <h1 className='font-semibold text-[20px]'>{name}</h1>
            <p className='text-[15px]'>{desc}</p>
        </div>
    </div> 
  )
}

export default Tools