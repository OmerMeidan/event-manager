import React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import {ContextValue} from "../App"
import { NavLink } from 'react-router-dom'
function Events() {
    ////////////////////////////
    const {setChange,change}=useContext(ContextValue)
    ///////////////////////////
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setChange([...change,{
        eventName: data.eventName,
        eventDiscription: data.eventDiscription,
        eventDate: data.eventDate,
        eventHour: data.eventHour
    }]) 
    console.log(change);
    const name=()=>{
         return((change.map((a,i)=><NavLink id='eventName' key ={i} to={`/EventDetails/${i}`}><li><b>{a.eventName}</b></li></NavLink>)));
    }
    return (    
        <div>
            <div><h1>Add new event</h1></div>
        <div className='Events'>
            <form className='EventsForm' onSubmit={handleSubmit(onSubmit)}>
                <input id='name' type="text" placeholder='Event name' {...register("eventName", { required: true})} />
                {errors.eventName&&<span style={{color:'red'}}>please enter an event name !</span>}                
                <input id='discription' type="text" placeholder='Description' {...register("eventDiscription", { required: true })} /> 
                {errors.eventDiscription&&<span style={{color:'red'}}>please enter discription for your event !</span>}      
                <input class='dateAndTime' type="date" placeholder='Event Date' {...register("eventDate", { required: true },{min:0},{max:3})} />
                {errors.eventDate&& <span style={{color:'red'}}>please enter a date for your event !</span>}
                <input class='dateAndTime' type="time" placeholder='Event Time' {...register("eventHour", { required: true })} />
                {errors.eventHour&& <span style={{color:'red'}}>please enter an hour for your event !</span>}
                <button onClick={()=>name()} type="submit">submit</button>
            {name()}
            </form>
        </div>
        </div>
    )
}

export default Events;