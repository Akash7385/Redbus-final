import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BiSupport } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
    const [NavElement, setNavElement] = useState(false);
  return (
   <>
   <nav>
    <div className='nav-container'>
       
        <div className='nav-logo'>
            <img src='https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg' alt='nav-logo'/>
        </div>
        <div className='nav-items-bus-tickets'>
            <img src='	https://st.redbus.in/web/images/layout/rb_vertical.svg' alt='nav-items'/>
            <NavLink to ='/'>Bus Tickets</NavLink >
        </div>

        <div className='nav-items-cab'>
            <img src='	https://st.redbus.in/web/images/layout/ryde_vertical.svg'
            alt='nav-items'/>
            <NavLink to ='/cabrental'>Cab Rental</NavLink>
        </div>

<div className='nav-items-train'>
    <img src='	https://st.redbus.in/web/images/layout/rail_vertical.svg'/>
    <NavLink to='/traintickets'>Train Tickets</NavLink >
</div>

<div className='nav-care'>
<NavLink to="/care" className="care"><BiSupport />
<span>Help</span></NavLink>
</div>


<div  className='account'>
<DropdownButton id="dropdown-item-button" title="Account">
      <NavLink to="/bookbus"><Dropdown.Item as="button">Book My Tickets</Dropdown.Item></NavLink>
      <NavLink to="/changedate"><Dropdown.Item as="button">Change Travel Dates</Dropdown.Item></NavLink>
      <NavLink to="/showticket"><Dropdown.Item as="button">Show My Ticket</Dropdown.Item></NavLink>
      <NavLink to="/login"><Dropdown.Item as="button">Login/Signup</Dropdown.Item></NavLink>
      <NavLink to="/payment"><Dropdown.Item as="button">Payments</Dropdown.Item></NavLink>


    </DropdownButton>
</div>

{/* Hamberger menu */}

<div className='hamberger-menu'>
    <a href='#' onClick={()=>setNavElement(!NavElement)}>
    <GiHamburgerMenu />
    </a>
</div>
    </div>
    </nav>

    {/* mobile menu start */}

    <div className= {NavElement ? "mobile-menu" :"menu-link"}>
    
   <div className='bar-list bus'>
    <img src='https://st.redbus.in/web/images/layout/rb_vertical.svg' alt='nav-items'/>
            <NavLink to ='/'>Bus Tickets</NavLink >
    </div>
    <hr></hr>
    <div className='bar-list'> 
        <img src='	https://st.redbus.in/web/images/layout/ryde_vertical.svg'
            alt='nav-items'/>
            <NavLink to ='/cabrental'>Cab Rental</NavLink>
            </div>
            <hr></hr>
    
<div className='bar-list'>
<img src='	https://st.redbus.in/web/images/layout/rail_vertical.svg'/>
    <NavLink to='/traintickets'>Train Tickets</NavLink >
</div>
<hr></hr>
<div className='bar-list care-mobo'>
    
    <NavLink to="/care"><BiSupport />
<span>Help</span></NavLink>
</div>
</div>


   </>
  )
}

export default Navbar