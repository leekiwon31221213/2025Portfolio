import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 페이지 컴포넌트 불러오기
import GsttDetail from '/src/views/gstt/GsttDetail'
import Home from '/src/views/Home'

// 라우터 목록
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '프론트엔드 개발자 이기원 포트폴리오',
      description:
        '프론트엔드 개발자 이기원의 2026 포트폴리오입니다. 웹 퍼블리싱과 프론트엔드 프로젝트, 경력, 기술, 협업 경험을 한눈에 볼 수 있습니다.',
      canonical: 'https://kiwon2025portfolio.netlify.app/',
    },
  },
  {
    path: '/gstt-detail',
    name: 'GsttDetail',
    component: GsttDetail,
    meta: {
      title: 'GSTT 프로젝트 상세 | 이기원 포트폴리오',
      description:
        'GSTT 프로젝트 상세 페이지입니다. 프로젝트 목표와 작업 내용을 확인할 수 있습니다.',
      canonical: 'https://kiwon2025portfolio.netlify.app/gstt-detail',
    },
  },
]

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
