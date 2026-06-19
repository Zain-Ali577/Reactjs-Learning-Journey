import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "zain ali ",
    age : 21
  }

  return (
    <>
      <h1 className='bg-green-500  text-black rounded-xl'>Tailwind Test</h1>
       <Card  userName="zain ali"/>
       <br/>
       <Card />
      

    </>
  )
}

export default App
