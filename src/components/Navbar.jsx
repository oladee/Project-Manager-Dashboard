import hamburger from  '../assets/icon-menu.svg'
import sailLogo from '../assets/Sail logo.png'
import chats from '../assets/Basic_Ui_(2).jpg'
import notification from '../assets/notification.png'
import profileIcon from '../assets/profile-user.png'
const Navbar = ({showSidebar, setShowSidebar}) => {
  function handleSidebar(){
    setShowSidebar(!showSidebar)
  }
  return (
    <div className='w-[75%]'>
        <nav className='flex items-center justify-between px-4 py-2 fixed top-0 right-0 bg-white w-full'>
            <div className='flex items-center'>
            <img className='' src={hamburger} alt="hamburger menu" onClick={handleSidebar}/>
            <img src={sailLogo} className='w-32' alt="Logo icon" />
            </div>
            <div className='flex items-center'>
            <img src={chats} className='w-8' alt="chat icon" />
            <img className='w-8 mx-5' src={notification} alt="notify icon" />
            <img src={profileIcon} alt="profileIcon" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar
