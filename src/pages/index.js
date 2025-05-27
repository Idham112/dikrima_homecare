import Image from 'next/image';
import WhySection from '@/components/section/WhySection';
import Container from '@/components/common/Container';
import NavigationBar from '@/components/navigation/NavigationBar';
import HeroSection from '@/components/section/HeroSection';
import SocialProofSection from '@/components/section/SocialProofSection';

export default function Home() {
  return (
    <Container>
      <NavigationBar />
      <HeroSection />
      <SocialProofSection />
      <WhySection />
    </Container>
  );
}
