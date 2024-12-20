"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Slide {
  name: string;
  Date: string;
  review: string;
  img?: string;
  color?: string; // Added color property
}

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} viewBox="0 0 576 512">
    <path
      fill="#f6bb06"
      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
    />
  </svg>
);

const SocialIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 18 18"
    width={15}
    style={{ background: "new 0 0 18 18" }}
  >
    <style type="text/css">
      {`.st0 {
          fill-rule:evenodd;
          clip-rule:evenodd;
          fill:#FFFFFF;
        }
        .st1 {
          fill-rule:evenodd;
          clip-rule:evenodd;
          fill:#0095F6;
        }`}
    </style>
    <rect x="4.1" y="4.7" className="st0" width="9.5" height="8.6" />
    <path
      className="st1"
      d="M9,1.4L6.6,0L5.2,2.3H2.4v2.9L0,6.6L1.4,9L0,11.4l2.4,1.4v2.7h2.7L6.6,18L9,16.6l2.4,1.4l1.5-2.5h2.8v-2.7l2.4-1.4L16.6,9L18,6.6l-2.4-1.4V2.3h-2.9L11.4,0L9,1.4z M12.3,6.4l1,1l-5.1,5.2L5.1,9.5l1-1l2.1,2.1L12.3,6.4z"
    />
  </svg>
);

const GoogleLogo = () => (
  <svg
    width={40}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
  >
    <defs>
      <path
        id="a"
        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
    <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
    <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
    <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
  </svg>
);

const Carousel = () => {
  interface slides {
    name: string;
    Date: string;
    review: string;
    img?: string;
    color?: string;
  }

  const [slides, setSlides] = useState<Slide[]>([
    {
      name: "Rio",
      Date: "December 28, 24",
      review:
        "The doctor is very thorough and patient. The office makes an uncomfortable situation better. Highly recommend!",
    },
    {
      name: "Rooster",
      Date: "January 5, 25",
      review:
        "Dr. Bhela is mindful and honest, providing treatment that truly works. A great experience!",
      img: "",
    },
    {
      name: "Excali",
      Date: "February 14, 25",
      review:
        "I had a great experience with the team. Treatment was effective, and they made sure I felt comfortable.",
    },
    {
      name: "Maxie",
      Date: "March 10, 25",
      review:
        "Excellent doctor! They took the time to listen and provided a treatment plan that worked wonders.",
    },
    {
      name: "Ratrix",
      Date: "April 18, 25",
      review:
        "Great care, but I wish there was a bit more follow-up after treatment.",
    },
    {
      name: "Noddy",
      Date: "May 25, 25",
      review:
        "Highly recommend! The staff is professional, and the treatment was 100% effective.",
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Celikid",
      Date: "June 7, 25",
      review:
        "Innovative care that truly made a difference. Very knowledgeable team!",
    },
  ]);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "100" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: "center",
    centerPadding: "60px",
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
    ];

    setSlides((prevSlides) =>
      prevSlides.map((slide) => ({
        ...slide,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    );
  }, []);

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <div
              className="card max-w-sm p-5 h-52 bg-white border border-gray-200 rounded-lg shadow-lg "
              key={index}
            >
              <div className="card-title flex justify-between py-2 items-center">
                <div className="flex justify-between items-center gap-3">
                  {slide.img ? (
                    <img
                      src={slide.img}
                      alt={slide.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <h6
                      className={`text-white w-10 h-10 text-center flex items-center justify-center rounded-full ${slide.color}`}
                    >
                      {slide.name.charAt(0).toUpperCase()}
                    </h6>
                  )}
                  <div>
                    <p>{slide.name}</p>
                    <p className="text-[11.2px] text-[#8e8e8e]">{slide.Date}</p>
                  </div>
                </div>
                <GoogleLogo />
              </div>
              <div className="card-body">
                <div className="flex gap-1 py-2">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <SocialIcon />
                </div>
              </div>
              <p className="mb-3 font-normal text-gray-500">{slide.review}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
