import React from "react";
import Styles from "@/app/Components/HomePage/HomePage.module.css";

const container3 = () => {
  return (
    <section className="container3 my-20">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col lg:flex-row">
          <div className={`col w-full lg:w-1/4 ${Styles.c3Left}`}>
            <h2>Our Mission</h2>
            <h3>
              Ditch the drug & <br />
              skip the surgery
            </h3>
          </div>
          <div className={Styles.divider}></div>
          <div className={`col w-full lg:w-3/4 ${Styles.c3Right}`}>
            <h3 className="pt-5 lg:pt-0">Welcome to our laser practice,</h3>
            <p>
              where the blend of art and function meets the forefront of medical
              progress. Our goal is straightforward: to enhance lives by
              combining the latest, newest, up-to-date regenerative medicine
              treatments and minimally invasive cosmetic foot surgeries.
            </p>
            <h3 className="pt-5">Step into our unique setting,</h3>
            <p>
              where advanced treatments and a commitment to individualized care
              come together. Experience a higher quality of life in an
              environment where science meets aesthetics, redefining healthcare
              with your well-being in mind.
            </p>
            <h3 className="pt-5">We serve</h3>
            <p>
              Nassau County, Suffolk County and Long Island. We provide
              unmatched experience with No Drugs, No Major Surgery, No Stitches,
              No Cast, No Hardware, All done In-Office Procedure.
            </p>
            <button className="mt-5">Know More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default container3;
