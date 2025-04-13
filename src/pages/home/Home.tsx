import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FullPageLayout } from "@/components/layout/FullPageLayout";
import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";
import { Canvas } from "@react-three/fiber";
import SpaceBackground from "@/components/sections/hero/SpaceBackground";
import * as styles from "./Home.css";

const Home = () => {
  return (
    <FullPageLayout>
      <div className={styles.background}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <SpaceBackground />
        </Canvas>
      </div>
      <section className="section">
        <div
          style={{
            backgroundColor: "whitesmoke",
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 200,
          }}
        >
          <ThemeToggle />
        </div>
        <HeroSection />
      </section>

      {/* 이력서 섹션 */}
      <section
        className="section"
        style={{
          height: "100dvh",
        }}
      >
        <div>섹션 1</div>
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
