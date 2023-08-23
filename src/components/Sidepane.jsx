import { useState } from 'react'
import hamburger from  '../assets/icon-menu.svg'
import sailLogo from '../assets/Sail logo.png'
import arrowside from '../assets/arrowside.svg'
import arrowdown from '../assets/arrowdown.svg'
import DashboardIcon from '../assets/DashboardIcon.svg'
import { SettingFilled } from '@ant-design/icons/lib/icons'

const Sidepane = () => {
  return (
    <div className=' w-auto'>
      <nav className='flex items-center justify-between'>
        <img className='w-28' src={sailLogo} alt="sail logo" />
        <img src={hamburger} alt="hamburger icon" />
      </nav>

      <ul className='mt-8'>
        <Sidepanecontent heading='Dashboard' icon={DashboardIcon}/>
        <Sidepanecontent heading='Instructors' arrow={true} icon={DashboardIcon}/>
        <Sidepanecontent heading='Students' icon={DashboardIcon}/>
        <Sidepanecontent heading='Enrolment' arrow={true} icon={DashboardIcon}/>
        <Sidepanecontent heading='Upload Events' icon={DashboardIcon}/>
        <Sidepanecontent heading='Admin Profile' icon={DashboardIcon}/>
        <Sidepanecontent heading='Settings' icon={ <SettingFilled/>  }/>
      </ul>
    </div>
  )
}

export default Sidepane


const Sidepanecontent = ({heading, icon, arrow, children}) => {

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




import {
  AiOutlineSlack,
  AiOutlineBook,
  AiOutlineCarryOut,
  AiOutlineSnippets,
  AiOutlineDashboard,
  AiOutlineExport,
  AiFillSetting
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

