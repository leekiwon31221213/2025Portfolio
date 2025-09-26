<template>
  <footer id="footer" class="footer-wrap">
    <div class="footer__inner">
      <img src="/src/assets/image/profile_img.png" alt="프로필 이미지" />
      <ul>
        <li class="title">{{ footer.title }}</li>
        <li v-html="footer.dec" class="dec"></li>
        <li class="dec">{{ footer.copy }}</li>
        <li class="btn-box">
          <a class="glass" href="mailto:cute02364@gmail.com">이메일 보내기</a>
          <a class="glass" href="tel:01068650947">전화하기</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        title: '역량 있는 웹퍼블리셔 & 프론트엔드 개발자를 찾고 계신가요?',
        dec: `꼼꼼하고 끈기 있는 성격을 가진 <strong>이기원</strong>입니다.</br>다양한 경험과 탐구를 통해 <strong>발전하는 웹퍼블리셔 & 프론트엔드 개발자</strong>가 되겠습니다.`,
        copy: '© 2025 by LeeKiWon. All rights reserved.',
      },
    }
  },
}
</script>

<style lang="scss">
#footer {
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 190px;
    margin-right: 2rem;
    @media (max-width: 1024px) {
      margin-right: unset;
      margin-bottom: 3rem;
      width: clamp(150px, 27.273vw, 190px);
    }
  }
  .footer__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: center;
      width: 90%;
      margin: 0 auto;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/assets/image/footer/bg.png') no-repeat center center;
      opacity: 0.5;
      z-index: -1;
    }
    ul {
      li {
        font-size: clamp(2.1rem, 2.734vw, 2.5rem);
        font-weight: 600;
        @media (max-width: 768px) {
          font-size: clamp(1.8rem, 3.273vw, 2.1rem);
        }

        &.title {
          margin-bottom: 1rem;
        }
        &.dec {
          color: $dec;
          font-size: clamp(1.6rem, 2.083vw, 1.7rem);
          font-weight: 400;
          line-height: 1.5;
          @media (max-width: 768px) {
            font-size: clamp(1.4rem, 2.545vw, 1.6rem);
          }

          strong {
            font-size: clamp(1.7rem, 2.214vw, 1.9rem);
            color: #fff;
            @media (max-width: 768px) {
              font-size: clamp(1.5rem, 2.727vw, 1.7rem);
            }
          }
        }

        &.btn-box {
          margin-top: 2rem;
          a {
            &:first-child {
              margin-right: 1.5rem;
            }
          }
          .glass {
            height: 40px;
            width: 180px;
            font-size: clamp(1.5rem, 1.953vw, 1.6rem);
            @media (max-width: 550px) {
              width: clamp(120px, 33.333vw, 180px);
              font-size: clamp(1.4rem, 3.889vw, 1.5rem);
            }
          }
        }
      }
    }
  }
}
</style>
