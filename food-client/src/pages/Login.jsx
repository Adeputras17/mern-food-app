import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
import Navbar from '../components/navbar/Navbar'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

    useEffect(() => {
      if(localStorage.getItem('currentUser')) {
          window.location.href= "/" //if isset user than reload to home page
      }
    } ,[])

    function loginHandler() {

        const users = {
            email,
            password
        }

        console.log(users);
        dispatch(login(users));
        
    }

  return (
    <div className='form-container'>
        <Navbar />
        <div className="form-row">
            <div className="form-col">
                <div className="form">
                    <input type="email" required placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='form-btn' onClick={loginHandler}>Login</button>
                    <a href="/register" className='form-other-link'>For Register</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
