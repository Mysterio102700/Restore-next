"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@/app/Assets/logo.png";
import Style from "@/app/Components/Navbar/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import GradientButton from "../gradientButton/GradientButton";
import { AxiosInstance } from "@/app/api/AxiosInstances/AxiosInstances";
import { generateSlug } from "../GenerateSlug/GenerateSlug";

import {
  Service,
  subSubService
} from '@/app/models/servicesPageModels'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };


  const [serviceData, setServiceData] = useState<Service[]>([]);
  const [subSubServiceDetails, setSubSubServiceDetails] = useState<subSubService[]>([]);
  const [selectedServiceName, setSelectedServiceName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesResponse, subServicesResponse] = await Promise.all([
          AxiosInstance.get('/services'),
          AxiosInstance.get('/services/subServices/subSubServices')
        ]);

        setServiceData(servicesResponse.data);
        setSubSubServiceDetails(subServicesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <nav className={Style.Navbar}>
      <Link href="/">
        <Image src={Logo} width={130} height={50} alt="Logo" />
      </Link>

      <div className={`${Style.navItems} ${isMenuOpen ? Style.active : ""}`}>
        <ul>
          <li>
            <span>
              About Us <FontAwesomeIcon className="ml-2" width={20} icon={faCaretDown} />
            </span>
            <ul>
              <li>
                <Link href="/davinder-bhela">Meet Our Doctor </Link>
              </li>
              <li>
                <Link href="/our-pricing">Our Pricing</Link>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <Link href="/services">
                Api Services
              </Link>
              <FontAwesomeIcon className="ml-2" width={20} icon={faCaretDown} />
            </span>
            <ul>
              {serviceData.map((service, index) => (
                <li key={index} onMouseEnter={() => setSelectedServiceName(service.title.replace(/[\n\s]+/g, ' '))}
                  onMouseLeave={() => setSelectedServiceName(null)}
                  onClick={() => {
                    setSelectedServiceName(service.title.replace(/[\n\s]+/g, ' '));
                    sessionStorage.setItem("serviceName", (service.title).replace(/[\n\s]+/g, ' '))
                  }}>
                  <Link
                    href={`/services/${generateSlug(service.title)}`}

                  >
                    {service.title}
                  </Link>
                  <ul>
                    {
                      subSubServiceDetails
                        .filter((subSubService) => subSubService.subService === selectedServiceName)
                        .map((subSubService, index) => (
                          <li key={index}>
                            <Link href={`/services/${generateSlug(service.title)}/${generateSlug(subSubService.title)}`}>
                              {subSubService.title}
                            </Link>
                          </li>
                        ))
                    }
                  </ul>
                </li>

              ))}
            </ul>
          </li>

          <li>
            <span>
              Before & After Gallery{" "}
              <FontAwesomeIcon className="ml-2" width={20} icon={faCaretDown} />
            </span>
            <ul>
              <li>
                <Link href="">Plantar wart Treatment Results</Link>
              </li>
              <li>
                <Link href="">Toenail Fungus Treatment Results</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/reviews"><span>Reviews</span></Link>
          </li>
          <li>
            <span>
              Locations <FontAwesomeIcon className="ml-2" width={20} icon={faCaretDown} />
            </span>

            <ul>
              <li>
                <Link href="/locations/hicksville">Hicksville</Link>
              </li>
              <li>
                <Link href="/locations/huntington">Huntington</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blogs"><span>Blogs</span></Link>
          </li>
          <li>
            <Link href="/contact-us"><span>Contact Us</span></Link>
          </li>
        </ul>
      </div >
      <GradientButton buttonText="Book Appointment" />

      <div className={Style.hamburger} onClick={toggleMenu}>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
        <span className={Style.bar}></span>
      </div>
    </nav >

  );
};

export default Navbar;
