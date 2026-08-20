import type { ComponentOptions } from 'vue'

import styles from '/assets/scss/components/section/Career.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CareerLogic: ComponentOptions = {
  data() {
    return {
      visibledCount: 2,
      lineTimelines: [] as gsap.core.Timeline[],
      lineMedia: null as gsap.MatchMedia | null,
      education: [
        {
          logo: '/assets/image/career/ez_logo.jpg',
          alt: '이젠아카데미',
          edu: '이젠 아카데미(종각)',
          study: '모바일 UI/UX 웹&앱디자인(웹퍼블리셔)',
          span: '2022.07 ~ 2022.12 / 5개월',
        },
        {
          logo: '/assets/image/career/silla_logo.jpg',
          alt: '신라대학교',
          edu: '신라대학교(부산)',
          study: '음악학과 피아노 전공',
          span: '2014.03 ~ 2018.02 / 4년',
        },
      ],

      career: [
        {
          logo: '/assets/image/career/esafe.jpg',
          alt: '이세이프 로고',
          companyName: '(주)이세이프',
          business: '산업안전 교육 플랫품',
          team: 'IT개발 · 프로/팀원 (2026.02 ~ 프리랜서 재직 중)',
          work1: 'React · TypeScript 기반 사용자 인터페이스 프론트엔드 개발',
          work2: '외국인 근로자 대상 통번역 교육 플랫폼 및 AI 위험성 평가 서비스 프론트엔드 개발',
          work3: 'REST API 비동기 통신 기반 데이터 연동 및 상태 관리 구현',
          work4: '하이브리드 웹/앱 브릿지 기능 개발 및 유지보수',
        },
        {
          logo: '/assets/image/career/pravang_logo.jpg',
          alt: '프라뱅 로고',
          companyName: '(주)프라뱅',
          business: '블록체인 및 가상화폐 거래소 전문 개발사',
          team: 'IT개발 · 주임/팀원 (2024.05 ~ 2026.02 / 1년 10개월)',
          work1: 'Java 및 Thymeleaf 기반 환경에서 블록체인 및 가상화폐 거래소 웹 유지보수',
          work2:
            '프론트엔드 개발 · 퍼블리싱 및 하이브리드 앱 기획·디자인/브릿지 개발 · REST API 비동기 통신 기반 데이터 연동',
        },
        {
          logo: '/assets/image/career/fastlabs_logo.jpg',
          alt: '패스트랩스 로고',
          companyName: '패스트랩스',
          business: '콘텐츠 중심 브랜드 마케팅 솔루션 기업',
          team: '콘텐츠팀 · 사원 (2023.09 ~ 2024.02 / 6개월)',
          work1:
            '카페24 호스팅 기반 그누보드(이윰빌더) 하이브리드 앱 유지보수 및 쇼핑몰 유지보수 담당',
          work2: 'PHP include를 통한 반복 코드 효율화 및 게시판 연동, SQL 활용 학습 및 적용',
        },
        {
          logo: '/assets/image/career/bn_logo.jpg',
          alt: '비엔시스템 로고',
          companyName: '비엔시스템',
          business: '웹·솔루션 개발 및 IT 아웃소싱 기업(웹에이전시)',
          team: 'IT퍼블리셔팀 · 인턴 (2023.04 ~ 2023.07 / 4개월)',
          work1: '웹 퍼블리싱 및 개발 보조 업무 수행',
          work2: '현대 산업개발, 짐싸, 자사 홈페이지 서브 페이지 리뉴얼 작업',
        },
        {
          logo: '/assets/image/career/dispis_logo.jpg',
          alt: '디스피스 로고',
          companyName: '디스피스',
          business: '자사몰 및 온라인 마케팅 전문 기업',
          team: '마케팅팀 · 프로 (2021.05 ~ 2022.05 / 1년)',
          work1: '홈쇼핑, 스마트스토어 운영 지원 / 자사몰 마케팅, 고객관리, 바이럴마케팅 등',
        },
        {
          logo: '/assets/image/career/jc_logo.jpg',
          alt: '증산클라비어',
          companyName: '증산클라비어',
          business: '피아노 학원',
          team: '학원 강사 (2014.12 ~ 2020.02 / 5년 3개월)',
          work1: '원생 관리 및 피아노 교육',
        },
      ],
    }
  },
  computed: {
    // 학력과 경력을 시작일 순으로 정렬
    journey() {
      return [
        {
          ...this.education[1],
          type: 'Education',
          title: this.education[1].edu,
          period: this.education[1].span,
          description: [this.education[1].study],
        },
        {
          ...this.career[5],
          type: 'Career',
          title: this.career[5].companyName,
          period: this.career[5].team,
          description: [this.career[5].business, this.career[5].work1],
        },
        {
          ...this.career[4],
          type: 'Career',
          title: this.career[4].companyName,
          period: this.career[4].team,
          description: [this.career[4].business, this.career[4].work1],
        },
        {
          ...this.education[0],
          type: 'Education',
          title: this.education[0].edu,
          period: this.education[0].span,
          description: [this.education[0].study],
        },
        {
          ...this.career[3],
          type: 'Career',
          title: this.career[3].companyName,
          period: this.career[3].team,
          description: [this.career[3].business, this.career[3].work1, this.career[3].work2],
        },
        {
          ...this.career[2],
          type: 'Career',
          title: this.career[2].companyName,
          period: this.career[2].team,
          description: [this.career[2].business, this.career[2].work1, this.career[2].work2],
        },
        {
          ...this.career[1],
          type: 'Career',
          title: this.career[1].companyName,
          period: this.career[1].team,
          description: [this.career[1].business, this.career[1].work1, this.career[1].work2],
        },
        {
          ...this.career[0],
          type: 'Career',
          title: this.career[0].companyName,
          period: this.career[0].team,
          description: [
            this.career[0].business,
            this.career[0].work1,
            this.career[0].work2,
            this.career[0].work3,
            this.career[0].work4,
          ],
        },
      ]
    },

    displayedCareers() {
      return this.career.slice(0, this.visibledCount)
    },
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    this.$nextTick(() => {
      this.initAnimations()
    })
  },

  beforeDestroy() {
    ScrollTrigger.getAll().forEach((st) => st.kill())
  },

  beforeUnmount() {
    this.lineTimelines.forEach((timeline: gsap.core.Timeline) => timeline.kill())
    this.lineMedia?.revert()
  },

  methods: {
    // 경력 카드 찾기
    getCareerItems() {
      return document.querySelectorAll<HTMLElement>(`.${styles['career__inner']} > li`)
    },

    // 학력 및 경력 카드 찾기
    getAllItems() {
      return document.querySelectorAll<HTMLElement>(
        `.${styles['education__inner']} > li, .${styles['career__inner']} > li`,
      )
    },

    // 제목 찾기
    getSectionTitles() {
      return document.querySelectorAll<HTMLElement>('#education h1, #career h1, #journey h1')
    },

    // 스크롤 자리 저장
    getScrollAnchorInfo() {
      const items = this.getCareerItems()
      const anchor = items[items.length - 1]

      if (!anchor) {
        return null
      }

      return {
        element: anchor,
        top: anchor.getBoundingClientRect().top,
      }
    },

    // 스크롤 위치 복원
    restoreScrollAnchor(scrollAnchorInfo: { element: HTMLElement; top: number } | null) {
      if (!scrollAnchorInfo || !scrollAnchorInfo.element) {
        return
      }

      const nextTop = scrollAnchorInfo.element.getBoundingClientRect().top
      const moveY = nextTop - scrollAnchorInfo.top

      if (moveY !== 0) {
        window.scrollBy(0, moveY)
      }
    },

    initAnimations() {
      this.getSectionTitles().forEach((title: HTMLElement) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
      this.initLineAnimations()
    },

    // SVG 선 도착에 맞춰 카드 순차 표시
    initLineAnimations() {
      this.lineTimelines.forEach((timeline: gsap.core.Timeline) => timeline.kill())
      this.lineTimelines = []
      this.lineMedia?.revert()
      this.lineMedia = gsap.matchMedia()

      this.lineMedia.add('(min-width: 769px)', () => {
        this.createLineAnimations(`.${styles['desktop-line']}`, false)
      })

      this.lineMedia.add('(max-width: 768px)', () => {
        this.createLineAnimations(`.${styles['desktop-line']}`, false)
      })
    },

    // 현재 화면의 SVG 경로로 타임라인 생성
    createLineAnimations(lineSelector: string, isMobile: boolean) {
      document
        .querySelectorAll<HTMLElement>(`.${styles['timeline-wrap']}`)
        .forEach((timelineWrap) => {
          const line = timelineWrap.querySelector<SVGSVGElement>(lineSelector)
          const path = line?.querySelector<SVGPathElement>(`.${styles['timeline-line-progress']}`)
          const items = timelineWrap.querySelectorAll<HTMLElement>('li')

          if (!line || !path || items.length === 0) return

          this.setTimelinePath(timelineWrap, line, items, isMobile)

          const totalLength = path.getTotalLength()

          gsap.set(path, {
            strokeDasharray: totalLength,
            strokeDashoffset: totalLength,
          })
          gsap.set(items, { opacity: 0, y: 35 })

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: timelineWrap,
              start: isMobile ? 'top 78%' : 'top 72%',
              end: isMobile ? 'bottom 88%' : 'bottom 72%',
              scrub: isMobile ? 0.45 : 0.8,
              invalidateOnRefresh: true,
              onRefreshInit: () => {
                this.setTimelinePath(timelineWrap, line, items, isMobile)
                const refreshedLength = path.getTotalLength()
                gsap.set(path, { strokeDasharray: refreshedLength })
              },
            },
          })

          timeline.to(path, { strokeDashoffset: 0, duration: 1, ease: 'none' }, 0)

          items.forEach((item: HTMLElement, index: number) => {
            const arrivalPoint = items.length === 1 ? 0 : index / (items.length - 1)
            timeline.to(item, { opacity: 1, y: 0, duration: 0.14, ease: 'none' }, arrivalPoint)
          })

          this.lineTimelines.push(timeline)
        })
    },

    // 카드 표시점에 맞춰 SVG 경로 생성
    setTimelinePath(
      timelineWrap: HTMLElement,
      line: SVGSVGElement,
      items: NodeListOf<HTMLElement>,
      isMobile: boolean,
    ) {
      const timelineRect = timelineWrap.getBoundingClientRect()
      const lineWidth = isMobile ? 40 : timelineWrap.clientWidth
      const lineHeight = timelineWrap.clientHeight
      const points = Array.from(items).map((item) => {
        if (isMobile) {
          return {
            x: 20,
            y: item.offsetTop + 28,
          }
        }

        const itemRect = item.getBoundingClientRect()
        const markerStyle = window.getComputedStyle(item, '::before')
        const markerLeft = Number.parseFloat(markerStyle.left) || 0
        const markerTop = Number.parseFloat(markerStyle.top) || 0

        return {
          x: itemRect.left - timelineRect.left + markerLeft,
          y: itemRect.top - timelineRect.top + markerTop,
        }
      })

      if (points.length === 0) return

      let pathData = `M${points[0].x} ${points[0].y}`

      points.slice(1).forEach((point, index) => {
        const previousPoint = points[index]
        const middleY = previousPoint.y + (point.y - previousPoint.y) / 2
        pathData += ` C${previousPoint.x} ${middleY} ${point.x} ${middleY} ${point.x} ${point.y}`
      })

      line.setAttribute('viewBox', `0 0 ${lineWidth} ${lineHeight}`)
      line.querySelectorAll<SVGPathElement>('path').forEach((timelinePath) => {
        timelinePath.setAttribute('d', pathData)
      })
    },

    animateNewItems() {
      const items = this.getAllItems()
      items.forEach((item: HTMLElement) => {
        if (item.dataset.gsapInit) return
        item.dataset.gsapInit = 'true'
        gsap.set(item, { opacity: 0, y: 40 })
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onLeaveBack: () => gsap.set(item, { opacity: 0, y: 40 }),
            },
          },
        )
      })
    },

    loadMore() {
      if (this.visibledCount < this.career.length) {
        const scrollAnchorInfo = this.getScrollAnchorInfo()
        this.visibledCount += 2
        this.$nextTick(() => {
          this.initLineAnimations()
          const savedY = window.pageYOffset
          ScrollTrigger.refresh()
          requestAnimationFrame(() => {
            this.restoreScrollAnchor(scrollAnchorInfo)
            window.scrollTo(0, Math.max(savedY, window.pageYOffset))
          })
        })
      }
    },
  },
}

export default CareerLogic
