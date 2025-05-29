import WhySection from '@/components/section/WhySection';
import Container from '@/components/common/Container';
import NavigationBar from '@/components/navigation/NavigationBar';
import HeroSection from '@/components/section/HeroSection';
import SocialProofSection from '@/components/section/SocialProofSection';
import TentangKamiPage from './components/TentangKami';
import PartnerKesehatan from './components/PartnerKesehatan';
import GaleriLayananPasien from './components/GaleriLayananPasien';
import ProductsList from '@/components/ProductsList';
import ContactBanner from '@/components/ContactBanner';
import Faq from './components/Faq'
import Footer from '@/components/navigation/Footer';

export default function Home() {
  return (
    <>
      <Container>
        <NavigationBar />
        <HeroSection />
        <SocialProofSection />
        <ProductsList />
        <WhySection />
      </Container>
      <TentangKamiPage />
      <PartnerKesehatan />
      <GaleriLayananPasien />
      <ContactBanner />
      <Faq />
      <Footer />
    </>
  );
}
