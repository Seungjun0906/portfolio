import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import SpaceBackground from "@/components/sections/hero/SpaceBackground";
import SkyBackground from "@/components/sections/hero/SkyBackground";
import * as styles from "@/pages/home/Home.css";
import { useTheme } from "./ThemeProvider";

// Preloader 컴포넌트
const Preloader = ({ onLoaded }: { onLoaded: () => void }) => {
  useEffect(() => {
    const preloadHDR = async () => {
      try {
        // HDR 파일 미리 로드
        await Promise.all([
          fetch(
            `${import.meta.env.BASE_URL}hdr/kloppenheim_06_puresky_1k.hdr`
          ).then((res) => res.blob()),
        ]);

        onLoaded();
      } catch (err) {
        console.error("이미지 프리로딩 실패:", err);
        onLoaded();
      }
    };

    preloadHDR();
  }, [onLoaded]);

  return null;
};

// BackgroundProvider 컴포넌트
export const BackgroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useTheme();

  return (
    <>
      <Preloader onLoaded={() => setIsLoaded(true)} />

      {isLoaded ? (
        <>
          <div className={styles.background}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              {isDark ? <SpaceBackground /> : <SkyBackground />}
            </Canvas>
          </div>
          {children}
        </>
      ) : (
        // 로딩 처리 보완 필요
        <div>Loading...</div>
      )}
    </>
  );
};
