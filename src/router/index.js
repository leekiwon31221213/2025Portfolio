import { createRouter, createWebHistory } from 'vue-router'

// 페이지 컴포넌트 가져오기
import HomeView from '/src/views/HomeView.vue'
import GsttDetail from '/src/views/gstt/GsttDetail.vue'

// 라우터 목록
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/gstt-detail',
    name: 'GsttDetail',
    component: GsttDetail,
  },
]

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router