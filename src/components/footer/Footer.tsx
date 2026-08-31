import profileImg from '/assets/image/profile_img.png'
import styles from '/assets/scss/components/footer/Footer.module.scss'
import mediaStyles from '/assets/scss/components/footer/FooterMedia.module.scss'

const Footer = () => {
  const footer = {
    title: '역량 있는 웹퍼블리셔 & 프론트엔드 개발자를 찾고 계신가요?',
    dec: `꼼꼼하고 끈기 있는 성격을 가진 <strong>이기원</strong>입니다.</br>다양한 경험과 탐구를 통해 <strong>발전하는 웹퍼블리셔 & 프론트엔드 개발자</strong>가 되겠습니다.`,
    copy: '© 2026 by LeeKiWon. All rights reserved.',
  }

  return (
    <footer
      id="footer"
      className={`${styles['portfolio-footer']} ${mediaStyles['portfolio-footer']}`}
    >
      <section className={`${styles['footer__inner']} ${mediaStyles['footer__inner']}`}>
        <img
          src={profileImg}
          alt="프론트엔드 개발자 이기원 프로필"
          loading="lazy"
          fetchPriority="low"
          decoding="async"
        ></img>
        <ul>
          <li className={styles['title']}>{footer.title}</li>
          <li
            className={`${styles['dec']} ${mediaStyles['dec']}`}
            dangerouslySetInnerHTML={{ __html: footer.dec }}
          ></li>
          <li className={`${styles['dec']} ${mediaStyles['dec']}`}>{footer.copy}</li>
          <li className={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
            <a
              className={`${styles['glass']} ${mediaStyles['glass']}`}
              href="mailto:cute02364@gmail.com"
            >
              이메일 보내기
            </a>
            <a
              className={`${styles['glass']} ${mediaStyles['glass']}`}
              href="tel:01068650947"
            >
              전화하기
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
