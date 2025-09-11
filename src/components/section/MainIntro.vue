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
            <img src="@/assets/image/profile_img" alt="프로필 이미지" />
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
    /* About 소개 */
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
      font-size: 5rem;
      font-weight: 500;
      strong {
        font-size: 8rem;
        color: $white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: $point-color;
        font-weight: 700;
        margin: 2rem 0;
        display: inline-block;
      }
    }
    p {
      color: $dec;
      font-size: 2.8rem;
      font-weight: 200;
      margin: 4.5rem auto 5.6rem;
      line-height: 1.3;
    }

    .section__inner-content {
      display: flex;
      margin: 165px 0;
      li {
        width: calc(100% / 2);
      }
      .img-box {
        position: relative;
        display: flex;
        justify-content: flex-end;
        .circle {
          position: relative;
          width: 100%;
          max-width: 575px;
          height: 575px;
          background-color: #eaeaea;
          border-radius: 50%;
          overflow: hidden;

          img {
            position: absolute;
            left: 10%;
            max-width: 400px;
            top: 36px;
          }
        }

        .font-end-info-icon {
          position: absolute;
          z-index: 1;
          left: 25%;
          top: 30px;
          span {
            &::before {
              content: '';
              position: absolute;
              left: 20px;
              top: 22px;
              width: 15px;
              height: 15px;
              background-color: #0a9356;
              border-radius: 50%;
            }
          }
        }
        .dev-icon {
          width: 130px;
          height: 130px;
          display: inline-block;
          background: $gradient-blue;
          border-radius: 50%;
          position: absolute;
          top: -50px;
          right: -50px;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('@/assets/image/intro/dev_icon.png') no-repeat center center;
          }
        }
        .design-icon {
          width: 110px;
          height: 110px;
          display: inline-block;
          background: $gradient-purple-blue;
          border-radius: 50%;
          position: absolute;
          bottom: 15px;
          left: 30%;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('@/assets/image/intro/figma_icon.png') no-repeat center center;
          }
        }
      }
    }
  }
}
.glass {
  @include glass(220px, 60px, 4px, 180%, 2rem, #fff);
}
</style>
