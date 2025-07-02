import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoriesSection from '@/components/home/CategoriesSection';
import ArtisanStories from '@/components/home/ArtisanStories';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
        <AboutSection />
        <FeaturedProducts />
        <CategoriesSection />
        <ArtisanStories />
        <TestimonialsSection />
        <Newsletter />
    </div>
  );
}