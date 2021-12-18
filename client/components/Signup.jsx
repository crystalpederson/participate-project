import React, { Component } from 'react';

class SignUp extends Component{
    render(){
        return(
            <div id = 'signUp'>
                <h1>This is the sign-up page!</h1>
                <div className='form-group' id='sign-up form'>
                    <p>Name</p>
                    <input type='text' placeholder='Name' className='loginInputForm'></input>
                    <p>Email</p>
                    <input type='text' placeholder='Email' className='loginInputForm'></input>
                    <p>Password</p>
                    <input type='password' className='loginInputForm'></input>
                </div>
                <button id='signUpButton'>Submit</button>
            </div>
        )
    }
}

export default SignUp;