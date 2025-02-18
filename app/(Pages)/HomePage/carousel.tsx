"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { GoogleLogo, Star, SocialIcon } from "@/app/Components/Icons/page";

interface Slide {
  name: string;
  Date: string;
  review: string;
  img?: string;
  color?: string;
}

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
                  <Star Width={15} />
                  <Star Width={15} />
                  <Star Width={15} />
                  <Star Width={15} />
                  <Star Width={15} />
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
