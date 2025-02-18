'use client'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { AxiosInstance } from '@/app/api/AxiosInstances/AxiosInstances'
import { subSubService } from "@/app/models/servicesPageModels"
import { useParams } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import Causes from './Causes'
import Benefits from './Benefits'

const Page = () => {
  const params = useParams();
  const { subSubServices, subServices } = params;
  const [mainPara, setMainPara] = useState(["", ""]);
  const [subSubServiceDetails, setSubSubServiceDetails] = useState<subSubService | null>(null);

  useEffect(() => {
    const fetchSubSubServiceDetails = async () => {
      try {
        const serviceSlug = subSubServices || subServices;
        const response = await AxiosInstance.get(`/services/subServices/subSubServices/${serviceSlug}`);
        setSubSubServiceDetails(response.data);
      } catch (error) {
        console.error("Error fetching subSubServiceDetails:", error);
      }
    };

    fetchSubSubServiceDetails();
  }, [subServices, subSubServices]);

  useEffect(() => {
    if (subSubServiceDetails && subSubServiceDetails.description) {
      const paragraphs = subSubServiceDetails.description
        .split("\n")
        .map((p) => p.trim())
        .filter((p) => p !== "");

      if (paragraphs.length > 0) {
        setMainPara([paragraphs[0], paragraphs.slice(1).join("\n")]);
      }
    }
  }, [subSubServiceDetails]);

  return (
    <>
      <div className="container mx-auto py-10">
        <Link href="/services" className='text-slate-500 mx-auto  pb-10'> <FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        <div className="row bg-[#e8f5fb] gap-10 p-10 rounded-xl mx-auto my-5">
          <div className="row flex flex-col md:flex-row gap-10 mb-5 ">
            <div className="col w-full md:w-2/5 ">
              {subSubServiceDetails && (
                <Image
                  src={subSubServiceDetails.img}
                  alt="image"
                  className="rounded-xl"
                  layout="responsive"
                  width={1000}
                  height={750}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="col w-full md:w-3/5 flex flex-col gap-5">
              <div className="flex gap-3 justify-between">
                <h2>{subSubServiceDetails && subSubServiceDetails.title}</h2>
                <svg
                  width="88"
                  height="66"
                  viewBox="0 0 88 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M49.5 27.5V66H88V27.5C88 15.4 78.1 0 66 0H55L60.5 11C60.5 11 71.5 11 71.5 27.5H49.5ZM0 27.5V66H38.5V27.5C38.5 15.4 28.6 0 16.5 0H5.5L11 11C11 11 22 11 22 27.5H0Z"
                    fill="#C1CCE1"
                  />
                </svg>
              </div>
              <div className="h-[1px] bg-slate-300"></div>
              <h3 className="text-sky-900 text-[28px] leading-8">
                What is {subSubServiceDetails && subSubServiceDetails.title}?
              </h3>
              <p className="text-gray-500">{mainPara[0]}</p>
            </div>
          </div>

          <p className='text-gray-500'>
            {mainPara[1]}
          </p>
        </div>
        {subSubServiceDetails?.SymptomImg && subSubServiceDetails?.SymptomsDescription && (
          <div className="row flex mx-auto my-5 gap-5">
            <div className="col w-full md:w-3/5">
              <h3 className="text-sky-900 text-[28px] leading-8">{`Common Symptoms of`}</h3>
              <p>{subSubServiceDetails.SymptomsDescription}</p>
            </div>
            <div className="col w-full md:w-2/5">
              <Image
                src={subSubServiceDetails.SymptomImg}
                alt="image"
                className="rounded-xl"
                layout="responsive"
                width={1000}
                height={750}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        )}

        {subSubServiceDetails && <Benefits benefitsData={subSubServiceDetails.benefits} />}
        {subSubServiceDetails && subSubServiceDetails.Causes && <Causes causesData={subSubServiceDetails.Causes} />}

      </div>
    </>
  )
}

export default Page;
