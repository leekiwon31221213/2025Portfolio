import type { ComponentOptions } from 'vue'

import styles from '/assets/scss/components/section/Skill.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SkillLogic: ComponentOptions = {
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
        skills: [{ name: 'Three.js' }, { name: 'React Native' }, { name: 'Php' }],
      },
    }
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const afterImagesLoaded = () =>
      new Promise<void>((resolve) => {
        const root = this.$el as HTMLElement
        const imgs = Array.from(root.querySelectorAll<HTMLImageElement>('#skill img'))
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

      const root = this.$el as HTMLElement
      const cards = Array.from(
        root.querySelectorAll<HTMLElement>(
          `#skill .${styles['skills-box']} .${styles['skill__inner']}.${styles.reveal}`,
        ),
      )

      // 초기 숨김
      gsap.set(cards, { opacity: 0, y: 60 })
      cards.forEach((card) => {
        const innerLis = card.querySelectorAll(`.${styles['skill-list']} > li`)
        const bars = card.querySelectorAll(`.${styles['skill-bar']}`)

        if (innerLis.length > 0) {
          gsap.set(innerLis, { opacity: 0, y: 20 })
        }
        if (bars.length > 0) {
          gsap.set(bars, { width: 0 })
        }
      })

      ScrollTrigger.matchMedia({
        // PC: 섹션 핀 + 스크롤에 맞춰 카드 순차 등장
        '(min-width: 1025px)': () => {
          const cardDuration = 0.8
          const gap = 0.4
          const tl = gsap.timeline()

          cards.forEach((card, i) => {
            const bars = card.querySelectorAll<HTMLElement>(`.${styles['skill-bar']}`)
            const innerLis = card.querySelectorAll(`.${styles['skill-list']} > li`)
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
            const bars = card.querySelectorAll<HTMLElement>(`.${styles['skill-bar']}`)
            const innerLis = card.querySelectorAll(`.${styles['skill-list']} > li`)

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

  // 이벤트와 애니메이션 정리
  beforeDestroy() {
    ScrollTrigger.getAll().forEach((st) => st.kill())
  },
}

export default SkillLogic
