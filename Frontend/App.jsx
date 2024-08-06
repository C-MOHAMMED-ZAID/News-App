import React from 'react'
import Home from './pages/Home'
import MenuBar from './Components/MenuBar'
import CreateNews from './pages/CreateNews'
import DailyNews from './pages/DailyNews'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-news' element={<CreateNews/>}></Route>
          <Route path='/daily-news' element={<DailyNews/>}></Route>
        </Routes>
      
    </div>
  )
}

export default App
