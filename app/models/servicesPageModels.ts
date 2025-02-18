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

interface Causes {
  Causes: string;
  CausesDescription: string;
}

interface subSubService {
  img: string;
  title: string;
  titleDesc: string;
  description: string;
  subService: string;
  SymptomImg: string,
  SymptomsDescription: string,
  keyComponentImg: string;
  keyComponents: KeyComponent[];
  benefits: Benefit[];
  Causes: Causes[];
}

export type {
  Service,
  ServiceListProps,
  ServiceDetails,
  KeyComponent,
  Benefit,
  subSubService,
  Causes
};
