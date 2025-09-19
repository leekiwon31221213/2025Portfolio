<template>
  <header class="header">
    <!-- PC 메뉴 -->
    <nav v-if="!isMobile">
      <ul>
        <li><button @click="scrollTo('about')" lang="en">About</button></li>
        <li><button @click="scrollTo('education')" lang="en">Career</button></li>
        <li><button @click="scrollTo('skill')" lang="en">Skill</button></li>
        <li><button @click="scrollTo('project')" lang="en">Project</button></li>
      </ul>
    </nav>

    <!-- 모바일 메뉴 -->
    <nav v-else class="mo-nav">
      <font-awesome-icon icon="fa-solid fa-bars" class="mo-menu" @click="menuOn" />

      <ul class="mo-menu__inner glass">
        <li><button @click="scrollTo('about')" lang="en">About</button></li>
        <li><button @click="scrollTo('education')" lang="en">Career</button></li>
        <li><button @click="scrollTo('skill')" lang="en">Skill</button></li>
        <li><button @click="scrollTo('project')" lang="en">Project</button></li>
        <li>
          <font-awesome-icon icon="fa-solid fa-xmark" class="close-btn" @click="menuOff" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      isScrolled: false,
    }
  },

  methods: {
    // 스크롤 해당 섹션으로 이동
    scrollTo(id) {
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
      const menu = document.querySelector('.mo-menu__inner')
      const hamburger = document.querySelector('.mo-menu')
      menu.classList.add('active')
      hamburger.style.display = 'none'
      document.body.style.overflow = 'hidden'
    },

    // 메뉴 닫기
    menuOff() {
      const menu = document.querySelector('.mo-menu__inner')
      const hamburger = document.querySelector('.mo-menu')
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
      const header = document.querySelector('.header')
      const hamburger = document.querySelector('.mo-menu')
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
}
</script>

<style lang="scss">
header {
  position: sticky;
  top: 0;
  height: 85px;
  border-bottom: 1px solid $border;
  z-index: 3;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: inherit;

    ul {
      display: flex;
      width: 100%;
      text-align: right;
      justify-content: flex-end;
      margin: 0 3rem;
      z-index: 5;

      li {
        display: flex;
        justify-content: flex-end;
        margin-right: 5rem;

        &:last-child {
          margin-right: 0;
        }

        button {
          color: $white;
          -webkit-text-fill-color: $white;
          font-size: 2.3rem;
          transition: -webkit-text-fill-color 3s ease-in-out;

          &:hover {
            background-image: $point-color;
            background-size: 200% 100%;
            background-position: 0% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientMove 1s ease-in-out;
          }
        }
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    backdrop-filter: blur(12px) saturate(120%);
    -webkit-backdrop-filter: blur(12px) saturate(120%);
  }

  &.active::before {
    animation: glassIn 0.3s ease forwards;
  }

  &:not(.active)::before {
    animation: glassOut 0.3s ease forwards;
  }

  // 모바일 메뉴
  .mo-nav {
    width: 95%;
    margin: 0 auto;
    font-size: 2.5rem;
    position: relative;
    z-index: 2;

    .mo-menu__inner {
      position: fixed;
      flex-direction: column;
      top: 0;
      right: -100%;
      margin: 0;
      visibility: hidden;
      opacity: 0;

      &.glass {
        @include glass(100%, 100%, 4px, 180%, 2rem, #fff);
        border-radius: 0;
        padding: 10rem 0 0 0;
        justify-content: flex-start;
        align-items: flex-end;
      }

      &.active {
        visibility: visible;
        opacity: 1;
        animation: menuOpen 0.3s forwards;
      }

      &.closing {
        visibility: visible;
        opacity: 1;
        animation: menuClose 0.3s forwards;
      }

      li {
        font-size: 2.8rem;
        margin-bottom: 2rem;
        button {
          text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        }
        &:last-child {
          margin-bottom: 0;
        }
        .fa-xmark {
          position: absolute;
          right: 30px;
          top: 30px;
          font-size: 2rem;
        }
      }
    }
  }
}

@keyframes gradientMove {
  from {
    background-position: 0% 0;
  }
  to {
    background-position: 100% 0;
  }
}

@keyframes menuOpen {
  0% {
    right: -100%;
  }
  100% {
    right: 0;
  }
}

@keyframes menuClose {
  0% {
    right: 0;
  }
  100% {
    right: -100%;
  }
}

@keyframes glassIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes glassOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
