import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    {' '}
    <Link to="/about">About</Link>
    {' '}
    <Link to="/clients">Clients</Link>
    {' '}
    <Link to="/gallery">Gallery</Link>
    {' '}
    <Link to="/services">Services</Link>
    {' '}
    <Link to="/supporters">Supporters</Link>
  </nav>
)

export default Navbar;
