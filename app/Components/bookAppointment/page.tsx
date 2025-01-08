import React from 'react';
import Styles from '@/app/Components/bookAppointment/bookAppointment.module.css';

const page = () => {
  return (
    <>
      <section className={Styles.bookAppointment}>
        <div className="container mx-auto w-3/5 flex flex-col items-center gap-5">
          <p  className='text-center text-white'>At Restore Podiatry & Laser Center, we are proud to offer our newest, latest laser treatment and Clear Nail Program™ & Clear Wart Program™ which are powerful inclusive approach to your treatment for toenail fungus and warts. We take time to understand our patients and understand their needs.</p>
          <button className="border text-[15px] leading-[15px] px-5 py-2 rounded-full font-medium text-white">Book Appointment</button>
        </div>
      </section>
    </>
  )
}

export default page