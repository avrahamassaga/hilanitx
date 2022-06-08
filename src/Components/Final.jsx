import React from 'react'
import{setDay,clock,firstName,lastName,workerId} from '../UserData.js'
export default function Final() {
  return (
    <div>
        <h3>בתאבון, <span>{firstName}</span></h3>
        <div className="Cyrcle" style={{backgroundColor:'#41ae4c'}}>
            <img className="tickateIcon" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGLa9qwfQWVggQu-ZS4WmAmnG_kAaaddWgCdKv7kGmBhezLX8ho-uHh9faulJp7m4HS2FWGJvdBMgchYdfSO4kEtY0VKddHNjBd-b0_HRICEEpC0lVE4uxXcLoTCI6OaAS3ZcbnvzIsjbkiIVZGG5qbxo9u2FfE8XOYrUXDip6P7jNLlvnIg1Z0rwspA/s1600/finalPng.png" alt="tickate" />
            <h3 className="titleBuis" >א. מעויין שורק</h3>
        </div>
        <h2 style={{color:'#41ae4c'}} >הארוחה נמסרה</h2>
        <h1>{setDay}</h1>
        <h2>שעה {clock}<br/>עבור {firstName} {lastName} {workerId}</h2>
    </div>
  )
}
