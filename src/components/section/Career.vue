<template>
  <section id="education" class="section3">
    <h1>Education</h1>

    <ul class="education__inner">
      <li v-for="(education, index) in education" :key="index" class="glass">
        <div class="img-box">
          <img :src="education.logo" :alt="education.alt" />
        </div>
        <div class="educatio-business-box">
          <h3>{{ education.edu }}</h3>
          <p>{{ education.span }}</p>
        </div>
        <p class="team-txt">{{ education.study }}</p>
      </li>
    </ul>
  </section>

  <section id="career" class="section4">
    <h1>Career</h1>

    <ul class="career__inner">
      <li v-for="(career, index) in displayedCareers" :key="index" class="glass">
        <div class="img-box" :class="career.alt === '증산클라비어' ? 'jc' : ''">
          <img :src="career.logo" :alt="career.alt" />
        </div>
        <div class="company-business-box">
          <h3>{{ career.companyName }}</h3>
          <p>{{ career.business }}</p>
        </div>
        <p class="team-txt">{{ career.team }}</p>
        <p>
          {{ career.work1 }} <br />
          {{ career.work2 }}
        </p>
      </li>
    </ul>

    <div class="btn-box">
      <button type="button" @click="loadMore()" id="more-btn">
        더 보기

        <FontAwesomeIcon :icon="['fas', 'angle-down']" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visibledCount: 2,
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
          logo: '/assets/image/career/pravang_logo.jpg',
          alt: '프라뱅 로고',
          companyName: '(주)프라뱅',
          business: '블록체인 및 가상화폐 거래소 전문 개발사',
          team: 'IT개발 · 주임/팀원 (2024.05 ~ 재직 중)',
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
    displayedCareers() {
      return this.career.slice(0, this.visibledCount)
    },
  },

  methods: {
    loadMore() {
      // console.log('더 보기 클릭됨')
      if (this.visibledCount < this.career.length) {
        this.visibledCount += 2
      }
    },
  },
}
</script>

<style lang="scss">
#career,
#education {
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
  .career__inner,
  .education__inner {
    position: relative;
    width: 90%;
    margin: 0 auto 120px;

    &::before {
      content: '';
      display: inline-block;
      width: 0.1rem;
      height: 100%;
      background: linear-gradient(0deg, #818cf8, #c084fc, #60a5fa);
      position: absolute;
      top: 20px;
      left: -23px;
    }

    li {
      p {
        color: $dec;
        font-size: clamp(1.6rem, 1.563vw, 1.8rem);
        font-weight: 400;
        line-height: 1.4;
      }
      .img-box {
        img {
          border-radius: 6px;
          @media (max-width: 1024px) {
            width: clamp(40px, 5.208vw, 59px);
          }
        }
        &.jc {
          img {
            width: 59px;
            @media (max-width: 1024px) {
              width: clamp(40px, 5.208vw, 59px);
            }
          }
        }
      }
      .company-business-box,
      .educatio-business-box {
        display: flex;
        h3 {
          font-size: clamp(1.9rem, 1.855vw, 2.1rem);
          font-weight: 600;
        }
        p {
          margin-left: 1rem;
        }
        margin: 1.2rem 0 1rem 0;
      }

      $circleColor: $icon-bg1, $icon-bg2, $icon-bg3, $icon-bg4, $icon-bg5, $icon-bg6;

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          @include glass(100%, 100%, 4px, 180%, 2rem, #fff);
          border-radius: 30px;
          align-items: flex-start;
          justify-content: unset;
          flex-direction: column;
          margin: 2rem;
          padding: 4rem 3rem;

          &::before {
            content: '';
            display: inline-block;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: nth($circleColor, $i);
            position: absolute;
            left: -55px;
            top: 0;
            @media (max-width: 1024px) {
              width: 20px;
              height: 20px;
              left: -52px;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .team-txt {
        margin-bottom: 1.5rem;
      }
    }
  }
  .btn-box {
    width: 90%;
    display: flex;
    justify-content: center;
    margin: 0 auto 120px;
    #more-btn {
      color: #fff;
      max-width: 225px;
      width: 100%;
      padding: 2rem;
      border-radius: 3rem;
      border: 1px solid $border;
      font-size: 1.7rem;
      transition: 0.3s ease-in-out;
      font-weight: 600;

      &:hover {
        border: unset;
        background-color: #fff;
        color: #333;
        .fa-angle-down {
          animation: arrow_down 1s infinite ease-in-out;
        }
      }
    }
  }
}
#education {
  .education__inner {
    margin: 0 auto;
    .img-box {
      img {
        width: 59px;
      }
    }
  }
}

@keyframes arrow_down {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(2.5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
