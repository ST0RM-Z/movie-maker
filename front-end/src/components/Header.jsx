import React from 'react'
import {Link,BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './AllRoutes';
import Navbar from 'react-bootstrap/Navbar'


function NavigationPanel(params) {
    return(
        <Navbar className='p-4' bg="primary" variant="light" expand="lg">
     
        
        <Link className='text-light p-4' to="/">Home </Link>
        <Link className='text-light p-4' to="/addmovies" >Add Movies </Link>
       

        </Navbar>
    )
}

export default function Header() {
  return (
    <Router>
    <NavigationPanel />

    <AllRoutes />
    </Router>
  )
}
