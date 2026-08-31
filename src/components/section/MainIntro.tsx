import profileImg from '/assets/image/profile_img.webp'
import styles from '/assets/scss/components/section/MainIntro.module.scss'
import mediaStyles from '/assets/scss/components/section/MainIntroMedia.module.scss'

const MainIntro = () => {
  const mainIntro = {
    title: `
      감각으로 설계하고, 디테일로 완성하는<br />
      <strong>ISFJ 프론트엔드 개발자</strong> <br />
      이기원 입니다.
    `,
    description:
      '웹퍼블리셔 경험을 바탕으로 React와 TypeScript 기반의 사용자 중심 인터페이스와 반응형 웹을 구현하는 프론트엔드 개발자입니다.',
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className={`${styles['main-intro-page']} ${mediaStyles['main-intro-page']} ${styles['section1']} ${mediaStyles['section1']}`}
      id="main-intro"
    >
      <section className={`${styles['section__inner']} ${mediaStyles['section__inner']}`}>
        <ul className={`${styles['section__inner-content']} ${mediaStyles['section__inner-content']}`}>
          <li>
            <h1 dangerouslySetInnerHTML={{ __html: mainIntro.title }}></h1>
            <p>{mainIntro.description}</p>
            <section>
              <button
                className={`${styles['glass']} ${mediaStyles['glass']}`}
                lang="en"
                onClick={scrollToAbout}
              >
                About Me
              </button>
            </section>
          </li>
          <li className={`${styles['img-box']} ${mediaStyles['img-box']}`}>
            <section
              className={`${styles['font-end-info-icon']} ${mediaStyles['font-end-info-icon']} ${styles['glass']} ${mediaStyles['glass']}`}
            >
              <span>Frontend Dev</span>
            </section>
            <div className={`${styles['dev-icon']} ${mediaStyles['dev-icon']}`}></div>
            <div className={`${styles['circle']} ${mediaStyles['circle']}`}>
              <img
                src={profileImg}
                alt="프론트엔드 개발자 이기원 프로필"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              ></img>
            </div>
            <div className={`${styles['design-icon']} ${mediaStyles['design-icon']}`}></div>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default MainIntro
