import { useRef } from "react";
import * as styles from "./AboutSection.css";

import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import StackIcon from "tech-stack-icons";
import { useTheme } from "@/providers/ThemeProvider";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  const frontendTechs = [
    "nextjs2",
    "reactjs",
    "typescript",
    "reactquery",
    "redux",
    "tailwindcss",
    "js",
  ];

  const backendTechs = [
    "nodejs",
    "nestjs",
    "gcloud",
    "aws",
    "postgresql",
    "docker",
  ];

  const mobileTechs = ["flutter", "dart"];

  const Tools = ["hotjar", "analytics"];

  return (
    <div className={styles.container} ref={sectionRef}>
      <div className={styles.content}>
        <SectionTitle title="About Me" />

        <motion.div
          className={styles.bio}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            스타트업 환경에서 빠르고 효율적인 개발을 경험하며 성장해온 4년 차
            풀스택 개발자입니다. 스크럼 스프린트 방식을 통해 효과적으로
            프로젝트를 관리하고, 프론트엔드 개발을 주도하며 JavaScript 기반의
            풀스택 개발에 강점을 갖고 있습니다.
          </p>
          <p>
            개발 생산성을 극대화하는 데 관심이 많아 ChatGPT, Scene.io, Code
            Rabbit 등 다양한 AI 툴을 적극적으로 활용하며, 새로운 기술 도입에
            대한 거부감 없이 빠르게 적응하고 있습니다. 특히, DX(Developer
            Experience) 개선을 위한 리팩토링을 진행한 경험이 있으며, 이를 통해
            개발 환경을 최적화하고 협업의 효율성을 높이는 데 기여한 바 있습니다.
          </p>
          <p>
            앞으로도 지속적인 학습과 도전을 통해 더 나은 개발자가 되고자 합니다.
            빠르게 변화하는 기술 트렌드를 반영하여 최적의 솔루션을 제공하고,
            사용자가 만족할 수 있는 서비스를 만들기 위해 노력하겠습니다.
          </p>
        </motion.div>

        <motion.div
          className={styles.techSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className={styles.techTitle}>Tech Stack & Tools</p>

          <div>
            <p className={styles.categoryTitle}>Frontend</p>
            <div className={styles.badgesContainer}>
              {frontendTechs.map((tech, idx) => (
                <motion.div
                  key={`${tech}-${idx}`}
                  className={
                    isDark ? styles.badgeWrapperDark : styles.badgeWrapperLight
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * idx,
                  }}
                >
                  <StackIcon
                    name={tech}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.categoryTitle}>Backend</p>
            <div className={styles.badgesContainer}>
              {backendTechs.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className={
                    isDark ? styles.badgeWrapperDark : styles.badgeWrapperLight
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * idx,
                  }}
                >
                  <StackIcon
                    name={tech}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.categoryTitle}>Mobile</p>
            <div className={styles.badgesContainer}>
              {mobileTechs.map((tech, idx) => (
                <motion.div
                  key={`${tech}-${idx}`}
                  className={
                    isDark ? styles.badgeWrapperDark : styles.badgeWrapperLight
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * idx,
                  }}
                >
                  <StackIcon
                    name={tech}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.categoryTitle}>Tools</p>
            <div className={styles.badgesContainer}>
              {Tools.map((tech, idx) => (
                <motion.div
                  key={`${tech}-${idx}`}
                  className={
                    isDark ? styles.badgeWrapperDark : styles.badgeWrapperLight
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * idx,
                  }}
                >
                  <StackIcon
                    name={tech}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
