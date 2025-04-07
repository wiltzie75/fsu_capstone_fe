import React, { useState } from "react";
import { Link, Navigate, NavLink } from 'react-router-dom';

const Navbar = ({  }) => {

    return (
        <div className="navbar">
        <NavLink to ="/" className="logo">
            <img src="https://media.istockphoto.com/id/1184567639/vector/ecology-sphere-logo-formed-by-twisted-green-leaves.jpg?s=612x612&w=0&k=20&c=RuhMuEHwiUk50BonfU2yDBpo3IOBa7nywRdY069-TCU=" className="logo" alt="Green logo" />
        </NavLink>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>

        <li style={{ margin: '0 10px' }}>
          <Link to="/">Home</Link>
        </li>
        
          <li style={{ margin: '0 10px' }}>
            <Link to="/departments" >Departments</Link>
          </li>
        
          <li style={{ margin: '0 10px' }}>
            <Link to="/faculty" >Faculty</Link>
          </li>
        </ul>

        <div className="navbar-right">
          <button style={{ margin: '0 10px' }} className="signup">
            <Link to="/signup" >Sign Up</Link>
          </button>

          <button style={{ margin: '0 10px' }} className="login">
            <Link to="/login" >Login</Link>
          </button>
        </div>

        </div>
    )
}

export default Navbar;