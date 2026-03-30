import HeroSection from '../components/HeroSection';
import CompanyLogos from '../components/CompanyLogos';
import ProgramsSection from '../components/ProgramsSection';
import FeaturesSection from '../components/FeaturesSection';
import { usePersonalization } from '../hooks/usePersonalization';

const Home = () => {
  const { slots } = usePersonalization();

  return (
    <>
      <HeroSection slots={slots} />
      <CompanyLogos slots={slots} />
      <ProgramsSection slots={slots} />
      <FeaturesSection slots={slots} />
    </>
  );
};

export default Home;
