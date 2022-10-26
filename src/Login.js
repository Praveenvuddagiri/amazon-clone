import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import auth from './firebase';
import './Login.css'
function Login() {
    const navigate = useNavigate ();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate('/');
        })
        .catch(e => alert(e.message));
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{
            navigate('/');
        })
        .catch(e => alert(e.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo'
                    src='https://www.citypng.com/public/uploads/preview/-11596409153ixy8eolhxq.png'
                    alt='amazon-logo' />
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button> 
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className='login__RegisterButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;