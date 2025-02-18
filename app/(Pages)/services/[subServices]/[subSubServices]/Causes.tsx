import React from 'react'
import { Causes as causes } from '@/app/models/servicesPageModels'


const Causes: React.FC<{ causesData: causes[] }> = ({ causesData }) => {
    if (!causesData || causesData.length === 0) {
        return null;
    }

    return (
        <div className="row bg-slate-50 p-10 mx-auto my-5 flex flex-col justify-center items-center gap-5">
            <h3 className="text-sky-900 text-[28px] leading-8">Causes</h3>
            {causesData.map((cause, index) => (
                <div className="col w-full md:w-1/2 flex flex-col gap-3 border border-blue-700 p-5 rounded-lg" key={index}>
                    <ul className="pl-5 space-y-3 list-disc marker:text-blue-600">
                        <li className="text-lg font-medium">{cause.Causes}</li>
                    </ul>
                    <p className="text-gray-500">{cause.CausesDescription}</p>
                </div>
            ))}
        </div>
    )
}

export default Causes