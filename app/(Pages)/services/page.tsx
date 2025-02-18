'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from './Services.module.css';
import Image from 'next/image';
import BeforeFooter from '@/app/Components/BeforeFooter/page';
import { AxiosInstance } from '@/app/api/AxiosInstances/AxiosInstances';
import { generateSlug } from '@/app/Components/GenerateSlug/GenerateSlug';
import { Service } from "@/app/models/servicesPageModels"


const Page = () => {

  const [serviceData, setServiceData] = useState<Service[]>([]);

  useEffect(() => {
    const handleServiceData = async () => {
      try {
        const response = await AxiosInstance.get('/services');
        setServiceData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    handleServiceData();
  }, [])


  return (
    <div className="container mx-auto ">
      <h2 className='py-10 text-center'>Our Services</h2>
      <div className="row flex flex-wrap items-center justify-center gap-8">
        {serviceData.map((service, index) => (
          <Link href={`services/${generateSlug(service.title)}`}
            key={index}
            className="col w-full md:w-1/4 flex"
          >
            <div className={`${Styles.card} flex flex-col items-center justify-between h-full`}>
              <Image
                className='max-w-[70%] mb-4'
                src={service.img}
                alt={service.title}
                width={500}
                height={500}
              />
              <h5 className="text-base text-center whitespace-pre-line">{service.title}</h5>
            </div>
          </Link>
        ))}
      </div>
      <div className="mx-auto py-20">
        <BeforeFooter />
      </div>
    </div>
  )
}

export default Page;
