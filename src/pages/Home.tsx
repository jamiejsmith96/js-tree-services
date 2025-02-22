import React, { useState } from 'react';
import { 
  HeroSection, MainBenefits, ServicesSection, TestimonialsSection,
  ServiceAreasSection, CtaSection 
} from '../components/Home';
import { mainBenefits, testimonials, servicePoints } from '../data/content';
import { services } from '../data/services';

const Home: React.FC = () => {
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null);

  return (
    <>
      <HeroSection />
      <MainBenefits benefits={mainBenefits} />
      <ServicesSection services={services} />
      <TestimonialsSection testimonials={testimonials} />
      <ServiceAreasSection 
        servicePoints={servicePoints}
        highlightedArea={highlightedArea}
        onAreaHover={setHighlightedArea}
      />
      <CtaSection />
    </>
  );
};

export default Home;
