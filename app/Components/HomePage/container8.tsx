import React from "react";
import Styles from "@/app/Components/HomePage/HomePage.module.css";
import Dr_Bhela from "@/app/Assets/Dr-Bhela.png";
import Image from "next/image";

const Container8 = () => {
  return (
    <section className={`${Styles.container8} pt-20`}>
      <div className="container flex justify-center items-center">
        <div className="row py-5 w-full lg:w-3/5 flex justify-center items-center ">
          <h2 className="text-[62px] leading-[75px]">Meet Our Doctor</h2>
        </div>
      </div>

      <div className={`conatiner ${Styles.doctorContent}`}>
        <div className="conatiner flex justify-center items-center">
          <div
            className={`row w-full lg:w-3/5 flex justify-center items-center md:items-start flex-col-reverse md:flex-row`}
          >
            <div className="col w-full sm:w-1/2 flex flex-col gap-5 px-6 py-1 md:py-10">
              <p className="text-[#FBFCFF] text-[14px] md:text-[14px] lg:text-[20px] leading-[24px]">
                Dr. Davinder Bhela is a board-certified podiatrist in the Nassa
                County of Long Island with a passion for high quality patient
                care and with an expertise in laser medicine, sports medicine
                and regenerative podiatric medicine. As the owner and founder of
                the Restore Podiatry & Laser Center in the Long Island area, he
                uses natural, evidence based medicine and non-surgical
                approaches to treat most of the common conditions.
              </p>
              <p className="text-[#FBFCFF] text-[14px] md:text-[14px] lg:text-[20px] leading-[24px] ">
                By working directly with patients, Dr. Bhela can provide more
                personalized and patient-focused care. Our approach puts the
                patient’s priority and attention at the greatest level possible.
              </p>
            </div>
            <div className={`col w-2/5 ${Styles.doctorImage}`}>
              <Image src={Dr_Bhela} alt="Dr. Bhela" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container8;
