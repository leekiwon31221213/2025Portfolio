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
    // 뒤로가기
    goBack() {
      if (window.history.length > 1) {
        this.$router.back()
      } else {
        this.$router.push({ path: '/' })
      }
    },
    // 스크롤 해당 섹션으로 이동
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
      const menu = document.querySelector<HTMLElement>('.mo-menu__inner')!
      const hamburger = document.querySelector<HTMLElement>('.mo-menu')!
      menu.classList.add('active')
      hamburger.style.display = 'none'
      document.body.style.overflow = 'hidden'
    },
    // 메뉴 닫기
    menuOff() {
      const menu = document.querySelector<HTMLElement>('.mo-menu__inner')!
      const hamburger = document.querySelector<HTMLElement>('.mo-menu')!
      document.body.style.overflow = 'auto'
      menu.classList.remove('active')
      menu.classList.add('closing')

      menu.addEventListener(
        'animationend',
        () => {
          menu.classList.remove('closing')
          hamburger.style.display = 'block'
        },
        { once: true },
      )
    },
    // 스크롤 내렸을때 헤더
    scrollDown() {
      const header = document.querySelector<HTMLElement>('.header')!
      const hamburger = document.querySelector<HTMLElement>('.mo-menu')
      const scrolled = window.scrollY > 100

      if (scrolled !== this.isScrolled) {
        this.isScrolled = scrolled

        if (this.isScrolled) {
          header.classList.add('active')
          if (hamburger) hamburger.style.color = '#fff'
        } else {
          header.classList.remove('active')
          if (hamburger) hamburger.style.color = '#fff'
        }
      }
    },
  },
  // 모바일 감지 + 스크롤 이벤트
  mounted() {
    const userAgent = navigator.userAgent.toLowerCase()
    this.isMobile = /iphone|ipad|ipod|android/.test(userAgent)

    window.addEventListener('scroll', this.scrollDown, { passive: true })
    this.scrollDown()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollDown)
  },
  render() {
    const menuItems = [
      { id: 'about', label: 'About' },
      { id: 'education', label: 'Career' },
      { id: 'skill', label: 'Skill' },
      { id: 'project', label: 'Project' },
    ]

    return (
      <header class={[styles.root, mediaStyles.root, 'header']}>
        {!this.isMobile ? (
          <nav>
            {this.showBackButton ? (
              <button class="back-btn" onClick={this.goBack} lang="en">Back</button>
            ) : null}
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => this.scrollTo(item.id)} lang="en">{item.label}</button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <nav class="mo-nav">
            <span class="mo-menu" onClick={this.menuOn}>
              <FontAwesomeIcon icon="fa-solid fa-bars"></FontAwesomeIcon>
            </span>
            <ul class="mo-menu__inner glass">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => this.scrollTo(item.id)} lang="en">{item.label}</button>
                </li>
              ))}
              <li>
                <span class="close-btn" onClick={this.menuOff}>
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
