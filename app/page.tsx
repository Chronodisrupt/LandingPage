import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import ResultsSection from "@/components/ResultsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HowToUse from "@/components/HowToUse";
import ResultsTestimonials from "@/components/ResultsTestimonials";
import HeroVideo from "@/components/HeroSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import FAQ from "@/components/FAQSection";
import StickyMobileCTA from "@/components/BackToTop";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";


export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Header />  
      <PromoBanner />
      <HeroSection />
      <ResultsSection />
      <TestimonialCarousel />
      <HowToUse />
      <BenefitsGrid />
      <ResultsTestimonials />
      <FAQSection />
      <Footer />
      <BackToTop />
     { /*<StickyMobileCTA />*/}
     { /*
      <TrustBar />
      <ProblemSection />
      <ProductShowcase />
      <BenefitsGrid />
      <BeforeAfter />
      <HowItWorks />
      <CTASection />
      <StickyMobileCTA />*/}
    </>
  );
}