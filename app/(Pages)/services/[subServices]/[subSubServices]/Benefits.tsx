import React from 'react'
import { Benefit } from '@/app/models/servicesPageModels'



const Benefits: React.FC<{ benefitsData: Benefit[]; }> = ({ benefitsData }) => {
    if (!benefitsData || benefitsData.length === 0) {
        return null;
    }

    return (
        <div className="row bg-slate-50 p-10 mx-auto flex flex-col justify-center items-center gap-5">
            <h3 className="text-sky-900 text-[28px] leading-8">Benefits</h3>
            {benefitsData.map((benefit) => (
                <div className="col w-full md:w-1/2 flex flex-col gap-3 border border-blue-700 p-5 rounded-lg" key={benefit.BenefitTitle}>
                    <ul className="pl-5 space-y-3 list-disc marker:text-blue-600">
                        <li className="text-lg font-medium">{benefit.BenefitTitle}</li>
                    </ul>
                    <p className="text-gray-500">{benefit.BenefitDescription}</p>
                </div>
            ))}
        </div>
    )
}

export default Benefits
