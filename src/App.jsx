import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './assets/components/ComponentOne'
import ContextOne from './assets/components/ContextOne'

function App() {
  const [name] = useState("Sohaib");

  return (
    <>

      <ContextOne.Provider value={name}>

        <ComponentOne userName={name} />

      </ContextOne.Provider>


    </>
  )
}

export default App
