import { useState } from 'react'
import hamburger from  '../assets/icon-menu.svg'
import sailLogo from '../assets/Sail logo.png'

const Sidepane = () => {
  return (
    <div className='hidden md:block w-[25%] bg-white overflow-y-scroll fixed top-0 left-0 z-10 max-h-[100vh]'>
      <nav className='flex items-center justify-between px-2 py-2'>
        <img className='w-28' src={sailLogo} alt="sail logo" />
        <img src={hamburger} alt="hamburger icon" />
      </nav>
      <ul>
        <Sidepanecontent heading='Dashboard' arrow={true}/>
        <Sidepanecontent/>
        <Sidepanecontent/>
      </ul>
    </div>
  )
}

export default Sidepane


const Sidepanecontent = ({heading,icon, arrow}) => {

  const [direction, setDirection] = useState(false)

  function directionHandler(){
    setDirection(!direction)
  }

  return(<div onClick={directionHandler}>
    <div className="sideIcon">
      <img src={icon} alt="" />
    </div>
    <div className="sideContent">
      <h3>{heading}</h3>
      {arrow && <img src={direction? sailLogo : hamburger} alt=''/>}
    </div>
  </div>)
}
