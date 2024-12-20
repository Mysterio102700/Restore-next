'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/app/Assets/logo.png';
import Style from '@/app/Components/Navbar/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={Style.Navbar}>
      <Image src={Logo} width={130} height={50} alt="Logo" />
      
      <div className={`${Style.navItems} ${isMenuOpen ? Style.active : ''}`}>
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Before & After Gallery</li>
          <li>Reviews</li>
          <li>Locations</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <button className="gradientButton">Book Appointment</button>

      <div className={Style.hamburger} onClick={toggleMenu}>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
