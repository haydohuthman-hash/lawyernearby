import LeadNavbar from "@/components/leadgen/LeadNavbar";
import LeadHero from "@/components/leadgen/LeadHero";
import WhatsInside from "@/components/leadgen/WhatsInside";
import HowItWorks from "@/components/leadgen/HowItWorks";
import Testimonials from "@/components/leadgen/Testimonials";
import FAQ from "@/components/leadgen/FAQ";
import FinalCta from "@/components/leadgen/FinalCta";
import LeadFooter from "@/components/leadgen/LeadFooter";

export default function GrowthBlueprintPage() {
  return (
    <main>
      <LeadNavbar />
      <LeadHero />
      <WhatsInside />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCta />
      <LeadFooter />
    </main>
  );
}
