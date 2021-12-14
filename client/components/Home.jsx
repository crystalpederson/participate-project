import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div id = 'home'>
                <h1 className='title'>This is the home page!</h1>
                <Link to="participants">Period 1</Link>
            </div>
        )
    }
}

export default Home;