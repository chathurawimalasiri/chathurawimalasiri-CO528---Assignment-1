import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/students/new">Add Student</Link>
    </div>
  );
};

export default Navbar;
