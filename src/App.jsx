import Navbar from './components/Navbar'
import Sidepane from './components/Sidepane'
import './index.css'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='flex'>
      <Sidepane/>
      <main className='mt-16 p-3 bg-slate-200 h-full w-full'>
      <Navbar/>
      <Dashboard/>
      </main>
    </div>
  )
}

export default App
