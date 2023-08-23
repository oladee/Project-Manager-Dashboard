import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Sidepane from './components/Sidepane'
import './index.css'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  let body = document.body
  let deviceWidth = window.innerWidth
  if(showSidebar && deviceWidth < 768){
    body.style.overflow = 'hidden'
  }else{
    body.style.overflow = 'unset'
  }
  
  return (
    <div className='flex'>
      <Sidepane showSidebar={showSidebar}  setShowSidebar={setShowSidebar}/>
      <main className='mt-16 p-3 bg-slate-200 h-full w-full md:ml-[25%] md:pl-8 md:pt-8' style={showSidebar ? {marginLeft: '25%'}: {marginLeft : '0'}}>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Dashboard/>
      </main>
    </div>
  )
}

export default App
