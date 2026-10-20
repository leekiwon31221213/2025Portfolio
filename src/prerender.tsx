import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server.edge'
import { StaticRouter } from 'react-router'
import type { PrerenderArguments, PrerenderResult } from 'vite-prerender-plugin'

import App from './App'

// 검색 엔진이 읽을 수 있도록 화면을 HTML로 미리 생성
export const prerender = ({ url }: PrerenderArguments): PrerenderResult => {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App></App>
      </StaticRouter>
    </StrictMode>,
  )

  return { html }
}
