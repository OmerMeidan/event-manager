import React from 'react';
import './pages.css'
import { useContext } from 'react';
import {ContextValue} from "../App"
import gip from '../Lotties/131329-nothing-found (1).json'
import Lottie from "lottie-react";
function EventsList() {
    const removeEvent=(i)=>{
        const change2=change.filter((num,j)=>j!==i)
        setChange(change2)
    }
    const {change,setChange}=useContext(ContextValue)
    console.log(change);
    return (
        <div>
            <h1>My Events</h1>
        <div className='EventsList'>
        {change.length!==0?change.map((a,i)=>
        <p key={i}>
       <b> {a.eventName  + ": "}</b>
        <span>{a.eventDiscription + ", "}</span>
        <span>{a.eventDate + " , "}</span>
        <span>{"at: "+a.eventHour }</span>
        <button onClick={()=>removeEvent(i)}>delete event</button>
        <br />
        </p>
        ):
            <div style={{width:'200px',height:'200px'}}>
                <br /><br />
                <span style={{marginTop:'100px'}}>There is no events</span>
                <br />
                <br /><br /><br />
                <Lottie animationData={gip} loop={true}
                />
            </div>
            }
        </div></div>
    );
}

export default EventsList;

