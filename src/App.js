import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Account from './components/account/Account';
import Bookmyticket from './components/bookmyticket/Bookmyticket';
import BusTicket from './components/busticket/BusTicket';
import CabRental from './components/cabrental/CabRental';
import Care from './components/care/Care';
import Changedate from './components/changedate/Changedate';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Payment from './components/payment/Payment';
import Ragistration from './components/ragistration/Ragistration';
import Showticket from './components/showticket/Showticket';
import TrainTickets from './components/traintickets/TrainTickets';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path="/" element={<BusTicket />}></Route>
   <Route path="/cabrental" element={<CabRental />}></Route> 
   <Route path="/traintickets" element={<TrainTickets />}></Route>
   <Route path="/care" element={<Care />}></Route>
   <Route path='/account'  element={<Account/>}></Route>
   <Route path='/login' element={<Login />}></Route>
   <Route path='/ragistration' element={<Ragistration/>}></Route>
   <Route path='/showticket' element={<Showticket/>}></Route>
   <Route path='/changedate' element={<Changedate/>}></Route>
   <Route path='/bookbus' element={<Bookmyticket/>}></Route>
<Route path='/payment' element={<Payment/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
   
  );
}

export default App;
