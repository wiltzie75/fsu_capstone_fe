import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink } from 'react-router-dom';


const Navbar = ({ isLoggedIn, handleLoginLogout }) => {
  const [departments, setDepartments] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/departments")
    .then((response) => response.json())
    .then((data) => {
      setDepartments(data);
    })
    .catch((error) => {
      console.error("Couldn't fetch departments", error);
    });
  }, []);

    return (
        <div className="navbar" role="banner">
        <NavLink to ="/" className="logo">
            <img src="/assets/Lincoln.png" className="logo" alt="LU logo" />
        </NavLink>

        <div className="navbar-title">
          <h1>Lincoln University</h1>
        </div>

        <ul>
        <li style={{ margin: '0 10px' }}>
          <Link to="/">Home</Link>
        </li>
        
          <li style={{ margin: '0 10px' }} className="nav-dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}>
            <span className="nav-dropdown-toggle">Departments <i className="fas fa-caret-down" />
            </span>
            {dropdown && (
              <ul className="dropdown-menu">
                {departments.map((department) => (
                  <li key={department.id}>
                    <Link className="dropdownLink" to={`/department/${department.id}`}>{department.name}</Link>
                  </li>
                ))}
              </ul>
            )}
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

