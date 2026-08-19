import type { ComponentOptions, DefineComponent } from 'vue'

import profileImg from '/assets/image/profile_img.png'
import styles from '/assets/scss/components/footer/Footer.module.scss'
import mediaStyles from '/assets/scss/components/footer/FooterMedia.module.scss'


const Footer: ComponentOptions = {
  name: 'Footer',
  data() {
    return {
      footer: {
        title: '역량 있는 웹퍼블리셔 & 프론트엔드 개발자를 찾고 계신가요?',
        dec: `꼼꼼하고 끈기 있는 성격을 가진 <strong>이기원</strong>입니다.</br>다양한 경험과 탐구를 통해 <strong>발전하는 웹퍼블리셔 & 프론트엔드 개발자</strong>가 되겠습니다.`,
        copy: '© 2026 by LeeKiWon. All rights reserved.',
      },
    }
  },
  render() {
    return (
      <footer id="footer" class={`${styles['portfolio-footer']} ${mediaStyles['portfolio-footer']}`}>
        <section class={`${styles['footer__inner']} ${mediaStyles['footer__inner']}`}>
          <img src={profileImg} alt="프로필 이미지" />
          <ul>
            <li class={`${styles['title']}`}>{this.footer.title}</li>
            <li class={`${styles['dec']} ${mediaStyles['dec']}`} innerHTML={this.footer.dec}></li>
            <li class={`${styles['dec']} ${mediaStyles['dec']}`}>{this.footer.copy}</li>
            <li class={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
              <a class={`${styles['glass']} ${mediaStyles['glass']}`} href="mailto:cute02364@gmail.com">이메일 보내기</a>
              <a class={`${styles['glass']} ${mediaStyles['glass']}`} href="tel:01068650947">전화하기</a>
            </li>
          </ul>
        </section>
      </footer>
    )
  },
}

export default Footer as DefineComponent
