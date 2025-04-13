import { useRef, useEffect } from "react";
import { HeroSection } from "@/components/Hero/HeroSection";
import { FullPageLayout } from "@/components/layout/FullPageLayout";
import MouseTrailProvider from "@/providers/MouseTrailProvider";

const Home = () => {
  return (
    <FullPageLayout>
      <div className="section">
        <HeroSection />
      </div>
      {/* Additional sections can be added here */}
      {/* Each section should have the "section" class for the FullPageLayout ScrollTrigger functionality */}
    </FullPageLayout>
  );
};

export default Home;
