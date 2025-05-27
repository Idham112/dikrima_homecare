import Image from 'next/image';
import WhySection from '@/components/section/WhySection';
import Container from '@/components/common/Container';
import NavigationBar from '@/components/navigation/NavigationBar';
import HeroSection from '@/components/section/HeroSection';
import SocialProofSection from '@/components/section/SocialProofSection';
import Image from "next/image";
import TentangKamiPage from "./components/TentangKami";
import PartnerKesehatan from "./components/PartnerKesehatan";
import GaleriLayananPasien from "./components/GaleriLayananPasien";
import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <>
     <Container>
      <NavigationBar />
      <HeroSection />
    <ProductsList />
      <SocialProofSection />
      <WhySection />
    </Container>
     <TentangKamiPage />
      <PartnerKesehatan />
      <GaleriLayananPasien />
    </>
   

  );
}
