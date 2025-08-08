import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './assets/components/ComponentOne'

function App() {
  const [name] = useState("Sohaib");

  return (
    <>



      <br></br>
      <p> OR</p>
      <userContext.Provider value={name}>
        <ComponentOne userName={name} />

      </userContext.Provider>


    </>
  )
}

export default App
