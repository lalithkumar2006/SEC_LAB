import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/dashboard'
import Counter from './components/Counter'
import Table from './components/Table'

function App(){
  const [name,setName] = useState("LK")
  const [occ,setOcc]= useState("college")
  function nameChange(){
    setName("LALITHKUMAR")
    console.log(name)
    setOcc("2rd Year")
    console.log(occ)
  }

  return(
    <>
    <Table/>
    </>
  )

}

export default App




