import React from "react";
import Styles from "./HomePage.module.css";
import Image from "next/image";
import c2Machine from "@/app/Assets/c2Machine.png";

const container2 = () => {
  return (
    <section className={`py-5 mt-20 ${Styles.Container2}`}>
      <div className="container mx-auto px-4">
        <div className="row flex flex-col lg:flex-row">
          <div className={`col w-full lg:w-1/2 p-5 ${Styles.c2Box}`}>
            <p>
              Did you know that we have 11 best advanced technologies with 6
              different laser therapies?
            </p>
            <div className="flex flex-col lg:flex-row justify-around  mt-5 px-5">
              <ul className="mb-4 lg:mb-0 md:w-1/2 sm:w-full">
                <li>Class 2 Laser</li>
                <li>Class 4 Laser</li>
                <li>Nd:Yag Laser</li>
              </ul>
              <ul className="mb-4 lg:mb-0 md:w-1/2 sm:w-full">
                <li>Low-Level Laser Therapy</li>
                <li>High Power Laser Therapy</li>
                <li>High Intensity Laser Therapy</li>
              </ul>
              <div className="lg:w-1/2 md:w-full sm:w-full flex justify-center mt-5">
                <Image src={c2Machine} alt="" width={125} />
              </div>
            </div>
          </div>
          <div className="col w-full lg:w-1/2 flex justify-center items-center gap-5 mt-8 lg:mt-0 flex-wrap">
            <div className={Styles.squareBox}>
              <h3>180+</h3>
              <h4>surgeries performed</h4>
            </div>
            <div className={Styles.squareBox}>
              <h3>180+</h3>
              <h4>surgeries performed</h4>
            </div>
            <div className={Styles.squareBox}>
              <h3>180+</h3>
              <h4>surgeries performed</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default container2;