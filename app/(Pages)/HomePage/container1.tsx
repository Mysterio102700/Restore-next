import React from "react";
import styles from "./HomePage.module.css";
import Image from "next/image";
import AnkleJoint from "@/app/Assets/human-foot-with-painful-ankle-joint.png";
import checkCircle from "@/app/Assets/checks circle.svg";
import smImg from "@/app/Assets/image 754.png";
import smImg2 from "@/app/Assets/image 761.png";

const container1 = () => {
  return (
    <section className={`pb-5 ${styles.Container1}`}>
      <div className="container mx-auto px-4">
        <div className="row flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4">
            <h2>Restore, Renew, Regenerate</h2>
            <h3>We treat the root cause</h3>
            <p
              className="w-full lg:w-2/3"
              style={{ color: "#002856", fontStyle: "20px" }}
            >
              A Laser Practice Specializing in Non-surgical and Non-Invasive
              treatment by using High Power Laser Therapy And Deep Tissue Laser
              Therapy.
            </p>
            <button className="gradientButton">View Patient Reviews</button>
          </div>
          <div className="col w-full lg:w-1/2 flex items-center justify-center relative mt-8 lg:mt-0">
            <Image src={AnkleJoint} alt="AnkleJoint" className="max-w-full" />
            <Image
              src={smImg}
              alt="AnkleJoint"
              width={108}
              className={`${styles.smImg} lg:max-w-[120px]`}
            />
            <Image
              src={smImg2}
              alt="AnkleJoint"
              width={81}
              className={`${styles.smImg2} lg:max-w-[90px]`}
            />
          </div>
        </div>
        <div className="row w-full lg:w-3/4 mt-20">
          <div className="flex gap-3 items-center justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 lg:w-2"
            >
              <path
                fill="#6e8aab"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
              />
            </svg>
            <h3 className="text-center lg:text-left ">
              Specializing In Minimally Invasive Cosmetic Foot Surgery
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 lg:w-2"
            >
              <path
                fill="#6e8aab"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
              />
            </svg>
          </div>
          <h4
            className="text-center lg:text-right mt-5"
            style={{ color: "#6E8AAB", fontSize:"16px" }}
          >
            NO DRUGS, NO INJECTIONS, NO SURGERY, NO SIDE EFFECTS
          </h4>
        </div>
      </div>
      <Image
        src={checkCircle}
        alt="AnkleJoint"
        className={`${styles.checkCircle} lg:block hidden`}
      />
    </section>
  );
};

export default container1;
