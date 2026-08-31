import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from '/assets/scss/components/header/Header.module.scss'
import mediaStyles from '/assets/scss/components/header/HeaderMedia.module.scss'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const showBackButton = location.pathname === '/gstt-detail'

  // 지정한 위치까지 부드럽게 이동
  const smoothScrollTo = (targetTop: number, duration: number) => {
    return new Promise<void>((resolve) => {
      const startTop = window.scrollY
      const distance = targetTop - startTop
      const startTime = performance.now()

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo({ top: targetTop, left: 0, behavior: 'auto' })
        resolve()
        return
      }

      const moveScroll = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        window.scrollTo(0, startTop + distance * easedProgress)

        if (progress < 1) {
          requestAnimationFrame(moveScroll)
          return
        }

        resolve()
      }

      requestAnimationFrame(moveScroll)
    })
  }

  // 768px 이하 모바일 UI 전환
  const checkMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileDevice = /iphone|ipad|ipod|android/.test(userAgent)
    setIsMobile(window.matchMedia('(max-width: 768px)').matches || isMobileDevice)
  }

  // 뒤로가기
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }

    window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, 0)
  }

  // 해당 섹션으로 이동
  const scrollTo = async (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      const skipSkillPin = id === 'project' && window.matchMedia('(min-width: 1025px)').matches

      if (skipSkillPin) {
        const skillSection = document.getElementById('skill')
        const skillPin = ScrollTrigger.getAll().find(
          (trigger) => trigger.trigger === skillSection && trigger.vars.pin,
        )

        if (skillPin && window.scrollY < skillPin.end) {
          if (window.scrollY < skillPin.start) {
            await smoothScrollTo(skillPin.start, 550)
          }

          // 화면이 고정된 pin 구간만 건너뛰기
          window.scrollTo({ top: skillPin.end + 1, left: 0, behavior: 'auto' })
          await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

          const projectTop = section.getBoundingClientRect().top + window.scrollY
          await smoothScrollTo(projectTop, 300)
        } else {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
    if (isMobile) {
      menuOff()
    }
  }

  // 메뉴 열기
  const menuOn = () => {
    const menu = document.querySelector<HTMLElement>(`.${styles['mo-menu__inner']}`)
    const hamburger = document.querySelector<HTMLElement>(`.${styles['mo-menu']}`)

    if (!menu || !hamburger) return

    menu.classList.add(styles.active)
    hamburger.style.display = 'none'
    document.body.style.overflow = 'hidden'
  }

  // 메뉴 닫기
  const menuOff = () => {
    const menu = document.querySelector<HTMLElement>(`.${styles['mo-menu__inner']}`)
    const hamburger = document.querySelector<HTMLElement>(`.${styles['mo-menu']}`)

    if (!menu || !hamburger) return

    document.body.style.overflow = 'auto'
    menu.classList.remove(styles.active)
    menu.classList.add(styles.closing)

    menu.addEventListener(
      'animationend',
      () => {
        menu.classList.remove(styles.closing)
        hamburger.style.display = 'block'
      },
      { once: true },
    )
  }

  // 스크롤 후 헤더 스타일
  const scrollDown = () => {
    const scrolled = window.scrollY > 100
    setIsScrolled(scrolled)
  }

  // 모바일 감지 및 스크롤 이벤트
  useEffect(() => {
    checkMobile()
    scrollDown()

    window.addEventListener('scroll', scrollDown, { passive: true })
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', scrollDown)
      window.removeEventListener('resize', checkMobile)
      document.body.style.overflow = 'auto'
    }
  }, [])

  const menuItems = [
    { id: 'about', label: '소개' },
    { id: 'career', label: '경력' },
    { id: 'skill', label: '기술' },
    { id: 'project', label: '프로젝트' },
  ]

  return (
    <header
      className={`${styles['portfolio-header']} ${styles['header']} ${mediaStyles['portfolio-header']} ${mediaStyles['header']} ${isScrolled ? styles.active : ''}`}
    >
      {showBackButton ? (
        <nav>
          <button className={styles['back-btn']} onClick={goBack} lang="en">
            Back
          </button>
        </nav>
      ) : !isMobile ? (
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} lang="ko">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className={styles['mo-nav']}>
          <button
            type="button"
            className={styles['mo-menu']}
            onClick={menuOn}
            aria-label="메뉴 열기"
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          <ul className={`${styles['mo-menu__inner']} ${styles['glass']}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} lang="ko">
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button type="button" onClick={menuOff} aria-label="메뉴 닫기">
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
