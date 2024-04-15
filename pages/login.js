'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  function handleLogin(e){
    e.preventDefault();
    if(email.length <= 0 || password.length <= 0 ){
      setError(true);
      return;
    }
    const registeredUser = JSON.parse(localStorage.getItem('user'));
    if(registeredUser && registeredUser.email === email && registeredUser.password === password){
      setIsLogIn(true);
      setError(false);
      setEmail('');
      setPassword('');
      localStorage.setItem('isLoggedIn', "true");
      router.push('/store')
    }
    else{
      setError(true);
    }
  }
  // useEffect(()=>{
  //   const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  //   if(isLoggedIn){
  //     router.push('/store');
  //   }
  // },[])
  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error ? <p className='error-para'>"Email or password is invalid"</p> : null}
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='login-btn'>
          Log In
        </button>
      </form>
      <div>
        Don't have an account?
        <Link href='/'>
          <button className='register-link'>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
