import React from 'react'
import '../styles/pages/authstyles.scss';
import InputBox from '../components/UI/InputBox';
import PasswordBox from '../components/UI/PasswordBox';
import GoogleAuthButton from '../components/UI/GoogleAuthButton';
import AuthOr from '../components/UI/AuthOr';

function Login() {
  return (
    <div className="login">
        <div className="container">
            <h2 className="auth-heading">
                login
            </h2>
            <form >
                <InputBox type='text' placeholder='username or email'/>
                <div className="auth-password">
                    <PasswordBox placeholder='password'/>
                    <div className="not-auth">
                        <a href="/forget" id='red'>
                            forget password
                        </a>
                        <a href="/register" id='red'>
                            {"haven't any account?"} <span id='reg'>register</span>
                        </a>
                    </div>
                </div>
                <button className='login-btn' type='submit'>
                    Login
                </button>
            </form>
            <AuthOr message={'or login with'}/>
            <GoogleAuthButton/>
        </div>
    </div>
  )
}

export default Login