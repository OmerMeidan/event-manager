import React from 'react';
import { useParams } from "react-router-dom"
import { useContext } from 'react';
import {ContextValue} from "../App"
function EventDetails() {
    
    const params=useParams()
    const {change}=useContext(ContextValue)
   
    return (
        <div className='details'>
            <div><h1>Event Details</h1></div>
            <div className='detailsInfo'>
            <p> {<b>{change[params.index].eventName}</b>}</p>
           <p> {change[params.index].eventDiscription}</p>
           <p> {change[params.index].eventDate}</p>
           <p>{change[params.index].eventHour}</p>
            </div>

        </div>
    );
}

export default EventDetails;