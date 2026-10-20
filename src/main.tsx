import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import '/assets/scss/common/global.scss'

const app = document.getElementById('app')

if (!app) {
  throw new Error('앱을 렌더링할 요소를 찾을 수 없습니다.')
}

const application = (
  <StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </StrictMode>
)

// 미리 생성된 HTML이 있으면 React 기능만 연결
if (app.hasChildNodes()) {
  hydrateRoot(app, application)
} else {
  createRoot(app).render(application)
}
