import { Button } from './components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { RiGeminiFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './components/ui/sheet'
import './App.css'
import Tools from './ReuseComp/Tools';
import SheetCloseBtn from './ReuseComp/SheetCloseBtn';

function App() {

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="fixed top-8 right-8 flex items-center z-[998]">
          <Button className='font-roboto font-semibold bg-[#fd7a4a] '><IoIosMenu />Menu</Button>
        </SheetTrigger>
        <SheetContent className='w-[350px] font-roboto z-[999]'>
          <SheetHeader >
            <SheetTitle className='text-center text-[25px]'>Menu</SheetTitle>
          </SheetHeader>
          <div className='flex flex-col gap-4'>
            <SheetCloseBtn idref='About' btnName='About Me' />
            <SheetCloseBtn idref='Skills' btnName='Skills' /> 
            <SheetCloseBtn idref='Education' btnName='Education' /> 
            <SheetCloseBtn idref='Projects' btnName='Projects' /> 
          </div>
        </SheetContent>
      </Sheet>
      <div className="fixed xs:top-[-53%] sm:top-[-40%] md:top-[-38%] lg:left-0 md:left-[-40%] xs:left-[-100%] right-0 mx-auto lg:w-[90vw] sm:w-[110vw] xs:w-[170vw] ">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>  
      </div>
      <div className='relative flex justify-center items-center gap-8 xl:w-[1100px] lg:w-[850px] m-auto'>
        <div>
          <img src="../picture.jpg" alt="" className='w-[300px] flex rounded-[170px]' />    
        </div>
        <div className='font-roboto w-[70%] flex flex-col gap-3'>
          <h1 className='font-bold text-[40px]'>Alejandro Teran</h1> 
          <p className='text-[18px]'>Undergraduate CS student at UTEP. Experience with Full-stack development, UI/UX, and eager to learn more about web development.</p>
          <p>📍El Paso, TX. United States.</p>
          <div className='flex gap-4'>
            <a href="../resume.pdf" target='__blank'><Button className='bg-yellow-100'>Resume</Button></a>
            <a href="https://github.com/Ateran7595" target='__blank'><Button ><FaGithub />Github</Button></a>
            <a href="https://www.linkedin.com/in/alejandro-teran795/" target='__blank'><Button ><FaLinkedin />LinkedIn</Button></a>
            <Button onClick={() => window.location.href = 'mailto:alexteran795@gmail.com'}><MdEmail />Email</Button>
          </div>
        </div>
      </div>
      <div id='About' className='relative flex flex-col justify-center items-start gap-3 font-roboto xl:w-[1100px] lg:w-[850px] m-auto mt-[120px] bg-[#ffccba94] shadow-shadow rounded-[5px] p-4 border-solid border-2 border-black'>
        <h1 className='font-bold text-[35px]'>About Me</h1>
        <p>
          Hello! I'm a 20-year-old undergraduate student at UTEP, currently in my junior year. Outside of school, I like to spend time developing my technical skills to prepare for any projects that come to mind. 
        </p>
        <p>
          I am an active member of the Web/App Development Club at my university, where I serve as an instructor—answering questions, providing dynamic examples, and fostering networking opportunities among students.
        </p>
        <p>
          Through the projects I've built, I focus on delivering smooth user experiences and intuitive navigation. I'm actively seeking new opportunities to apply the skills I've acquired on my journey as a developer. Looking forward to connecting with you!
        </p>
      </div>
      <div id='Skills' className='relative flex flex-col justify-center items-start font-roboto xl:w-[1100px] lg:w-[850px] m-auto mt-[100px] bg-[#ffccba94] shadow-shadow rounded-[5px] p-4 border-solid border-2 border-black'>
        <h1 className='font-bold text-[38px]'>Skills</h1>
        <div className='mb-4'>
          <div>
            <h1 className='font-semibold text-[25px]'>Frontend:</h1>  
            <div className='flex flex-wrap justify-center gap-4'>
              <Tools icon={FaReact} name='ReactJS' desc='JavaScript Library' iconClass='text-blue-500' />
              <Tools icon={FaHtml5} name='HTML' desc='Markup Language' iconClass='text-orange-600' />
              <Tools icon={FaCss3} name='CSS' desc='Styling Language' iconClass='text-blue-600' />
              <Tools icon={IoLogoJavascript} name='JavaScript' desc='Programming Language' iconClass='text-yellow-300' />
              <Tools icon={RiTailwindCssFill} name='TailwindCSS' desc='CSS Framework' iconClass='text-blue-500' />
            </div>
          </div>
          <div>
            <h1 className='font-semibold text-[25px] mt-5'>Backend & Databases:</h1>
            <div className='flex flex-wrap justify-center gap-4'>
              <Tools icon={FaNodeJs} name='Node.JS' desc='JavaScript Runtime' iconClass='text-green-500' />
              <Tools icon={SiExpress} name='Express' desc='Web Framework' iconClass='text-black' />
              <Tools icon={BiLogoMongodb} name='MongoDB' desc='NoSQL Database' iconClass='text-green-400' />
              <Tools icon={RiFirebaseFill} name='Firebase' desc='Backend Platform' iconClass='text-yellow-400' />
            </div>
          </div>
          <div>
            <h1 className='font-semibold text-[25px] mt-5'>Others:</h1>
            <div className='flex flex-wrap justify-center gap-4'>
              <Tools icon={FaGitAlt} name='Git' desc='Version Control' iconClass='text-orange-500' />
              <Tools icon={TbApi} name='APIs' desc='Application Interface' iconClass='text-black' />
              <Tools icon={RiGeminiFill} name='Gemini AI' desc='AI model' iconClass='text-blue-500' />
            </div>
          </div>
        </div>
      </div>
      <div id='Education' className='relative flex flex-col justify-center items-start font-roboto xl:w-[1100px] lg:w-[850px] m-auto mt-[100px] bg-[#ffccba94] shadow-shadow rounded-[5px] p-4 border-solid border-2 border-black'>
        <h1 className='font-bold text-[38px]'>Education</h1>
        <div className='flex items-center justify-center gap-4 border-l-2 border-black pl-4 pt-2 pb-2 mt-4'>
          <img src="../utep.png" alt="utep" className='w-[100px] rounded-[100px]' />
          <div>
            <h1 className='font-semibold'>Bachelor Computer Science & Minor in Mathematics</h1>
            <p className='italic'>The University of Texas at El Paso</p>
            <p className='italic'>January 2025 - <b>Expected graduation:</b> December 2026</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-4 border-l-2 border-black pl-4 pt-2 pb-2 mt-8 mb-4'>
          <img src="../epcc.png" alt="utep" className='w-[100px] rounded-[100px]' />
          <div>
            <h1 className='font-semibold'>Associates Computer Science</h1>
            <p className='italic'>El Paso Community College</p>
            <p className='italic'>January 2022 - December 2024 - <b>GPA:</b> 3.7/4.0 </p>
          </div>
        </div>
      </div>
      <div id='Projects' className='relative flex flex-col justify-center items-start font-roboto xl:w-[1100px] lg:w-[850px] m-auto mt-[100px] bg-[#ffccba94] shadow-shadow rounded-[5px] p-4 border-solid border-2 border-black'>
        <h1 className='font-bold text-[38px]'>Projects</h1>
        <div className='flex flex-col items-center justify-center gap-6 border-l-2 border-black mt-[20px] pl-4 pt-2 pb-2'>
          <div className='flex items-center justify-center gap-4'>
            <img src="../RTrip.png" alt="RTrip" className='w-[300px] rounded-md' />
            <div>
              <h1 className='font-bold xl:text-[25px] lg:text-[20px] xl:text-start lg:text-center'>RTrip - AI Travel Destination Finder</h1>
              <ul className='list-disc pl-6 xl:text-[15px] lg:text-[14px] '>
                <li>Generates personalized travel plans using Gemini AI based on user preferences.</li>
                <li>Integrates Google Places and Unsplash APIs for accurate location data and high-quality images.</li>
                <li>Built with React, Node.js, and Firebase for a scalable and secure experience.</li>
              </ul>
              <div className='mt-4'>
                <ul className='flex gap-4 font-bold items-center justify-start pl-2 text-center'>
                  <li className='border-solid border-2 border-black bg-[#ff9ea2] rounded-[25px] xl:p-[10px] lg:p-[3px] w-[100px]'>React</li>
                  <li className='border-solid border-2 border-black bg-[#ff9ea2] rounded-[25px] xl:p-[10px] lg:p-[3px] w-[100px]'>Node.JS</li>
                  <li className='border-solid border-2 border-black bg-[#ff9ea2] rounded-[25px] xl:p-[10px] lg:p-[3px] w-[100px]'>GeminiAI</li>
                  <li className='border-solid border-2 border-black bg-[#ff9ea2] rounded-[25px] xl:p-[10px] lg:p-[3px] w-[100px]'>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-6 items-center w-full'>
            <a href="https://github.com/Ateran7595/RTrip" target='__blank' className='w-full'><Button className='w-full font-bold bg-yellow-100' ><FaGithub />View Code</Button></a>
            <a href="https://r-trip.vercel.app/" target='__blank' className='w-full'><Button className='w-full font-bold bg-yellow-100'><FiExternalLink />Live Demo</Button></a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 border-l-2 border-black mt-[50px] pl-4 pt-2 pb-2 mb-4'>
          <div className='flex items-center justify-center gap-4'>
            <img src="../RPproject.png" alt="RTrip" className='w-[300px] rounded-md' />
            <div>
              <h1 className='font-bold xl:text-[25px] lg:text-[20px] xl:text-start lg:text-center'>Local Church Website</h1>
              <ul className='list-disc pl-6 xl:text-[15px] lg:text-[14px]'>
                <li>Provides church information, beliefs, and mission in one place to engage the community.</li>
                <li>Features an events section with a dynamic carousel, allowing admins to upload images.</li>
                <li>Includes a newsletter feature for users to receive event updates via email.</li>
              </ul>
              <div className='mt-4'>
                <ul className='flex gap-4 font-bold items-center justify-start pl-2 text-center'>
                  <li className='border-solid border-2 border-black bg-[#ff9ea2] rounded-[25px] xl:p-[10px] lg:p-[3px] w-[100px]'>React</li>
                  <li className='border-solid border-2 border-black bg-[#ff9ea2] rounded-[25px] xl:p-[10px] lg:p-[3px] w-[100px]'>Node.JS</li>
                  <li className='border-solid border-2 border-black bg-[#ff9ea2] rounded-[25px] xl:p-[10px] lg:p-[3px] w-[100px]'>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-6 items-center w-full'>
            <a href="https://github.com/Ateran7595/Roca-Potencia" target='__blank' className='w-full'><Button className='w-full font-bold bg-yellow-100' ><FaGithub />View Code</Button></a>
            <a href="https://roca-potencia.vercel.app/" target='__blank' className='w-full'><Button className='w-full font-bold bg-yellow-100'><FiExternalLink />Live Demo</Button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
