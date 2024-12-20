"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

interface Slide {
  name: string;
  Date: string;
  review: string;
  img?: string;
  color?: string; 
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
    },
    {
      name: "Celikid",
      Date: "June 7, 25",
      review:
        "Innovative care that truly made a difference. Very knowledgeable team!",
    },
  ]);

  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

  function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

  function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 10 }}
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
    nextArrow: <SampleNextArrow  />,
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
                    <Image
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
