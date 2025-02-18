import Link from 'next/link'
import React from 'react'
import Styles from "@/app/(Pages)/locations/locations.module.css"
import Image from 'next/image'
import meter from "@/app/Assets/image-811-2.png"
import Doctor from "@/app/(Pages)/HomePage/container8"
import { Google, Star } from '@/app/Components/Icons/page'
import Carousel from "@/app/(Pages)/HomePage/carousel"

const page = () => {

    const whatWeOffer = [
        {
            title: "Achilles Tendonitis Deep Tissue Laser Therapy",
            description: "We specialize in Achilles Tendonitis Deep Tissue Laser Therapy. This non-invasive method uses high-powered lasers to penetrate deep into the tissue, promoting healing and reducing inflammation without the need for surgery or medication.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/Achilles-Tendinopathy-qz34nakl4h7vio3lfwc6ckj20ry74u1rprked99nic.png",
            url: "https://restorepodiatry.com/achilles-tendonitis-treatment/"
        },
        {
            title: "Plantar Fasciitis Power Heel Program™",
            description: "Our exclusive Power Heel Program™ is designed to treat plantar fasciitis effectively. It combines advanced therapies to relieve pain, restore mobility, and prevent future flare-ups—without surgery or injections.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/Power-Heel-Program%E2%84%A2-qz34ng7m9hflgbveiyrxrj3tl36ef0o5qjhb8x1ah0.png",
            url: "https://restorepodiatry.com/plantar-fasciitis-treatment/"
        },
        {
            title: "Swift Microwave Therapy for Plantar Warts",
            description: "Swift Microwave Therapy is a revolutionary treatment for plantar warts that stimulates the body's immune response to eliminate warts effectively and painlessly, with no downtime.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/Plantar-Fasciitis-Treatment-Options-at-Restore-Podiatry-qz34ng7m9hflgbveiyrxrj3tl36ef0o5qjhb8x1ah0.png",
            url: "https://restorepodiatry.com/plantar-wart-treatment/"
        },
        {
            title: "Onyfix Non-Surgical Ingrown Nail Treatment",
            description: "Onyfix is a pain-free, non-surgical solution for ingrown toenails that corrects nail growth naturally over time. No cutting, no downtime—just results.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/Deep-Tissue-Laser-Therapy-qz34nakl4h7vio3lfwc6ckj20ry74u1rprked99nic.png",
            url: "https://restorepodiatry.com/ingrown-toenail-treatment/"
        },
        {
            title: "Custom 3D-Printed Orthotics",
            description: "We offer state-of-the-art custom 3D-printed orthotics tailored to your feet for superior comfort, support, and performance in daily activities or sports.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/Swift-Microwave-Immunotherapy-qz34nakl4h7vio3lfwc6ckj20ry74u1rprked99nic.jpg",
            url: "https://restorepodiatry.com/custom-orthotics/"
        },
        {
            title: "Bunion Treatment Without Surgery",
            description: "We provide innovative, non-surgical bunion treatments that reduce pain and improve foot alignment without the need for invasive procedures.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/Onyfix-Treatment-qz34ng7m9hflgbveiyrxrj3tl36ef0o5qjhb8x1ah0.png",
            url: "https://restorepodiatry.com/bunion-treatment/"
        },
        {
            title: "Neuropathy Treatment",
            description: "Our advanced neuropathy treatments use regenerative medicine and laser therapy to relieve nerve pain, numbness, and tingling in the feet.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/Minimally-Invasive-surgery-qz34nakl4h7vio3lfwc6ckj20ry74u1rprked99nic.png",
            url: "https://restorepodiatry.com/neuropathy-treatment/"
        },
        {
            title: "Heel Pain Treatment",
            description: "We provide comprehensive treatment options for heel pain, including plantar fasciitis and heel spurs, with non-invasive therapies tailored to your needs.",
            img: "https://restorepodiatry.com/wp-content/uploads/elementor/thumbs/3D-Printed-Custom-Orthotics-qz34nbifbb95ua28aeqsx2aim5tkcj5i1w7vuj89c4.png",
            url: "https://restorepodiatry.com/heel-pain-treatment/"
        }
    ];



    return (
        <>
            <div className="container mx-auto py-10">
                <div className="row flex flex-col gap-5 justify-center items-center">
                    <h2 className='text-center'>Restore Podiatry & Laser Center Locations</h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1r2logv_avXBa-PAXEj7mVc8CsrLqeIY&ehbc=2E312F" width="90%" height="500"></iframe>
                </div>

            </div>
            <div className={`row ${Styles.boxBg} py-10`}>
                <div className="col flex flex-col md:flex-row border border-blue-700 p-5 w-full md:w-1/2 mx-auto gap-10 rounded-2xl">
                    <div className="col w-full md:w-1/2 flex flex-col gap-3">
                        <h4 className='text-blue-950 text-2xl font-medium'>Existing Patients</h4>
                        <p className='text-gray-600 text-base'>Please Call us</p>
                        <div className="col flex flex-col items-start">
                            <Link href="/locations/hicksville">
                                <span className='text-gray-600 text-base font-medium'>Hicksville</span>
                            </Link>
                            <Link href="tel:(516) 806-2200">
                                <button className='text-blue-950 border border-blue-950
                                px-10 p-3 rounded-full bg-cyan-100'>(516) 806-2200</button></Link>
                        </div>

                        <div className="col flex flex-col items-start">
                            <Link href="/locations/hicksville">
                                <span className='text-gray-600 text-base font-medium'>Huntington</span>
                            </Link>
                            <Link href="tel:(516) 806-2200">   <button className='text-blue-950 border border-blue-950
                                px-10 p-3 rounded-full bg-cyan-100'>(631) 223-2291</button></Link>
                        </div>
                    </div>
                    <div className="col bg-black w-[1px]"></div>
                    <div className="col w-full md:w-1/2 flex flex-col justify-around items-start">
                        <div className="">
                            <h4 className='text-blue-950 text-2xl font-medium'>
                                New Patients
                            </h4>
                            <p className='text-gray-600 text-lg'>
                                Please Fill out our New
                                Patient form
                            </p>
                        </div>
                        <button className='bg-blue-950 px-10 py-3 text-lime-100 rounded-full'>Book Appointment</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row bg-green-50 flex flex-col md:flex-row rounded-3xl p-5 my-10">
                    <div className="col w-full md:w-3/4 flex flex-col gap-3">
                        <h3 className='text-sky-800'>Welcome to Restore Podiatry & Laser Center</h3>
                        <p className='text-lg text-neutral-600'> At Restore Podiatry & Laser Center, art and function meet the latest medical advances. Our goal is to improve lives with the newest regenerative medicine treatments and simple cosmetic foot surgeries.
                        </p>
                        <p className='text-lg text-neutral-600'>
                            In our unique space, advanced treatments and personal care come together.
                            We serve Nassau County, Suffolk County, and Long Island. We offer an unmatched experience with no drugs, major surgery, stitches, casts, or hardware—all done in the office.</p>
                    </div>
                    <div className="col relative">
                        <Image src={meter} alt='meter' layout='responsive'  className='max-w-full'/>
                    </div>
                </div>
                <div className="row ">
                    <div className="col w-3/4 flex flex-col gap-3 items-center mx-auto">
                        <h2>What We Offer</h2>
                        <p className='text-center text-sky-900 text-xl'>At Restore Podiatry & Laser Center, we use a combination of natural and regenerative
                            treatment methods. Using a variety of advanced technologies, Dr. Bhela has developed
                            protocols that will help the body`&apos;`s natural healing ability to heal itself.</p>
                    </div>
                </div>

                <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                    {whatWeOffer.map((offer, index) => (
                        <div className="col flex flex-wrap items-center justify-center gap-5 bg-blue-50 p-5" key={index}>
                            <Image src={offer.img} alt={offer.title} layout='responsive' width={100} height={100} className='max-w-full md:max-w-min rounded-full' />
                            <h3 className='text-sky-800 text-center'>{offer.title}</h3>
                            <p className='text-gray-600 text-center'>{offer.description}</p>
                            <Link href={offer.url}> <button className='border border-blue-700 text-blue-700 px-10 py-3 rounded-full'>Read More</button></Link>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col w-3/4 flex flex-col gap-3 items-center mx-auto">
                        <p className='text-center text-sky-900 text-xl'>We provide podiatric care that allows our patients to restore, regenerate, and renew their foot health without using drugs, injections, or major surgeries. Our approach focuses on non-invasive treatments that support the body`&apos;`s natural healing processes.</p>
                    </div>
                </div>
            </div>
            <Doctor />
            <div className="container ">
                <div className="row">
                    <div className="col w-3/4 mx-auto flex flex-col gap-3">
                        <h2 className='text-center'>What Our Patients Are Saying</h2>
                        <p className='text-center'>Our patients love the personalized care and effective treatments at Restore Podiatry. Hear from them about their positive experiences and how we`&apos;`ve helped restore their foot health with compassion and expertise.</p>
                    </div>
                    <div className="row py-5">
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
                    </div>
                </div>
                <div className="row">
                    <h2 className='text-center py-5'>Contact us</h2>
                    <section className={Styles.BeforeFooter}>
                        <div className="container mx-auto flex flex-col items-center gap-5">
                            <p className='text-center text-white text-3xl'>Ready to take the first step towards <br></br> better foot health?</p>
                            <p className='text-center text-white text-lg'>Contact us today to schedule an appointment and experience <br></br> the difference at Restore Podiatry & Laser Center.</p>
                            <button className="border text-base leading px-10 py-2 rounded-full font-medium text-white">Contact Us</button>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default page