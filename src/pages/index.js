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
import Faq from './components/Faq';
import Footer from '@/components/navigation/Footer';
import ContactBannerTwo from '@/components/ContactBannerTwo';

export default function Home() {
  return (
    <>
      <Container>
        <NavigationBar />
        <HeroSection />
        <SocialProofSection />
        <div id="Layanan-Kami">
          <ProductsList />
        </div>
        <WhySection />
        <ContactBannerTwo />
      </Container>
      <div id="Tentang-Kami">
        <TentangKamiPage />
      </div>
      <PartnerKesehatan />
      <div id="Galeri-Pasien">
        <GaleriLayananPasien />
      </div>
      <ContactBanner />
      <Faq />
      <Footer />
    </>
  );
}
