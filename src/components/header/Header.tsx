import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from '/assets/scss/components/header/Header.module.scss'
import mediaStyles from '/assets/scss/components/header/HeaderMedia.module.scss'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const showBackButton = location.pathname === '/gstt-detail'

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
  const scrollTo = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
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
    { id: 'journey', label: '경력' },
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
          <span className={styles['mo-menu']} onClick={menuOn}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </span>
          <ul className={`${styles['mo-menu__inner']} ${styles['glass']}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} lang="ko">
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <span onClick={menuOff}>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
