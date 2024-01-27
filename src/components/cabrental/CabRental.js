import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '../footer/Footer';
import './CabRental.css';


const CabRental = () => {
  return (
    <>
    <div className='cab-rent'>
      <div className='refer-img'>
        <img src='https://st.redbus.in/Images/99/webreferal.png' />
      </div>
      <br></br><br></br>
      <div className='background firstsection'>
        <div className='cab-rental-container'>

          <div className='right-container'>
            <p className='cab-text'>NOW, <b>GET MORE THAN </b></p>
            <p className='cab-text'><b>JUST BUS </b>TICKETS WITH </p>
            <p className='cab-text redbus'>REDBUS!</p>
<div className='down-items'>
            <div className='down-text'>
              <img src='	https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde.svg' />
              <p className='cab-train'>Cab/Bus Rental</p>
              <u><img src='https://s1.rdbuz.com/web/images/homeV2/AboutUs/redRail.svg' /></u>
              <p className='cab-train ticket'>Train Tickets</p>
            </div>


            <div className='logos'>
              <p>Rent Cabs, Tempo Travellers & Buses with best drivers</p>
              <div className='car'>
                <img src='https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg' />
                <p><b>Outstation</b></p>
              </div>

              <div className='car-time'>
                <img src='https://s1.rdbuz.com/web/images/homeV2/AboutUs/ryde_car_hourly.svg' />
                <p className='rental'><b>Hourly Rental</b></p>
              </div>

              <div className='airport'>
                <img src='https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde_airport_transport.svg' />
                <p><b>Airport Transfers</b></p>
              </div>
            </div>

            <Button variant="danger">Book Cab / Bus Rental <FaArrowRightLong />
            </Button>{' '}

          </div>
          </div>
          <div className='left-container'>
            <img src='https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg' />
          </div>
        </div>
      </div>
      </div>
    
      <Footer/>
    </>
  );

}

export default CabRental