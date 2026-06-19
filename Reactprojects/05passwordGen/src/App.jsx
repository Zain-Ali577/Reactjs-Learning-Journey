import { useState, useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [Lenght, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ASDFGHJKLQWERTYUIOPZXCVBNMabcdefghijklmnopqrstuvwxyz"
     
    if (numberAllowed) str +="0123456789"
    if (charAllowed) str +="!@#$%^&*"
  }, 
    [Lenght, charAllowed, numberAllowed, setPassword ]) 

  return (
    <>
      <h1 className='text-4xl text-center text-white'> Password generator</h1>
    </>
  )
}

export default App
