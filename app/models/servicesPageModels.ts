import { StaticImageData } from "next/image";

interface Service {
  title: string;
  url: string;
  img: StaticImageData;
}

interface ServiceListProps {
  services: Service[];
}

interface ServiceDetails {
  id: number;
  title: string;
  description: string;
}

interface KeyComponent {
  keyComponentTitle: string;
  keyComponentDescription: string;
}

interface Benefit {
  BenefitTitle: string;
  BenefitDescription: string;
}

interface subSubService {
  img: string;
  title: string;
  titleDesc: string;
  description: string;
  subService: string;
  keyComponentImg: string;
  keyComponents: KeyComponent[];
  benefits: Benefit[];
}

export type {
  Service,
  ServiceListProps,
  ServiceDetails,
  KeyComponent,
  Benefit,
  subSubService,
};
