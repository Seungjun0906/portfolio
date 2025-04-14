import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FullPageLayout } from "@/components/layout/FullPageLayout";
import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";

import * as styles from "./Home.css";
import AboutSection from "@/components/sections/about/AboutSection";
import { useTheme } from "@/providers/ThemeProvider";

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
      <section
        className="section"
        style={{
          height: "100dvh",
        }}
      >
        <div>섹션 2</div>
      </section>

      {/* 컨텍스트 섹션 */}
      <section
        className="section"
        style={{
          height: "100dvh",
        }}
      >
        <div>섹션 3</div>
      </section>
    </FullPageLayout>
  );
};

export default Home;
function useEffect(arg0: () => void, arg1: any[]) {
  throw new Error("Function not implemented.");
}
