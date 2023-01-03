import { useState } from 'react';
function EventsAction() {
    const [change,setChange]=useState([])
    
    return {change,setChange}
       
}

export default EventsAction;


