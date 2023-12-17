/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
// import Info from "./info"
import Texte from "./texts"
import Info from "./info"
uuidv4()
function Quote({change,text,clickMe,shows}) {
  // const [show, sethide] = useState(false)
  
  return (
    <div className="formes">
      <input onChange={change} placeholder="firstName" type="text" name="firstName" value={text.firstName} />
      <input onChange={change} placeholder="lastName" type="text" name="lastName" value={text.lastName} />
      <input onChange={change} placeholder="Email" type="email" name="Email" value={text.Email} />
      
      <button onClick={() => clickMe()}>continue</button>
      {/* <button onClick={()=> clickMe()}>back</button> */}
      {/* {shows===false ? <Texte /> : <Info />} */}
      
  </div>
    )
    
  }

export default Quote