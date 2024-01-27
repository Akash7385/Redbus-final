import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'


const Login = () => {
  return (

    <>
    <div className='container px-6'>
        <div className='row'>
            <div className='col-md'>
   <img src='https://s3.rdbuz.com/Images/webplatform/contextualLogin/desktop-payment-offers.svg'></img> </div>
<div className='col'>
<img src='https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg'></img>
<p className='discounts'>Sign in to avail exciting</p>
<p className="discounts">discounts and casebacks!!</p>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
<div>
    <br></br>
  <NavLink to ='/ragistration'  className='reg'>Click Here! for New Ragistration</NavLink>
  </div>
</form>
  
 
</div>
</div>
    </div>
    
    </>
  )
}

export default Login