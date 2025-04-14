# 포트폴리오 웹사이트

## 소개

이 프로젝트는 React, TypeScript, Vite를 기반으로 개발된 개인 포트폴리오 웹사이트입니다.
3D 요소와 인터랙티브한 사용자 경험을 제공하며, 모던 웹 기술을 활용해 구현되었습니다.

## 기술 스택

- **프레임워크**: React 19
- **언어**: TypeScript
- **빌드 도구**: Vite
- **라우팅**: React Router Dom 7
- **스타일링**: Vanilla Extract CSS
- **3D 그래픽**: Three.js, React Three Fiber, @react-spring/three
- **애니메이션**: Framer Motion, GSAP
- **스크롤**: Lenis
- **아이콘**: Iconoir React, Tech Stack Icons

## 주요 기능

- 반응형 디자인
- 3D 인터랙티브 요소
- 부드러운 스크롤 경험
- 다크/라이트 테마 전환
- 프로젝트 쇼케이스

## 개발 환경 설정

### 필요 조건

- Node.js (최신 LTS 버전 권장)
- pnpm 패키지 매니저

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (호스트 네트워크에 노출)
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드된 결과물 미리보기
pnpm preview

# 린트 검사
pnpm lint
```

## 프로젝트 구조

```
src/
├── app/ # 앱 전체 설정
├── assets/ # 이미지, 폰트 등 정적 자산
├── components/ # 재사용 가능한 컴포넌트
├── constants/ # 상수값 정의
├── hooks/ # 커스텀 React 훅
├── pages/ # 페이지 컴포넌트
├── providers/ # 컨텍스트 제공자
├── services/ # API 및 서비스 호출
└── styles/ # 전역 스타일 및 테마
```
