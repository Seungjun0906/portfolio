import { motion } from "framer-motion";
import * as styles from "./TechBadge.css";

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  // Generate a consistent color based on the name
  const getColor = (text: string) => {
    const colors = [
      "#4285F4", // Google Blue
      "#EA4335", // Google Red
      "#FBBC05", // Google Yellow
      "#34A853", // Google Green
      "#0088cc", // Twitter Blue
      "#6200ee", // Material Purple
      "#03dac6", // Material Teal
      "#ff6200", // Material Orange
    ];

    // Simple hash function to get a consistent index
    const hash = text.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    return colors[Math.abs(hash) % colors.length];
  };

  const backgroundColor = getColor(name);

  return (
    <motion.div
      className={styles.badge}
      style={{ backgroundColor }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {name}
    </motion.div>
  );
};

export default TechBadge;
