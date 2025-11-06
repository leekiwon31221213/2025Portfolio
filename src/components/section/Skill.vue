<template>
  <section id="skill" class="section4">
    <div class="skill__inner">
      <h1 lang="en">Skill & Tool</h1>

      <ul class="skills-box">
        <!-- 스킬 -->
        <li class="skill__inner front-skill glass reveal">
          <ul class="skill-list">
            <li>
              <div class="icon-box front">
                <img :src="front.icon" :alt="front.alt" />
              </div>
              <h3>{{ front.title }}</h3>
            </li>
            <li v-for="(skill, index) in front.skills" :key="index" :type="skill.type">
              <p class="skill-name" lang="en">{{ skill.name }}</p>
              <div class="skill-level">
                <div class="skill-bar" :style="{ '--target-width': skill.level + '%' }">
                  <span class="skill-text">{{ skill.level }}%</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <!-- 디자인 -->
        <li class="skill__inner design-skill glass reveal">
          <ul class="skill-list">
            <li>
              <div class="icon-box design">
                <img :src="design.icon" :alt="design.alt" />
              </div>
              <h3>{{ design.title }}</h3>
            </li>
            <li v-for="(skill, index) in design.skills" :key="index">
              <p class="skill-name" lang="en">{{ skill.name }}</p>
            </li>
          </ul>
        </li>
        <!-- 협업 -->
        <li class="skill__inner collaboration-skill glass reveal">
          <ul class="skill-list">
            <li>
              <div class="icon-box collaboration">
                <img :src="collaboration.icon" :alt="collaboration.alt" />
              </div>
              <h3>{{ collaboration.title }}</h3>
            </li>
            <li v-for="(skill, index) in collaboration.skills" :key="index">
              <p class="skill-name" lang="en">{{ skill.name }}</p>
            </li>
          </ul>
        </li>
        <!-- 기타 -->
        <li class="skill__inner etc-skill glass reveal">
          <ul class="skill-list">
            <li>
              <div class="icon-box etc">
                <img :src="etc.icon" :alt="etc.alt" />
              </div>
              <h3>{{ etc.title }}</h3>
            </li>
            <li
              v-for="(skill, index) in etc.skills"
              :key="index"
              v-bind="skill.name === 'Php' ? { class: 'php-li' } : ''"
            >
              <p class="skill-name" lang="en">{{ skill.name }}</p>

              <div class="php-tab" v-if="skill.name === 'Php'">
                <a href="http://cute01232.dothome.co.kr/" target="_blank">투두리스트 </a>
                <a href="https://cute01233.dothome.co.kr/" target="_blank">게시판 만들기</a>
                <a href="https://cute01234.dothome.co.kr/" target="_blank">PHP공부 리스트</a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  // 스킬 데이터
  data() {
    return {
      front: {
        title: 'Frontend',
        icon: '/assets/image/skill/front_icon.svg',
        alt: '',
        skills: [
          { name: 'Html', level: 90, type: 'markup' },
          { name: 'Css/Scss', level: 90, type: 'style' },
          { name: 'Js & jQ', level: 75, type: 'programming' },
          { name: 'Vue', level: 70, type: 'framework' },
          { name: 'Seo', level: 60, type: 'concept' },
          { name: 'Semantic', level: 65, type: 'concept' },
        ],
      },
      design: {
        title: 'Design',
        icon: '/assets/image/skill/design_icon.svg',
        alt: '',
        skills: [{ name: 'Photoshop' }, { name: 'Figma' }],
      },
      collaboration: {
        title: 'Collaboration',
        icon: '/assets/image/skill/collaboration_icon.svg',
        alt: '',
        skills: [{ name: 'GitHub & GitLab' }, { name: 'Jira' }],
      },
      etc: {
        title: 'Etc',
        icon: '/assets/image/skill/etc_icon.svg',
        alt: '그 외 공부',
        skills: [{ name: 'React' }, { name: 'Php' }],
      },
    }
  },

  mounted() {
    // GSAP 플러그인 등록
    gsap.registerPlugin(ScrollTrigger)

    // 이미지 로드 후 실행
    const afterImagesLoaded = () =>
      new Promise((resolve) => {
        const imgs = Array.from(this.$el.querySelectorAll('#skill img'))
        if (imgs.length === 0) return resolve()
        let loaded = 0
        const done = () => {
          loaded++
          if (loaded === imgs.length) resolve()
        }
        imgs.forEach((img) => {
          if (img.complete) done()
          else {
            img.addEventListener('load', done)
            img.addEventListener('error', done)
          }
        })
      })

    // 스킬바 채우기
    const animateBars = (bars) => {
      bars.forEach((bar) => {
        const target = bar.style.getPropertyValue('--target-width') || '0%'
        gsap.fromTo(bar, { width: 0 }, { width: target, duration: 2, ease: 'power2.out' })
      })
    }

    // 스킬바 초기화
    const resetBars = (bars) => {
      bars.forEach((bar) => gsap.set(bar, { width: 0 }))
    }

    // 카드별 개별 트리거 (카드 + 내부 li + 스킬바 동작)
    const revealPerCard = (selector, startFn) => {
      const cards = Array.from(this.$el.querySelectorAll(selector))
      if (!cards.length) return

      // ★ 초기 상태: 섹션 위에 있을 때는 카드/내부 li 모두 숨김
      gsap.set(cards, { opacity: 0, y: 40 })
      cards.forEach((card) => {
        const innerLis = card.querySelectorAll('.skill-list > li')
        gsap.set(innerLis, { opacity: 0, y: 20 })
      })

      cards.forEach((card, idx) => {
        const bars = card.querySelectorAll('.skill-bar')
        const innerLis = card.querySelectorAll('.skill-list > li')

        // 카드 페이드업 + 내부 li 순차 등장 + 스킬바 재생
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: startFn(idx),
              end: 'bottom 60%',
              toggleActions: 'play none none reverse', // 위로 가면 다시 숨김
              onEnter: () => {
                // 내부 li 순차 등장
                gsap.to(innerLis, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: 'power2.out',
                  stagger: 0.05,
                })
                // 스킬바 재생
                animateBars(bars)
              },
              onEnterBack: () => {
                // 다시 내려올 때도 동일하게 실행
                gsap.to(innerLis, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: 'power2.out',
                  stagger: 0.05,
                })
                animateBars(bars)
              },
              onLeaveBack: () => {
                // 섹션 '위'로 벗어나면 전부 초기화(안 보이게 + 바 0%)
                gsap.set(card, { opacity: 0, y: 40 })
                gsap.set(innerLis, { opacity: 0, y: 20 })
                resetBars(bars)
              },
            },
          },
        )
      })
    }

    // 실행
    this.$nextTick(async () => {
      await afterImagesLoaded()

      ScrollTrigger.matchMedia({
        // PC: 카드 간 오프셋으로 ‘차례대로’
        '(min-width: 1025px)': () => {
          const pxGap = 120
          revealPerCard(
            '#skill .skills-box .skill__inner.reveal',
            (idx) => `top+=${idx * pxGap} 60%`,
          )
        },
        // 태블릿/모바일: 뷰포트 진입 시 즉시
        '(max-width: 1024px)': () => {
          revealPerCard('#skill .skills-box .skill__inner.reveal', () => 'top 80%')
        },
      })

      ScrollTrigger.refresh()
    })
  },

  // 정리
  beforeDestroy() {
    ScrollTrigger.getAll().forEach((st) => st.kill())
  },
}
</script>

<style lang="scss">
#skill {
  background-color: $sub-bg;

  .skill__inner {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 25rem;
    @media (max-width: 1024px) {
      padding-bottom: clamp(15rem, 19.531vw, 25rem);
    }
  }
  h1 {
    padding: 145px 0 35px 0;
    text-align: center;
    margin: 0 auto;
    font-size: clamp(5rem, 4.883vw, 8rem);
    font-weight: 600;
    letter-spacing: 5px;
    @media (max-width: 1024px) {
      font-size: clamp(3rem, 3.906vw, 5rem);
    }
    @media (max-width: 768px) {
      font-size: clamp(2.4rem, 4.364vw, 3rem);
    }
  }
  p.desc {
    text-align: center;
    line-height: clamp(3rem, 2.93vw, 3.5rem);
    font-size: clamp(1.6rem, 1.563vw, 1.8rem);
    color: $dec;
    font-weight: 200;
    margin-bottom: 12.8rem;
    @media (max-width: 1024px) {
      margin-bottom: clamp(6rem, 7.813vw, 12.8rem);
    }
    @media (max-width: 768px) {
      font-size: clamp(1.4rem, 2.545vw, 1.6rem);
    }
  }
  .skills-box {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 5rem;
    }
    li {
      display: flex;
      width: calc(100% / 4);
      align-items: flex-start;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    .skill__inner {
      .skill-list {
        width: 100%;

        > li {
          margin-bottom: 15px;
          display: flex;
          width: 100%;
          &.php-li {
            display: flex;
            flex-direction: column;
            .php-tab {
              font-size: 1.3rem;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              margin-top: 0.5rem;
              a {
                padding: 1rem;
                border: 1px solid $border;
                border-radius: 0.5rem;
                text-align: center;
              }
            }
          }
          &:first-child {
            flex-direction: column;
            h3 {
              font-size: clamp(1.8rem, 1.758vw, 2.1rem);
              font-weight: 600;
              margin-bottom: 1.5rem;
              @media (max-width: 768px) {
                font-size: clamp(1.6rem, 2.909vw, 1.8rem);
              }
            }
            .icon-box {
              padding: 1.3rem;
              border-radius: 0.8rem;
              margin-bottom: 1.5rem;
              width: clamp(50px, 4.883vw, 60px);
              height: clamp(50px, 4.883vw, 60px);
              display: flex;
              justify-content: center;
              @media (max-width: 550px) {
                width: clamp(4rem, 11.111vw, 5rem);
                height: clamp(4rem, 11.111vw, 5rem);
              }

              &.front {
                background: linear-gradient(133deg, #faab89 0%, #f54a00 100%);
              }
              &.design {
                background: linear-gradient(133deg, #dfbfff 0%, #c084fc 100%);
              }

              &.collaboration {
                background: linear-gradient(133deg, #709cff 0%, #155dfc 100%);
              }
              &.etc {
                background: linear-gradient(133deg, #2f54ce 0%, #9071ff 100%);
              }
            }
          }

          .skill-name {
            font-weight: 200;
            margin-bottom: 1rem;
            width: 200px;
            color: $dec;
            font-size: clamp(1.5rem, 1.465vw, 1.7rem);
            @media (max-width: 768px) {
              font-size: clamp(1.4rem, 2.545vw, 1.5rem);
            }
          }

          .skill-level {
            background: #33333370;
            border-radius: 1rem;
            overflow: hidden;
            height: 20px;
            display: flex;
            width: 100%;

            .skill-bar {
              width: 0;
              height: 100%;
              background: linear-gradient(90deg, #ff9966, #822d30);
              border-radius: 1rem;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              padding-right: 5px;
              color: #fff;

              .skill-text {
                font-size: 1.3rem;
                font-weight: 600;
              }
            }
          }
        }
      }
      &.design-skill,
      &.collaboration-skill {
        @media (max-width: 1024px) {
          height: 300px;
        }
      }
      &.design-skill,
      &.collaboration-skill,
      &.etc-skill {
        .skill-list {
          .skill-name {
            width: 100%;
            background-color: #1e2939;
            padding: 0.9rem 1.8rem;
            border-radius: 1rem;
          }
        }
      }
    }
  }

  .glass {
    @include glass(100%, 485px, 4px, 180%, 2rem, #fff);
    border-radius: 30px;
    padding: 3.5rem 3rem;
  }
}

@keyframes fillBar {
  from {
    width: 0;
  }
  to {
    width: var(--target-width);
  }
}

#skill .skill__inner.run .skill-bar {
  animation: fillBar 2.5s ease-in-out;
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
}
</style>
