import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PartDataService from "../services/part.service.js";

class Login extends Component{

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);
        this.resetFields = this.resetFields.bind(this);
    
        this.state = {
            userEmail: '',
            userPassword: '',
            submitted: false
        }
    }

    onChangeName(e){
        this.setState({
          userEmail: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
          userPassword: e.target.value
        });
    }

    login(){
        var data = {
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        console.log(data);
        
        PartDataService.verifyUser(data)
          .then(response => {
              this.setState({
                submitted: true
              });
              this.resetFields();
          })
          .catch(e => {
              console.log(e);
          })
    }
    
    resetFields(){
        this.setState({
            userEmail: '',
            userPassword: '',
            submitted: false
        });
    }

    render(){
        return(
            <div id = 'login'>
                <div className='form-group' id='login form'>
                    <p>Email</p>
                    <input type='text' placeholder='Email' className='loginInputForm' value={this.state.userEmail} onChange={this.onChangeName}></input>
                    <p>Password</p>
                    <input type='password' className='loginInputForm' value={this.state.userPassword} onChange={this.onChangePassword}></input>
                </div>
                <Link id='loginButton' to={'/'}>Log in</Link>
                {/* <button id='loginButton' onClick={this.login}>Log In</button> */}
                <p>Don't have an account?  Click <Link id='signUp-link' to={'/signup'}>here</Link> to sign up!</p>
            </div>
        )
    }
}

export default Login;