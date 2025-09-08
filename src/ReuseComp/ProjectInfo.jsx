import React from 'react'
import ProjectTool from './ProjectTool'
import { Button } from '../components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";


function ProjectInfo({ imgSrc, name, desc, tools, sourceCode, liveDemo }) {
  return (
    <div className='flex flex-col items-center justify-center gap-6 lg:border-l-2 lg:border-b-0 xs:border-b-2 border-solid border-black mt-[20px] lg:pl-4 pt-2 lg:pb-2 xs:pb-6'>
        <div className='flex lg:flex-row xs:flex-col items-center justify-center gap-4'>
        <img src={imgSrc} alt={`${name} preview`} className='sm:w-[300px] xs:w-[270px] rounded-md' />
        <div>
            <h1 className='font-bold xl:text-[25px] lg:text-[20px] sm:text-[16px] xs:text-[15px] xl:text-start xs:text-center mb-2'>{name}</h1>
            <ul className='list-disc pl-6 xl:text-[15px] lg:text-[14px] md:text-[16px] xs:text-[14px] '>
            <li>{desc}</li>
            </ul>
            <div className='mt-4'>
                <ul className='flex flex-wrap gap-4 font-bold items-center sm:justify-start xs:justify-center pl-2 text-center'>
                    {tools.map(tool => (
                        <ProjectTool key={tool} name={tool} />
                    ))}
                </ul>
            </div>
        </div>
        </div>
        <div className='flex justify-center gap-6 items-center w-full'>
        <a href={sourceCode} target='__blank' className='w-full'><Button className='w-full font-bold bg-yellow-100' ><FaGithub />Source Code</Button></a>
        <a href={liveDemo} target='__blank' className='w-full'><Button className='w-full font-bold bg-yellow-100'><FiExternalLink />Live Demo</Button></a>
        </div>
    </div>
  )
}

export default ProjectInfo

