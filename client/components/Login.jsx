import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
    render(){
        return(
            <div id = 'login'>
                <div className='form-group' id='login form'>
                    <p>Email</p>
                    <input type='text' placeholder='Email' className='loginInputForm'></input>
                    <p>Password</p>
                    <input type='password' className='loginInputForm'></input>
                </div>
                <Link id='loginButton' to={'/'}>Log in</Link>
                <p>Don't have an account?  Click <Link id='signUp-link' to={'/signup'}>here</Link> to sign up!</p>
            </div>
        )
    }
}

export default Login;