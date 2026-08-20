import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { ComponentOptions, DefineComponent } from 'vue'

import styles from '/assets/scss/components/header/Header.module.scss'
import mediaStyles from '/assets/scss/components/header/HeaderMedia.module.scss'

const Header: ComponentOptions = {
  name: 'Header',
  data() {
    return {
      isMobile: false,
      isScrolled: false,
    }
  },
  computed: {
    showBackButton() {
      return this.$route.path === '/gstt-detail'
    },
  },
  methods: {
    // 768px 이하 모바일 UI 전환
    checkMobile() {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /iphone|ipad|ipod|android/.test(userAgent)
      this.isMobile = window.matchMedia('(max-width: 768px)').matches || isMobileDevice
    },

    // 뒤로가기
    goBack() {
      const removeNavigationGuard = this.$router.afterEach(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }, 0)
        removeNavigationGuard()
      })

      if (window.history.length > 1) {
        this.$router.back()
      } else {
        this.$router.push({ path: '/' })
      }
    },
    // 해당 섹션으로 이동
    scrollTo(id: string) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
      if (this.isMobile) {
        this.menuOff()
      }
    },
    // 메뉴 열기
    menuOn() {
      const menu = document.querySelector<HTMLElement>(`.${styles['mo-menu__inner']}`)!
      const hamburger = document.querySelector<HTMLElement>(`.${styles['mo-menu']}`)!
      menu.classList.add(styles.active)
      hamburger.style.display = 'none'
      document.body.style.overflow = 'hidden'
    },
    // 메뉴 닫기
    menuOff() {
      const menu = document.querySelector<HTMLElement>(`.${styles['mo-menu__inner']}`)!
      const hamburger = document.querySelector<HTMLElement>(`.${styles['mo-menu']}`)!
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
    },
    // 스크롤 후 헤더 스타일
    scrollDown() {
      const header = document.querySelector<HTMLElement>(`.${styles.header}`)!
      const hamburger = document.querySelector<HTMLElement>(`.${styles['mo-menu']}`)
      const scrolled = window.scrollY > 100

      if (scrolled !== this.isScrolled) {
        this.isScrolled = scrolled

        if (this.isScrolled) {
          header.classList.add(styles.active)
          if (hamburger) hamburger.style.color = '#fff'
        } else {
          header.classList.remove(styles.active)
          if (hamburger) hamburger.style.color = '#fff'
        }
      }
    },
  },
  // 모바일 감지 및 스크롤 이벤트
  mounted() {
    this.checkMobile()

    window.addEventListener('scroll', this.scrollDown, { passive: true })
    window.addEventListener('resize', this.checkMobile)
    this.scrollDown()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollDown)
    window.removeEventListener('resize', this.checkMobile)
  },
  render() {
    const menuItems = [
      { id: 'about', label: 'About' },
      { id: 'journey', label: 'Journey' },
      { id: 'skill', label: 'Skill' },
      { id: 'project', label: 'Project' },
    ]

    return (
      <header class={`${styles['portfolio-header']} ${styles['header']}`}>
        {this.showBackButton ? (
          <nav>
            <button class={`${styles['back-btn']}`} onClick={this.goBack} lang="en">
              Back
            </button>
          </nav>
        ) : !this.isMobile ? (
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => this.scrollTo(item.id)} lang="en">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <nav class={`${styles['mo-nav']}`}>
            <span class={`${styles['mo-menu']}`} onClick={this.menuOn}>
              <FontAwesomeIcon icon="fa-solid fa-bars"></FontAwesomeIcon>
            </span>
            <ul class={`${styles['mo-menu__inner']} ${styles['glass']}`}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => this.scrollTo(item.id)} lang="en">
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <span onClick={this.menuOff}>
                  <FontAwesomeIcon icon="fa-solid fa-xmark"></FontAwesomeIcon>
                </span>
              </li>
            </ul>
          </nav>
        )}
      </header>
    )
  },
}

export default Header as DefineComponent
