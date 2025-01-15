import React from "react";
import Styles from "@/app/our-pricing/our-pricing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <>
      <section className={Styles.ourPricing}>
        <div className="container mx-auto py-5">
          <h2 className="text-center">Our Pricing</h2>
          <h3 className="text-[#194F8C] text-[28px] text-center">
            No Insurance? High Deductible? No Problem! <br></br>
            We strive to make our pricing affordable for all patients to receive{" "}
            <br></br> our best treatment in the world!
          </h3>
          <p className="text-[#4D5762] text-center p-5">
            We are a fee for service office. This means we collect payment at
            the time of service.
          </p>
          <div className="w-full md:w-3/5 lg:w-2/5 mx-auto flex items-center gap-3 justify-center bg-white p-5 rounded-lg ">
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#5b9042" }}
            />{" "}
            <p className="text-[#4D5762] font-semibold">
              We accept cash, checks, credit/debit card, HSA/FSA card.
            </p>{" "}
          </div>
          <div className="row py-5 flex flex-col items-center md:flex-row gap-5 mx-auto h-full">
            <div className="col w-full md:w-1/3 bg-white p-5 rounded-lg">
              <h4 className="text-xl text-[#0365A6] font-semibold">
                New Patient Appointment
              </h4>
              <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                $197
              </h3>
              <div className="h-[1px] bg-black"></div>
              <div className="flex flex-col gap-5 py-5">
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Consultation</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Examination</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Foot X-ray (3 views)</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">
                    1st laser treatment for 1 zone included
                  </p>
                </div>
              </div>
            </div>
            <div className="col w-full md:w-1/3 bg-white p-5 rounded-lg h-">
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Follow Up Appointment
              </h4>
              <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                $99
              </h3>
              <div className="h-[1px] bg-black"></div>
              <div className="flex flex-col gap-5 py-5">
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Office Visit</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Follow Up</p>
                </div>
              </div>
            </div>
            <div className="col w-full md:w-1/3 bg-white p-5 rounded-lg">
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Clear Nail Program™
              </h4>
              <h3 className="text-4xl text-[#3B424A] font-semibold py-5">
                Customisable
              </h3>
              <div className="h-[1px] bg-black"></div>
              <div className="flex flex-col gap-5 py-5">
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Personalized Assessment</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Personalized Assessment</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Severity Report of Toenail Fungus  (3 views)</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">
                  Treatment Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
