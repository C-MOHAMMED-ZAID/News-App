import React from 'react'
import Home from './Components/pages/Home'
import MenuBar from './Components/MenuBar'
import CreateNews from './Components/pages/CreateNews'
import DailyNews from './Components/pages/DailyNews'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-news' element={<CreateNews/>}></Route>
          <Route path='/daily-news' element={<DailyNews/>}></Route>
        </Routes>
      </Router>
    <Footer></Footer>
    </div>
  )
}

export default App

