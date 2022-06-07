import React,{useState} from 'react'
import './Style.css'
import{useNavigate,} from 'react-router-dom'
export default function Edit() {
  const nav = useNavigate();
    const [errmess, setErrmess] = useState('')
    let catchUser = {firstName:'',lastName:'',workerId:''};
    function getValue(val, set) {
        if (set==="name"){catchUser.firstName= val};
        if (set==="lastName"){catchUser.lastName = val};
        if (set==="workerId"){catchUser.workerId = val};
        }
    
    function setUser(){
      if(catchUser.firstName==='' || catchUser.lastName==='' || catchUser.workerId==='')setErrmess('חסרים פרטים')
      else{
        window.localStorage.setItem("firstName", JSON.stringify(catchUser.firstName));
        window.localStorage.setItem("lastName", JSON.stringify(catchUser.lastName));
        window.localStorage.setItem("workerId", JSON.stringify(catchUser.workerId));
        nav('/ready');
        alert('הפרטים עודכנו');
        }
      }
    
  return (
    <div>
        <h2>שם פרטי</h2>
        <input onChange={(e) => getValue(e.target.value, "name")} className="inp" type="text" placeholder="שם פרטי"/>
        <br/>
        <h2>שם משפחה</h2>
        <input onChange={(e) => getValue(e.target.value, "lastName")} className="inp" type="text" placeholder="שם משפחה"/>
        <br/>
        <h2>מספר עובד</h2>
        <input onChange={(e) => getValue(e.target.value, "workerId")} className="inp" type="text" placeholder="מספר עובד"/>
        <br/>
        <h3 style={{color:'red'}}>{errmess}</h3>
        <button className="systemBtn" onClick={()=>setUser()}>עדכן</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
         <img className="logo-by" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN7Uxyh-vsMcEesK3cBZV-1OJdoIzU9ysIllqKYVBOhXUeZ9o12BFzIFRgOTCZqKG-XSyf2vVIXCklNTDa_urH-WfzYgAgeOw3TkVwRaUEeiUoJPU0eFwdkfx1yj2EQAK1i0ZyHOidLbZv-WCZRMCdiEMivXb-at-4OZ3tvfCy3idpwgwSRK3Xz-t45g/s16000/VS1%20NO%20BG.png" alt="logo"/>
        </div>
    </div>
  )
}
