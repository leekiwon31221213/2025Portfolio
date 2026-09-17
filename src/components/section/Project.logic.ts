import { useEffect, useMemo, type RefObject } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from '/assets/scss/components/section/Project.module.scss'

// 프로젝트 전환 시 스테이지 배경으로 순환 적용되는 색상 (인터랙션 전용, 프로젝트 데이터와 무관)
const STAGE_COLORS = ['#030712', '#0f1029', '#170f2e', '#081a33']

export type ProjectItem = {
  img: string
  alt: string
  name: string
  dec: string
  hashTag: string[]
  pcTxt?: string
  moTxt?: string
  tabletTxt?: string
  detail?: string
  link?: string
  google?: string
  apple?: string
  testAccount?: {
    id: string
    password: string
  }
  icon: string
}

const MIN_STAGE_TITLE_LENGTH = 120

// 짧은 프로젝트명도 마키 영역을 충분히 채우도록 반복 횟수 계산
export const createStageTitleText = (title?: string | null) => {
  const normalizedTitle = title?.trim()
  if (!normalizedTitle) return ''

  const titleLength = Array.from(normalizedTitle).length
  const repeatCount = Math.max(4, Math.ceil(MIN_STAGE_TITLE_LENGTH / titleLength))

  return `${normalizedTitle} `.repeat(repeatCount)
}

const ProjectLogic = (rootRef: RefObject<HTMLElement | null>) => {
  const project = useMemo<ProjectItem[]>(
    () => [
      {
        img: '/assets/image/project/stock_news.webp',
        alt: 'Stock News 주식 뉴스 다이제스트 서비스',
        name: 'Stock News(스톡 뉴스)',
        dec: '미국 주식 유니버스를 SEC 데이터로 시딩하고, 관심종목의 매일 뉴스 다이제스트를 이메일로 발송하는 서비스',
        hashTag: [
          'React',
          'TypeScript',
          '사이드 프로젝트',
          '디자인+프론트엔드',
          '로그인·회원가입 핵심기능 구현완료',
        ],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://stocknews-home.duckdns.org/',
        testAccount: {
          id: 'test@test.com',
          password: 'test1234',
        },
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/ai_risk.webp',
        alt: 'AI 위험성평가 업무 전산화 시스템',
        name: 'AI 위험성평가',
        dec: '사업장의 위험요인 등록부터 평가·개선까지 관리하고, AI가 위험도 등급을 예측하며 평가폼 분석 결과를 음성으로 안내하는 시스템',
        hashTag: ['React', 'TypeScript', 'ASP 마이그레이션'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://www.safelabs.or.kr/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/esafe_pr.webp',
        alt: '이세이프 회사소개',
        name: '이세이프 회사소개',
        dec: '회사소개 페이지 ',
        hashTag: ['리액트', '디자인', '기여도 100%'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'http://home.esafe.co.kr/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/gstt_app.webp',
        alt: 'GSTT 하이브리드앱',
        name: 'GSTT 하이브리드앱',
        dec: '외국인 근로자 통번역 강의 하이브리드앱',
        hashTag: ['브릿지 개발', '디자인', '플러터 앱 빌드', '앱 배포'],
        google: 'https://play.google.com/store/apps/details?id=kr.co.gstt.app',
        apple: '아직 미지원 앱입니다',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/gstt.webp',
        alt: 'GSTT',
        name: 'GSTT',
        dec: '외국인 근로자 통번역 강의 시스템',
        hashTag: ['외국인 근로자', '통번역', 'Rest API', '반응형'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        detail: '자세히 보기',
        link: 'https://gstt.co.kr/index.asp',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/pravang_app.webp',
        alt: '프라뱅 하이브리드앱',
        name: '프라뱅 하이브리드앱',
        dec: '웹기반으로 만들어진 하이브리드앱',
        hashTag: ['브릿지 개발', '기획', '디자인', '앱 등록'],
        google: 'https://play.google.com/store/apps/details?id=com.pravang.mobile.prod&hl=ko',
        apple: 'https://apps.apple.com/kr/app/%ED%94%84%EB%9D%BC%EB%B1%85/id6749530870',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/pravang_web.webp',
        alt: '프라뱅 반응형 웹',
        name: '프라뱅 반응형 웹',
        dec: 'Java 환경 블록체인 및 가상화폐 거래소 유지보수',
        hashTag: ['Java 환경', '블록체인', 'Rest API', '반응형'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://www.pravang.com/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/muskdas.webp',
        alt: '무스크다스',
        name: '무스크다스',
        dec: '금거래소 ',
        hashTag: ['카페24', '반응형', '쇼핑몰'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://modunet1.cafe24.com/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/coincident.webp',
        alt: 'coincident 기업페이지',
        name: 'coincident 회사 소개페이지',
        dec: '기존 프로젝트 작업 후 Nuxt 구조로 마이그레이션 진행',
        hashTag: ['Nuxt', '마이그레이션', '외주작업'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://coincidentventuresnuxttest.netlify.app/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/time.webp',
        alt: '시간을 건너는 편지',
        name: '시간을 건너는 편지',
        dec: '대학교 행사 이벤트 랜딩페이지',
        hashTag: ['하드코딩', '외주작업', '반응형', '비밀번호 1234'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://leekiwon31221213.github.io/time_project_complete/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/vpn.webp',
        alt: 'VPN 구독 서비스',
        name: 'VPN 구독 서비스 ',
        dec: 'VPN 구독 서비스 프론트 개발',
        hashTag: ['24 페이지', '제작기간 2주', '반응형', '외주작업'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://cute0239.dothome.co.kr/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/daki.webp',
        alt: '다키스토어',
        name: '다키스토어',
        dec: '카페 24 쇼핑몰 유지보수 및 개발',
        hashTag: ['카페24', '쇼핑몰', '유지보수'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'https://vintnewyorkstore.com/index.html',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/lemon.webp',
        alt: '레몬 앱소개 페이지',
        name: '레몬 앱소개 페이지',
        dec: '웹기반으로 만들어진 하이브리드 앱',
        hashTag: ['반응형', '하이브리드 앱 소개'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'http://cute0237.dothome.co.kr/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/jimsa.webp',
        alt: '짐싸 이벤트 랜딩페이지',
        name: '짐싸 이벤트 랜딩페이지',
        dec: '반응형 이벤트 페이지',
        hashTag: ['에이전시', '웹 퍼블리싱', '4일', '이벤트랜딩'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'http://cute0231.dothome.co.kr/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/bn.webp',
        alt: '비엔시스템 서비스 페이지',
        name: '비엔시스템 서비스 리뉴얼',
        dec: '자사 서비스 페이지 리뉴얼',
        hashTag: ['반응형', '에이전시', '디자인', '리뉴얼'],
        pcTxt: 'pc View',
        moTxt: 'mo View',
        tabletTxt: 'tablet View',
        link: 'http://cute0232.dothome.co.kr/',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
    ],
    [],
  )

  const openMoWin = (url?: string) => {
    window.open(url, 'win', 'scrollbars=no,width=450,height=900,top=100,left=100')
  }
  const openTabletWin = (url?: string) => {
    window.open(url, 'win', 'scrollbars=no,width=800,height=1200,top=100,left=100')
  }
  const openAppleAlert = (message?: string) => {
    alert(message)
  }

  // 프로젝트 캔버스: 스크롤 진행에 따라 프로젝트가 하나씩 전시되듯 전환되는 GSAP ScrollTrigger 인터랙션
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const root = rootRef.current
    if (!root) return

    const cardEls = Array.from(root.querySelectorAll<HTMLElement>(`.${styles['project-card']}`))
    // 카드별 제목(마스크 안 h3)과 설명/버튼/기술스택 fade 대상들을 미리 캐싱
    const cardMeta = cardEls.map((card) => {
      const titleEl = card.querySelector<HTMLElement>(`.${styles['project-title-mask']} h3`)
      const descEl = card.querySelector<HTMLElement>(`.${styles['project-desc']}`)
      const btnEls = Array.from(card.querySelectorAll<HTMLElement>(`.${styles['project-btn']}`))
      // stack-label(해쉬태그)은 인터랙션 미적용 고정 텍스트
      const tagEls = Array.from(card.querySelectorAll<HTMLElement>(`.${styles['hashtags']} li`))
      const fadeEls = [descEl, ...btnEls, ...tagEls].filter(Boolean) as HTMLElement[]
      return { titleEl, fadeEls }
    })
    const canvasEl = root.querySelector<HTMLElement>(`.${styles['project-canvas']}`)
    const stageEl = root.querySelector<HTMLElement>(`.${styles['project-stage']}`)
    const marqueeEl = root.querySelector<HTMLElement>(`.${styles['stage-marquee']}`)
    const progressFillEl = root.querySelector<HTMLElement>(`.${styles['stage-progress-fill']}`)
    const orbitEl = root.querySelector<HTMLElement>(`.${styles['stage-orbit']}`)

    if (!canvasEl || !stageEl || cardEls.length === 0) return

    const marqueeMedia = gsap.matchMedia()
    let projectImageObserver: IntersectionObserver | null = null

    const updateStageTitle = (title?: string | null) => {
      if (!marqueeEl || !title) return
      marqueeEl.textContent = createStageTitleText(title)
    }

    // 스티키 스테이지 안에서 프로젝트가 전시되듯 전환된다 (모든 뷰포트 공통)
    const buildCanvasInteractions = () => {
      let activeIndex = 0
      const xDistance = Math.min(170, window.innerWidth * 0.14)

      // 현재 이미지와 다음 이미지만 먼저 불러와 전환 시 빈 화면을 방지한다
      const prepareProjectImage = (projectIndex: number) => {
        const image = cardEls[projectIndex]?.querySelector<HTMLImageElement>('img')
        if (image) {
          image.loading = 'eager'
          image.fetchPriority = 'high'
        }
      }

      projectImageObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return

          prepareProjectImage(0)
          prepareProjectImage(1)
          projectImageObserver?.disconnect()
        },
        { rootMargin: '1200px 0px' },
      )
      projectImageObserver.observe(root)
      gsap.set(cardEls, { autoAlpha: 0, zIndex: 1 })
      gsap.set(cardEls[0], { autoAlpha: 1, zIndex: 2 })
      gsap.set(stageEl, { backgroundColor: STAGE_COLORS[0] })
      if (progressFillEl) gsap.set(progressFillEl, { scaleX: 0 })
      updateStageTitle(cardMeta[0]?.titleEl?.textContent)

      // 스크롤 방향에 따라 다음/이전 프로젝트 이미지가 좌우로 진입하며 중앙 정렬된다
      const activateCard = (nextIndex: number) => {
        if (nextIndex === activeIndex) return
        prepareProjectImage(nextIndex)
        prepareProjectImage(nextIndex + 1)
        prepareProjectImage(nextIndex - 1)
        const outgoing = cardEls[activeIndex]
        const incoming = cardEls[nextIndex]
        const outgoingImg = outgoing.querySelector<HTMLElement>(`.${styles['project-img']}`)
        const incomingImg = incoming.querySelector<HTMLElement>(`.${styles['project-img']}`)
        const outgoingMeta = cardMeta[activeIndex]
        const incomingMeta = cardMeta[nextIndex]
        updateStageTitle(incomingMeta.titleEl?.textContent)

        // 방향이 바뀔 때 이전 tween과 충돌하지 않도록 정리
        gsap.killTweensOf(
          [
            outgoingImg,
            incomingImg,
            outgoingMeta.titleEl,
            incomingMeta.titleEl,
            ...outgoingMeta.fadeEls,
            ...incomingMeta.fadeEls,
          ].filter(Boolean) as HTMLElement[],
        )
        gsap.killTweensOf(cardEls)
        gsap.set(
          cardEls.filter((card) => card !== incoming && card !== outgoing),
          {
            autoAlpha: 0,
            zIndex: 1,
          },
        )

        // 아래로 스크롤하면 오른쪽, 위로 스크롤하면 왼쪽에서 진입한다
        const startX = nextIndex > activeIndex ? xDistance : -xDistance

        gsap.set(incoming, { zIndex: 2 })
        gsap.set(outgoing, { zIndex: 1 })
        gsap.set(incoming, { autoAlpha: 1 })
        gsap.to(outgoing, { autoAlpha: 0, duration: 0.4, ease: 'power1.out' })

        if (incomingImg) {
          gsap.fromTo(
            incomingImg,
            { x: startX, scale: 0.97 },
            { x: 0, scale: 1, duration: 0.8, ease: 'power4.out' },
          )
        }

        // 제목 전환: 기존 제목이 위로 빠지고, 새 제목이 아래에서 올라온다
        const titleTimeline = gsap.timeline()
        if (outgoingMeta.titleEl) {
          titleTimeline.to(
            outgoingMeta.titleEl,
            { yPercent: -120, duration: 0.5, ease: 'power4.out' },
            0,
          )
        }
        if (incomingMeta.titleEl) {
          titleTimeline
            .set(incomingMeta.titleEl, { yPercent: 120 }, 0)
            .to(incomingMeta.titleEl, { yPercent: 0, duration: 0.6, ease: 'power4.out' }, 0.15)
        }

        // 설명 / 기술스택 전환: 살짝 fade-up + stagger
        if (outgoingMeta.fadeEls.length) {
          gsap.to(outgoingMeta.fadeEls, { opacity: 0, duration: 0.25, ease: 'power1.out' })
        }
        if (incomingMeta.fadeEls.length) {
          gsap.fromTo(
            incomingMeta.fadeEls,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              stagger: 0.06,
              delay: 0.2,
            },
          )
        }

        // 프로젝트 전환에 맞춘 배경 컬러 transition
        gsap.to(stageEl, {
          backgroundColor: STAGE_COLORS[nextIndex % STAGE_COLORS.length],
          duration: 0.7,
          ease: 'power1.out',
          overwrite: 'auto',
        })

        activeIndex = nextIndex
      }

      // 캔버스 높이와 같은 기준으로 프로젝트 인덱스를 계산한다
      ScrollTrigger.create({
        trigger: canvasEl,
        start: 'top top',
        end: 'bottom bottom',
        refreshPriority: -1,
        scrub: 1,
        onUpdate: (self) => {
          const index = Math.min(cardEls.length - 1, Math.floor(self.progress * cardEls.length))
          if (index !== activeIndex) activateCard(index)
          if (progressFillEl) gsap.set(progressFillEl, { scaleX: self.progress })
          if (orbitEl) gsap.set(orbitEl, { rotation: self.progress * 720 })
        },
      })

      // 배경 대형 타이포가 스크롤과 반대 방향으로 천천히 이동
      if (marqueeEl) {
        marqueeMedia.add('(min-width: 1025px)', () => {
          gsap.set(marqueeEl, { '--stage-marquee-x': '0%', '--stage-marquee-y': '0%' })
          gsap.to(marqueeEl, {
            '--stage-marquee-x': '-24%',
            ease: 'none',
            scrollTrigger: {
              trigger: canvasEl,
              start: 'top top',
              end: 'bottom bottom',
              refreshPriority: -1,
              scrub: 1.2,
            },
          })
        })

        marqueeMedia.add('(max-width: 1024px)', () => {
          gsap.set(marqueeEl, { '--stage-marquee-x': '0%', '--stage-marquee-y': '0vh' })
          gsap.to(marqueeEl, {
            '--stage-marquee-y': '24vh',
            ease: 'none',
            scrollTrigger: {
              trigger: canvasEl,
              start: 'top top',
              end: 'bottom bottom',
              refreshPriority: -1,
              scrub: 1.2,
            },
          })
        })
      }
    }

    buildCanvasInteractions()

    ScrollTrigger.refresh()

    // 웹폰트 로드 등으로 레이아웃이 늦게 확정되는 경우를 대비한 위치 재계산
    let cancelled = false
    document.fonts?.ready
      .then(() => {
        if (!cancelled) ScrollTrigger.refresh()
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
      projectImageObserver?.disconnect()
      marqueeMedia.revert()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && root.contains(trigger.trigger)) trigger.kill()
      })
    }
  }, [rootRef])

  return {
    project,
    openMoWin,
    openTabletWin,
    openAppleAlert,
  }
}

export default ProjectLogic
