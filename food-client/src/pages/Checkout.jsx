import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../actions/orderActions';
import Navbar from '../components/navbar/Navbar'

function Checkout() {

  const userState = useSelector(state=>state.loginUserReducer);
  const {currentUser} = userState;
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [shippingAddress, setShippingAddress] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function orderHandler() {

    if(name === '' || email === '') {
        alert('Fields is empty!')
    } else {
      const { data } = axios.post(
        '/api/orders/placeorders',
        {
          name: name,
          email: email
        },
        
        localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress))
       
      );
        
        console.log(data);
        dispatch(placeOrder(data));
        navigate('/orders');
      }
     
    }   
  return (
    <div className='form-container'>
        <Navbar />
        <div className="form-row">
            <div className="form-col">
                
                <div className="form">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Full Name'/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='E-mail' />
                    <textarea name="Address" required value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} id="" cols="30" rows="10" placeholder='Address'></textarea>
                    <button className='form-btn' onClick={orderHandler}>Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
