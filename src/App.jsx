import { useState, useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact'


function App() {
  const [name] = useState("Sohaib");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    /* <ContextOne.Provider value={name}>
       <ComponentOne userName={name} />
     </ContextOne.Provider> */
  );

}

export default App
