import Navbar from './components/Navbar'
import Sidepane from './components/Sidepane'
import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='flex'>
      <Navbar/>
      
      <main className=' flex'>
      <Sidepane/>
      {/* <Sidebar/> */}
      <Dashboard/>
      </main>
    </div>
  )
}

export default App;
