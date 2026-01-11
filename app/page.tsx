import { HeroSection } from "@/components/landing/hero";
import { StatsSection } from "@/components/landing/stats";
import { PrincipalMessageSection } from "@/components/landing/principal";
import { CompetenciesSection } from "@/components/landing/competencies";
import { FacilitiesSection } from "@/components/landing/facilities";
import { NewsSection } from "@/components/landing/news";
import { TestimonialsSection } from "@/components/landing/testimonials";
import { CtaSection } from "@/components/landing/cta";

export default async function SchoolLandingPage() {
  return (
    <div className="min-h-screen pt-20 bg-background font-sans">
      <HeroSection />
      <StatsSection />
      <PrincipalMessageSection />
      <CompetenciesSection />
      <FacilitiesSection />
      <NewsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
