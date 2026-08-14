import type { ComponentOptions, DefineComponent } from 'vue'

import profileImg from '/assets/image/profile_img.png'
import styles from '/assets/scss/components/section/MainIntro.module.scss'
import mediaStyles from '/assets/scss/components/section/MainIntroMedia.module.scss'

const MainIntro: ComponentOptions = {
  name: 'MainIntro',
  data() {
    return {
      mainIntro: {
        title: `
            감각으로 설계하고, 디테일로 완성하는<br />
            <strong>ISFJ 프론트엔드 개발자</strong> <br />
            이기원 입니다.
        `,
        description: `
          웹퍼블리셔 경험을 바탕으로 사용자 중심의 인터페이스를 설계하고 구현하는 프론트엔드 개발자입니다.
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
  render() {
    return (
      <section class={[styles.root, mediaStyles.root, 'section1']} id="main-intro">
        <section class="section__inner">
          <ul class="section__inner-content">
            <li>
              <h2 innerHTML={this.mainIntro.title}></h2>
              <p>{this.mainIntro.description}</p>
              <section class="demo-wrap">
                <button class="glass" lang="en" onClick={this.scrollToAbout}>About Me</button>
              </section>
            </li>
            <li class="img-box">
              <section class="font-end-info-icon glass">
                <span>Frontend Dev</span>
              </section>
              <div class="dev-icon"></div>
              <div class="circle">
                <img src={profileImg} alt="프로필 이미지" />
              </div>
              <div class="design-icon"></div>
            </li>
          </ul>
        </section>
      </section>
    )
  },
}

export default MainIntro as DefineComponent
