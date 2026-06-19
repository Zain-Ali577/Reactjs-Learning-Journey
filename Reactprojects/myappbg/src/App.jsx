import React, { useState, useEffect, useCallback } from "react";

const  Button = React.memo(({ onClick = () => {}, lable = "Button" }) => {
  const handleClick = () => {
    onClick();
  }

  console.log("Button Rendered!");
  return (
    <div>
      <button onClick={handleClick}>
        {lable}
      </button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(1);
  const [light, setLight] = useState(false);
  const [value, setVal] = useState("ERROR");

  const incrementPrev = () => {
    setCount((previous) => previous + 1);
  };

  const hvyFUNC = () => {
    setVal("FIX");
    console.log("RAN!");
  };

  // const increment = () => {
  //   setCount(count + 1);
  // };
  const increment = useCallback( () => {
    setCount(count + 1);
  }, []);

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count >= 10) {
      setLight(true);
    } else {
      setLight(false);
    }
  }, [count]);

  useEffect(() => {
    if (count > 4) {
      hvyFUNC();
    }
  }, [count, hvyFUNC]);

  return (
    <div classnName="container">
      <div className="card">
        <h1>💡 Light Controller</h1>
        <h2>Count:{count}</h2>
        <button onClick={incrementPrev}>Previous+1 </button>
        <button onClick={increment}> Count+1</button>
        <button onClick={decrement}> Count -1</button>
        <h3> Light is {light ? "ON" : "OFF"} </h3>
        <Button onClick={incrementPrev} lable="Increment"></Button>
      </div>
      <div>{value}</div>
    </div>
  );
}
export default App;
