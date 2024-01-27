import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '../footer/Footer';
import './TrainTickets.css';

const TrainTickets = () => {
  return (
  <>
  <div className='train-background'>
  <div className='train-main-container'>
    <div className='train-right'>
    <p className='train-text'>NOW, <b> ALSO GET MORE THAN </b></p>
            <p className='train-text color'>JUST <b>Train TICKETS</b> WITH </p>
            <p className='train-redbus color redbus'>REDBUS!</p>
            <Button variant="primary">Book Train Tickets <FaArrowRightLong /></Button>{' '}

    </div>
   
<div className='train-left'>
<img src='https://beebom.com/wp-content/uploads/2022/04/redRail-app-released-ss-1.jpg'/>
</div>
</div>
  </div>
  
    <Footer/>
    </>
  )
}

export default TrainTickets