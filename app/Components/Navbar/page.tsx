"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/Assets/logo.png";
import Style from "@/app/Components/Navbar/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import GradientButton from "../gradientButton/GradientButton";

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
                Our Services
              </Link>
              <FontAwesomeIcon className="ml-2" width={20} icon={faCaretDown} />
            </span>

            <ul>
              <li>
                <Link href="/services/non-invasive-laser-therapies">
                  Non Invasive Laser Therapies
                </Link>
                <ul>
                  <li>
                    <Link href="/services/laser-therapy">Laser Therapy</Link>
                  </li>
                  <li>
                    <Link href="/services/deep-tissue-laser-therapy">
                      Deep Tissue Laser Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/class-2-laser-therapy">
                      Class 2 Laser Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/class-4-laser-therapy">
                      Class 4 Laser Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/low-level-laser-therapy">
                      Low-Level Laser Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/high-power-laser-therapy">
                      High Power Laser Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/high-intensity-laser-therapy">
                      High-Intensity Laser Therapy (HILT)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/services/common-foot-ankle-problems">
                  Common Foot and Ankle Problems
                </Link>
                <ul>
                  <li>
                    <Link href="/services/plantar-fasciitis">Plantar Fasciitis</Link>
                  </li>
                  <li>
                    <Link href="/services/toenail-fungus">Toenail Fungus</Link>
                  </li>
                  <li>
                    <Link href="/services/flatfoot">Flatfoot</Link>
                  </li>
                  <li>
                    <Link href="/services/achilles-tendon">Achilles Tendon</Link>
                  </li>
                  <li>
                    <Link href="/services/bunions">Bunions</Link>
                  </li>
                  <li>
                    <Link href="/services/chemotherapy-induced-neuropathy">
                      Chemotherapy Induced Neuropathy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/foot-arthritis">Foot Arthritis</Link>
                  </li>
                  <li>
                    <Link href="/services/foot-numbness">Foot Numbness</Link>
                  </li>
                  <li>
                    <Link href="/services/hammertoe">Hammertoe</Link>
                  </li>
                  <li>
                    <Link href="/services/heel-pain">Heel Pain</Link>
                  </li>
                  <li>
                    <Link href="/services/idiopathic-neuropathy">
                      Idiopathic Neuropathy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ingrown-toenails">Ingrown Toenails</Link>
                  </li>
                  <li>
                    <Link href="/services/neuroma">Neuroma</Link>
                  </li>
                  <li>
                    <Link href="/services/plantar-wart">Plantar Wart</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/services/diabetic-foot-care">Diabetic Foot Care</Link>
                <ul>
                  <li>
                    <Link href="/services/">Diabetic Neuropathy</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/services/minimally-invasive-foot-surgery">
                  Minimally Invasive Foot Surgery
                </Link>
              </li>
              <li>
                <Link href="/services/non-invasive-shockwave-therapies">
                  Non Invasive Shockwave Therapies
                </Link>
                <ul>
                  <li>
                    <Link href="/services/focused-shockwave-therapy">
                      Focused Shockwave Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/radial-shockwave-therapy">
                      Radial Shockwave Therapy
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/services/non-surgical-treatment-ingrown-toenails">
                  Non Surgical Treatment for Ingrown Toenails
                </Link>
                <ul>
                  <li>
                    <Link href="/services">Onyfix Treatment</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/services/regenerative-medicine">Regenerative Medicine</Link>
              </li>
              <li>
                <Link href="/services/biologic-regenerative-injection">
                  Biologic Regenerative Injection
                </Link>
              </li>
              <li>
                <Link href="/services/restore-exclusive-program">
                  Restore Exclusive Program
                </Link>
                <ul>
                  <li>
                    <Link href="/services/clear-nail-program">
                      Clear Nail Programs <sup>TM</sup>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/clear-wart-program">
                      Clear Wart Program<sup>TM</sup>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/custom-3d-printed-orthotics">
                      Custom 3D Printed Orthotics
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/power-heel-program">
                      Power Heel Program<sup>TM</sup>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/smart-neuropathy-program">
                      Smart Neuropathy Program
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/services/sports-injury">Sports Injury</Link>
              </li>
              <li>
                <Link href="/services/swift-microwave-immunotherapy">
                  Swift Microwave Immunotherapy
                </Link>
              </li>
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
