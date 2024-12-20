import React from "react";
import Styles from "@/app/Components/HomePage/HomePage.module.css";
import Dr_Bhela from "@/app/Assets/Dr-Bhela.png";
import Image from "next/image";

const Container8 = () => {
  return (
    <section className={`${Styles.container8} py-15`}>
      <div className="px-0 sm:px-10 lg:px-32 xl:px-52 2xl:px-96 py-10">
        <h2 className="text-center md:text-start">Meet Our Doctor</h2>
      </div>
      <div className={`flex flex-col md:flex-row ${Styles.doctorContent} gap-10 lg:gap-16 px-5 sm:px-10 lg:px-32 xl:px-52 2xl:px-96`}
      >
        <div className="flex flex-col gap-4 items-start w-full md:w-1/2 py-1 lg:py-10">
          <p className="text-white text-[16px] leading-[19px]">
            Dr. Davinder Bhela is a board-certified podiatrist in the Nassau
            County of Long Island with a passion for high quality patient care
            and with an expertise in laser medicine, sports medicine, and
            regenerative podiatric medicine. As the owner and founder of the
            Restore Podiatry & Laser Center in the Long Island area, he uses
            natural, evidence-based medicine and non-surgical approaches to
            treat most of the common conditions.
          </p>
          <p className="text-white text-[16px] leading-[19px]">
            By working directly with patients, Dr. Bhela can provide more
            personalized and patient-focused care. Our approach puts the
            patient’s priority and attention at the greatest level possible.
          </p>
          <button className="mt-2 px-6 py-2 bg-transparent border-white border-[1px] text-white rounded-lg hover:text-black hover:bg-white transition duration-300">
            Read More
          </button>
        </div>
        <div className={`flex justify-center w-full md:w-1/2 ${Styles.doctorImage}`}>
          <Image src={Dr_Bhela} alt="Dr. Davinder Bhela" />
        </div>
      </div>
    </section>
  );
};

export default Container8;
