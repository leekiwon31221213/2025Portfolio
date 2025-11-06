<template>
  <section id="about" class="section2">
    <h1 lang="en">About Me</h1>
    <article class="section__inner">
      <div class="about-content-tie">
        <div class="about-content pc">
          <h2>{{ about.title }}</h2>
          <p v-html="about.description"></p>
        </div>

        <div class="about-content mo">
          <h2 v-html="about.moTitle"></h2>
          <p v-html="about.moDesCription"></p>
        </div>

        <ul class="setting-card glass">
          <li class="reveal">
            <div class="img-box"><img :src="settingCard.icon" :alt="settingCard.alt" /></div>
            <h3>{{ settingCard.title }}</h3>
            <p>{{ settingCard.description }}</p>
          </li>
        </ul>
      </div>

      <ul class="about-cards">
        <li class="user-card glass reveal">
          <div class="img-box"><img :src="userCard.icon" :alt="userCard.alt" /></div>
          <h3>{{ userCard.title }}</h3>
          <p>{{ userCard.description }}</p>
        </li>
        <li class="optimize-card glass reveal">
          <div class="img-box"><img :src="optimizeCard.icon" :alt="optimizeCard.alt" /></div>
          <h3>{{ optimizeCard.title }}</h3>
          <p>{{ optimizeCard.description }}</p>
        </li>
        <li class="growth-card glass reveal">
          <div class="img-box"><img :src="growthCard.icon" :alt="growthCard.alt" /></div>
          <h3>{{ growthCard.title }}</h3>
          <p>{{ growthCard.description }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
// GSAP과 ScrollTrigger 가져오기
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  data() {
    /* About 소개 */
    return {
      about: {
        title: '직관적인 경험을 구현하는 프론트엔드 개발자',
        description: `
        웹퍼블리셔로 첫 발을 내딛고,
        <strong>사용자 경험</strong>에 대한 깊은 이해를 바탕으로 프론트엔드 개발자로 성장해 왔습니다.
        단순한 마크업을 넘어, 사용자와 자연스럽게 소통하는
        <strong>인터랙티브한 웹 경험</strong>을 만들어 가고 있습니다.
        깔끔하고 직관적인 디자인 속에 복잡한 기능을 담아, 누구나 쉽게 사용할 수 있는 환경을 만드는 것이 저의 철학입니다.
        매일 새로운 기술을 배우고 적용하며, 더 나은 프론트엔드 개발자로 나아가고 있습니다.
      `,
        moTitle: '직관적인 경험을 구현하는 <br/> 프론트엔드 개발자',
        moDesCription: `
        웹퍼블리셔로 시작해,  
        <strong>사용자 경험</strong>을 깊이 이해하며  
        프론트엔드 개발자로 성장했습니다. 
        단순한 마크업을 넘어  
        <strong>인터랙티브한 웹 경험</strong>을 만들고,  
        누구나 쉽게 사용할 수 있는 환경을 추구합니다. 
        매일 배우고 적용하며  
        더 나은 개발자로 나아가고 있습니다.
        `,
      },
      settingCard: {
        icon: '/assets/image/about/setting_icon.svg',
        title: '프론트엔드 경험 설계',
        description:
          '사용자 인터페이스와 경험을 세심하게 설계하여, 직관적이고 반응성이 뛰어난 웹 환경을 구현합니다.',
        alt: '경험설계 아이콘',
      },
      userCard: {
        icon: '/assets/image/about/user_icon.svg',
        title: '사용자 중심',
        description:
          '사용자의 관점에서 생각하고, 문제를 해결할 수 있는 최적의 솔루션을 만드는 것을 최우선으로 합니다.',
        alt: '사용자 중심 아이콘',
      },
      optimizeCard: {
        icon: '/assets/image/about/optimize_icon.svg',
        title: 'SEO 최적화',
        description:
          '시멘틱 마크업과 최적화된 구조를 통해 검색 엔진 노출 효과를 높이고,사용자가 쉽게 찾을 수 있는 웹을 만듭니다.',
        alt: 'SEO 최적화 아이콘',
      },
      growthCard: {
        icon: '/assets/image/about/growth_icon.svg',
        title: '지속적인 성장',
        description:
          '끊임없이 변화하는 기술과 트렌드를 따라가며, 새로운 도구와 방법을 학습하고 프로젝트에 적극 반영합니다.',
        alt: '지속적인 성장 아이콘',
      },
    }
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    // 이미지 로딩 이후 계산 정확히 하기
    const afterImagesLoaded = () =>
      new Promise((resolve) => {
        const imgs = Array.from(this.$el.querySelectorAll('img'))
        if (imgs.length === 0) return resolve()
        let loaded = 0
        imgs.forEach((img) => {
          if (img.complete) {
            loaded++
            if (loaded === imgs.length) resolve()
          } else {
            img.addEventListener('load', () => {
              loaded++
              if (loaded === imgs.length) resolve()
            })
            img.addEventListener('error', () => {
              loaded++
              if (loaded === imgs.length) resolve()
            })
          }
        })
      })

    const revealPerCard = (selector, startFn) => {
      const cards = Array.from(this.$el.querySelectorAll(selector))
      if (!cards.length) return
      gsap.set(cards, { opacity: 0, y: 40 })

      cards.forEach((card, idx) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: startFn(idx),
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }

    this.$nextTick(async () => {
      await afterImagesLoaded()

      revealPerCard('.setting-card .reveal', () => 'top 80%')

      ScrollTrigger.matchMedia({
        '(min-width: 1025px)': () => {
          const pxGap = 140
          revealPerCard('.about-cards .reveal', (idx) => `top+=${idx * pxGap} 80%`)
        },
        '(max-width: 1024px)': () => {
          revealPerCard('.about-cards .reveal', () => 'top 80%')
        },
      })

      ScrollTrigger.refresh()
    })
  },

  beforeDestroy() {
    ScrollTrigger.getAll().forEach((st) => st.kill())
  },
}
</script>

<style lang="scss">
#about {
  background-color: $sub-bg;
  &.section2 {
    .section__inner {
      display: flex;
      flex-direction: column;
      width: 90%;
      padding: 0 0 250px;
      margin: 0 auto;
      @media (max-width: 1024px) {
        padding: 0 0 150px;
      }
      @media (max-width: 768px) {
        padding: 0 0 clamp(100px, 18.182vw, 150px);
      }
      .about-content-tie {
        margin-bottom: 5.5rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        @media (max-width: 1024px) {
          flex-direction: column;
        }
        .about-content {
          letter-spacing: 2px;
          line-height: clamp(3rem, 2.93vw, 4rem);
          margin-right: 3rem;
          width: calc(100% / 0.47);
          @media (max-width: 1024px) {
            width: unset;
            margin-right: 0;
          }
          &.pc {
            display: block;
            @media (max-width: 1024px) {
              display: none;
            }
          }

          &.mo {
            display: none;
            @media (max-width: 1024px) {
              display: block;
            }
          }
          h2 {
            font-size: clamp(2.4rem, 2.344vw, 3rem);
            margin-bottom: 1rem;
            font-weight: 600;
            @media (max-width: 1024px) {
              text-align: center;
              margin-bottom: 2rem;
            }
            @media (max-width: 768px) {
              font-size: clamp(1.9rem, 3.455vw, 2.4rem);
            }
            @media (max-width: 550px) {
              font-size: clamp(1.7rem, 4.722vw, 1.9rem);
            }
          }
          p {
            font-size: clamp(1.8rem, 1.758vw, 2.3rem);
            color: $dec;
            font-weight: 200;
            @media (max-width: 1024px) {
              margin-bottom: 3rem;
              text-align: center;
            }
            @media (max-width: 768px) {
              font-size: clamp(1.6rem, 2.909vw, 1.8rem);
            }
            @media (max-width: 550px) {
              font-size: clamp(1.4rem, 3.889vw, 1.6rem);
            }
            strong {
              color: $white;
              font-size: clamp(2.1rem, 2.051vw, 2.6rem);
              font-weight: 600;
              @media (max-width: 768px) {
                font-size: clamp(1.8rem, 3.273vw, 2.1rem);
              }
              @media (max-width: 550px) {
                font-size: clamp(1.5rem, 4.167vw, 1.8rem);
              }
            }
          }
        }
        .setting-card {
          width: 100%;
          li {
            @media (max-width: 1024px) {
              width: 100%;
            }
            h3 {
              font-size: clamp(1.9rem, 1.855vw, 2.1rem);
              font-weight: 600;
              margin-bottom: 2rem;
              @media (max-width: 550px) {
                font-size: clamp(1.7rem, 4.722vw, 1.9rem);
              }
            }
            p {
              font-size: clamp(1.6rem, 1.563vw, 1.8rem);
              font-weight: 200;
              color: $dec;
              line-height: clamp(20px, 1.953vw, 25px);
              @media (max-width: 550px) {
                font-size: clamp(1.5rem, 4.167vw, 1.6rem);
              }
            }
            .img-box {
              background-color: $icon-bg1;
              margin-bottom: 2.5rem;
            }
          }
        }
      }
      .about-cards {
        display: flex;
        justify-content: space-between;
        @media (max-width: 1024px) {
          flex-direction: column;
        }

        li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-right: 30px;
          @media (max-width: 1024px) {
            width: 100%;
            margin-bottom: 5rem;
          }
          &:last-child {
            margin-right: 0;
          }
          h3 {
            font-size: clamp(1.9rem, 1.855vw, 2.1rem);
            font-weight: 600;
            margin-bottom: 2rem;
            @media (max-width: 550px) {
              font-size: clamp(1.7rem, 4.722vw, 1.9rem);
            }
          }
          p {
            font-size: clamp(1.6rem, 1.563vw, 1.8rem);
            font-weight: 200;
            color: $dec;
            line-height: clamp(20px, 1.953vw, 25px);
            @media (max-width: 550px) {
              font-size: clamp(1.5rem, 4.167vw, 1.6rem);
            }
          }
        }
        @for $i from 1 through 3 {
          li:nth-child(#{$i}) .img-box {
            background-color: nth(($icon-bg2, $icon-bg3, $icon-bg4), $i);
            margin-bottom: 2.5rem;
          }
        }
      }
    }
    h1 {
      width: 90%;
      padding: 145px 0 100px;
      text-align: center;
      margin: 0 auto;
      font-size: clamp(5rem, 4.883vw, 8rem);
      font-weight: 600;
      letter-spacing: 5px;
      @media (max-width: 1024px) {
        font-size: clamp(3rem, 3.906vw, 5rem);
        padding-bottom: 3rem;
      }
      @media (max-width: 768px) {
        padding: 145px 0 clamp(45px, 8.182vw, 100px);
        font-size: clamp(2.4rem, 4.364vw, 3rem);
      }
    }
  }

  // 공통
  .glass {
    @include glass(550px, 268px, 4px, 180%, 2rem, #fff);
    border-radius: 30px;
    padding-left: 3rem;
  }
  .img-box {
    width: clamp(6rem, 5.859vw, 7rem);
    height: clamp(6rem, 5.859vw, 7rem);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: clamp(5rem, 9.091vw, 6rem);
      height: clamp(5rem, 9.091vw, 6rem);
      border-radius: clamp(8px, 2.222vw, 18px);
      @media (max-width: 550px) {
        width: clamp(4rem, 11.111vw, 5rem);
        height: clamp(4rem, 11.111vw, 5rem);
      }
      img {
        width: clamp(20px, 3.636vw, 27px);
      }
    }
  }
}
.reveal {
  opacity: 0;
  transform: translateY(40px);
}
</style>
