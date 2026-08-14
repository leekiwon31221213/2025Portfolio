import type { ComponentOptions } from 'vue'

// GSAP과 ScrollTrigger 가져오기
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutLogic: ComponentOptions = {
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

  methods: {
    // 모바일 확인
    isMobileAbout() {
      return window.innerWidth <= 768
    },
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const afterImagesLoaded = () =>
      new Promise<void>((resolve) => {
        const root = this.$el as HTMLElement
        const imgs = Array.from(root.querySelectorAll<HTMLImageElement>('img'))
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

      // 섹션 진입 시 카드 1→2→3→4 순차 자동 재생
      const root = this.$el as HTMLElement
      const allCards = [
        ...Array.from(root.querySelectorAll<HTMLElement>('.setting-card .reveal')),
        ...Array.from(root.querySelectorAll<HTMLElement>('.about-cards .reveal')),
      ]

      gsap.set(allCards, { opacity: 0, y: 40 })

      if (this.isMobileAbout()) {
        allCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onLeaveBack: () => {
                  gsap.set(card, { opacity: 0, y: 40 })
                },
              },
            },
          )
        })
      } else {
        const tl = gsap.timeline({ paused: true })
        allCards.forEach((card, i) => {
          tl.fromTo(
            card,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            i * 0.18,
          )
        })

        ScrollTrigger.create({
          trigger: '#about',
          start: 'top 65%',
          onEnter: () => tl.play(),
          onLeaveBack: () => {
            tl.pause(0)
            gsap.set(allCards, { opacity: 0, y: 40 })
          },
        })
      }

      ScrollTrigger.refresh()
    })
  },

  beforeDestroy() {
    ScrollTrigger.getAll().forEach((st) => st.kill())
  },
}

export default AboutLogic
