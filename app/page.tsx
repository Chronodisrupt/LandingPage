import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import ResultsSection from "@/components/ResultsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HowToUse from "@/components/HowToUse";
import ResultsTestimonials from "@/components/ResultsTestimonials";
import HeroVideo from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsGrid from "@/components/BenefitsGrid";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";


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