import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Complaint from './pages/Complaint'
import { Route, Routes } from 'react-router-dom'
import TopNav from './components/TopNav'
import LeftSideBar from './components/leftSideBar'



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className='lg:pl-6 xl:pl-0 h-full flex-col lg:flex lg:flex-row '>
      

      <TopNav/>
      <LeftSideBar classes='w-[20%]  h-full border-r-[1px] hidden  lg:flex  lg:flex-col lg:items-end lg:pr-9 font-inter' />
      
      <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/profile" element={<Profile />} />
      <Route
      path="/complaint"
      element={<Complaint/>}
      />
      </Route>;
      </Routes>
      

      
      <BottomNav/>
    </div>
  )
}

export default App
