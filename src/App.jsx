import Navbar from './components/Navbar'
import './index.css'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='mt-16 p-3 bg-slate-200 h-full'>
      <Dashboard/>
      </main>
    </div>
  )
}

export default App
