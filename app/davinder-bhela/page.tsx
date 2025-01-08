"use client";
import React from "react";
import Image from "next/image";
import Doctor from "@/app/Assets/Dr.Davinder-Bhela.png";
import Card1 from "@/app/Assets/treatingRootCause.png";
import Card2 from "@/app/Assets/Experienced.png";
import Card3 from "@/app/Assets/trust&Reliability.png";
import Card4 from "@/app/Assets/nonInvasiveSolutions.png";
import Styles from "@/app/davinder-bhela/davinder-bhela.module.css";
import dynamic from "next/dynamic";
import BookAppointment from "@/app/Components/bookAppointment/page";

const Page = () => {
    const InstagramEmbedNoSSR = dynamic(
        () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
        {
            ssr: false,
        }
    );
    return (
        <>
            <div className="container mx-auto px-5 md:px-20 lg:px-30 2xl:px-52">
                <div
                    className="row flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 py-10 sm:py-5 md:py-7 xl:py-10 
2xl:py-15"
                >
                    <div className="col lg:w-1/2 flex flex-col gap-5">
                        <h2>Meet Dr. Davinder Bhela</h2>
                        <p className="font-[16px] text-[#6e8aab]">
                            After Dr. Bhela opened his practice, he chose to enhance his
                            training with advanced regenerative medicine treatments and
                            natural, non-invasive, non-surgical treatments on restoring
                            certain foot conditions to heal on its own.
                        </p>
                        <p className="font-[16px] text-[#6e8aab]">
                            Dr. Bhela practices various combinations of natural and standard
                            treatment techniques which allow him to provide both non-invasive
                            and minimally invasive treatment options that help his patients to
                            get better faster.
                        </p>
                        <table className="w-full border-collapse table-fixed">
                            <tbody>
                                <tr>
                                    <td className="w-2/5 border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        UNDERGRADUATE
                                    </td>
                                    <td className="border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        <ul className="list-disc pl-5">
                                            <li>
                                                New York Institute of Technology – Bachelor in Life
                                                Sciences
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        GRADUATE
                                    </td>
                                    <td className="border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        <ul className="list-disc pl-5">
                                            <li>
                                                New York College of Podiatric Medicine – Doctor Of
                                                Podiatric Medicine
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        POST DOCTORAL TRAINING
                                    </td>
                                    <td className="border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        {" "}
                                        <ul className="list-disc pl-5">
                                            <li>New York Kingsbrook Jewish Medical Center </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        CERTIFICATIONS/LICENSE/SPECIALTY DEGREE
                                    </td>
                                    <td className="border-b border-black px-4 py-4 font-[16px] text-[#012957] break-words">
                                        {" "}
                                        <ul className="list-disc pl-5">
                                            <li>Diplomate – American Board of Podiatric Medicine </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 font-[16px] text-[#012957] break-words">
                                        AFFILIATIONS
                                    </td>
                                    <td className="px-4 py-4 font-[16px] text-[#012957] break-words">
                                        <ul className="list-disc pl-5">
                                            <li>American Board of Aesthetic Medicine</li>
                                            <li>
                                                Associate, American Society for Laser Medicine and
                                                Surgery
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col lg:w-1/2 flex justify-center lg:items-start items-center">
                        <Image src={Doctor} alt="Doctor" />
                    </div>
                </div>
                <div className="row flex flex-col gap-5 mx-0 2xl:mx-40">
                    <p className="font-[20px] text-[#6e8aab]">
                        Dr. Bhela is one of the few board certified podiatrists in the
                        country who combines natural treatment, regenerative medicine
                        treatment, laser medicine, and sports medicine. The attraction of
                        using natural supplements and regenerative treatments that have a
                        better safety outcome inspired him. There are many disadvantages
                        when dealing with prescription medications including terrible side
                        effects and drug to drug interactions.
                    </p>
                    <p>
                        For example, he had several patients who told him that they didn’t
                        want to add medications to their bodies because they feared they
                        would have unknown effects on their bodies in the future. He decided
                        to change his practice mission and added a safer approach for most
                        of his patients. This journey inspires him to make sure that he has
                        good treatment outcomes. He then went to develop his own protocol
                        for the foot problems that he sees on a daily basis. He is happy to
                        say that he can now confidently treat his patients successfully
                        without causing negative side effects.
                    </p>
                    <p>
                        Dr. Bhela uses a natural, evidence-based regenerative medicine,
                        non-invasive and non-surgical approach to heal everything related to
                        the structure and function of the foot and ankle in active patients
                        through a comprehensive and detailed approach. Dr. Bhela has further
                        studied the medical and cosmetic applications of lasers. He uses
                        latest, newest lasers on the market for toenail fungus eradication.
                    </p>
                    <p>
                        At Restore Podiatry & Laser Center, Dr. Bhela elevates the standard
                        of care by valuing the patient experience at the forefront. With a
                        dedication to excellence, he not only provides top-tier
                        individualized treatment packages but also crafts a high-end
                        atmosphere, ensuring each patient receives a blend of comfort,
                        exclusivity, and top-notch service for a truly exceptional foot care
                        journey.
                    </p>
                </div>
                <div
                    className={`${Styles.gradientContainer} flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-16 p-5 lg:px-32 lg:py-10 my-5 rounded-lg`}
                >
                    <p className="w-full lg:w-2/3 text-sm lg:text-[20px] leading-[18px] lg:leading-[24px] font-normal text-white">
                        Dr. Bhela specializes in minimally invasive surgical techniques that
                        are done in-office (no need to go to hospital), under local
                        anesthesia, and without the use of any hardware.
                    </p>

                    <button className="gradientButton border">Book Appointment</button>
                </div>
                <div className={Styles.cardBg}>
                    <div className="row flex flex-col lg:flex-row gap-5 py-5">
                        <div className="col lg:w-1/3 flex flex-col border border-[#caf6f8] rounded-lg p-5 gap-3  bg-[#fafbfc]">
                            <h2 className="text-[24px] font-normal leading-[30px]">
                                Treating Root Cause
                            </h2>
                            <Image src={Card1} alt="Treating Root Cause" />
                            <p className="font-[16px] text-[#212121]">
                                Our approach focuses on identifying and addressing the
                                underlying factors contributing to your pain or discomfort. By
                                tackling the source of the problem, we aim to provide long-term
                                relief and improved foot health, helping you stay active and
                                pain-free.
                            </p>
                        </div>
                        <div className="col lg:w-1/3 flex flex-col border border-[#caf6f8] rounded-lg p-5 gap-3  bg-[#fafbfc]">
                            <h2 className="text-[24px] font-normal leading-[30px]">
                                Experienced
                            </h2>
                            <Image src={Card2} alt="Experienced" />
                            <p className="font-[16px] text-[#212121]">
                                With years of specialized podiatry experience, our team ensures
                                accurate diagnosis and takes time to educate patients on their
                                condition. We discuss comprehensive treatment plans, guiding you
                                through every step with expert care.
                            </p>
                        </div>
                        <div className="col lg:w-1/3 flex flex-col  "></div>
                    </div>
                    <div className="row flex flex-col lg:flex-row gap-5 py-5">
                        <div className="col lg:w-1/3 flex flex-col"></div>
                        <div className="col lg:w-1/3 flex flex-col border border-[#caf6f8] rounded-lg p-5 gap-3 bg-[#fafbfc]">
                            <h2 className="text-[24px] font-normal leading-[30px]">
                                Trust & Reliability
                            </h2>
                            <Image src={Card3} alt="Trust & Reliability" />
                            <p className="font-[16px] text-[#212121">
                                Restore Podiatry is built on a foundation of reliability and
                                integrity, ensuring that you receive honest, transparent care.
                                We take the time to listen to your concerns and offer treatments
                                tailored to your individual needs,
                            </p>
                        </div>
                        <div className="col lg:w-1/3 flex flex-col border border-[#caf6f8] rounded-lg p-5 gap-3  bg-[#fafbfc]">
                            <h2 className="text-[24px] font-normal leading-[30px]">
                                Non-Invasive Solution (Non-Surgical)
                            </h2>
                            <Image src={Card4} alt="Non-Invasive Solution" />
                            <p className="font-[16px] text-[#212121]">
                                Our philosophy is to explore every possible alternative before
                                considering surgery, using techniques such as custom orthotics,
                                physical therapy, and advanced therapies designed to promote
                                natural healing.Our goal is to help you restore your foot health
                                safely and effectively.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.atRestoreWeGiveTime} py-10`}>
                    <h2>At Restore We Give Time:</h2>
                    <div className="w-full md:w-[72%] mt-20 px-5 py-10 bg-[#002855] rounded-2xl flex flex-col items-start gap-8">
                        <ul>
                            <li>
                                To really know a patient, to really understand the significance
                                of that patient’s symptoms, concerns, and current health status.
                            </li>
                            <li>
                                To check back into the patient’s history to determine if that
                                information affects the current problem.
                            </li>
                            <li>
                                To review the medical literature and perhaps explain the case
                                with a specialist colleague.
                            </li>
                            <li>
                                To explain the purpose of any recommended procedures and then
                                explain with the patient.
                            </li>
                            <li>
                                To educate patients on the difference between recommended
                                medication versus other medication.
                            </li>
                            <li>
                                To explain the purpose of any newly prescribed medication and to
                                discuss the possible side effects.
                            </li>
                            <li>
                                For the doctor to call a patient to make sure they are
                                responding as expected to treatment.
                            </li>
                        </ul>
                        <h3 className="text-[#DFE6F0] text-[20px] leading-[24px]">
                            At Restore Podiatry & Laser Center, we truly enjoy spending time
                            with our patients, so no one ever feels pressured or rushed.
                        </h3>
                        <button className="border text-[16px] leading-[20px] px-5 py-3 rounded-full font-medium text-white">
                            Book Appointment
                        </button>
                    </div>
                </div>
                <div className={`${Styles.socialMedia} p-5 my-10 `}>
                    <div className="row flex flex-col  md:flex-row justify-center items-center py-5 gap-5">
                        <div className="col w-full md:w-1/4 h-px ml-0 lg:ml-10 bg-gray-300"></div>
                        <div className="col w-full md:w-1/3 text-center text-[32px] leading-[39px] text-[#D9D9D9] font-bold">
                            As Seen on YouTube
                        </div>
                        <div className="col w-full md:w-1/4 h-px mr-0 lg:mr-10 bg-gray-300"></div>
                    </div>
                    <div className="flex flex-col flex-wrap lg:flex-row justify-between gap-5  py-5">
                        <iframe
                            className="w-auto"
                            height="200px"
                            src="https://www.youtube.com/embed/UQytoPV4hGA?si=1DTq9bKiI8fnD0yZ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            className="w-auto"
                            height="200px"
                            src="https://www.youtube.com/embed/VABeKWIPVHU?si=6_rmtVY7YoDyXbWD"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            className="w-auto"
                            height="200px"
                            src="https://www.youtube.com/embed/Ik0EEfxnEmI?si=ZOKevZ5fOEuyAzQX"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="border text-[15px] leading-[15px] px-5 py-2 rounded-full font-medium text-white">
                            View All Videoes
                        </button>
                    </div>
                    <div className="row flex flex-col  md:flex-row justify-center items-center py-5 gap-5">
                        <div className="col w-full md:w-1/4 h-px ml-0 lg:ml-10 bg-gray-300"></div>
                        <div className="col w-full md:w-1/3 text-center text-[32px] leading-[39px] text-[#D9D9D9] font-bold">
                            As Seen on Instagram
                        </div>
                        <div className="col w-full md:w-1/4 h-px mr-0 lg:mr-10 bg-gray-300"></div>
                    </div>
                    <div className="row flex flex-col flex-wrap md:flex-row justify-center items-center gap-5 py-5">
                        <InstagramEmbedNoSSR
                            url="https://www.instagram.com/p/DA9N12sNU7x/?utm_source=ig_web_copy_link"
                            width={328}
                        />
                        <InstagramEmbedNoSSR
                            url="https://www.instagram.com/p/DBhAVfMInqZ/?utm_source=ig_web_copy_link"
                            width={328}
                        />
                        <InstagramEmbedNoSSR
                            url="https://www.instagram.com/p/DBeKTNluucb/?utm_source=ig_web_copy_link"
                            width={328}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="border text-[15px] leading-[15px] px-5 py-2 rounded-full font-medium text-white">
                            View All Videoes
                        </button>
                    </div>
                </div>
                <BookAppointment />
            </div>
        </>
    );
};

export default Page;
