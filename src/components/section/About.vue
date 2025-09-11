<template>
  <section id="about" class="section2">
    <h1 lang="en">About Me</h1>
    <article class="section__inner">
      <div class="about-content-tie">
        <div class="about-content">
          <h2>{{ about.title }}</h2>
          <p v-html="about.description"></p>
        </div>

        <ul class="setting-card glass">
          <li>
            <div class="img-box"><img :src="settingCard.icon" :alt="settingCard.alt" /></div>
            <h3>{{ settingCard.title }}</h3>
            <p>{{ settingCard.description }}</p>
          </li>
        </ul>
      </div>

      <ul class="about-cards">
        <li class="user-card glass">
          <div class="img-box"><img :src="userCard.icon" :alt="userCard.alt" /></div>
          <h3>{{ userCard.title }}</h3>
          <p>{{ userCard.description }}</p>
        </li>
        <li class="optimize-card glass">
          <div class="img-box"><img :src="optimizeCard.icon" :alt="optimizeCard.alt" /></div>
          <h3>{{ optimizeCard.title }}</h3>
          <p>{{ optimizeCard.description }}</p>
        </li>
        <li class="growth-card glass">
          <div class="img-box"><img :src="growthCard.icon" :alt="growthCard.alt" /></div>
          <h3>{{ growthCard.title }}</h3>
          <p>{{ growthCard.description }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import settionIcon from '/src/assets/image/about/setting_icon.svg'
export default {
  data() {
    /* About 소개 */
    return {
      about: {
        title: '직관적인 경험을 구현하는 프론트엔드 개발자',
        description: `
        웹퍼블리셔로 첫 발을 내딛은 이후,
        <strong>사용자 경험</strong>에 대한 깊은 이해를 바탕으로 프론트엔드 개발자로 성장해 왔습니다.
        단순한 마크업을 넘어, 사용자와 자연스럽게 소통하는
        <strong>인터랙티브한 웹 경험</strong>을 만들어 가고 있습니다.
        깔끔하고 직관적인 디자인 속에 복잡한 기능을 담아, 누구나 쉽게 사용할 수 있는 환경을 만드는 것이 저의 철학입니다.
        매일 새로운 기술을 배우고 적용하며, 더 나은 개발자로 나아가기 위해 끊임없이 노력하고 있습니다.
      `,
      },
      // 경험 설계
      settingCard: {
        icon: settionIcon,
        title: '프론트엔드 경험 설계',
        description:
          '사용자 인터페이스와 경험을 세심하게 설계하여, 직관적이고 반응성이 뛰어난 웹 환경을 구현합니다.',
        alt: '경험설계 아이콘',
      },

      // 사용자중심
      userCard: {
        icon: 'src/assets/image/about/user_icon.svg',
        title: '사용자 중심',
        description:
          '사용자의 관점에서 생각하고, 문제를 해결할 수 있는 최적의 솔루션을 만드는 것을 최우선으로 합니다.',
        alt: '사용자 중심 아이콘',
      },
      // SEO 최적화
      optimizeCard: {
        icon: 'src/assets/image/about/optimize_icon.svg',
        title: 'SEO 최적화',
        description:
          '시멘틱 마크업과 최적화된 구조를 통해 검색 엔진 노출 효과를 높이고,사용자가 쉽게 찾을 수 있는 웹을 만듭니다.',
        alt: 'SEO 최적화 아이콘',
      },
      // 지속적 성장
      growthCard: {
        icon: 'src/assets/image/about/growth_icon.svg',
        title: '지속적인 성장',
        description:
          '끊임없이 변화하는 기술과 트렌드를 따라가며, 새로운 도구와 방법을 학습하고 프로젝트에 적극 반영합니다.',
        alt: '지속적인 성장 아이콘',
      },
    }
  },
}
</script>

<style lang="scss">
#about {
  background-color: $sub-bg;
  &.section2 {
    .section__inner {
      display: flex;
      flex-direction: column;
      width: 90%;
      padding: 0 0 250px;
      margin: 0 auto;
      .about-content-tie {
        margin-bottom: 5.5rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        .about-content {
          letter-spacing: 2px;
          line-height: 40px;
          margin-right: 3rem;
          width: calc(100% / 0.47);
          h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          p {
            font-size: 2.3rem;
            color: $dec;
            font-weight: 200;
            strong {
              color: $white;
              font-size: 2.6rem;
              font-weight: 600;
            }
          }
        }
        .setting-card {
          width: 100%;
          li {
            h3 {
              font-size: 2.1rem;
              font-weight: 600;
              margin-bottom: 2rem;
            }
            p {
              font-size: 1.8rem;
              font-weight: 200;
              color: $dec;
              line-height: 25px;
            }
            .img-box {
              background-color: $icon-bg1;
              margin-bottom: 2.5rem;
            }
          }
        }
      }
      .about-cards {
        display: flex;
        justify-content: space-between;

        li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
          h3 {
            font-size: 2.1rem;
            font-weight: 600;
            margin-bottom: 2rem;
          }
          p {
            font-size: 1.8rem;
            font-weight: 200;
            color: $dec;
            line-height: 25px;
          }
        }
        @for $i from 1 through 3 {
          li:nth-child(#{$i}) .img-box {
            background-color: nth(($icon-bg2, $icon-bg3, $icon-bg4), $i);
            margin-bottom: 2.5rem;
          }
        }
      }
    }
    h1 {
      width: 90%;
      padding: 145px 0 100px;
      text-align: center;
      margin: 0 auto;
      font-size: 8rem;
      font-weight: 600;
      letter-spacing: 5px;
    }
  }

  // 공통
  .glass {
    @include glass(550px, 268px, 4px, 180%, 2rem, #fff);
    border-radius: 30px;
    padding-left: 3rem;
  }
  .img-box {
    width: 70px;
    height: 70px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
