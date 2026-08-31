import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Loading from './components/loading/Loading'
import PortfolioRoutes, { routeSeo } from './router'
import { applySeo } from './utils/seo'
import styles from '/assets/scss/app/App.module.scss'
import mediaStyles from '/assets/scss/app/AppMedia.module.scss'

const App = () => {
  const location = useLocation()
  const isFirstVisit = import.meta.env.DEV ? null : sessionStorage.getItem('isFirstVisit')
  const [isLoading, setIsLoading] = useState(!isFirstVisit)
  const [isLoadingLeaving, setIsLoadingLeaving] = useState(false)
  const loadingTimer = useRef<number | null>(null)

  const onLoaded = useCallback(() => {
    setIsLoadingLeaving((alreadyLeaving) => {
      if (alreadyLeaving) return alreadyLeaving

      loadingTimer.current = window.setTimeout(() => {
        setIsLoading(false)
      }, 400)

      return true
    })

    if (!import.meta.env.DEV) {
      sessionStorage.setItem('isFirstVisit', 'true')
    }
  }, [])

  useEffect(() => {
    applySeo(routeSeo[location.pathname] ?? routeSeo['/'])
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    return () => {
      if (loadingTimer.current) {
        window.clearTimeout(loadingTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = isLoading ? 'hidden' : ''
    document.body.style.overflow = isLoading ? 'hidden' : ''

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isLoading])

  // 백그라운드 탭 등으로 인트로 애니메이션의 requestAnimationFrame이 멈춰도
  // 스크롤 잠금이 영구히 풀리지 않는 상황을 막기 위한 안전장치
  useEffect(() => {
    if (!isLoading) return

    const failsafeTimer = window.setTimeout(onLoaded, 3500)

    return () => {
      window.clearTimeout(failsafeTimer)
    }
  }, [isLoading, onLoaded])

  return (
    <div
      className={`${styles['portfolio-app']} ${mediaStyles['portfolio-app']} ${styles['root']} ${mediaStyles['root']}`}
      id="portFolioContainer"
    >
      {isLoading ? (
        <section className={isLoadingLeaving ? 'fade-leave-active fade-leave-to' : ''}>
          <Loading onFinished={onLoaded}></Loading>
        </section>
      ) : null}
      <div>
        <Header></Header>
        <main aria-busy={isLoading}>
          <PortfolioRoutes></PortfolioRoutes>
        </main>
        {location.pathname !== '/gstt-detail' ? <Footer></Footer> : null}
      </div>
    </div>
  )
}

export default App
