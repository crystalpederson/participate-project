import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
import ParticipantsContainer from './ParticipantsContainer.jsx';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';


class App extends Component{
  render(){
    return(
      <div>
        <nav className='navbar'>
          <a href='/' className='nav-link' id='homeLink'>
            <strong>Home</strong>
          </a>
          <p id='mainTitle'>Participate!</p>
          <div className='navbar-nav'>
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
          </div>
        </nav>

        <div className='container'>
          <Routes>
            <Route path={'/home', '/'} element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='participants/:id' element={<ParticipantsContainer/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
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