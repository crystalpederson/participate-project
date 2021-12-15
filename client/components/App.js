import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
import ParticipantsContainer from './ParticipantsContainer.jsx';
import Login from './Login.jsx';


class App extends Component{
  render(){
    return(
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>
            Home
          </a>
          <div className='navbar-nav'>
            {/* <li className='nav-item'>
              <Link to={'/participants'} className='nav-link'>
                Participants
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
            </li>
          </div>
        </nav>

        <div className='container'>
          <Routes>
            <Route path={'/home', '/'} element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='participants' element={<ParticipantsContainer/>}></Route>
          </Routes>
        </div>

      </div>
    )
  }

};

export default App;


// render(){
  //     return (
  //   <div className="router">
  //     <div className = "title">
  //       <h1>Participate!</h1>
  //     </div>
  //     <main>
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={<Home/>}
  //         />
  //         <Route
  //           path="/participants"
  //           // path='/'
  //           element={<ParticipantsContainer/>}
  //         />
  //       </Routes>
  //     </main>
  //   </div>
  // );
  // }