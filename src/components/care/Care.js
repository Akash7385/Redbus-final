import React from 'react';
import { MdEmail, MdOutlineSupportAgent } from "react-icons/md";

import Footer from '../footer/Footer';
import './Care.css';
const Care = () => {
  return (
    <>
    <div className='care-text'>
      <p> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
      </p>

<p>ecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem </p>
    </div>
    <div className='care-container'> 
    <div className='care-logo'>
    <a href='https://www/rebus custmer care.com' target='_blank'><MdOutlineSupportAgent  />
    <span>+55 25562398</span>
    </a>
    </div>
    <div className='email'>
    <a href='https://www.redbus.com' target='_blank'><MdEmail />
    <span>redbus@45213.com</span>
    </a>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Care