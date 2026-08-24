import { useEffect, useMemo, useRef, type MouseEvent, type PointerEvent, type WheelEvent } from 'react'

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
  icon: string
}

const ProjectLogic = () => {
  const animationFrameId = useRef(0)
  const galleryPosition = useRef(0)
  const galleryVelocity = useRef(-0.45)
  const galleryAutoSpeed = useRef(-0.45)
  const galleryLoopWidth = useRef(0)
  const isGalleryDragging = useRef(false)
  const isInteractivePress = useRef(false)
  const lastPointerX = useRef(0)
  const lastPointerTime = useRef(0)
  const dragDistance = useRef(0)
  const wasGalleryDragged = useRef(false)
  const galleryTrack = useRef<HTMLUListElement | null>(null)
  const galleryViewport = useRef<HTMLElement | null>(null)

  const project = useMemo<ProjectItem[]>(
    () => [
      {
        img: '/assets/image/project/esafe_pr.png',
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
        img: '/assets/image/project/gstt_app.png',
        alt: 'GSTT 하이브리드앱',
        name: 'GSTT 하이브리드앱',
        dec: '외국인 근로자 통번역 강의 하이브리드앱',
        hashTag: ['브릿지 개발', '디자인', '플러터 앱 빌드', '앱 배포'],
        google: 'https://play.google.com/store/apps/details?id=kr.co.gstt.app',
        apple: '아직 미지원 앱입니다',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/gstt.png',
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
        img: '/assets/image/project/pravang_app.png',
        alt: '프라뱅 하이브리드앱',
        name: '프라뱅 하이브리드앱',
        dec: '웹기반으로 만들어진 하이브리드앱',
        hashTag: ['브릿지 개발', '기획', '디자인', '앱 등록'],
        google: 'https://play.google.com/store/apps/details?id=com.pravang.mobile.prod&hl=ko',
        apple: 'https://apps.apple.com/kr/app/%ED%94%84%EB%9D%BC%EB%B1%85/id6749530870',
        icon: '/assets/image/project/arrow_right_icon.svg',
      },
      {
        img: '/assets/image/project/pravang_web.jpg',
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
        img: '/assets/image/project/muskdas.png',
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
        img: '/assets/image/project/coincident.png',
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
        img: '/assets/image/project/time.png',
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
        img: '/assets/image/project/vpn.png',
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
        img: '/assets/image/project/daki.jpg',
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
        img: '/assets/image/project/lemon.jpg',
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
        img: '/assets/image/project/jimsa.jpg',
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
        img: '/assets/image/project/bn.png',
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

  // 원본 프로젝트 복제로 무한 목록 생성
  const loopProjects = useMemo(() => {
    const indexedProjects = project.map((projectItem, originalIndex) => ({
      project: projectItem,
      originalIndex,
    }))
    return [...indexedProjects, ...indexedProjects]
  }, [project])

  // 원본 카드 너비 안에서 트랙 위치 반복
  const normalizeGalleryPosition = () => {
    if (galleryLoopWidth.current <= 0) return
    while (galleryPosition.current <= -galleryLoopWidth.current) {
      galleryPosition.current += galleryLoopWidth.current
    }
    while (galleryPosition.current > 0) {
      galleryPosition.current -= galleryLoopWidth.current
    }
  }

  // 원본 카드 묶음 너비 저장
  const measureGallery = () => {
    const track = galleryTrack.current
    if (!track) return

    const previousLoopWidth = galleryLoopWidth.current
    const firstCard = track.children[0] as HTMLElement | undefined
    const firstCopiedCard = track.children[project.length] as HTMLElement | undefined
    const nextLoopWidth =
      firstCard && firstCopiedCard ? firstCopiedCard.offsetLeft - firstCard.offsetLeft : 0

    if (previousLoopWidth > 0 && nextLoopWidth > 0) {
      galleryPosition.current = (galleryPosition.current / previousLoopWidth) * nextLoopWidth
    }
    galleryLoopWidth.current = nextLoopWidth
    normalizeGalleryPosition()
  }

  // 단일 프레임 루프로 자동 이동과 관성 처리
  const updateGallery = () => {
    const track = galleryTrack.current
    if (!track) return

    if (!isGalleryDragging.current) {
      galleryVelocity.current +=
        (galleryAutoSpeed.current - galleryVelocity.current) * 0.025
      galleryPosition.current += galleryVelocity.current
    }
    normalizeGalleryPosition()
    track.style.transform = `translate3d(${galleryPosition.current}px, 0, 0)`
    animationFrameId.current = requestAnimationFrame(updateGallery)
  }

  // 갤러리 너비 계산 후 애니메이션 시작
  const initInfiniteGallery = () => {
    measureGallery()
    animationFrameId.current = requestAnimationFrame(updateGallery)
  }

  // 세로 휠 방향을 가로 이동 속도에 반영
  const handleWheel = (event: WheelEvent<HTMLElement>) => {
    const wheelAmount =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    const wheelInfluence = Math.max(-0.45, Math.min(0.45, wheelAmount * 0.002))
    galleryVelocity.current -= wheelInfluence
    galleryVelocity.current = Math.max(-1.8, Math.min(1.8, galleryVelocity.current))
  }

  // 마우스와 터치 드래그 시작
  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return
    wasGalleryDragged.current = false
    const target = event.target as HTMLElement

    if (target.closest('a, button')) {
      isInteractivePress.current = true
      isGalleryDragging.current = true
      galleryVelocity.current = 0
      return
    }

    galleryViewport.current?.setPointerCapture(event.pointerId)
    isGalleryDragging.current = true
    lastPointerX.current = event.clientX
    lastPointerTime.current = performance.now()
    dragDistance.current = 0
    galleryVelocity.current = 0
  }

  // 포인터 이동 거리만큼 트랙 이동
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!isGalleryDragging.current || isInteractivePress.current) return
    const now = performance.now()
    const moveX = event.clientX - lastPointerX.current
    const elapsedTime = Math.max(1, now - lastPointerTime.current)

    galleryPosition.current += moveX
    galleryVelocity.current = Math.max(-12, Math.min(12, (moveX / elapsedTime) * 16))
    dragDistance.current += Math.abs(moveX)
    lastPointerX.current = event.clientX
    lastPointerTime.current = now
    wasGalleryDragged.current = dragDistance.current > 8
  }

  // 드래그 종료 후 자동 이동 속도 복원
  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!isGalleryDragging.current) return
    if (isInteractivePress.current) {
      isInteractivePress.current = false
      isGalleryDragging.current = false
      return
    }

    if (galleryViewport.current?.hasPointerCapture(event.pointerId)) {
      galleryViewport.current.releasePointerCapture(event.pointerId)
    }
    isGalleryDragging.current = false
  }

  // 드래그 직후 링크 오작동 방지
  const handleGalleryClick = (event: MouseEvent<HTMLElement>) => {
    if (!wasGalleryDragged.current) return
    event.preventDefault()
    event.stopPropagation()
    wasGalleryDragged.current = false
  }

  const openMoWin = (url?: string) => {
    window.open(url, 'win', 'scrollbars=no,width=450,height=900,top=100,left=100')
  }
  const openTabletWin = (url?: string) => {
    window.open(url, 'win', 'scrollbars=no,width=800,height=1200,top=100,left=100')
  }
  const openAppleAlert = (message?: string) => {
    alert(message)
  }

  useEffect(() => {
    const frameId = requestAnimationFrame(initInfiniteGallery)
    window.addEventListener('resize', measureGallery)
    return () => {
      cancelAnimationFrame(frameId)
      cancelAnimationFrame(animationFrameId.current)
      window.removeEventListener('resize', measureGallery)
    }
  }, [])

  return {
    loopProjects,
    galleryTrack,
    galleryViewport,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleGalleryClick,
    openMoWin,
    openTabletWin,
    openAppleAlert,
  }
}

export default ProjectLogic
