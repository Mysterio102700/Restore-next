'use client'
import React, { useEffect, useState } from 'react';
import { useService } from '@/app/context/ServiceContext';
import { useRouter } from 'next/router';

const ServicePage = () => {
    // const { serviceName } = useService();
    // const [serviceDetails, setServiceDetails] = useState<{ category: string, treatments: [] } | null>(null);
    const [serviceName, setServiceName] = useState("serviceName")
    const [serviceDetails, setServiceDetails] = useState<{ category: string, treatments: string[] } | null>({ "category": "Restore Exclusive Programs", "treatments": ["Clear Nail program™", "Clear wart program™", "Custom 3D printed Orthotics", "Power Heel program™", "Neuropathy program"]     });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    console.log(serviceName);



    useEffect(() => {
        if (!serviceName) {
            setError('No service name provided.');
            setLoading(false);
            return;
        }

        const fetchServiceDetails = async () => {
            setLoading(true);
            console.log(serviceName);

            try {
                const response = await fetch('/api/services', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ serviceName }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch service details');
                }

                const data = await response.json();
                setServiceDetails(data);
                console.log(data);
            } catch (err: any) {
                setError(`Failed to load service details: ${err.message}`);
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetails();

    }, [serviceName]);


    if (!isClient) {
        return <div>Loading...</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto">
            <h1>Service: {serviceDetails?.category}</h1>
            <div>
                {serviceDetails?.treatments.map((treatment, index) => (
                    <div key={index}>{treatment}</div>
                ))}
            </div>


        </div>

    );
};

export default ServicePage;
