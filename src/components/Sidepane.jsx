import { useState } from 'react'
import hamburger from  '../assets/icon-menu.svg'
import sailLogo from '../assets/Sail logo.png'
import arrowside from '../assets/arrowside.svg'
import arrowdown from '../assets/arrowdown.svg'
import DashboardIcon from '../assets/DashboardIcon.svg'

const Sidepane = () => {
  return (
    <div className='hidden md:block w-[25%] bg-white overflow-y-auto fixed top-0 left-0 z-10 max-h-[100vh] p-2'>
      <nav className='flex items-center justify-between pb-2'>
        <img className='w-28' src={sailLogo} alt="sail logo" />
        <img src={hamburger} alt="hamburger icon" />
      </nav>
      <ul className='mt-8'>
        <Sidepanecontent heading='Dashboard' icon={DashboardIcon}/>
        <Sidepanecontent heading='Courses' arrow={true} icon={DashboardIcon}/>
        <Sidepanecontent heading='Instructors' arrow={true} icon={DashboardIcon}/>
        <Sidepanecontent heading='Students' icon={DashboardIcon}/>
        <Sidepanecontent heading='Enrolment' arrow={true} icon={DashboardIcon}/>
        <Sidepanecontent heading='Messages' icon={DashboardIcon}/>
        <Sidepanecontent heading='Admin Profile' icon={DashboardIcon}/>
        <Sidepanecontent heading='Settings' icon={DashboardIcon}/>
      </ul>
    </div>
  )
}

export default Sidepane


const Sidepanecontent = ({heading,icon, arrow, children}) => {

  const [direction, setDirection] = useState(false)

  function directionHandler(){
    setDirection(!direction)
  }

  return(<div onClick={directionHandler} className='flex items-center p-2 mb-6'>
    <div className="sideIcon pr-2">
      <img src={icon} alt ="" className='bg-slate-400 w-8'/>
    </div>
    <div className="sideContent flex items-center w-[100%] justify-between">
      <h3 className='text-xl text-slate-4' >{heading}</h3>
      {arrow && <img src={direction? arrowdown : arrowside} alt='' className=''/>}
    </div>
    <div>
      {children}
    </div>
  </div>)
}

