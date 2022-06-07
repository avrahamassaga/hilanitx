import React,{useState} from 'react'
import './Style.css'
import{useNavigate,} from 'react-router-dom'
export default function Scanner() {
  const nav = useNavigate();
  const [finger, setfinger] = useState(4)
  const goTo=()=>{
    setfinger(finger-1)
    if(finger<=0){
      if(localStorage.getItem('workerId')=== 'undefined'||localStorage.getItem('workerId')===null)nav('/edit')
      else nav('/ready')
    }
  }
  return (
    <div>
        <h2>היי</h2>
        <br/>
        <br/>
        <img className="hand" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEWlDsXTYoTPBxR-quhld9oWjKsQCC29S8cfoYrqYgORLUANXg7P1lXAyPPdcIl0nSDgNnz_ZgzO5zUWRxm8f1QrZ6uTKaBlXR-nrtWwuL34qxSMR0YLY85FS3TkzQomq9EMTtWbxl26ACqJxuStQ4WfJa1xhsxxI1QaW9wSowxk7gyYi2XMNKA8fTYw/s320/hand.png" alt="hand"/>
        <div className="radar" onClick={goTo}>
            <img className="radarImg" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizPI5GI0K2lRmfJOOEOnvhdO3x7mJh4J40TRsbAoz1Qb1X4JpAIIj1NnwiZRXYDixZRaH5yRAcX13-YX82dwgExv1bxjRt4hxYeYUDjUVbxUQvbrKt834LtF2d-s7VenyHk4SGRsYPwg9aOz4Co9n0Ogq3D9gJhtwZqkkUMpbu9v3Q3Mb2TBx7Fzhw1w/s320/Screenshot_20220606-151959.jpg" alt="radarImg"/>
        </div>    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>קרבו את הנייד<br/>כדי להתחיל בדיווח</p>
    </div>
  )
}
