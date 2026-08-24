import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import '/assets/scss/common/global.scss'

const app = document.getElementById('app')

if (!app) {
  throw new Error('앱을 렌더링할 요소를 찾을 수 없습니다.')
}

createRoot(app).render(
  <StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </StrictMode>,
)
