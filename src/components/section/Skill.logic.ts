import { useEffect, type RefObject } from 'react'

import styles from '/assets/scss/components/section/Skill.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SkillLogic = (rootRef: RefObject<HTMLElement | null>) => {
  // 스킬 데이터
  const front = {
    title: 'Frontend',
    icon: '/assets/image/skill/front_icon.svg',
    alt: '',
    skills: [
      { name: 'Html', level: 90, type: 'markup' },
      { name: 'Css/Scss', level: 90, type: 'style' },
      { name: 'Js & jQ', level: 85, type: 'programming' },
      { name: 'React', level: 70, type: 'library' },
      { name: 'TypeScript', level: 60, type: 'programming' },
      { name: 'Seo', level: 90, type: 'concept' },
      { name: 'Semantic', level: 90, type: 'concept' },
    ],
  }
  const design = {
    title: 'Design',
    icon: '/assets/image/skill/design_icon.svg',
    alt: '',
    skills: [{ name: 'Photoshop' }, { name: 'Figma' }, { name: 'Illustrator' }],
  }
  const collaboration = {
    title: 'Collaboration',
    icon: '/assets/image/skill/collaboration_icon.svg',
    alt: '',
    skills: [{ name: 'GitHub & GitLab' }, { name: 'Jira' }],
  }
  const etc = {
    title: 'Etc',
    icon: '/assets/image/skill/etc_icon.svg',
    alt: '그 외 공부',
    skills: [{ name: 'Three.js' }, { name: 'React Native' }, { name: 'Php' }],
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const root = rootRef.current
    if (!root) return
    let isCancelled = false
    const responsiveAnimation = gsap.matchMedia()

    const afterImagesLoaded = () =>
      new Promise<void>((resolve) => {
        const imgs = Array.from(root.querySelectorAll<HTMLImageElement>('#skill img'))
        if (imgs.length === 0) return resolve()
        let loaded = 0
        const done = () => {
          if (++loaded === imgs.length) resolve()
        }
        imgs.forEach((img) => {
          if (img.complete) done()
          else {
            img.addEventListener('load', done, { once: true })
            img.addEventListener('error', done, { once: true })
          }
        })
      })

    const initAnimations = async () => {
      await afterImagesLoaded()
      if (isCancelled) return

      const cards = Array.from(
        root.querySelectorAll<HTMLElement>(
          `.${styles['skills-box']} .${styles['skill__inner']}.${styles.reveal}`,
        ),
      )

      gsap.set(cards, { opacity: 0, y: 60 })
      cards.forEach((card) => {
        const innerLis = card.querySelectorAll(`.${styles['skill-list']} > li`)
        const bars = card.querySelectorAll(`.${styles['skill-bar']}`)

        if (innerLis.length > 0) gsap.set(innerLis, { opacity: 0, y: 20 })
        if (bars.length > 0) gsap.set(bars, { width: 0 })
      })

      responsiveAnimation.add('(min-width: 1025px)', () => {
        const cardDuration = 0.8
        const gap = 0.4
        const timeline = gsap.timeline()

        cards.forEach((card, index) => {
          const bars = card.querySelectorAll<HTMLElement>(`.${styles['skill-bar']}`)
          const innerLis = card.querySelectorAll(`.${styles['skill-list']} > li`)
          const startTime = index * (cardDuration + gap)

          timeline.fromTo(
            card,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            startTime,
          )
          if (innerLis.length) {
            timeline.fromTo(
              innerLis,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out' },
              startTime + 0.15,
            )
          }
          bars.forEach((bar) => {
            const target = bar.style.getPropertyValue('--target-width') || '0%'
            timeline.fromTo(
              bar,
              { width: 0 },
              { width: target, duration: 0.6, ease: 'power2.out' },
              startTime + 0.15,
            )
          })
        })

        ScrollTrigger.create({
          trigger: '#skill',
          pin: true,
          start: 'top top',
          end: `+=${cards.length * 700}`,
          animation: timeline,
          scrub: 1,
        })
      })

      responsiveAnimation.add('(max-width: 1024px)', () => {
        cards.forEach((card) => {
          const bars = card.querySelectorAll<HTMLElement>(`.${styles['skill-bar']}`)
          const innerLis = card.querySelectorAll(`.${styles['skill-list']} > li`)
          const showSkills = () => {
            gsap.to(innerLis, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out',
            })
            bars.forEach((bar) => {
              const target = bar.style.getPropertyValue('--target-width') || '0%'
              gsap.fromTo(bar, { width: 0 }, { width: target, duration: 2, ease: 'power2.out' })
            })
          }

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
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: showSkills,
                onEnterBack: showSkills,
                onLeaveBack: () => {
                  gsap.set(card, { opacity: 0, y: 40 })
                  gsap.set(innerLis, { opacity: 0, y: 20 })
                  bars.forEach((bar) => gsap.set(bar, { width: 0 }))
                },
              },
            },
          )
        })
      })

      ScrollTrigger.refresh()
    }

    void initAnimations()

    return () => {
      isCancelled = true
      responsiveAnimation.revert()
    }
  }, [rootRef])

  return { front, design, collaboration, etc }
}

export default SkillLogic
