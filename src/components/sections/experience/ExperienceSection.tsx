import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import * as styles from "./ExperienceSection.css";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "서울 프라퍼티 인사이트 (SPI)",
      period: "2023.08 ~ 재직중",
      responsibilities: [
        "프론트엔드 개발 주도: 상업용 부동산 플랫폼의 UI/UX 개선 및 신규 기능 개발을 담당하며, SEO 최적화를 통해 검색 노출 및 유저 유입 증가를 달성",
        "데이터 어드민 개발: 리츠, 아티클 등의 데이터를 효율적으로 관리할 수 있도록 React, Vite 기반의 어드민 대시보드를 구축",
        "SSR 도입 및 웹앱 개발: 서버 사이드 렌더링 (SSR)을 활용하여 검색 엔진 최적화를 강화 (Google Search Console의 검색노출량, Discover의 유의미한 증가)",
        "기술 스택 마이그레이션: 기존 Recoil 및 Styled-components에서 Jotai 및 Tailwind CSS로 점진적 이관을 진행하며 성능 및 DX 개선",
        "컨벤션 정립 및 프로젝트 구조 개선: 정리되지 않았던 프로젝트 구조를 개선하기 위해 코딩 컨벤션을 정리하고 적용하여 DX를 크게 향상",
        "코드 리뷰 및 품질 개선: Code Rabbit을 도입 제안하고 팀에 적용하여 코드 리뷰 프로세스를 개선하고, 코드 품질 향상 및 일관성 유지",
        "유저 행동 분석을 통한 UX 개선: Hotjar 및 GA를 활용하여 사용자의 행동 패턴을 분석하고, 이를 바탕으로 UI 개선을 진행하며 체류 시간 증가 (입사 초기 약 4분이였던 체류시간을 2025 03 기준 7분대로 증가)",
        "CI/CD 파이프라인 구축: Google Cloud Run, Cloud Build, Docker를 활용하여 자동화된 배포 환경을 구축하고 운영의 효율성 극대화",
        "리츠 및 사모펀드 데이터 시각화: Highcharts를 활용하여 리츠 및 사모펀드 데이터를 시각적으로 표현하여, 유저들이 데이터를 쉽게 이해할 수 있도록 지원",
      ],
      learningPoints: [
        "SEO와 SSR을 적극적으로 활용하여 서비스의도달 범위를 확장",
        "기존 레거시 코드에서 새로운 코드베이스로 점진적 이관하는 경험 (진행중)",
        "고객 피드백을 반영하여 반복적인 제품 개선 프로세스 경험",
        "코드 품질을 높이고 팀 협업 효율성을 개선하는 방법을 학습",
      ],
    },
    {
      company: "퍼즐랩",
      period: "2022.09 ~ 2023.08",
      responsibilities: [
        "디지털 케어 플랫폼 풀스택 개발: 사용자와 운영팀 간의 원활한 소통을 위한 Socket.io 기반의 실시간 채팅 시스템 구축",
        "운영팀 업무 자동화: Slack 및 Telegram을 연동한 유포 확인 및 신고 자동화 시스템을 개발하여 업무 처리 속도 향상",
        "크롤링 시스템 구축 및 개선: 대용량 데이터를 처리하는 크롤러를 개발 및 최적화하여 데이터 수집 안정화 및 성능 개선",
        "텔레그램 봇 개발: 블록체인 뉴스, 암호화폐 시세 알림, 퀴즈 기능 등을 포함한 텔레그램 봇을 개발하여 커뮤니티 활성화",
      ],
      learningPoints: [
        "빠르게 변화하는 블록체인 및 암호화폐 시장에서 실시간 데이터 처리 경험",
        "자동화 시스템을 구축하여 비즈니스 운영 효율성을 높이는 경험",
        "대용량 데이터 크롤링을 안정적으로 처리하는 경험",
      ],
    },
    {
      company: "레티튜",
      period: "2022.02 ~ 2022.09",
      responsibilities: [
        "미국 대학 컨설팅 플랫폼 풀스택 개발: 온보딩 설문조사를 기반으로 대학 추천 시스템을 구축하여 사용자 맞춤형 경험 제공",
        "모바일 웹앱 환경 최적화: 모바일에서 최적의 경험을 제공하기 위해 MobiScroll을 활용한 학생 스케줄러 개발",
        "커뮤니티 기능 개발: 페이스북 그룹과 유사한 기능을 제공하는 커뮤니티 시스템 개발하여 사용자 참여도 향상",
      ],
      learningPoints: [
        "모바일 친화적인 UI/UX를 설계하고 최적화하는 경험",
        "데이터 기반 맞춤형 추천 시스템을 구축하는 과정 학습",
        "사용자의 요구 사항을 반영하여 제품 개선하는 반복적인 프로세스 경험",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SectionTitle title="Experience" />

        <div className={styles.timelineContainer}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={styles.experienceCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.period}>{exp.period}</p>

              <div className={styles.responsibilities}>
                {exp.responsibilities.map((responsibility, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.responsibilityItem}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                  >
                    <span className={styles.bullet}>•</span>
                    <span>{responsibility}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className={styles.learningPoints}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className={styles.learningTitle}>러닝 포인트:</h4>
                <div className={styles.learningList}>
                  {exp.learningPoints.map((point, idx) => (
                    <div key={idx} className={styles.learningItem}>
                      <span className={styles.bullet}>•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
