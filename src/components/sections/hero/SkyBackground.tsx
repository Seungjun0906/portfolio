import { Environment } from "@react-three/drei";

// 폴백으로 사용할 단순한 하늘 색상 배경
export const SimpleSkyFallback = () => {
  return (
    <color attach="background" args={["#87CEEB"]} /> // 하늘색 배경
  );
};

const SkyBackground = () => {
  return <Environment files="/hdr/kloppenheim_06_puresky_1k.hdr" background />;
};

export default SkyBackground;
