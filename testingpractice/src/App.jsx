import { useState } from 'react'
import Usercard from './components/Usercard';


function App() {

let [counter, setCounter] = useState(15)

  //let counter = 17
  const addValue = ()=> {
  
    //counter = counter +1
    setCounter (counter +1)
  }
  const removeValue = () => {
    
    setCounter (counter -1)
  }

  return (
    <>
      <h1> Chai aur react </h1>
      <h2> counter value : {counter} </h2>

      <button
      onClick = {addValue}
      > add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      > remove value  {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
