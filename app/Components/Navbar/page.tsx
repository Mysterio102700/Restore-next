"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/Assets/logo.png";
import Style from "@/app/Components/Navbar/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={Style.Navbar}>
      <Link href="/">
        <Image src={Logo} width={130} height={50} alt="Logo" />
      </Link>

      <div className={`${Style.navItems} ${isMenuOpen ? Style.active : ""}`}>
        <ul>
          <li>
            <span>About Us <FontAwesomeIcon className="ml-2" icon={faCaretDown} /></span>
            <ul>
              <li>
                <Link href="/davinder-bhela">Meet Our Doctor </Link>
              </li>
              <li>
                <Link href="/about-us/our-pricing">Our Pricing</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/before-after-gallery">Before & After Gallery</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div >

      <button className="gradientButton">Book Appointment</button>

      <div className={Style.hamburger} onClick={toggleMenu}>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
      </div>
    </nav >
  );
};

export default Navbar;
