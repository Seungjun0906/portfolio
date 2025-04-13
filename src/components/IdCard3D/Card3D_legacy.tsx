import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader, Group } from "three";
import { Target, useDrag } from "@use-gesture/react";
import { Text, RoundedBox, Image, Svg } from "@react-three/drei";
import avatarImage from "/images/avatar.png"; // 경로 확인 필요

import { Github, Linkedin, Book } from "iconoir-react";
import * as styles from "./Card3D.css";
import { themeVars } from "@/styles/theme.css";
import { useTheme } from "@/providers/ThemeProvider";

const Card = () => {
  const isDark = useTheme().theme === "dark";
  const groupRef = useRef<Group>(null);
  const texture = useLoader(TextureLoader, avatarImage);
  const [hovering, setHovering] = useState(false);
  const rotationY = useRef(0); // 회전 상태 저장

  // 드래그 제스처
  const bind = useDrag(
    ({ movement: [mx], down }) => {
      if (down && groupRef.current) {
        groupRef.current.rotation.y = rotationY.current + mx / 200;
      } else {
        // 드래그 끝나면 현재 회전 저장
        rotationY.current = groupRef.current?.rotation.y ?? 0;
      }
    },
    {
      pointer: {
        touch: true,
        capture: true,
      },
      eventOptions: { passive: false },
    }
  );

  // 자동 회전
  useFrame(() => {
    if (!hovering && groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      rotationY.current = groupRef.current.rotation.y;
    }
  });

  // const links = [
  //   {
  //     label: "GitHub",
  //     href: "https://github.com/seungjun0906",
  //     icon: "/icons/github.svg",
  //   },
  //   {
  //     label: "LinkedIn",
  //     href: "https://linkedin.com/in/your-id",
  //     icon: "/icons/linkedin.svg",
  //   },
  //   {
  //     label: "Blog",
  //     href: "https://your-blog.tistory.com",
  //     icon: "/icons/blog.svg",
  //   },
  //   {
  //     label: "Resume",
  //     href: "/resume",
  //     icon: "/icons/resume.svg",
  //   },
  // ];

  return (
    <group
      castShadow
      ref={groupRef}
      {...bind()}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      {/* 카드 바디 */}
      <mesh>
        <RoundedBox args={[3.5, 2, 0.1]} radius={0.1} smoothness={4}>
          <meshPhysicalMaterial
            color={isDark ? "#708989" : "#79e5b0"}
            metalness={0.3} // 약간의 메탈 느낌
            roughness={0.25} // 부드럽고 매끈하게
            clearcoat={1} // 유리 코팅 느낌
            clearcoatRoughness={0.1} // 코팅 거칠기 낮음
            reflectivity={0.5} // 살짝 빛 반사
          />
        </RoundedBox>
      </mesh>
      {/* 앞면 */}
      <group position={[0, 0, 0.06]}>
        {/* QR + 아바타 */}
        <group>
          {/* QR 코드 - 좌측 중앙 */}
          <Image
            url="/images/github-qr.png"
            scale={[1.2, 1.2]}
            position={[-0.9, 0, 0]}
          />

          {/* 아바타 - 우측 상단 */}
          <mesh position={[0.8, 0.4, 0]}>
            <planeGeometry args={[0.9, 0.9]} />
            <meshBasicMaterial map={texture} transparent />
          </mesh>

          {/* 이름 + 직무 - 우측 하단 */}
          <Text
            position={[0.8, -0.35, 0]}
            fontSize={0.18}
            color={"#c4c1bd"}
            anchorX="center"
            anchorY="middle"
          >
            SEUNGJUN KIM
          </Text>

          <Text
            position={[0.8, -0.55, 0]}
            fontSize={0.13}
            color={"#a6a39e"}
            anchorX="center"
            anchorY="middle"
          >
            FullStack Developer
          </Text>
        </group>
      </group>
      {/* 뒷면 */}
      <group position={[0, 0, -0.06]} rotation={[0, Math.PI, 0]}>
        {/* 배경 */}

        {/* 내용 */}
        <group position={[0, 0, 0.01]}>
          {/* 좌측 텍스트 블럭 */}
          <group position={[-1.2, 0.6, 0]}>
            {[
              "Engineer for both users and developers.",
              "Fast learner, faster executor.",
              "Believer in the power of collaboration.",
            ].map((line, idx) => (
              <Text
                key={idx}
                position={[0, -idx * 0.25, 0]}
                fontSize={0.13}
                fontWeight={500}
                color={isDark ? "#84d8c7" : "#b7e4da"}
                anchorX="left"
                anchorY="middle"
              >
                | {line}
              </Text>
            ))}

            {/* 이름 */}
            <Text
              position={[0, -1.05, 0]}
              fontSize={0.1}
              fontWeight={800}
              color={themeVars.colorByTheme.text.surface}
              anchorX="left"
            >
              S.J. KIM
            </Text>

            {/* 직무 */}
            <Text
              position={[0, -1.3, 0]}
              fontSize={0.09}
              fontWeight={600}
              color={themeVars.colorByTheme.text.muted}
              anchorX="left"
            >
              Full Stack Developer
            </Text>
          </group>

          {/* 우측 이미지 */}
          <Image
            url="/images/code-editor.png"
            transparent
            scale={[0.9, 0.9]} // 크기 축소
            position={[0.7, -0.5, 0]} // 위치 약간 조정
          />
        </group>
      </group>
    </group>
  );
};

export const Card3D = () => {
  return (
    <div className={styles.idCardContainer}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 50 }}
        eventPrefix="client"
        style={{
          touchAction: "none",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={10}
        />

        {/* 바닥면 */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.2} />
        </mesh>

        <Card />
      </Canvas>
    </div>
  );
};
