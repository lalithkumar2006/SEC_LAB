import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/dashboard'

function App(){
  let name="LK"
  let occ="college"
  return(
    <Dashboard name={name} occ={occ}/>
  )

}

export default App
