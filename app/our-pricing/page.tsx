import React from "react";
import Styles from "@/app/our-pricing/our-pricing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import GradientButton from "@/app/Components/gradientButton/page";

const page = () => {
  return (
    <>
      <section className={Styles.ourPricing}>
        <div className="container mx-auto py-5">
          <h2 className="text-center">Our Pricing</h2>
          <h3 className="text-[#194F8C] text-[28px] text-center">
            No Insurance? High Deductible? No Problem! <br />
            We strive to make our pricing affordable for all patients to receive{" "}
            <br /> our best treatment in the world!
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
          <div className="row flex flex-col md:flex-row gap-5 rounded-2xl py-5 mx-auto lg:mx-30 2xl:mx-48">
            <div className={`col w-full md:w-1/3 bg-white p-5 rounded-lg`}>
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
            <div className={`col w-full md:w-1/3 bg-white p-5 rounded-lg`}>
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
            <div className={`col w-full md:w-1/3 bg-white p-5 rounded-lg`}>
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
                  <p className="text-[#4D5762]">Toenail Evaluation</p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">
                    Severity Report of Toenail Fungus (3 views)
                  </p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Treatment Plan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex flex-col gap-5 bg-white rounded-2xl p-5 mx-auto lg:mx-30 2xl:mx-48">
            <h4 className="text-3xl text-[#0365A6] font-semibold text-center">
              Ingrown Toenail Treatment
            </h4>
            <div className="flex flex-col md:flex-row  gap-5">
              <div className={`col w-full md:w-1/3 ${Styles.orthoCard}`}>
                <h4 className="text-xl text-[#0365A6] font-semibold">
                  Option 1: <br />
                  Partial Nail Avulsion
                </h4>
                <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                  $450
                </h3>
                <div className="h-[1px] bg-black"></div>
                <div className="flex flex-col gap-5 py-5">
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      Ingrown toenail surgery evaluation and treatment
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">Initial evaluation</p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">Ingrown toenail removal</p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">Local anesthesia</p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      1 follow up visit (for 1st toenail only)
                    </p>
                  </div>
                </div>
              </div>
              <div className={`col w-full md:w-1/3 ${Styles.orthoCard}`}>
                <h4 className="text-xl text-[#0365A6] font-semibold">
                  Option 2: Partial Nail Avulsion with Matrixectomy
                </h4>
                <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                  $599
                </h3>
                <div className="h-[1px] bg-black"></div>
                <div className="flex flex-col gap-5 py-5">
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      Permanent removal of nail border with chemical application
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">Initial evaluation</p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      Ingrown toenail removal with chemical application
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">Local anesthesia</p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">2 follow up visit</p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      1 post-op care kit (for 1st toenail only)
                    </p>
                  </div>
                </div>
              </div>
              <div className={`col w-full md:w-1/3 ${Styles.orthoCard}`}>
                <h4 className="text-xl text-[#0365A6] font-semibold">
                  Option 3: <br /> Onyfix Non-Surgical
                </h4>
                <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                  $250
                </h3>
                <div className="h-[1px] bg-black"></div>
                <div className="flex flex-col gap-5 py-5">
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      Removing an ingrown toenail{" "}
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      Prepping toenail for onyfix application
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      Onyfix application for 1st toenail
                    </p>
                  </div>
                  <div className="flex gap-3 ">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#4D5762" }}
                    />
                    <p className="text-[#4D5762]">
                      Follow-up visit to ensure onyfix is affixed properly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex flex-col md:flex-row gap-5 rounded-2xl py-5 mx-auto lg:mx-30 2xl:mx-48">
            <div className={` col w-full md:w-1/3 bg-white p-5 rounded-lg `}>
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Foot & Ankle Ultrasound Imagingper Region
              </h4>
              <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                $99
              </h3>
            </div>
            <div className={` col w-full md:w-1/3 bg-white p-5 rounded-lg `}>
              <h4 className="text-xl text-[#0365A6] font-semibold">
                3 Dimensional X-rayper Foot & Ankle
              </h4>
              <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                $99
              </h3>
            </div>
            <div className={` col w-full md:w-1/3 bg-white p-5 rounded-lg `}>
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Biological Regenerative Amniotic Injection
              </h4>
              <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                $1499
              </h3>
              <div className="h-[1px] bg-black"></div>
              <div className="flex flex-col gap-5 py-5">
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">Starting at $1499 per zone</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex flex-col md:flex-row mx-auto lg:mx-30 2xl:mx-48 gap-5">
            <div className="col w-full md:w-2/3  flex flex-col gap-5 bg-white p-5 rounded-2xl">
              <h4 className="text-2xl text-[#0365A6] font-semibold text-center">
                Biological Regenerative Amniotic Injection
              </h4>
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="col md:w-full flex flex-col gap-5">
                  <div className={`!h-full ${Styles.orthoCard}`}>
                    <h4 className="text-xl text-[#0365A6] font-semibold">
                      Tier 1 (Pair) – Affordable, Premium Custom Orthotics
                    </h4>
                    <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                      $399
                    </h3>
                    <h4 className="text-xl text-[#0365A6] font-semibold">
                      National Average Price: $500
                    </h4>
                  </div>
                  <div className={`!h-full ${Styles.orthoCard}`}>
                    <h4 className="text-xl text-[#0365A6] font-semibold">
                      Tier 2 (Pair) – Elite Custom Orthotics
                    </h4>
                    <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                      $599
                    </h3>
                  </div>
                </div>
                <div className={`col w-full md:!h-full ${Styles.orthoCard}`}>
                  <h4 className="text-xl text-[#0365A6] font-semibold">
                    Tier 3 (Pair) – 3D Printed Custom Orthotics
                  </h4>
                  <h3 className="text-6xl text-[#3B424A] font-semibold py-3">
                    $899
                  </h3>
                  <p className="text-sm text-[#0365A6] pb-3">
                    National Average: No comparable as we are the only practice
                    offer exclusive 3D Printed orthotics in New York
                  </p>
                  <div className="h-[1px] bg-black"></div>
                  <div className="flex flex-col gap-3 py-3">
                    <div className="flex gap-3 ">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#4D5762" }}
                      />
                      <p className="text-[#4D5762]">Initial Evaluation </p>
                    </div>
                    <div className="flex gap-3 ">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#4D5762" }}
                      />
                      <p className="text-[#4D5762]">
                        3D Dynamic Foot Scan Measurement
                      </p>
                    </div>
                    <div className="flex gap-3 ">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#4D5762" }}
                      />
                      <p className="text-[#4D5762]">3D Foot Analysis Report</p>
                    </div>
                    <div className="flex gap-3 ">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#4D5762" }}
                      />
                      <p className="text-[#4D5762]">A Confirmed Diagnosis</p>
                    </div>
                    <div className="flex gap-3 ">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#4D5762" }}
                      />
                      <p className="text-[#4D5762]">
                        1 pair of 3D Printed Custom Insoles
                      </p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#0365A6]">
                    For the first time, using precise bio-mechanical metrics,
                    we’re able to capture real-time data while you walk, and
                    compile it to produce a high resolution model of your feet
                    during stance and motion. The information captured from the
                    HP 3D scanning and GAIT analysis system is then used by
                    Materialize to generate a 3D printed insert that far exceeds
                    any orthotic available today.
                  </p>
                </div>
              </div>
            </div>
            <div className="col w-full md:w-1/3 flex flex-col gap-5">
              <div className="card flex flex-col gap-5 justify-center bg-white rounded-2xl py-5">
                <h4 className="text-xl text-[#0365A6] font-semibold px-5">
                  Option 3: <br /> Onyfix Non-Surgical
                </h4>
                <div className="flex items-end px-5">
                  <h3 className="text-6xl text-[#3B424A] font-semibold ">
                    $250
                  </h3>
                  <p className="leading-[50px] text-[#3B424A] text-sm ">
                    Per treatment
                  </p>
                </div>
                <div className="h-[1px] bg-black mx-5"></div>
                <p className="text-base text-[#0365A6] px-5">
                  Other Practice in Long Island/New York:
                </p>
                <p className="px-5 text-base leading-5 text-[#4D5762]">
                  Initial Visit Copay/ deductible/ coinsurance $25 to $100 +
                  Swift $275 + Follow-up Copay/ deductible $25 to $50 = $325 to
                  $425
                </p>
                <div className={`px-5 py-3 ${Styles.greenBanner}`}>
                  <p className="text-sm text-[#0365A6] font-semibold ">
                    Clear Wart Program™: Our Exclusive Program
                  </p>
                </div>
              </div>
              <div className={`bg-white p-5 rounded-2xl`}>
                <h4 className="text-xl text-[#0365A6] font-semibold">
                  High Intensity Laser Therapy For Pain
                </h4>
                <h3 className="text-6xl text-[#3B424A] font-semibold py-5">
                  $199
                </h3>
                <p className="text-sm text-[#0365A6] font-semibold">
                  National Average in New York: No comparable as we are the only
                  practice to offer high power laser therapy
                </p>
              </div>
            </div>
          </div>
          <div className="row flex flex-col md:flex-row mx-auto lg:mx-30 2xl:mx-48 gap-5 py-5">
            <div className="col w-full md:w-1/2 lg:w-3/5 bg-white rounded-2xl p-5 flex flex-col gap-3">
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Laser Treatment For Mild Toenail Fungus
              </h4>
              <div className="flex items-end px-5">
                <h3 className="text-6xl text-[#3B424A] font-semibold ">$250</h3>
                <p className="leading-[50px] text-[#3B424A] text-sm ">
                  Per treatment
                </p>
              </div>
              <p className="text-sm text-[#0365A6]">
                National Average in New York For Nd:Yag Laser 1064 nm: $300 to
                $1400 (per session)
              </p>
              <div className="flex flex-col gap-3 py-3">
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">
                    We offer more discounts in a package.{" "}
                  </p>
                </div>
                <div className="flex gap-3 text-base">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762] text-base">
                    Because we understand that laser treatments are not covered
                    by all health insurances, and can involve a significant
                    financial commitment, we are pleased to offer a “price
                    match” guarantee.
                  </p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762] text-base">
                    We strive to maintain the high standard of quality care that
                    our patients have come to expect at Restore Podiatry & Laser
                    Center. Our Price are very competitive, affordable and
                    reasonable. Therefore, if you are comparable, yet offered at
                    a lower price elsewhere, please let us know and we will be
                    happy to honor (match) it with same exact laser model.
                    Current competitor’s offer must be presented at the time of
                    treatment for “price match” guarantee to be honored with
                    specific laser model name and model type.
                  </p>
                </div>
              </div>
            </div>
            <div className="col w-full md:w-1/2 lg:w-2/5 bg-white rounded-2xl p-5 flex flex-col gap-3">
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Laser Treatment For Mild Toenail Fungus
              </h4>
              <div className="flex items-end">
                <h3 className="text-6xl text-[#3B424A] font-semibold ">$250</h3>
                <p className="leading-[50px] text-[#3B424A] text-sm ">
                  Per treatment
                </p>
              </div>
              <p className="text-sm text-[#0365A6]">
                National Average in New York: Starting at $150 per zone per
                session
              </p>
              <div className="flex flex-col gap-3 py-3">
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">
                    We offer more discounts in a package.
                  </p>
                </div>
                <div className="flex gap-3 text-base">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762] text-base">
                    Because we understand that laser treatments are not covered
                    by all health insurances, and can involve a significant
                    financial commitment.
                  </p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762] text-base">
                    We strive to maintain the high standard of quality care that
                    our patients have come to expect from us. Our Price are very
                    competitive, affordable and reasonable. Therefore, if you
                    are comparable, yet offered at a lower price elsewhere,
                    please let us know and we will be happy to honor (match) it
                    with same exact laser model.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex flex-col md:flex-row mx-auto lg:mx-30 2xl:mx-48 gap-5 py-5">
            <div className="col w-full md:w-1/2 lg:w-3/5 bg-white rounded-2xl p-5 flex flex-col gap-3">
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Radial Shockwave Therapy
              </h4>
              <div className="flex items-end px-5">
                <h3 className="text-6xl text-[#3B424A] font-semibold ">$199</h3>
                <p className="leading-[50px] text-[#3B424A] text-sm ">
                  Per treatment
                </p>
              </div>
              <p className="text-sm text-[#0365A6]">
                National Average For Radial Shockwave Therapy Cost Per Session
                in New York: $250
              </p>
              <div className="flex flex-col gap-3 py-3">
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762]">
                    We offer more discounts in a package.
                  </p>
                </div>
                <div className="flex gap-3 text-base">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762] text-base">
                    Because we understand that shock wave treatments are not
                    covered by all health insurances, and can involve a
                    significant financial commitment, we are pleased to offer a
                    “price match” guarantee.
                  </p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762] text-base">
                    We strive to maintain the high standard of quality care that
                    our patients have come to expect at Restore Podiatry & Laser
                    Center. Our Price are very competitive, affordable and
                    reasonable. Therefore, if you are comparable, yet offered at
                    a lower price elsewhere, please let us know and we will be
                    happy to honor (match) it with same exact laser model.
                  </p>
                </div>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#4D5762" }}
                  />
                  <p className="text-[#4D5762] text-base">
                    Current competitor’s offer must be presented at the time of
                    treatment for “price match” guarantee to be honored with
                    specific laser model name and model type.
                  </p>
                </div>
              </div>
            </div>
            <div className="col w-full md:w-1/2 lg:w-2/5 bg-white rounded-2xl p-5 flex flex-col gap-3">
              <h4 className="text-xl text-[#0365A6] font-semibold">
                Electrohydraulic High Energy Truly Focused Shockwave Therapy (To
                activate natural healing)
              </h4>
              <div className="flex items-end">
                <h3 className="text-6xl text-[#3B424A] font-semibold ">$199</h3>
                <p className="leading-[50px] text-[#3B424A] text-sm ">
                  Per treatment
                </p>
              </div>
              <p className="text-sm text-[#0365A6]">
                National Average in New York: Starting at $250 per zone per
                session
              </p>
              <div className="flex gap-3 ">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#4D5762" }} />
                <p className="text-[#4D5762]">
                  We are proud to be the first practice to perform
                  Electrohydraulic High Energy Truly Focused Shockwave therapy
                  in Long Island.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row flex flex-col justify-center items-center gap-10 py-5">
            <h4 className="text-black text-2xl font-semibold">
              **Attention: Please note we only offer all treatment in set of
              packages.**
            </h4>
            <p>
              Give Us a Call Today to Book an Appointment at Our Hicksville and
              Huntington Locations.
            </p>
            <GradientButton text={"Book Appointment"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
