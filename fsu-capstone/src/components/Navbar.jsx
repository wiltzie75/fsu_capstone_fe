import React, { useState } from "react";
import { Link, Navigate, NavLink } from 'react-router-dom';

const Navbar = ({  }) => {

    return (
        <div className="navbar">
        <NavLink to ="/" className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOEoXHSRQ5lkPLByMaG3CQzrr7ZpIg33yoQ&s" className="logo" alt="FSU logo" />
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