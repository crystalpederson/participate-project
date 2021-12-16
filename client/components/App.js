import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './Home.jsx';
import ParticipantsContainer from './ParticipantsContainer.jsx';
import Login from './Login.jsx';


class App extends Component{
  render(){
    return(
      <div>
      {/* //   <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
      //     <Container>
      //       <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      //       <Navbar.Collapse id='responsive-navbar-nav'>
      //         <Nav>
      //           <Nav.Link href='/'>Home</Nav.Link>
      //           <Nav.Link href='/login'>Log In</Nav.Link>
      //         </Nav>
      //       </Navbar.Collapse>
      //     </Container>
      //   </Navbar> */}
        <nav className='navbar'>
          <a href='/' className='nav-link' id='homeLink'>
            <strong>Home</strong>
          </a>
          <div className='navbar-nav'>
            {/* <li className='nav-item'>
              <Link to={'/participants'} className='nav-link'>
                Participants
              </Link>
            </li> */}
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
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