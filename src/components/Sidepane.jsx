import hamburger from  '../assets/icon-menu.svg'
import sailLogo from '../assets/Sail logo.png'

const Sidepane = () => {
  return (
    <div className='hidden md:block w-[25%] bg-white overflow-y-scroll fixed top-0 left-0 z-10 max-h-[100vh]'>
      <nav className='flex items-center justify-between px-4 py-2'>
        <img className='w-32' src={sailLogo} alt="sail logo" />
        <img src={hamburger} alt="hamburger icon" />
      </nav>
      <ul>

      </ul>
    </div>
  )
}

export default Sidepane


const Sidepanecontent = ({heading,icon, arrow}) => {

  return(<div>
    <div className="sideIcon">
      <img src="" alt="" />
    </div>
    <div className="sideContent">
      <h3></h3>
      {arrow && <img src='' alt=''/>}
    </div>
  </div>)
}
