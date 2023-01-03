import React from 'react';
import { NavLink } from 'react-router-dom'
import '../pages/pages.css'
function NavBar(props) {
    return (
        <div className='navBar'>
            <NavLink className='navBarFont' to="/EventsList"><span >My Events</span></NavLink>
            <span id='eventManeger'>Event Manger</span> 
            <NavLink className='navBarFont' to="/Events"><span >Add new event</span></NavLink>
        </div>
    );
}

export default NavBar;

