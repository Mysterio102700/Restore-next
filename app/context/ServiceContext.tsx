"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ServiceContextType {
  serviceName: string;
  setServiceName: (name: string) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};

interface ServiceProviderProps {
  children: ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
  const [serviceName, setServiceName] = useState<string>('');

  return (
    <ServiceContext.Provider value={{ serviceName, setServiceName }}>
      {children}
    </ServiceContext.Provider>
  );
};
