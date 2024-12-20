import Image from "next/image";
import React from "react";
import Before1 from "@/app/Assets/Clear-Nail-program-1.png";
import Before2 from "@/app/Assets/Clear-Nail-program-2.png";
import After1 from "@/app/Assets/Clear-Wart-program-Results-1.png";
import After2 from "@/app/Assets/Clear-Wart-program-Results-2.png";

const Container6 = () => {
  return (
    <section className="container6 mt-12 md:mt-36 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center">Before & After Pics</h2>
        <div className="row flex flex-col lg:flex-row gap-5 py-5">
          
          <div className="col w-full lg:w-2/5 flex flex-col p-5 bg-[#f1f3f6] rounded-lg">
            <div className="col flex flex-col md:flex-row gap-3 mb-10">
              <div className="w-full lg:w-1/2 mb-4">
                <Image
                  src={Before1}
                  alt="Before image of the Clear Nail Program showing toenail fungus"
                  layout="intrinsic"
                  width={500}
                  height={500}
                  objectFit="cover"  
                />
              </div>
              <div className="w-full lg:w-1/2 mb-4">
                <Image
                  src={Before2}
                  alt="Before image of the Clear Nail Program showing toenail fungus"
                  layout="intrinsic"
                  width={500}
                  height={500}
                  objectFit="cover"  
                />
              </div>
            </div>
            <h6 className="text-[#101112] text-[18px] leading-[21px] text-center font-semibold capitalize">
              Clear Nail Program
            </h6>
            <h4 className="text-[#238620] text-[38px] leading-[46px] text-center font-semibold capitalize">
              98% Success Rate
            </h4>
          </div>

          <div className="col w-full lg:w-3/5 flex flex-col p-5 bg-[#f1f3f6] rounded-lg">
            <div className="col flex flex-col md:flex-row gap-3 mb-10">
              <div className="w-full lg:w-1/2 mb-4">
                <Image
                  src={After1}
                  alt="After image of the Clear Wart Program showing improved nail appearance"
                  className="object-contain"
                  layout="intrinsic"
                  width={500}
                  height={500}
                  objectFit="cover" 
                />
              </div>
              <div className="w-full lg:w-1/2 mb-4">
                <Image
                  src={After2}
                  alt="After image of the Clear Wart Program showing improved nail appearance"
                  className="object-contain"
                  layout="intrinsic"
                  width={500}
                  height={500}
                  objectFit="cover" 
                />
              </div>
            </div>
            <h6 className="text-[#101112] text-[18px] leading-[21px] text-center font-semibold capitalize">
              Clear Nail Program
            </h6>
            <h4 className="text-[#238620] text-[38px] leading-[46px] text-center font-semibold capitalize">
              98% Success Rate
            </h4>
          </div>
        </div>

        <div className="row flex flex-col md:flex-row py-3 md:py-20 items-center justify-center gap-3">
          <div className="col w-full md:w-3/5">
            <p className="text-[#4D5762] text-justify">
              At Restore Podiatry & Laser Center, we are proud to offer our
              newest, latest laser treatment and CLEAR NAIL Program™ & CLEAR
              WART Program™, which are powerful inclusive approaches to your
              treatment for toenail fungus and warts. We take time to understand
              our patients and their needs.
            </p>
          </div>

          <button className="gradientButton">
            View More Before & After Pics
          </button>
        </div>
      </div>
    </section>
  );
};

export default Container6;
