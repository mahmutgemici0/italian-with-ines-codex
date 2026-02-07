import { CreatorIntro } from "@/components/home/creator-intro";
import { HomeFAQ } from "@/components/home/faq";
import { GoalCards } from "@/components/home/goal-cards";
import { HeroSection } from "@/components/home/hero-section";
import { LeadMagnetCTA } from "@/components/home/lead-magnet-cta";
import { LogoStrip } from "@/components/home/logo-strip";
import { MethodSteps } from "@/components/home/method-steps";
import { ProblemSolution } from "@/components/home/problem-solution";
import { ProductGrid } from "@/components/home/product-grid";
import { ResourcePreview } from "@/components/home/resource-preview";
import { SocialTrust } from "@/components/home/social-trust";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <SocialTrust />
      <ProblemSolution />
      <GoalCards />
      <CreatorIntro />
      <MethodSteps />
      <Testimonials />
      <LeadMagnetCTA />
      <ProductGrid />
      <ResourcePreview />
      <HomeFAQ />
    </>
  );
}
