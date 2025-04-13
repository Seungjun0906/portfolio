import { Canvas, ThreeEvent, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";
import { Text, RoundedBox, Image } from "@react-three/drei";
import avatarImage from "/images/avatar.png";
import * as styles from "./IdCard.css";
import { themeVars } from "@/styles/theme.css";
import { useSpring, a } from "@react-spring/three";
import { useTheme } from "@/providers/ThemeProvider";

const Card = ({ flipped, setFlipped }) => {
  const { isDark } = useTheme();
  const texture = useLoader(TextureLoader, avatarImage);
  // const [flipped, setFlipped] = useState(false);

  const { rotationY } = useSpring({
    rotationY: flipped ? Math.PI : 0,
    config: { mass: 3, tension: 200, friction: 30 },
  });

  return (
    <a.group
      rotation-y={rotationY}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        // ThreeEvent 타입으로 변경
        console.log("clicked");
        e.stopPropagation();
        setFlipped((prev) => !prev);
      }}
      cursor="pointer"
    >
      {/* 카드 본체 */}
      <RoundedBox
        args={[3.5, 2, 0.1]}
        radius={0.1}
        smoothness={4}
        onClick={(e) => {
          console.log("박스 눌림?");
        }}
      >
        <meshPhysicalMaterial
          color={isDark ? "#708989" : "#79e5b0"}
          metalness={0.3}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.5}
        />
      </RoundedBox>

      {/* 앞면 */}
      <group position={[0, 0, 0.06]}>
        <Image
          url="/images/github-qr.png"
          scale={[1.2, 1.2]}
          position={[-0.9, 0, 0]}
        />
        <mesh position={[0.8, 0.4, 0]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
        <Text
          position={[0.8, -0.35, 0]}
          fontSize={0.18}
          color="#c4c1bd"
          anchorX="center"
        >
          SEUNGJUN KIM
        </Text>
        <Text
          position={[0.8, -0.55, 0]}
          fontSize={0.13}
          color="#a6a39e"
          anchorX="center"
        >
          FullStack Developer
        </Text>
      </group>

      {/* 뒷면 */}
      <group position={[0, 0, -0.06]} rotation={[0, Math.PI, 0]}>
        <group position={[0, 0, 0.01]}>
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
              >
                | {line}
              </Text>
            ))}
            <Text
              position={[0, -1.05, 0]}
              fontSize={0.1}
              fontWeight={800}
              color={themeVars.colorByTheme.text.surface}
              anchorX="left"
            >
              S.J. KIM
            </Text>
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
          <Image
            url="/images/code-editor.png"
            scale={[0.9, 0.9]}
            position={[0.7, -0.5, 0]}
            transparent
          />
        </group>
      </group>
    </a.group>
  );
};

// export const Card3D = () => {
//   return (
//     <div className={styles.idCardContainer}>
//       <div
//         className="card-3d-wrapper"
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         <Canvas
//           shadows
//           camera={{ position: [0, 0, 6], fov: 50 }}
//           eventPrefix="client"
//           style={{
//             touchAction: "none",
//           }}
//           eventSource={document.getElementById("root") as HTMLElement}
//           gl={{ preserveDrawingBuffer: true }} // 렌더링 최적화
//         >
//           <ambientLight intensity={0.5} />
//           <directionalLight
//             position={[5, 5, 5]}
//             intensity={1}
//             castShadow
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             shadow-camera-far={10}
//           />
//           {/* 바닥 */}
//           <mesh
//             rotation={[-Math.PI / 2, 0, 0]}
//             position={[0, -2, 0]}
//             receiveShadow
//           >
//             <planeGeometry args={[20, 20]} />
//             <shadowMaterial opacity={0.2} />
//           </mesh>

//           <Card />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

export const Card3D = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={styles.idCardContainer}
      onClick={() => {
        console.log("Container clicked");
        setFlipped((prev) => !prev);
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ touchAction: "none" }}
        >
          {/* Card 컴포넌트에 flipped 상태와 setter 전달 */}
          <Card flipped={flipped} setFlipped={setFlipped} />
        </Canvas>
      </div>
    </div>
  );
};
