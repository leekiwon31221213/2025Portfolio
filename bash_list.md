# 📘 포트폴리오에 사용된 bash

## 1. SCSS

- **sass**: CSS 전처리기 (변수, 믹스인, 중첩 지원)
- Vue에서 SCSS 문법을 사용하려면 필요  
  설치: `npm install sass --save-dev`

## 2. SVG

- **vite-svg-loader**: SVG 파일을 Vue 컴포넌트처럼 import 해서 사용 가능  
  설치: `npm install vite-svg-loader --save-dev`

## 3. Vue 개발자 도구

- **vite-plugin-vue-devtools**: Vue DevTools를 Vite 개발 서버에서 바로 실행 가능
- 브라우저 확장 없이도 컴포넌트 트리, 상태, 라우터 등을 디버깅할 수 있음  
  설치: `npm install vite-plugin-vue-devtools --save-dev`

## 4. 폰트어썸 (FontAwesome)

- **@fortawesome/fontawesome-svg-core**: FontAwesome 아이콘의 핵심 엔진
- **@fortawesome/free-solid-svg-icons**: 무료 Solid 아이콘 모음
- **@fortawesome/vue-fontawesome**: Vue에서 `<font-awesome-icon />` 형태로 아이콘 사용 가능  
  설치:  
  `npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome`

## 5. 스와이퍼 (Swiper)

- **swiper**: 터치 가능한 슬라이드/캐러셀 라이브러리
- Vue 지원 (`<Swiper>`, `<SwiperSlide>` 컴포넌트 제공)  
  설치: `npm install swiper`

## 6. 코드 품질 (ESLint + Prettier)

- **eslint**: 코드 문법 검사기 (에러/경고 잡아줌)
- **eslint-plugin-vue**: Vue 전용 ESLint 규칙
- **prettier**: 코드 자동 정렬(포맷터)
- **eslint-config-prettier**: ESLint와 Prettier 충돌 방지
- **eslint-plugin-prettier**: ESLint 안에서 Prettier 규칙을 동시에 체크  
   설치:  
   `npm install eslint --save-dev`  
   `npm install eslint-plugin-vue --save-dev`  
   `npm install prettier --save-dev`  
   `npm install eslint-config-prettier --save-dev`  
   `npm install eslint-plugin-prettier --save-dev`

## 7. 타이핑 애니메이션 (typed.js)

- **typed.js**: 텍스트를 타자기처럼 한 글자씩 입력하는 애니메이션 라이브러리

- 포트폴리오 인트로, 로딩 화면 등에서 텍스트 연출에 활용

  설치:
  npm install typed.js

## 8.애니메이션 라이브러리(GSAP)

npm i gsap
