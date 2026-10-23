import { Route, Routes } from 'react-router-dom'

import GsttDetail from '/src/views/gstt/GsttDetail'
import Home from '/src/views/Home'
import type { SeoData } from '/src/utils/seo'

// 페이지별 SEO 정보
export const routeSeo: Record<string, SeoData> = {
  '/': {
    title: '프론트엔드 개발자·웹퍼블리셔 포트폴리오 | 이기원',
    description:
      'React와 TypeScript 기반 프론트엔드 개발자·웹퍼블리셔 포트폴리오입니다. 반응형 웹, 웹 접근성, UI 개발 및 웹퍼블리싱 실무 경험을 소개합니다.',
    canonical: 'https://kiwon2025portfolio.netlify.app/',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  },
  '/gstt-detail': {
    title: 'GSTT 프로젝트 상세 | 이기원 포트폴리오',
    description: 'GSTT 프로젝트 상세 페이지입니다. 프로젝트 목표와 작업 내용을 확인할 수 있습니다.',
    canonical: 'https://kiwon2025portfolio.netlify.app/gstt-detail',
    robots: 'noindex, follow',
  },
}

// 페이지 경로 렌더링
const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/gstt-detail" element={<GsttDetail></GsttDetail>}></Route>
      <Route path="*" element={<Home></Home>}></Route>
    </Routes>
  )
}

export default PortfolioRoutes
