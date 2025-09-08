import React from 'react'

function ProjectTool({ name }) {
  return (
    <li className='border-solid border-2 border-black bg-[#ff9ea2] hover:bg-[#ffb2b4] cursor-default rounded-[25px] xl:p-[6px] lg:p-[3px] w-[100px]'>{name}</li>
  )
}

export default ProjectTool