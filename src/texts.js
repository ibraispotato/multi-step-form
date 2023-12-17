
import React, { useEffect } from 'react'
import { useState } from "react";

import { click } from '@testing-library/user-event/dist/click';
import Quote from "./quote"
function TodoText({clickMe,clickMes,text,ok,sw}) {

   
    return (
        <div className='formess'>
            <div className='textssss'>
                <h2>firstName : </h2>
                <h2>{text.firstName}</h2>
            </div>
            <div className='textssss'>
                <h2>lastName : </h2>
                <h2>{text.lastName}</h2>
            </div>
            <div className='textssss'>
                <h2>Email : </h2>
                <h2>{text.Email}</h2>
            </div>
            <div className='textssss'>
                <h2>occupation : </h2>
                <h2>{text.occupation}</h2>
            </div>
            <div className='textssss'>
                <h2>city : </h2>
                <h2>{text.city}</h2>
            </div>
            <div className='textssss'>
                <h2>bio : </h2>
                <h2>{text.bio}</h2>
            </div>

            <div className='btns'>
                <button onClick={sw}>confirm</button>
                <button onClick={clickMes}>back</button>
            </div>
        </div>
    )
}
export default TodoText


// firstName: "",
// lastName: "",
// Email: "",
// occupation: "",
// city: "",
// bio: