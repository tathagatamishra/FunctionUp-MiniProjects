import { useState } from "react";
import "./App.css";
import Calculator from "./component/calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src="/calculator.png" className="logo" />
      </div>
      <h1 className="heading">React Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
