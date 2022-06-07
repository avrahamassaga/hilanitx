import React from 'react'
import{setDay,clock,firstName,lastName,workerId} from '../UserData.js'
import{useNavigate} from 'react-router-dom'
export default function Ready() {
  const nav = useNavigate();
 
  return (
    <div>
        <h3>בתאבון, <span>{firstName}</span></h3>
        <div className="Cyrcle" style={{backgroundColor:'#f59542'}}>
            <img className="tickateIcon" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiA99Xgne_fXQyjuBliuljVRJufck8JuHKPg9FwClyCaEmv3djFN5D5Ct-kiAo2LE8n6OrUd3Bray3o5uJAMymjb6rsiFm7KirVrRqF_hrDCXrTpCLiCj58zTmrmy-6AdWCDFVtsEF-_PoUhVfpRyehfO4Rfm2rNrei_2jhiGr40rewJrOVI6T2lip_eQ/s1600/readyPng.png" alt=""/>
            <h3 className="titleBuis" >א. מעויין שורק</h3>
        </div>
        <h2 style={{color:'#f59542'}} >שובר ארוחה נקלט</h2>
        <h1>{setDay}</h1>
        <h2>שעה {clock}<br/>עבור {firstName} {lastName} {workerId}</h2>
        <button className='systemBtn' onClick={()=>nav('/final')}>למימוש שובר</button>
    </div>
  )
}
