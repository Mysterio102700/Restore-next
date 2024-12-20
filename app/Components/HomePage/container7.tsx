import React from "react";
import Carousel from "@/app/Components/HomePage/carousel";
import Styles from "@/app/Components/HomePage/HomePage.module.css";

const container7 = () => {
  const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} viewBox="0 0 576 512">
      <path
        fill="#f6bb06"
        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
      />
    </svg>
  );

  const Google = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="60"
      width="120"
    >
      <path
        d="M32.377 26.446h-12.52v3.715h8.88c-.44 5.2-4.773 7.432-8.865 7.432a9.76 9.76 0 0 1-9.802-9.891c0-5.624 4.354-9.954 9.814-9.954 4.212 0 6.694 2.685 6.694 2.685l2.6-2.694s-3.34-3.717-9.43-3.717c-7.755 0-13.754 6.545-13.754 13.614 0 6.927 5.643 13.682 13.95 13.682 7.307 0 12.656-5.006 12.656-12.408 0-1.562-.227-2.464-.227-2.464z"
        fill="#4885ed"
      />
      <use xlinkHref="#A" fill="#db3236" />
      <use xlinkHref="#A" x="19.181" fill="#f4c20d" />
      <path
        d="M80.628 23.765c-4.716 0-8.422 4.13-8.422 8.766 0 5.28 4.297 8.782 8.34 8.782 2.5 0 3.83-.993 4.8-2.132v1.73c0 3.027-1.838 4.84-4.612 4.84-2.68 0-4.024-1.993-4.5-3.123l-3.372 1.4c1.196 2.53 3.604 5.167 7.9 5.167 4.7 0 8.262-2.953 8.262-9.147V24.292H85.36v1.486c-1.13-1.22-2.678-2.013-4.73-2.013zm.34 3.44c2.312 0 4.686 1.974 4.686 5.345 0 3.427-2.37 5.315-4.737 5.315-2.514 0-4.853-2.04-4.853-5.283 0-3.368 2.43-5.378 4.904-5.378z"
        fill="#4885ed"
      />
      <path
        d="M105.4 23.744c-4.448 0-8.183 3.54-8.183 8.76 0 5.526 4.163 8.803 8.6 8.803 3.712 0 6-2.03 7.35-3.85l-3.033-2.018c-.787 1.22-2.103 2.415-4.298 2.415-2.466 0-3.6-1.35-4.303-2.66l11.763-4.88-.6-1.43c-1.136-2.8-3.787-5.14-7.295-5.14zm.153 3.374c1.603 0 2.756.852 3.246 1.874l-7.856 3.283c-.34-2.542 2.07-5.157 4.6-5.157z"
        fill="#db3236"
      />
      <path d="M91.6 40.787h3.864V14.93H91.6z" fill="#3cba54" />
      <defs>
        <path
          id="A"
          d="M42.634 23.755c-5.138 0-8.82 4.017-8.82 8.7 0 4.754 3.57 8.845 8.88 8.845 4.806 0 8.743-3.673 8.743-8.743 0-5.8-4.58-8.803-8.803-8.803zm.05 3.446c2.526 0 4.92 2.043 4.92 5.334 0 3.22-2.384 5.322-4.932 5.322-2.8 0-5-2.242-5-5.348 0-3.04 2.18-5.308 5.02-5.308z"
        />
      </defs>
    </svg>
  );

  return (
    <>
      <section className={`${Styles.container7} py-10`}>
        <div className="container mx-auto px-4">
          <h2 className="text-center">What Our Patients Are Saying</h2>

          <div className="row">
            <div className="col flex flex-col md:flex-row gap-10 py-10">
              <iframe
                className="w-full md:w-1/2 h-52 lg:h-96"
                src="https://www.youtube.com/embed/PLK1iKzimx8"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="Patient Success Story For Deep Tissue Laser Therapy For Chronic Plantar Fasciitis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <iframe
                className="w-full md:w-1/2 h-52 lg:h-96 "
                src="https://www.youtube.com/embed/p4Tx74AJWFA"
                title="Plantar Wart Success Story: 5-Year Battle Ends with the Best Treatment"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="row flex flex-col lg:flex-row py-10">
            <div className="col w-full flex flex-col justify-center items-center ">
              <h3>EXCELLENT</h3>
              <div className="flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h6>Based on 61 reviews</h6>
              <Google />
            </div>
            <div className="col w-full lg:w-3/4">
              <Carousel />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="gradientButton">View All Reviews</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default container7;
