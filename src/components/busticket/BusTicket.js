import React from 'react';
import Card1 from '../cards/Card1';
import Card2 from '../cards/Card2';
import Card3 from '../cards/Card3';
import Card4 from '../cards/Card4';
import Card5 from '../cards/Card5';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer';
import './BusTicket.css';
const BusTicket = () => {
  return (
  <>
  <div className='main-busticket'>
    <div className='hero-image'>
      <img src='https://st.redbus.in/Images/HomeIndia/HeroImageV2_C.png' />
    </div>
 
  <div className='trending-offers'>
            <h1>Trending Offers</h1>
        </div>
        <div className='cards'>
        <Cards/> <Card1/> <Card2/>
        </div>
<br></br>
<br></br>
        <div className='cards'>
          <Card3/> <Card4/> <Card5 className="last-card" />
        </div>
       <Footer/>
       </div>
</>

  )
}

export default BusTicket