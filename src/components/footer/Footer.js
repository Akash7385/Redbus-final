import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
  
        <div className='footer-container '>
            <div className='footer-elements'>
                <div className='book'>
            <ul>
                <li>
                    <a><u><b>Book</b></u></a>
                    </li>
                    <li> <a>Bus Tickets</a></li>
                   <li><a>rYde</a></li>
                    <li> <a>Tempo Traveller</a></li>
                   <li>  <a>Car Rentals</a></li>
                  <li> <a>Bus Hire</a></li>
                   
            </ul>
            </div>

            <div className='about'>
            <ul>
                <li>
                    <a><u><b>About</b></u></a>
                    </li>
                   <li><a>About Us</a></li>
                    <li> <a>Contact Us</a></li>
                   
            </ul>
            </div>


            <div className='info'>
            <ul>
                <li>
                    <a><b><u>Info</u></b></a>
                    </li>
                   <li><a>T & C</a></li>
                    <li> <a>Privacy Policy</a></li>
                    <li> <a>Cookie Policy</a></li>
                    <li> <a>FAQ</a></li>

                   
            </ul>
            </div>

            <div className='global-sites'>
            <ul>
                <li>
                    <a><u><b>Global Sites</b></u></a>
                    </li>
                   <li><a>India</a></li>
                    <li> <a>Singapure</a></li>
                    <li> <a>Malasiya</a></li>
                    <li> <a>Bhutan</a></li>

                   
            </ul>
            </div>

            <div className='our-partners'>
            <ul>
                <li>
                    <a><u><b>Our-Partners</b></u></a>
                    </li>
                   <li><a>Goibibo</a></li>
                    <li> <a>Make My Trip</a></li>
                    <li> <a>Easy Trip</a></li>
            </ul>
            </div>
            <div className='footer-logo'>
                <img src='	https://www.redbus.in/bushire/static/mwebv2/header/logo_rb.svg'/>
                <p>@{new Date().getFullYear()} Redbus India Private Limited.</p>
                <p> &#169;All Rights Reserved</p>
            </div>
            </div>
        </div>

        


    </>
  )
}

export default Footer