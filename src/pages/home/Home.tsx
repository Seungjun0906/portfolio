import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FullPageLayout } from "@/components/layout/FullPageLayout";
import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";

import * as styles from "./Home.css";
import AboutSection from "@/components/sections/about/AboutSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import { ProjectSection } from "@/components/sections/project/ProjectSection";
import ContactSection from "@/components/sections/contact/ContactSection";

const Home = () => {
  return (
    <FullPageLayout>
      <section className="section">
        <div className={styles.ThemeToggleContainer}>
          <ThemeToggle />
        </div>
        <HeroSection />
      </section>

      {/* 이력서 섹션 */}
      <section className="section">
        <AboutSection />
      </section>

      {/* 프로젝트 소개 섹션 */}
      <section className="section">
        <ExperienceSection />
      </section>

      {/* 컨텍스트 섹션 */}
      <section className="section">
        <ProjectSection />
      </section>

      {/* 컨텍스트 섹션 */}
      <section className="section">
        <ContactSection />
      </section>
    </FullPageLayout>
  );
};

export default Home;
