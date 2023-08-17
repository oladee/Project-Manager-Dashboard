import hamburger from  '../assets/icon-menu.svg'
import sailLogo from '../assets/Sail logo.png'

const Sidepane = () => {
  return (
    <div className='hidden md:block w-[25%] bg-white overflow-y-scroll max-h-[100vh]'>
      <nav className='flex items-center justify-between px-4 py-2'>
        <img className='w-32' src={sailLogo} alt="" />
        <img src={hamburger} alt="" />
      </nav>
      <ul>
        
      </ul>
    </div>
  )
}

export default Sidepane
