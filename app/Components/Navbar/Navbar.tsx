"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/Assets/logo.png";
import Style from "@/app/Components/Navbar/Navbar1.module.css";
import Link from "next/link";
import GradientButton from "../gradientButton/GradientButton";

type MenuItem = string | { [key: string]: MenuItem[] };

interface MenuProps {
  items: MenuItem[];
}

const Navbar: React.FC = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number | null) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const menuItems: MenuItem[] = [
    { "About us": ["Meet Our Doctor", "our Pricing"] },
    {
      "Our Services": [
        {
          "Non Invasive Laser Therapies": [
            "Laser Therapy",
            "Deep Tissue Laser Therapy",
            "Class 2 Laser Therapy",
            "Class 4 Laser Therapy",
            "Low-Level Laser Therapy",
            "High power Laser Therapy",
            "High-Intensity Laser Therapy (HILT)",
          ],
        },
        {
          "Common Foot and Ankle Problems": [
            "Plantar Fasciitis",
            "Toenail Fungus",
            "Flatfoot",
            "Achilles Tendon",
            "Bunions",
            "Chemotherapy Induced Neuropathy",
            "Foot Arthritis",
            "Foot Numbness",
            "Hammertoe",
            "Heel pain",
            "Idiopathic Neuropathy",
            "Ingrown Toenails",
            "Plantar wart",
          ],
        },
        { "Diabetic Foot Care": ["Diabetic Neuropathy"] },
        "Minimally Invasive Foot Surgery",
        {
          "Non Invasive Shockwave Therapies": [
            "Focused Shockwave Therapy",
            "Radial Shockwave Therapy",
          ],
        },
        { "Non Surgical Treatment for Ingrown Toenails": ["Onyfix Treatment"] },
        { "Regenerative Medicine": ["Biologic Regenerative Injection"] },
        {
          "Restore Exclusive Program": [
            "Clear Nail program<sup>TM</sup>",
            "Clear wart program<sup>TM</sup>",
            "Custom 3D printed Orthotics",
            "Power Heel program<sup>TM</sup>",
            "Neuropathy program",
          ],
        },
        "Sports Injury",
        "Swift Microwave",
      ],
    },
    "Before and After",
    "Reviews",
    "Locations",
    "Contact Us",
    "Blogs",
  ];

  const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
      <ul className={Style.menu}>
        {items.map((item, index) => {
          if (typeof item === "object" && !Array.isArray(item)) {
            const [key, value] = Object.entries(item)[0];
            return (
              <li key={index} className={`${Style.navItem}`}>
                {key}
                {openDropdown === index && (
                  <ul className={Style.dropdown}>
                    <Menu items={value} />
                  </ul>
                )}
              </li>
            );
          } else if (Array.isArray(item)) {
            return (
              <li key={index} className={Style.subNavItem}>
                <Menu items={item} />
              </li>
            );
          }
          return (
            <li key={index} className={Style.navItem}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={Style.Navbar}>
      <Link href="/">
        <Image src={Logo} width={130} height={50} alt="Logo" />
      </Link>

      <div className={`${Style.navItems} ${isMenuOpen ? Style.active : ""}`}>
        <Menu items={menuItems} />
      </div>
      <GradientButton buttonText="Book Appointment" />

      <div className={Style.hamburger} onClick={toggleMenu}>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
