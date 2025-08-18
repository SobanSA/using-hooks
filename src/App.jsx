import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './assets/components/ComponentOne'
import ContextOne from './assets/components/contexts/ContextOne'
import RandomUserCard from './assets/components/effects/EffectOne'
import WeatherUpdate from './assets/components/effects/EffectTwo'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact'


function App() {
  //const [name] = useState("Sohaib");

  return (
    <>

      {/* <ContextOne.Provider value={name}>
        <ComponentOne userName={name} />
      </ContextOne.Provider>
      <RandomUserCard /> 
      <WeatherUpdate />*/}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>


    </>
  )
}

export default App
