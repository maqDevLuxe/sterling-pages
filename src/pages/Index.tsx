import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import WealthStrategies from "@/components/landing/WealthStrategies";
import GrowthMetrics from "@/components/landing/GrowthMetrics";
import LegacyPlanning from "@/components/landing/LegacyPlanning";
import ConciergeServices from "@/components/landing/ConciergeServices";
import AssetAllocation from "@/components/landing/AssetAllocation";
import CinematicPromo from "@/components/landing/CinematicPromo";
import GlobalReach from "@/components/landing/GlobalReach";
import FinancialInsights from "@/components/landing/FinancialInsights";
import SecurityProtocol from "@/components/landing/SecurityProtocol";
import Testimonials from "@/components/landing/Testimonials";
import ConsultationCTA from "@/components/landing/ConsultationCTA";
import CustomCursor from "@/components/landing/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Partners />
      <WealthStrategies />
      <GrowthMetrics />
      <LegacyPlanning />
      <ConciergeServices />
      <AssetAllocation />
      <CinematicPromo />
      <GlobalReach />
      <FinancialInsights />
      <SecurityProtocol />
      <Testimonials />
      <ConsultationCTA />
    </div>
  );
};

export default Index;
