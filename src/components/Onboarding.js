import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();
  return (
    <div className='screen'>
        <div className='rsvp-img kyle-rsvp-img'></div>
        <h1 className='powered-by'>Powered By CodeLabs x Mozilla</h1>
        <div className='graphic-1'></div>
        <div className='welcome-text'>
            <p className='text kyle-extrabold'>Want free <br></br>WiFi?</p> <br/>
            {/* <p className='text kyle-medium'>WiFi?</p><br/> */}
            <p className='text kyle-regular'>Unscript 2k23 got you covered</p>
        </div>
        <button className='button kyle-button' onClick={()=>{navigate("/donts");}}>
        See More
        </button>
    </div>
  )
}
