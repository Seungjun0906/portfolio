import { RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { useDrag } from "@use-gesture/react";
import { Text, Image } from "@react-three/drei";

const Card3D = () => {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <CardObject />
      </Canvas>
    </div>
  );
};

const CardObject = () => {
  const group = useRef<Group>(null);
  const [hovering, setHovering] = useState(false);
  const rotationY = useRef(0);

  const bind = useDrag(({ movement: [mx], down }) => {
    if (group.current) {
      group.current.rotation.y = rotationY.current + mx / 200;
    }
    if (!down) {
      rotationY.current = group.current?.rotation.y ?? 0;
    }
  });

  useFrame(() => {
    if (!hovering && group.current) {
      group.current.rotation.y += 0.003;
      rotationY.current = group.current.rotation.y;
    }
  });

  return (
    <group
      ref={group}
      {...bind()}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <CardSideFront position={new Vector3(0, 0, 0.05)} />
      <CardSideBack position={new Vector3(0, 0, -0.05)} />
    </group>
  );
};

const CardSideFront = ({ position }: { position: Vector3 }) => {
  return (
    <group position={position.toArray()}>
      <RoundedBox args={[5, 3, 0.5]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color="#f8f9fa" />
      </RoundedBox>

      <Image
        url="/images/avatar.png" // ✅ 아바타 이미지 경로
        position={[-1.8, 0.6, 0.26]}
        scale={[1, 1]}
      />

      <Text
        position={[0.8, 0.7, 0.26]}
        fontSize={0.3}
        color="#222"
        anchorX="left"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        Jane Doe
      </Text>

      <Text
        position={[0.8, 0.4, 0.26]}
        fontSize={0.18}
        color="#555"
        anchorX="left"
        anchorY="middle"
        font="/fonts/Inter-Regular.woff"
      >
        Frontend Developer
      </Text>

      <Image
        url="/images/github-qr.png" // ✅ QR코드 이미지 경로
        position={[2, -0.8, 0.26]}
        scale={[0.8, 0.8]}
      />
    </group>
  );
};

const CardSideBack = ({ position }: { position: Vector3 }) => {
  return (
    <RoundedBox
      args={[5, 3, 0.1]}
      radius={0.2}
      position={position.toArray()}
      smoothness={4}
    >
      <meshStandardMaterial color="#1a1a1a" />
      {/* Slogan */}
      {/* Graphical element */}
    </RoundedBox>
  );
};

export default Card3D;
