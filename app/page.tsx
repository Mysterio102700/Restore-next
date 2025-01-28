import React from 'react'
import { AppProps } from 'next/app'
import { ServiceProvider } from '@/app/context/ServiceContext'
import Homepage from '@/app/Components/HomePage/page';


const page = ({ pageProps }: AppProps) => {
  return (
    <ServiceProvider>
      <Homepage {...pageProps} />
    </ServiceProvider>)
}

export default page;