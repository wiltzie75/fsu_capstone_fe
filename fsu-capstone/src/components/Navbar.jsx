import React, { useState } from "react";
import { Link, Navigate, NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLoginLogout }) => {

    return (
        <div className="navbar" role="banner">
        <NavLink to ="/" className="logo">
            <img src="/assets/Lincoln.png" className="logo" alt="LU logo" />
        </NavLink>
        <div className="navbar-title">
        <h1>Lincoln University</h1>
        </div>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>

        <li style={{ margin: '0 10px' }}>
          <Link to="/">Home</Link>
        </li>
        
          <li style={{ margin: '0 10px' }}>
            <Link to="/departments">Departments</Link>
          </li>
        
          <li style={{ margin: '0 10px' }}>
            <Link to="/faculty">Faculty</Link>
          </li>
        </ul>

        <div className="navbar-right">
          {!isLoggedIn ? (
            <li style={{ margin: '0 10px' }}>
              <Link to="/register">Register</Link>
            </li>
          ) : (
            <li style={{ margin: '0 10px' }}>
              <Link to="/account">Account</Link>
            </li>
          )}
          {!isLoggedIn ? (
            <li style={{ margin: '0 10px' }}>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li style={{ margin: '0 10px' }}>
              <Link to="/" onClick={() => handleLoginLogout(false)}>Logout</Link>
            </li>
          )}
        </div>
        </div>
    )
}

export default Navbar;

