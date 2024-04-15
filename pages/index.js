'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation'

function Register() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function handleRegisterUser(event){
    event.preventDefault();
    if(email.length <= 0 || password.length <= 0 ){
      setError(true);
      return;
    }
    localStorage.setItem('user', JSON.stringify({email, password}));
    setEmail('');
    setPassword('');
    router.push('/login')

  }

  return (
    <div className='register'>
      <h2>Register</h2>
      <form className='sign-up-form' onSubmit={handleRegisterUser}>
        {error ? <p className='error-para'>"Email or password isn't entered!"</p>: null}
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='register-btn'>
          Register
        </button>
      </form>
      <div>
        Already have an account?
        <Link href='/login'>
          <button className='login-link'>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
