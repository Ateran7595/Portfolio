import React from 'react'

function ProjectTool({ name }) {
  return (
    <li className='border-solid border-2 border-black bg-[#e4efff] hover:bg-[#cadefc]  cursor-default rounded-[25px] xl:p-[6px] lg:p-[3px] w-[100px] transition-all duration-300'>{name}</li>
  )
}

export default ProjectTool