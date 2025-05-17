import { SEO } from '@/components/ui/seo';
import HeroSection from '@/components/home/HeroSection';
import VisionSection from '@/components/home/VisionSection';
import ApproachSection from '@/components/home/ApproachSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import BlogSection from '@/components/home/BlogSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="The Bespoke Mind offers personalized workshops, leadership training, and team development programs using design thinking and human-centered approaches."
      />
      <HeroSection />
      <VisionSection />
      <ApproachSection />
      <ProgramsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CtaSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
