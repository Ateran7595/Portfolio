import { Button } from './components/ui/button'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './App.css'

function App() {

  return (
    <div>
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
        <div className='font-roboto w-[60%] flex flex-col gap-3'>
          <h1 className='font-bold text-[40px]'>Alejandro Teran</h1> 
          <p className='text-[18px]'>Undergraduate CS student at UTEP. Experience with Full-stack development, UI/UX, and eager to learn more about app development.</p>
          <p>📍El Paso, TX. United States.</p>
          <div className='flex gap-4'>
            <a href="../resume.pdf" target='__blank'><Button className='bg-yellow-100'>Resume</Button></a>
            <a href="https://github.com/Ateran7595" target='__blank'><Button ><FaGithub />Github</Button></a>
            <a href="https://www.linkedin.com/in/alejandro-teran795/" target='__blank'><Button ><FaLinkedin />LinkedIn</Button></a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
