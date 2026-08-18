import type { ComponentOptions } from 'vue'

import { Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { RouterLink } from 'vue-router'

import 'swiper/css'

const ProjectLogic: ComponentOptions = {
  data() {
    return {
      modules: [Pagination, A11y],
      project: [
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
          dec: 'Vue 프로젝트 작업 후 Nuxt  구조로 마이그레이션 진행',
          hashTag: ['Vue', 'Nuxt', '마이그레이션', '외주작업'],
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
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  methods: {
    onSwiper(swiper: unknown) {},
    onSlideChange() {},
    openMoWin(url?: string) {
      const features = 'scrollbars=no,width=450,height=900,top=100,left=100'
      window.open(url, 'win', features)
    },
    openTabletWin(url?: string) {
      const features = 'scrollbars=no,width=800,height=1200,top=100,left=100'
      window.open(url, 'win', features)
    },
    openAppleAlert(message?: string) {
      alert(message)
    },
  },
}

export default ProjectLogic
