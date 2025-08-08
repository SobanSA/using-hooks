import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './assets/components/ComponentOne'
import ContextOne from './assets/components/contexts/ContextOne'
import RandomUserCard from './assets/components/effects/EffectOne'
import WeatherUpdate from './assets/components/effects/EffectTwo'

function App() {
  const [name] = useState("Sohaib");

  return (
    <>

      {/* <ContextOne.Provider value={name}>

        <ComponentOne userName={name} />

      </ContextOne.Provider>
      <RandomUserCard /> */}
      <WeatherUpdate />

    </>
  )
}

export default App
