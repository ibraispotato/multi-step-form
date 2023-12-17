import React, { useState,useEffect, useMemo } from "react";
import InputsAndButtons from "./texts";
import Quote from "./quote"
import Num from "./nums"
import { v4 as uuidv4 } from 'uuid'
import Texte from "./texts"
import Dele from "./deletetodo"
uuidv4()
function Head({sw}) {
  const [text, SetText] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    occupation: "",
    city: "",
    bio: ""
  })
  const [show, setShow] = useState(false)
  // const [shows,setShows] = useState(false)
  
  function change(e) {
    const { value, name } = e.target
    SetText(prev => ({
      ...prev,
      [name] : value
    }))
  }
  function clickMe() {
    setShow(prev => !prev)
  }
  const [shows,setShows] = useState(false)

  // eslint-disable-next-line no-redeclare
  function clickMes() {
      setShows(prev => !prev)
    }
  console.log(shows)
  const [showr, setTshowr] = useState(false);
  function ok() {
      setTshowr(prev=>!prev)
  }
  return (
    <div>
      {shows === false ?
        show === false ? 
        <Quote clickMe={clickMe} change={change} text={text} /> :
        <Num clickMe={clickMe} change={change} clickMes={clickMes} text={text} /> :
         <Texte clickMes={clickMes} text={text} clickMe={clickMe} sw={sw} />} 
      {/* {shows === false ?  <Dele clickMes={clickMes} /> : "" } */}
    </div>
    
);
}

export default Head