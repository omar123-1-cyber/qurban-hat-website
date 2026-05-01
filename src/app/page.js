import HeroSection from '@/components/HeroSection';
import FeaturedAnimals from '@/components/FeaturedAnimals';
import QurbaniTips from '@/components/QurbaniTips';
import TopBreeds from '@/components/TopBreeds';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreeds />
    </div>
  );
}
