import { Button } from './components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
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

function App() {

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="fixed top-8 right-8 flex items-center ">
          <Button className='font-roboto font-semibold'><IoIosMenu />Menu</Button>
        </SheetTrigger>
        <SheetContent className='w-[350px] font-roboto'>
          <SheetHeader >
            <SheetTitle className='text-center text-[25px]'>Menu</SheetTitle>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild className='flex justify-start items-start m-auto mt-4'>
              <Button className='bg-[#ff8558]'>About Me</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="lines">
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
      <div className='relative flex justify-center items-center gap-8 w-[1100px]'>
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
          </div>
        </div>
      </div>
      <div id='About' className='relative flex flex-col justify-center items-start gap-3 font-roboto w-[1100px] mt-[120px] bg-[#ffccba94] shadow-shadow rounded-[5px] p-4 border-solid border-2 border-black'>
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
      <div>

      </div>
    </div>
  )
}

export default App
