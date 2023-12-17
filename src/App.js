import React from "react";
import './App.css';
import  Quote from "./quote"
import Info from "./info"
import Head from "./head"
import Dele from "./deletetodo"
import { useState } from "react";

function App({notes}) {
  const [gn, setGn] = useState(false);
  function sw() {
    setGn(prev=>!prev)
  }
  return (
    <div>
      {/* <Quote /> */}
      < Head />
      {gn ? <Dele /> : <Info sw={sw} />}
      
      
    </div>
    
  );
}

export default App;
