import React from "react";
import Carousel from "@/app/(Pages)/HomePage/carousel";
import Styles from "@/app/(Pages)/HomePage/HomePage.module.css";
import GradientButton from "@/app/Components/gradientButton/GradientButton";
import { Star, Google } from "@/app/Components/Icons/page";

const container7 = () => {

  return (
    <>
      <section className={`${Styles.container7} py-10`}>
        <div className="container mx-auto px-4 flex flex-col gap-10">
          <h2 className="text-center">What Our Patients Are Saying</h2>

          <div className="row flex flex-col md:flex-row gap-5">
            <div className="col w-full md:w-1/2 relative aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/PLK1iKzimx8?si=im84qhS9IlBJTQD7"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col w-full md:w-1/2 relative aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/p4Tx74AJWFA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="row flex flex-col lg:flex-row">
            <div className="col w-full flex flex-col justify-center items-center ">
              <h3>EXCELLENT</h3>
              <div className="flex">
                <Star Width={30} />
                <Star Width={30} />
                <Star Width={30} />
                <Star Width={30} />
                <Star Width={30} />
              </div>
              <h6>Based on 61 reviews</h6>
              <Google />
            </div>
            <div className="col w-full lg:w-3/4">
              <Carousel />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GradientButton buttonText="View All Services" />
          </div>
        </div>
      </section>
    </>
  );
};

export default container7;
