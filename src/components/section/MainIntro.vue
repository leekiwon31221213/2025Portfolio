<template>
  <section class="section1" id="main-intro">
    <div class="section__inner">
      <ul class="section__inner-content">
        <li>
          <h2 v-html="mainIntro.title"></h2>

          <p>{{ mainIntro.description }}</p>

          <div class="demo-wrap">
            <button class="glass" lang="en" @click="scrollToAbout">About Me</button>
          </div>
        </li>

        <li class="img-box">
          <div class="font-end-info-icon glass">
            <span>Frontend Dev</span>
          </div>
          <div class="dev-icon"></div>
          <div class="circle">
            <img src="/assets/image/profile_img" alt="프로필 이미지" />
          </div>

          <div class="design-icon"></div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mainIntro: {
        title: `
            창의적이고 감각적인 <br />
            <strong>프론트엔드 개발자</strong> <br />
            이기원 입니다.
        `,
        description: `
          웹퍼블리셔에서 시작하여 사용자 중심의 인터페이스를 설계하는 프론트엔드 개발자로 성장하고 있습니다.
          `,
      },
    }
  },
  methods: {
    scrollToAbout() {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>
<style lang="scss">
.section1 {
  .section__inner {
    width: 90%;
    margin: 0 auto;
    h2 {
      font-size: clamp(3rem, 2.93vw, 5rem);
      font-weight: 500;
      @media (max-width: 1024px) {
        text-align: center;
        font-size: clamp(2.4rem, 3.125vw, 3rem);
      }
      @media (max-width: 768px) {
        font-size: clamp(2rem, 3.636vw, 2.4rem);
      }
      strong {
        font-size: clamp(5rem, 4.883vw, 8rem);
        color: $white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: $point-color;
        font-weight: 700;
        margin: 2rem 0;
        display: inline-block;
        @media (max-width: 1024px) {
          font-size: clamp(3rem, 3.906vw, 5rem);
        }
        @media (max-width: 768px) {
          font-size: clamp(2.4rem, 4.364vw, 3rem);
        }
      }
    }
    p {
      color: $dec;
      font-size: clamp(2.2rem, 2.148vw, 2.8rem);
      font-weight: 200;
      margin: 4.5rem auto 5.6rem;
      line-height: 1.3;
      @media (max-width: 1024px) {
        font-size: clamp(1.8rem, 2.344vw, 2.2rem);
        text-align: center;
      }
      @media (max-width: 768px) {
        font-size: clamp(1.6rem, 2.909vw, 1.8rem);
      }
    }

    .section__inner-content {
      display: flex;
      margin: 165px 0;
      justify-content: space-between;
      @media (max-width: 1024px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: unset;
      }
      @media (max-width: 768px) {
        margin: clamp(100px, 18.182vw, 165px) 0;
      }
      li {
        &:first-child {
          @media (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }
      .img-box {
        position: relative;
        display: flex;
        @media (max-width: 1024px) {
          display: unset;
          margin-bottom: 5rem;
        }
        .circle {
          position: relative;
          width: clamp(325px, 31.738vw, 450px);
          height: clamp(325px, 31.738vw, 450px);
          background-color: #eaeaea;
          border-radius: 50%;
          overflow: hidden;
          @media (max-width: 768px) {
            width: clamp(250px, 45.455vw, 325px);
            height: clamp(250px, 45.455vw, 325px);
          }
          img {
            position: absolute;
            left: clamp(58px, 5.664vw, 65px);
            max-width: clamp(200px, 19.531vw, 295px);
            top: 55px;
            @media (max-width: 768px) {
              left: clamp(30px, 5.455vw, 58px);
              max-width: clamp(170px, 30.909vw, 200px);
              top: clamp(30px, 5.455vw, 55px);
            }
          }
        }

        .font-end-info-icon {
          position: relative;
          z-index: 1;
          left: clamp(90px, 8.789vw, 130px);
          top: 30px;
          @media (max-width: 1024px) {
            left: -50px;
          }
          &.glass {
            font-size: clamp(1.6rem, 1.563vw, 2rem);
            width: clamp(170px, 16.602vw, 220px);
            height: clamp(40px, 3.906vw, 60px);
            @media (max-width: 550px) {
              font-size: clamp(1.4rem, 3.889vw, 1.6rem);
              width: clamp(150px, 41.667vw, 170px);
            }
          }
          span {
            &::before {
              content: '';
              position: absolute;
              left: 20px;
              top: clamp(13px, 1.27vw, 20px);
              width: clamp(11px, 1.074vw, 15px);
              height: clamp(11px, 1.074vw, 15px);
              background-color: #0a9356;
              border-radius: 50%;
              @media (max-width: 550px) {
                left: clamp(13px, 3.611vw, 20px);
              }
            }
          }
        }
        .dev-icon {
          width: clamp(80px, 7.813vw, 100px);
          height: clamp(80px, 7.813vw, 100px);
          display: inline-block;
          background: $gradient-blue;
          border-radius: 50%;
          position: absolute;
          top: -50px;
          right: -25px;
          animation: devIcon 2s ease-in-out forwards infinite;
          @media (max-width: 1024px) {
            top: 0;
          }
          @media (max-width: 768px) {
            width: clamp(55px, 10vw, 65px);
            height: clamp(55px, 10vw, 65px);
            right: clamp(1px, 0.182vw, -25px);
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/assets/image/intro/dev_icon.png') no-repeat center center;
            background-size: 60%;
          }
        }
        .design-icon {
          width: clamp(65px, 6.348vw, 85px);
          height: clamp(65px, 6.348vw, 85px);
          display: inline-block;
          background: $gradient-purple-blue;
          border-radius: 50%;
          position: absolute;
          bottom: 40px;
          left: 205px;
          animation: designIcon 2s ease-in-out forwards infinite;
          @media (max-width: 1024px) {
            left: -50px;
          }
          @media (max-width: 768px) {
            width: clamp(40px, 7.273vw, 65px);
            height: clamp(40px, 7.273vw, 65px);
            bottom: clamp(1px, 0.182vw, 40px);
            left: -18px;
          }
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/assets/image/intro/figma_icon.png') no-repeat center center;
            background-size: 40%;
          }
        }
      }
    }
  }
}
.glass {
  @include glass(220px, 60px, 4px, 180%, 2rem, #fff);
  @media (max-width: 768px) {
    width: clamp(180px, 32.727vw, 220px);
    height: clamp(45px, 8.182vw, 60px);
    font-size: clamp(1.6rem, 2.909vw, 2rem);
  }
}

@keyframes devIcon {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@keyframes designIcon {
  0% {
    transform: translateY(-7px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-7px);
  }
}
</style>
