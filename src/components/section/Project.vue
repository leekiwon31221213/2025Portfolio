<template>
  <section id="project" class="section5">
    <h1>Project</h1>
    <p class="dec">다양한 프로젝트를 경험하며 쌓아온 결과물을 소개합니다.</p>

    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      id="project-swiper"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        550: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }"
    >
      <SwiperSlide v-for="(project, index) in project" :key="index">
        <ul class="project-list">
          <li>
            <img :src="project.img" :alt="project.alt" class="project-img" />
            <h3>{{ project.name }}</h3>
            <p>{{ project.dec }}</p>
            <div class="hashtags">
              <span v-for="(tag, tagIndex) in project.hashTag" :key="tagIndex">#{{ tag }}</span>
            </div>

            <div class="btn-box" v-if="project.name === '프라뱅 하이브리드앱'">
              <a :href="project.google || '#'" class="project-btn glass" target="_blank">
                google Play
                <img :src="project.icon" alt="arrow icon" class="btn-icon" />
              </a>
              <a :href="project.apple || '#'" class="project-btn glass" target="_blank">
                apple Store
                <img :src="project.icon" alt="arrow icon" class="btn-icon" />
              </a>
            </div>
            <div class="btn-box" v-else>
              <a :href="project.link || '#'" class="project-btn glass" target="_blank">
                {{ project.pcTxt }}
                <img :src="project.icon" alt="arrow icon" class="btn-icon" />
              </a>

              <button type="button" class="project-btn glass" @click="openMoWin(project.link)">
                {{ project.moTxt }}
                <img :src="project.icon" alt="arrow icon" class="btn-icon" />
              </button>

              <button type="button" class="project-btn glass" @click="openTabletWin(project.link)">
                {{ project.tabletTxt }}
                <img :src="project.icon" alt="arrow icon" class="btn-icon" />
              </button>
            </div>
          </li>
        </ul>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
// Swiper 모듈 및 컴포넌트 가져오기
import { Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Swiper 스타일 가져오기
import 'swiper/css'

export default {
  data() {
    return {
      project: [
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
          link: '',
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
          link: 'https://dakistore.co.kr/',
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
          link: '',
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
  },
  setup() {
    const onSwiper = (swiper) => {}
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, A11y],
    }
  },
  methods: {
    openMoWin(url) {
      const features = 'scrollbars=no,width=450,height=900,top=100,left=100'
      window.open(url, 'win', features)
    },
    openTabletWin(url) {
      const features = 'scrollbars=no,width=800,height=1200,top=100,left=100'
      window.open(url, 'win', features)
    },
  },
}
</script>

<style lang="scss">
#project {
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
  }
  .dec {
    color: $dec;
    text-align: center;
    font-size: clamp(1.6rem, 1.563vw, 1.8rem);
    width: 90%;
    margin: 0 auto 7rem auto;
    @media (max-width: 550px) {
      font-size: clamp(1.4rem, 3.889vw, 1.6rem);
    }
  }
  #project-swiper {
    width: 90%;
    margin: 0 auto 14rem;
    .project-img {
      width: 50rem;
      border-radius: 2rem;
      @media (max-width: 1024px) {
        width: clamp(40rem, 52.083vw, 50rem);
      }

      @media (max-width: 768px) {
        width: clamp(33rem, 60vw, 40rem);
      }
      @media (max-width: 550px) {
        width: clamp(29rem, 80.556vw, 33rem);
      }
    }

    .project-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      width: 580px;
      @media (max-width: 1024px) {
        width: unset;
      }
      @media (max-width: 768px) {
        width: 90%;
      }
      @media (max-width: 550px) {
        width: 100%;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        @media (max-width: 550px) {
          align-items: center;
        }

        h3 {
          margin: 4rem 0 1rem;
          font-size: clamp(1.8rem, 1.758vw, 2.1rem);
          font-weight: 600;
        }
        p {
          color: $dec;
          font-weight: 400;
          font-size: clamp(1.6rem, 1.563vw, 1.8rem);
          @media (max-width: 550px) {
            text-align: center;
          }
        }
        .hashtags {
          display: flex;
          gap: 1rem;
          margin: 2rem 0 3rem;
          @media (max-width: 768px) {
            flex-direction: column;
            width: 90%;
          }

          span {
            border: 1px solid $border;
            padding: 1rem;
            border-radius: 6px;
            font-size: 1.5rem;
          }
        }
        .btn-box {
          display: flex;
          width: 100%;
          @media (max-width: 550px) {
            justify-content: center;
          }
        }
        .project-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #fff;
          width: calc(100% / 3);
          &.glass {
            width: fit-content;
            height: 40px;
            line-height: 40px;
            font-size: 1.5rem;
            margin-right: 1rem;
            @media (max-width: 1024px) {
              font-size: clamp(1.3rem, 2.364vw, 1.5rem);
            }
            @media (max-width: 768px) {
              padding: 0.9rem clamp(1rem, 1.818vw, 1.6rem);
            }
          }
        }

        .btn-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
  /* 스와이프 전환 이징을 더 부드럽게 */
  #project-swiper .swiper-wrapper {
    /* //부드러운 커스텀 이징(오버슈트 없이 자연) */
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) !important;
  }

  .swiper-slide {
    @media (min-width: 1025px) {
      width: clamp(520px, 50.781vw, 560px) !important;
    }
    @media (max-width: 1024px) {
      width: clamp(430px, 55.99vw, 520px) !important;
    }
    @media (max-width: 768px) {
      width: clamp(365px, 66.364vw, 430px) !important;
    }
    @media (max-width: 550px) {
      width: 100% !important;
    }
  }
}
</style>
