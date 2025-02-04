'use client'
import React, { useEffect, useState } from 'react';
import { AxiosInstance } from '@/app/api/AxiosInstances/AxiosInstances';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { generateSlug } from '@/app/Components/GenerateSlug/GenerateSlug';
import {
    ServiceDetails,
    subSubService
} from '@/app/models/servicesPageModels'


const ServicePage = () => {
    const [subServiceDetails, setSubServiceDetails] = useState<ServiceDetails | null>(null);
    const [subSubServiceDetails, setSubSubServiceDetails] = useState<subSubService[]>([]);




    const serviceName = sessionStorage.getItem('serviceName');
    useEffect(() => {
        if (!serviceName) {
            return;
        }

        const fetchServiceDetails = async () => {
            try {
                const response = await AxiosInstance.get(`/services/subServices/${serviceName}`);
                setSubServiceDetails(response.data);
            } catch (error: unknown) {
                console.error('Error:', error);
            }
        };

        fetchServiceDetails();

    }, [serviceName]);



    useEffect(() => {
        if (!serviceName) {
            return;
        }

        const fetchServiceDetails = async () => {
            try {
                const response = await AxiosInstance.get(`/services/subServices/subServicesCategory/${serviceName}`);
                setSubSubServiceDetails(response.data);
            } catch (error: unknown) {
                console.error('Error:', error);
            }
        };

        fetchServiceDetails();

    }, [serviceName]);


    return (
        <div className="container mx-auto py-10">
            <Link href="/services" className='text-slate-500'> <FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
            <h2 className='text-center pt-10'>{subServiceDetails?.title}</h2>
            <p className='text-slate-500 text-center py-5 w-3/5 mx-auto'>{subServiceDetails?.description}</p>

            <div className="row flex flex-wrap items-start justify-center gap-10 py-10">
                {subSubServiceDetails.map((subSubService, index) => (
                    <div className='col w-full md:w-[33%] flex flex-col gap-5' key={index}>
                        <div className="bg-[#e8f5fb] py-10">
                            <Image src={subSubService.img} layout='responsive' className='max-w-[90%] rounded-lg float-end' width={10} height={10} alt={subSubService.title} />
                        </div>
                        <div className="flex flex-row justify-between items-center"><h3>
                            <Link href={`/services/${subServiceDetails?.title}/${generateSlug(subSubService.title)}`} className='text-3xl font-medium text-gray-800'>{subSubService.title}</Link></h3>
                            <Link href=""><button className='border border-[#0057bc] py-3 px-5 rounded-full'><FontAwesomeIcon icon={faArrowRightLong} style={{ color: "#0057bc", fontSize: "20px" }} /></button></Link>
                        </div>
                        <p className='w-10/12 text-gray-600'>{subSubService.titleDesc}</p>
                    </div>
                ))}


            </div>


        </div>

    );
};

export default ServicePage;
