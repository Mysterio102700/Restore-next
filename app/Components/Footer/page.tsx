import Image from "next/image";
import React from "react";
import Logo from "@/app/Assets/logo.png";
import {
  Facebook,
  FooterGoogle,
  Instagram,
  Location,
  TikTok,
  Twitter,
  Youtube,
} from "../Icons/page";

const page = () => {
  return (
    <footer>
      <div className="container mx-auto px-3 w-full">
        <div className="row flex">
          <div className="col w-full flex flex-col md:flex-row justify-center items-center py-10 gap-10">
            <Image
              src={Logo}
              alt="logo"
              height={133}
              className="rounded-md w-2/5 lg:w-1/4 h-auto"
            />
            <h2 className="text-[#C8D7E3] text-[24px] md:text-[90px] leading-[28px] md:leading-[110px] whitespace-pre">
              RESTORE PODIATRY <br /> & LASER CENTER
            </h2>
          </div>
        </div>
        <div className="row flex flex-col sm:flex-row pb-10 gap-5">
          <div className="col w-full md:w-1/3 flex flex-col gap-5 p-5 border-[0.7px] border-[#0057BC] rounded-3xl">
            <div className="flex gap-2">
              <Location />
              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] leading-[30px]">Hicksville:</h2>
                <p className="text-[14px] leading-[18px] text-[#002678]">
                  66 W Barclay St, Hicksville, NY 11801
                </p>
                <p className="text-[14px] leading-[18px] text-[#002678]">
                  Existing Patient –{" "}
                  <a href="tel:+1516-806-2200" className="underline">
                    (516) 806-2200
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Location />
              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] leading-[30px]">Huntington:</h2>
                <p className="text-[14px] leading-[18px] text-[#002678]">
                  820 E Jericho Tpke, Huntington, NY 11746
                </p>
                <p className="text-[14px] leading-[18px] text-[#002678]">
                  Existing Patient –{" "}
                  <a href="tel:+1631-223-2291" className="underline">
                    (516) 806-2200
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col w-full md:w-1/4 flex flex-col gap-5 p-5 border-[0.7px] border-[#0057BC] rounded-3xl">
            <h4 className="text-[#002678] text-[24px] leading-[28px] font-bold text-center">
              Follow Us On
            </h4>
            <div className="grid grid-cols-3 gap-x-3 gap-y-5 justify-items-center items-center">
              <Instagram />
              <Twitter />
              <TikTok />
              <Youtube />
              <FooterGoogle />
              <Facebook />
            </div>
          </div>
          <div className="col w-full md:w-2/5 flex flex-col gap-5 p-5 border-[0.7px] border-[#0057BC] rounded-3xl">
            <div className="row flex flex-col gap-5">
              <div className="col">
                <p className="text-[#4D5762]">
                  Give us a call today to book an appointment at our{" "}
                  <a href="Hicksville" className="text-blue-500 underline">
                    Hicksville
                  </a>{" "}
                  and{" "}
                  <a href="Huntington" className="text-blue-500 underline">
                    Huntington
                  </a>{" "}
                  locations.
                </p>
              </div>
              <div className="col flex flex-col md:flex-row gap-5">
                <button
                  className="bg-[#CAF6F8] text-[#194F8C] text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] border-[1px] border-[#194F8C] p-3 rounded-full
            "
                >
                  Book Appointment
                </button>
                <button
                  className="bg-[#002856] text-[#D9EACA] text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] border-[1px] border-black p-3 rounded-full
            "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default page;
