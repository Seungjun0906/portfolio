import { useRef, useState } from "react";
import * as styles from "./AboutSection.css";
import TechBadge from "./TechBadge";
import { motion } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const frontendTechs = [
    "Next.js",
    "React",
    "TypeScript",
    "React Query",
    "Jotai",
    "Redux Toolkit",
    "Tailwind CSS",
    "Styled-components",
  ];

  const backendTechs = [
    "Node.js",
    "Express.js",
    "Nest.js",
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
  ];

  const devOpsTechs = [
    "Google Cloud Run",
    "Google Cloud Build",
    "Docker",
    "AWS Lambda",
    "EC2",
  ];

  const mobileTechs = ["Flutter", "Dart", "RiverPod", "ShoreBird"];

  const otherTechs = [
    "SEO",
    "Google Search Console",
    "Hotjar",
    "Google Analytics",
  ];

  return (
    <div className={styles.container} ref={sectionRef}>
      <div className={styles.content}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About Me</h2>
        </motion.div>

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
          <h3 className={styles.techTitle}>기술 스택 및 tool 활용</h3>

          <div className={styles.techCategory}>
            <h4 className={styles.categoryTitle}>Frontend</h4>
            <div className={styles.techBadges}>
              <div className={styles.badgesContainer}>
                {frontendTechs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.badgeWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                    }}
                  >
                    <TechBadge name={tech} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.categoryTitle}>Backend</h4>
            <div className={styles.techBadges}>
              <div className={styles.badgesContainer}>
                {backendTechs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.badgeWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                    }}
                  >
                    <TechBadge name={tech} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.categoryTitle}>DevOps & Infrastructure</h4>
            <div className={styles.techBadges}>
              <div className={styles.badgesContainer}>
                {devOpsTechs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.badgeWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                    }}
                  >
                    <TechBadge name={tech} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.categoryTitle}>Mobile</h4>
            <div className={styles.techBadges}>
              <div className={styles.badgesContainer}>
                {mobileTechs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.badgeWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                    }}
                  >
                    <TechBadge name={tech} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h4 className={styles.categoryTitle}>Other</h4>
            <div className={styles.techBadges}>
              <div className={styles.badgesContainer}>
                {otherTechs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.badgeWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                    }}
                  >
                    <TechBadge name={tech} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.resumeLink}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/src/assets/resume_kr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            이력서 보기
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
