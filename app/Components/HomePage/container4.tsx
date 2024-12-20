import React from "react";
import ToeNail from "@/app/Assets/services/Toe-Nails-Fungus-Laser-treatment.png";
import SMART from "@/app/Assets/services/SMART-Neuropathy-Program-For.png";
import Onyfix from "@/app/Assets/services/Onyfix-for-Ingrown-Toe-Nails.png";
import Swift from "@/app/Assets/services/Swift-Therapy-For-Plantar-Warts.png";
import Custom from "@/app/Assets/services/3D-Printed-Custom-Orthotics.png";
import Laser from "@/app/Assets/services/Laser-Treatment-for-Plantar-Fasciitis.png";
import Hypocure from "@/app/Assets/services/Hyprocure-Procedure-for-Pronated-Flat-Feet.png";
import Image from "next/image";
import Styles from "@/app/Components/HomePage/HomePage.module.css";

const Container4 = () => {
  const services = [
    { name: "Toe Nails Fungus Laser \ntreatment", img: ToeNail },
    { name: "SMART Neuropathy Program For\nPeripheral Neuropathy", img: SMART },
    { name: "Onyfix for Ingrown Toe Nails", img: Onyfix },
    { name: "Swift Therapy For\nPlantar Warts", img: Swift },
    { name: "3D Printed Custom Orthotics", img: Custom },
    { name: "Laser Treatment for\nPlantar Fasciitis", img: Laser },
    { name: "Hyprocure Procedure for\nPronated Feet/Flat Feet", img: Hypocure },
  ];

  return (
    <section className="container4">
      <div className="container mx-auto px-4 flex justify-center items-center flex-col">
        <h2 className="py-5 heading-2">Our services</h2>
        <div className={Styles.services}>
          {services.map((service, index) => (
            <div className={Styles.card} key={index}>
              <Image
                src={service.img}
                alt={service.name}
              />
              <h2 className={Styles.serviceName}>{service.name}</h2>
            </div>
          ))}
        </div>
        <button className="gradientButton my-5">View All Services</button>
      </div>
    </section>
  );
};

export default Container4;
