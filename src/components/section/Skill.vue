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
            <li
              v-for="(skill, index) in etc.skills"
              :key="index"
              class="skill-li"
              :class="{
                'react-li': skill.name === 'React',
                'php-li': skill.name === 'Php',
              }"
            >
              <p class="skill-name" lang="en">{{ skill.name }}</p>
              <div class="react-tab etc-skill-tab" v-if="skill.name === 'React'">
                <a
                  href="https://github.com/leekiwon31221213/reactStudy/tree/main/src"
                  target="_blank"
                  >리액트 공부
                  <FontAwesomeIcon :icon="['fas', 'angle-down']" />
                </a>
              </div>
              <div class="php-tab etc-skill-tab" v-if="skill.name === 'Php'">
                <a href="http://cute01232.dothome.co.kr/" target="_blank"
                  >투두리스트
                  <FontAwesomeIcon :icon="['fas', 'angle-down']" />
                </a>
                <a href="https://cute01233.dothome.co.kr/" target="_blank"
                  >게시판 만들기
                  <FontAwesomeIcon :icon="['fas', 'angle-down']" />
                </a>
                <a href="https://cute012345.dothome.co.kr/" target="_blank"
                  >PHP공부 리스트
                  <FontAwesomeIcon :icon="['fas', 'angle-down']" />
                </a>
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
          { name: 'React', level: 70, type: 'framework' },
          { name: 'TypeScript', level: 50, type: 'programming' },
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
    gsap.registerPlugin(ScrollTrigger)

    const afterImagesLoaded = () =>
      new Promise((resolve) => {
        const imgs = Array.from(this.$el.querySelectorAll('#skill img'))
        if (imgs.length === 0) return resolve()
        let loaded = 0
        const done = () => { if (++loaded === imgs.length) resolve() }
        imgs.forEach((img) => {
          if (img.complete) done()
          else {
            img.addEventListener('load', done)
            img.addEventListener('error', done)
          }
        })
      })

    this.$nextTick(async () => {
      await afterImagesLoaded()

      const cards = Array.from(
        this.$el.querySelectorAll('#skill .skills-box .skill__inner.reveal'),
      )

      // 초기 숨김
      gsap.set(cards, { opacity: 0, y: 60 })
      cards.forEach((card) => {
        gsap.set(card.querySelectorAll('.skill-list > li'), { opacity: 0, y: 20 })
        gsap.set(card.querySelectorAll('.skill-bar'), { width: 0 })
      })

      ScrollTrigger.matchMedia({
        // PC: 섹션 핀 + 스크롤에 맞춰 카드 순차 등장
        '(min-width: 1025px)': () => {
          const cardDuration = 0.8
          const gap = 0.4
          const tl = gsap.timeline()

          cards.forEach((card, i) => {
            const bars = card.querySelectorAll('.skill-bar')
            const innerLis = card.querySelectorAll('.skill-list > li')
            const t = i * (cardDuration + gap)

            tl.fromTo(card, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, t)
            if (innerLis.length) {
              tl.fromTo(innerLis, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out' }, t + 0.15)
            }
            bars.forEach((bar) => {
              const target = bar.style.getPropertyValue('--target-width') || '0%'
              tl.fromTo(bar, { width: 0 }, { width: target, duration: 0.6, ease: 'power2.out' }, t + 0.15)
            })
          })

          ScrollTrigger.create({
            trigger: '#skill',
            pin: true,
            start: 'top top',
            end: `+=${cards.length * 700}`,
            animation: tl,
            scrub: 1,
          })
        },

        // 태블릿/모바일: 뷰포트 진입 시 개별 등장
        '(max-width: 1024px)': () => {
          cards.forEach((card) => {
            const bars = card.querySelectorAll('.skill-bar')
            const innerLis = card.querySelectorAll('.skill-list > li')

            gsap.fromTo(card, { opacity: 0, y: 40 }, {
              opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => {
                  gsap.to(innerLis, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' })
                  bars.forEach((bar) => {
                    const target = bar.style.getPropertyValue('--target-width') || '0%'
                    gsap.fromTo(bar, { width: 0 }, { width: target, duration: 2, ease: 'power2.out' })
                  })
                },
                onEnterBack: () => {
                  gsap.to(innerLis, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' })
                  bars.forEach((bar) => {
                    const target = bar.style.getPropertyValue('--target-width') || '0%'
                    gsap.fromTo(bar, { width: 0 }, { width: target, duration: 2, ease: 'power2.out' })
                  })
                },
                onLeaveBack: () => {
                  gsap.set(card, { opacity: 0, y: 40 })
                  gsap.set(innerLis, { opacity: 0, y: 20 })
                  bars.forEach((bar) => gsap.set(bar, { width: 0 }))
                },
              },
            })
          })
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
  .fa-angle-down {
    transform: rotate(-90deg);
  }
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
          &.skill-li {
            display: flex;
            flex-direction: column;
            .etc-skill-tab {
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
    @include glass(100%, stretch, 4px, 180%, 2rem, #fff);
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
