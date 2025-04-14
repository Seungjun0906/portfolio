import { motion } from "framer-motion";
import * as styles from "./SectionTitle.css";

export const SectionTitle = ({ title = "" }: { title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className={styles.title}>{title}</p>
    </motion.div>
  );
};

export default SectionTitle;
