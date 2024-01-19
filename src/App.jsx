import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavagationBar from './NavigationBar'
import Home from "./pages/Home"
import Poems from "./pages/Poems"
import AboutUs from "./pages/AboutUs"

import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <NavagationBar></NavagationBar>
    <div id = "all">
        <div id = "content">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Home" element = {<Home/>}/>
          <Route path = "/Poems" element = {<Poems/>}/>
          <Route path = "/AboutUs" element = {<AboutUs/>}/>
        </Routes>
        </div> 
    </div>
    </HashRouter>
    </>
  )
}

export default App
