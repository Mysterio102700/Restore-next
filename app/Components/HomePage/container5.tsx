import Image from "next/image";
import React from "react";
import AdvanceImg from "@/app/Assets/Advanced-World-Top-Technology.png";
import Styles from "@/app/Components/HomePage/HomePage.module.css";

const container5 = () => {
  return (
    <>
      <section className="continer5">
        <div className="container mx-auto px-4">
          <div className="row flex flex-col lg:flex-row">
            <div className="col w-full lg:w-1/2 ${Styles.AdvanceImg}">
              <Image src={AdvanceImg} alt="gd" />
            </div>
            <div className={`w-full lg:w-1/2 mt-5 px-0 lg:mt-16 lg:px-4 ${Styles.c5Right}`}>
              <h2>Advanced World Top Technology</h2>
              <div>
                <p>
                  Here at Restore Podiatry & Laser Center, we use surgery as a
                  last resort. Dr. Bhela constantly keeps informed about the
                  latest evidence based treatments, techniques, and technologies
                  to ensure that his patients can receive the best possible
                  outcomes through non-invasive and minimally invasive
                  solutions. Here at the clinic, we are equipped with world
                  class, alternative natural solutions for Simple to Most
                  Challenging Foot Conditions without drugs, injections or
                  surgeries to help our patients to get back on their feet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default container5;
