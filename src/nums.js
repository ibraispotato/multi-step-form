import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Texte from "./texts"
import { useState } from "react"

function Nums({ change, text, clickMe, clickMes }) {
    
  
    return (
        <div className="formes">
            <input onChange={change} placeholder="occupation" type="text" name="occupation" value={text.occupation} />
            <input onChange={change} placeholder="city" type="text" name="city" value={text.city} />
            <input onChange={change} placeholder="bio" type="text" name="bio" value={text.bio} />
            <div className="btns">
                <button onClick={() => clickMes()}>continue</button>
                <button onClick={()=> clickMe()}>back</button>
            </div>
           
            
        </div>
        
    )
}

export default Nums
